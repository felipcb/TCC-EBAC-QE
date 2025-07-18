const path = require('path');

exports.config = {
    runner: 'local',
    hostname: '127.0.0.1',    // Host do Appium
    port: 4723,               // Porta padrão do Appium
    path: '/',                // Caminho padrão do Appium

    specs: [
        './mobile/tests/specs/**/*.js'
    ],
    exclude: [],

    maxInstances: 1,          // Rodar 1 teste por vez para evitar conflitos

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel_8a_API_34_Ebac',  // Nome exato do emulador
        'appium:platformVersion': '14',               // Android 14 (API 34)
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.resolve('./app/ebac.apk'), // APK do seu projeto
        'appium:autoGrantPermissions': true
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
