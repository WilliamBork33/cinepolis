module.exports = {

    watch: false,
    watchTags: '@watch, @focus, @login, @cars, @home',
    path: './features/',
    format: 'pretty',
    tags: ['~@ignore', '~@pending'],
    webdriverio: {
        waitforTimeout: 20000
    }

}
