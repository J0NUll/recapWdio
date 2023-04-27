import dynamicPage from '../pageobjects/dynamic-loading.page.js'

describe('My Dynamic Loading Page', () => {
    xit('should verify that start button exists', async () => {
        await dynamicPage.open();

        await expect (dynamicPage.startButton).toBeExisting()
        await browser.pause (5000)
        await (dynamicPage.startButton).click()
        await browser.pause(5000)


    }); 

    it('Should select the h4 element', async () => {
        await dynamicPage.open();

        await browser.pause(3000)
        await expect (dynamicPage.header4).toHaveTextContaining('Example 1: Element on page that is hidden')
        


    }); 



    
});
