const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig
        .addPassthroughCopy("assets/js")
        .addPassthroughCopy("assets/")
        .addPassthroughCopy("admin")
        .addLayoutAlias('default', 'layouts/default.njk');

    eleventyConfig.addPlugin(eleventyNavigationPlugin)

    
    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        dir: {
            templateFormats: ["html", "md", "njk", "eot", "ttf", "woff", "woff2", "svg", "jpg", "png", "css", "svg", "yml", "js"],
            input: ".",
            output: "_site",
            includes: "_includes"
        }

    }
};


