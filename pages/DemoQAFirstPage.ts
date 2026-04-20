import type {Page, Locator} from '@playwright/test'

export default class DemoQAFirstPage{
    public page: Page;
    public readonly bookStoreApplicationLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.bookStoreApplicationLink = page.getByRole('link', { name: 'Book Store Application' })

    }
async gotoHomePage(){
   await this.page.goto("/");
}

async gotoBookStoreApplication(){
    await this.bookStoreApplicationLink.click();
}
}