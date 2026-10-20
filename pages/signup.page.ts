import {Page, Locator} from '@playwright/test';
export class SignupPage {
    readonly page: Page;
    readonly signupLoginLink: Locator;
    readonly newUserSignupHeader: Locator;

    constructor(page: Page){
        this.page =page;

        this.signupLoginLink = page.getByRole('link',
            {name: 'Signup / Login'}
        );

        this.newUserSignupHeader = page.getByRole('heading',
            {name: 'New User Signup!'}
        );
    }

    async openWebsite(){
        await this.page.goto('https://automationexercise.com/');
    }

    async clickSignupLoginLink(){
        await this.signupLoginLink.click();
    }

    async verifyNewUserSignupHeaderIsVisible(){
        await this.newUserSignupHeader.waitFor(
            {
                state: 'visible'
            }
        );
    }


}