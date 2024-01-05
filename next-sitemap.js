module.exports = {
  siteUrl: "https://seanv.dev",
  generateRobotsTxt: true,
  transform: async (config, path) => {
    // custom function to remove the /en/ from English links

    let newPath = path;
    if (path[1] === "e" && path[2] === "n") {
      newPath = path.slice(3, path.length);
    }

    return {
      loc: newPath, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
