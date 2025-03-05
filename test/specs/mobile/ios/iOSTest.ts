import HomePage from '../../../pageobjects/homePage'

describe('Home page verification', () => {
    it('should visit the home page successfully', async () => {
        // TO BE MODIFIED FOR IOS
        let useWithoutAccountButton = $('android=new UiSelector().resourceId("com.android.chrome:id/signin_fre_dismiss_button")')
        await useWithoutAccountButton.click()
        let privacyGotItButton = $('android=new UiSelector().resourceId("com.android.chrome:id/ack_button")')
        await privacyGotItButton.click()

        await HomePage.open()

        console.log('Page is loaded')
        let rentEquipmentButton = $('~RENT EQUIPMENT')
        await expect(rentEquipmentButton).toBeDisplayed()

    })
})

