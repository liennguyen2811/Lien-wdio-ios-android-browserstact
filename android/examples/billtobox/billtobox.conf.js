// exports.config = {
//     user: process.env.BROWSERSTACK_USERNAME || 'minhtran38',
//     key: process.env.BROWSERSTACK_ACCESS_KEY || 'NTdNshs8XaxvsTdSJBzy',
//     // runner: 'local',
//     // port: 4723,
//     // path: '/wd/hub',
//     specs: [
//         './examples/billtobox/TestCases/LoginTest.js'
//       ],
//       exclude: [],
//     exclude: [],
//     maxInstances: 1,
//     // capabilities: [{
//     //     sessionName:        'Automation test session',
//     //     sessionDescription: 'This is an example for Android web', 
//     //     deviceOrientation:  'portrait',  
//     //     captureScreenshots: true, 
//     //     app:        '/Users/liennth7/Documents/Lien/Repository/myup-mobile-automation/src/test/app/android/B2B.apk',
//     //     deviceName:         'Galaxy A10',
//     //     udid:               'R9JN1003YDJ',
//     //     platformName:       'Android',
//     //     chromeOptions:      {w3c : false}
//     // }],
//     capabilities: [{
//         project: "Second Webdriverio Android Project",
//         build: 'Webdriverio Android',
//         name: 'first_test',
//         device: 'Google Pixel 3',
//         os_version: "9.0",
//         app: process.env.BROWSERSTACK_APP_ID || 'bs://394a071c7734526ca06975cd81921c5847077c46',
//         'browserstack.debug': true
//       }],
//     framework: 'mocha',
//     mochaOpts: {
//         timeout: 20000
//     },
//     logLevel: 'info',
//     bail: 0,
//     baseUrl: 'http://newtours.demoaut.com/mercurywelcome.php',
//     framework: 'mocha',
//     reporters: ['spec'],
//     ui: 'bdd',
//     waitforTimeout: 10000,
//     connectionRetryTimeout: 90000,
//     connectionRetryCount: 3,
exports.config = {
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './examples/billtobox/TestCases/LoginTest.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        sessionName:        'Automation test session',
        sessionDescription: 'This is an example for Android web', 
        deviceOrientation:  'portrait',  
        captureScreenshots: true, 
        app:        '/Users/liennth7/Documents/Lien/Repository/myup-mobile-automation/src/test/app/android/B2B.apk',
        deviceName:         'Galaxy A10',
        udid:               'R9JN1003YDJ',
        platformName:       'Android',
        chromeOptions:      {w3c : false}
    }],
    // capabilities: [{
    //     project: "Second Webdriverio Android Project",
    //     build: 'Webdriverio Android',
    //     name: 'first_test',
    //     device: 'Google Pixel 3',
    //     os_version: "9.0",
    //     app: process.env.BROWSERSTACK_APP_ID || 'bs://394a071c7734526ca06975cd81921c5847077c46',
    //     'browserstack.debug': true
    //   }],
    framework: 'mocha',
    mochaOpts: {
        timeout: 20000
    },
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    framework: 'mocha',
    reporters: ['spec'],
    ui: 'bdd',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

}