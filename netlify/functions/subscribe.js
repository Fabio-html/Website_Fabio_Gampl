const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { email } = JSON.parse(event.body);

    if (!email) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Keine E-Mail angegeben' }) };
    }

    const API_KEY = process.env.MAILERLITE_API_KEY;
    const GROUP_ID = process.env.MAILERLITE_GROUP_ID;

    try {
        const response = await fetch(`https://api.mailerlite.com/api/v2/groups/${GROUP_ID}/subscribers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-MailerLite-ApiKey': API_KEY
            },
            body: JSON.stringify({ email })
        });

        if (!response.ok) {
            const errorData = await response.json();
            return { statusCode: 500, body: JSON.stringify({ error: errorData.message || 'MailerLite Fehler' }) };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Erfolgreich hinzugefügt' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Interner Serverfehler' })
        };
    }
};
