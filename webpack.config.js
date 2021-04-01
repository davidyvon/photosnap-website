const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '',
		filename: isDevelopment ? '[name].js' : '[name].[hash].js'
	},
	devServer: {
		contentBase: './src',
		open: 'Google Chrome',
		compress: true,
		port: 9000,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: 'babel-loader'
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							implementation: require('sass')
						}
					}
				]
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[hash][ext][query]'
				}
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Home',
			template: '/src/index.html',
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			title: 'Stories',
			template: '/src/pages/stories.html',
			filename: 'stories.html'
		}),
		new HtmlWebpackPlugin({
			title: 'Features',
			template: '/src/pages/features.html',
			filename: 'features.html'
		}),
		new HtmlWebpackPlugin({
			title: 'Pricing',
			template: '/src/pages/pricing.html',
			filename: 'pricing.html'
		}),
		new CopyPlugin({
			patterns: [{ from: 'src/assets/static', to: 'assets/static' }]
		}),
		new MiniCssExtractPlugin({
			filename: 'main.css'
		}),
		new ESLintPlugin()
	]
}
