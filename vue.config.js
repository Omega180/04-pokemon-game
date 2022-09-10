const {defineConfig} = require("@vue/cli-service")
module.exports = defineConfig({
	publicPath: process.env.NODE_ENV === "production" ? "/04-pokemon-game/" : "/",
	transpileDependencies: true,
})
