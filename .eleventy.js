const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig
        .addPassthroughCopy("./src/assets/js")
        .addPassthroughCopy("./src/assets/")
        .addPassthroughCopy("./src/admin")
        .addLayoutAlias('default', 'layouts/default.njk');

    eleventyConfig.addPlugin(eleventyNavigationPlugin)

    
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


