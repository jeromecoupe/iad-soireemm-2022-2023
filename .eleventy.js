// collections
const speakers = require("./src/_11ty/collections/speakers.js");

// filters
const dates = require("./src/_11ty/filters/dates.js");

module.exports = function (eleventyConfig) {
  // collections
  eleventyConfig.addCollection("speakers", speakers);

  // filters
  eleventyConfig.addFilter("dateISO", dates.dateISO);
  eleventyConfig.addFilter("dateFeed", dates.dateFeed);
  eleventyConfig.addFilter("dateFull", dates.dateFull);
  eleventyConfig.addFilter("dateFormat", dates.dateFormat);
  eleventyConfig.addFilter("dateYear", dates.dateYear);

  // copy files
  eleventyConfig.addPassthroughCopy({ "./src/static/*": "./" });
  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");

  // override default config
  return {
    dir: {
      input: "./src/",
      output: "./dist/",
      markdownTemplateEngine: "njk",
    },
  };
};
