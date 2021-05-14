const username = '//input[@id="username"]'
const password = '//input[@id="password"]'
const login_button = '//input[@value="Sign In"]'

class DevportalLogin {
    EnterUserName () {
        $(username).waitForDisplayed({ timeout: 50000 })
        $(username).setValue("liennth7@unifiedpost.com")
        return this
      }
      EnterPassword () {
        $(password).waitForDisplayed({ timeout: 50000 })
        $(password).setValue("0983791128a@")
        return this
      }
      ClickLoginButton () {
        $(login_button).waitForDisplayed({ timeout: 50000 })
        $(login_button).click()
        return this
      }

}
module.exports = new DevportalLogin()