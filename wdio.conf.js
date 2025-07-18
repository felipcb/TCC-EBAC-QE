const path = require('path');

exports.config = {
    runner: 'local',
    hostname: '127.0.0.1',    
    port: 4723,               
    path: '/',                

    specs: [
        './mobile/tests/specs/**/*.js'
    ],
    exclude: [],

    maxInstances: 1,                                    // Rodar 1 teste por vez para evitar conflitos

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel_8a_API_34_Ebac',  
        'appium:platformVersion': '14',               
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.resolve('./app/ebac.apk'), 
        'appium:autoGrantPermissions': true
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['appium',{ command: 'appium' }]
    ],

    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',                    // pasta onde serão salvos os arquivos do Allure
            disableWebdriverStepsReporting: true,           // desabilita steps detalhados do webdriver
            disableWebdriverScreenshotsReporting: false,    // inclui prints automáticos em falhas
        }],
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function (test, context, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    }
};
