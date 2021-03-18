module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/styles/settings/_settings.scss";`
            }
        }
    }
};