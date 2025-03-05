import { config } from './wdio.conf.ts'

config.specs = ['./test/specs/mobile/android/**/*.ts']

config.services = [['appium',
    {
        logPath: './appium_logs',
        args: {
            port: 4723
        }
    }]]

config.capabilities = [{
    // capabilities for local Appium tests on an Android Emulator
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:platformVersion': '15.0',
    'appium:automationName': 'UiAutomator2',

    'appium:appPackage': 'com.android.chrome',
    'appium:appActivity': 'com.google.android.apps.chrome.Main',
}]

config.logLevel = 'info'

exports.config = config