import { config } from './wdio.conf.ts'

let run_env = process.env.RUN_ENV || 'local'

if (run_env === 'local') {
    config.specs = ['./test/specs/desktop/windows/**/*.ts']
    config.logLevel = 'info'

    config.services = ['chromedriver']

    config.capabilities = [{
        browserName: 'chrome',
        browserVersion: 'latest',
        'goog:chromeOptions': {
            args: ['--disable-gpu']
        }
    }]
}

if (run_env !== 'local') {
    console.log('Usage=> RUN_ENV=local npm run wdio:windows')
    console.log('===> OR PUT THE BROWSERSTACK CAPABILITIES HERE <===')
}

exports.config = config