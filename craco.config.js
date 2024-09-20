const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Set the public path to ensure the chunks are loaded correctly
      webpackConfig.output.publicPath = "auto";

      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "app1",
          filename: "remoteEntry.js", // This is where Webpack generates the remote entry file
          exposes: {
            "./App": "./src/App", // Exposing the App component from app1
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: require("./package.json").dependencies["react"],
            },
            "react-dom": {
              singleton: true,
              requiredVersion:
                require("./package.json").dependencies["react-dom"],
            },
          },
        })
      );

      // Return the modified webpack config
      return webpackConfig;
    },
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow cross-origin requests (CORS)
    },
  },
};
