// vue.config.js

module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.example.app",
        productName: "aDemo", //项目名，也是生成的安装文件名，即aDemo.exe
        copyright: "Copyright © 2019", //版权信息
        directories: {
          output: "./dist", //输出文件路径
        },
        mac: {
          //mac相关配置
          icon: "./logo.png", //图标，当前图标在根目录下，注意这里有两个坑
        },
      },
    },
  },
};
