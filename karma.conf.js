export default function(config) {
    config.set({
      frameworks: ["jasmine", "karma-typescript"],
  
      files: [
        "./src/**/*.ts",
        "./test/**/*.ts"
      ],
  
      preprocessors: {
        "**/*.ts": ["karma-typescript"]
      },
  
      karmaTypescriptConfig: {
        tsconfig: "./tsconfig.json",
        bundlerOptions: {
          // important: enable bundling for the browser
          transforms: [
            require("karma-typescript-es6-transform")() // transpile ES6 modules
          ],
          resolve: {
            directories: ["src", "node_modules"]
          }
        }
      },
  
      reporters: ["progress", "karma-typescript"],
      browsers: ["ChromeHeadless"],
      logLevel: config.LOG_INFO,
      singleRun: true
    });
  };