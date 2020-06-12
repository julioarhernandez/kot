const pluginSass = require("eleventy-plugin-sass");


module.exports = function (eleventyConfig) {
    eleventyConfig
        .addPassthroughCopy("./src/assets/js")
        .addPassthroughCopy("./src/assets/")
        .addPassthroughCopy("./src/admin")
        .addLayoutAlias('default', 'layouts/default.njk');
    
    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        dir: {
            templateFormats: ["html", "md", "njk", "eot", "ttf", "woff", "woff2", "svg", "jpg", "png", "css", "svg", "yml", "js"],
            input: "src",
            output: "_site",
            includes: "_includes"
        }

    }
};


