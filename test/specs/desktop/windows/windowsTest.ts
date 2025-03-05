import HomePage from '../../../pageobjects/homePage'

describe('Home page verification', () => {
    it('should visit the home page successfully', async () => {
        // Open the home page
        await HomePage.open()

        console.log('Page is loaded')
        await HomePage.rentEquipmentButton.waitForDisplayed({ timeout: 10000 })
        await expect(HomePage.rentEquipmentButton).toBeDisplayed()

    })
})

