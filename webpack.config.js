const config= require('./config.js');
 
 module.exports = {
    output: {
        publicPath: config.assetPrefix
    },
    pathPrefix: config.pathPrefix, // This path is subpath of your hosting https://domain/portfolio
    baseurl:config.baseurl

}