import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        browser.maximizeWindow()
        return browser.url(`https://equipmentshare-us-7fcd6ee2fbc58ac5b15ef.webflow.io/${path}`)
    }
}
