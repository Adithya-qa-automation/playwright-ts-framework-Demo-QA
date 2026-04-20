import type {Page, Locator} from '@playwright/test'

export default class BookStoreLogin{

    public page: Page;
    public readonly userNameTxtBox: Locator;
    public readonly passwordTxtBox: Locator;
    public readonly loginBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this. userNameTxtBox = page.getByRole('textbox', { name: 'UserName' });
        this.passwordTxtBox = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });
    }

    async loginWithCredential(user: string, password: string){
        await this.userNameTxtBox.fill(user);
        await this.passwordTxtBox.fill(password);
        await this.loginBtn.click();
    }
}

