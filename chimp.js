module.exports = {

    watch: false,
    watchTags: '@watch, @focus, @home, @theatre',
    path: './features/',
    format: 'pretty',
    tags: ['~@ignore', '~@pending'],
    webdriverio: {
        waitforTimeout: 20000
    }

}
