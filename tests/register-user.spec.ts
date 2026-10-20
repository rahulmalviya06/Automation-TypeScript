import {test, expect} from '@playwright/test';
import {SignupPage} from '../pages/signup.page';

test('Register user', async ({ page }) => {
    const signupPage = new SignupPage(page);

    // Step 1 & 2: Launch browser and open website
    await signupPage.openWebsite();

    //step 3: verify that home page is visible successfully

    await expect(page).toHaveURL('https://automationexercise.com/');

    // Step 4: Click on 'Signup / Login' button
    await signupPage.clickSignupLoginLink();

    //step 5: Verify 'New User Signup!' is visible
    await signupPage.verifyNewUserSignupHeaderIsVisible();

});