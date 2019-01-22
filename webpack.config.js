const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
	resolve: {
		extensions: [".jsx", ".js"]
	},
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.html$/,
				use: [{
					loader: "html-loader"
				}]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	]
};