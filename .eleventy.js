const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {

    eleventyConfig.addNunjucksAsyncShortcode("myImage", async function(src, alt, outputFormat = "jpeg") {
        if(alt === undefined) {
          // You bet we throw an error on missing alt (alt="" works okay)
          throw new Error(`Missing \`alt\` on myImage from: ${src}`);
        }

        // returns Promise
        let stats = await Image(src, {
          formats: [outputFormat],
          // This uses the original image width
          widths: [350, 650],
          urlPath: "/assets/img/optim/",
          outputDir: "_site/assets/img/optim/",
          // widths: [200] // output 200px maxwidth
          // widths: [200, null] // output 200px and original width
        });

        let propssmall = stats[outputFormat][0];
        let propslarge = stats[outputFormat][1];

        return `<a data-fancybox="gallery" href="${propslarge.url}"><img src="${propssmall.url}" width="${propssmall.width}" height="${propssmall.height}" alt="${alt}"></a>`;
      });

    eleventyConfig.addNunjucksFilter("addDotAtStart", function(value) {
        return '.' + value;
    });

    eleventyConfig
        .addPassthroughCopy("assets/js")
        .addPassthroughCopy("assets/")
        .addPassthroughCopy("admin")
        .addLayoutAlias('default', 'layouts/default.njk');

    eleventyConfig.addPlugin(eleventyNavigationPlugin);



    
    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        dir: {
            templateFormats: ["html", "md", "njk", "eot", "ttf", "woff", "woff2", "svg", "jpg", "jpeg", "png", "css", "svg", "yml", "js"],
            input: ".",
            output: "_site",
            includes: "_includes"
        }

    }
};


