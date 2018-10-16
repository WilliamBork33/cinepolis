module.exports = {

    watch: false,
    watchTags: '@watch, @focus, @login, @cars, @home, @theatre',
    path: './features/',
    format: 'pretty',
    tags: ['~@ignore', '~@pending'],
    webdriverio: {
        waitforTimeout: 20000
    }

}
