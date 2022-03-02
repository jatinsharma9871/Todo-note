const path= require("path");

module.exports= {

entry:"./code/app.js",
output: {
    path: path.join(__dirname, "build_folder"),
    filename: "bundle.js"
},
mode: "development",
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },


}