const LoginPage = require('../PageObjects/DevportalLogin')
const assert = require('assert')


describe('Devportal Test login flow', () => {
    before( () => {
      browser.url('https://developer-portal-client-uat.nxt.uat.unifiedpost.com/')
    })
    it('should login on successful', () => {
        LoginPage
        .EnterUserName()
        .EnterPassword()
        .ClickLoginButton()
        browser.pause(3000)  
        // let value = Dashboard.checkIsActiveDocDisplayed()
        // assert.strictEqual(value, true, "Test case should login on successful is failed")
      })
    

})