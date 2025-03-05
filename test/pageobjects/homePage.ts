import { $ } from '@wdio/globals'
import BasePage from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage {
    /**
     * define selectors using getter methods
     */
    public get rentEquipmentButton () {
        return $('a.home-hero-rent-btn.w-button');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('/');
    }
}

export default new HomePage();
