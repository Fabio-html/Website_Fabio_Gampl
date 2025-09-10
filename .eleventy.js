const { DateTime } = require("luxon");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");


module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css')
    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('./src/admin')

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    eleventyConfig.addPlugin(pluginSitemap, {
        sitemap: {
            hostname: "https://beyondaesthetic.org/", // replace with your website URL
        }
    });

    console.log("Sitemap plugin loaded");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}