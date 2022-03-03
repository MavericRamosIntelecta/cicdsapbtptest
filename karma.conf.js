module.exports = function(config) {
    "use strict";
    config.set({
        frameworks: ["ui5"],
        browsers: ["ChromeHeadless"],
        singleRun: true,
        browserConsoleLogOptions: {
            level: "error"
        }
    });
};