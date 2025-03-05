import HomePage from '../../../pageobjects/homePage'

describe('Home page verification', () => {
    it('should visit the home page successfully', async () => {

        try {
            let useWithoutAccountButton = $('android=new UiSelector().resourceId("com.android.chrome:id/signin_fre_dismiss_button")')
            await useWithoutAccountButton.click()
            let privacyGotItButton = $('android=new UiSelector().resourceId("com.android.chrome:id/ack_button")')
            await privacyGotItButton.click()
        }
        catch (error) {
            console.log('No privacy or use without account button found')
        }

        // Open the home page
        await HomePage.open()

        console.log('Page is loaded')
        let rentEquipmentButton = $('~RENT EQUIPMENT')
        await rentEquipmentButton.waitForDisplayed({ timeout: 15000 })
        await expect(rentEquipmentButton).toBeDisplayed()

    })
})

