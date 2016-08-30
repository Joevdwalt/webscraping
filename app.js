const webdriverio = require('webdriverio')
var argv = require('yargs').argv;

var options
if (argv.chrome) {
    options = {
        desiredCapabilities: {
            browserName: 'chrome', chromeOptions: {
                prefs: {
                    'profile.default_content_setting_values.notifications': 2
                }
            }
        },
        port: argv.port,
        logOutput: '~/log/fk/iqtags.crawler/'
    }
}
else {
    options = {
        desiredCapabilities: {
            browserName: 'firefox'
        },
        port: argv.port,
        logOutput: '/var/log/fk/iqtags.crawler/'
    }
}
const browser = webdriverio.remote(options)
