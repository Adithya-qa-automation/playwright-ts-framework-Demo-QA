import type {Page, Locator} from '@playwright/test'
import {expect} from '@playwright/test'
export default class BookStoreBasePage{
    public page: Page;
    public readonly loginBtn: Locator;
    public readonly loggedInUser: Locator;
    public readonly logoutBtn: Locator
    public readonly bookStoreLink: Locator
    constructor(page: Page){
        this.page = page;
        this.loginBtn = page.getByRole('link', { name: 'Login' });
        this.loggedInUser = page.locator('#userName-value');
        this.logoutBtn = page.getByRole('button', { name: 'Logout' })
        this.bookStoreLink = page.getByRole('link', { name: 'Book Store', exact: true });
    }

    async gotoLogin(){
        await this.loginBtn.click();
    }

    async verifyLoggedInUser(username: string)
    {
        await expect(this.loggedInUser).toBeVisible();
        await expect(this.loggedInUser).toHaveText(username);
        
    }

    async verifyLogoutButton(){
        await expect(this.logoutBtn).toBeVisible();
        await expect(this.logoutBtn).toBeEnabled();
    }
    async gotoBookStore(){
        await this.bookStoreLink.click();
    }
}