// 声明式
module.exports = {
  // publicPath: "../../",  //开发环境，注释此项
  // outputDir: process.env.outputDir,
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
      },
    },
  },
};

// 函数式
// const path = require("path");

// function resolve(dir) {
//     return path.join(__dirname, dir);
// }

// module.exports = {
//     chainWebpack: config => {
//         config.resolve.alias
//             .set("@", resolve("src"))
//             .set("assets", resolve("src/assets"))
//             .set("common", resolve("src/common"))
//             .set("components", resolve("src/components"))
//             .set("network", resolve("src/network"))
//             .set("views", resolve("src/views"));
//     },
// }
