const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://duv23hk3u3y8m.cloudfront.net/en',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
