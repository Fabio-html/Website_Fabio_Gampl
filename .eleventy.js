const { DateTime } = require("luxon");


module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css')
    eleventyConfig.addPassthroughCopy('./src/main.css')
    eleventyConfig.addPassthroughCopy('./src/animation.js')
    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('./src/admin')

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
});

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}