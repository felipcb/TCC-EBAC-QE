import { $ } from '@wdio/globals';

class LoginPage {
    get profileButton() {
        return $('//android.view.View[contains(@content-desc, "Profile")]');
    }

    get emailField() {
        return $('android=new UiSelector().resourceId("email")');
    }

    get passwordField() {
        return $('android=new UiSelector().resourceId("password")');
    }

    get loginButton() {
        return $('~Login');
    }

    get profileTitle() {
    return $('//android.widget.TextView[@text="Profile"]');
    }

    async openProfile() {
        await this.profileButton.waitForDisplayed({ timeout: 10000 });
        await this.profileButton.click();
    }

    async login(email, password) {
        await this.emailField.waitForDisplayed({ timeout: 5000 });
        await this.emailField.clearValue();
        await this.emailField.setValue(email);

        await this.passwordField.waitForDisplayed({ timeout: 5000 });
        await this.passwordField.clearValue();
        await this.passwordField.setValue(password);

        await this.loginButton.waitForDisplayed({ timeout: 5000 });
        await this.loginButton.click();
    }
}

export default new LoginPage();
