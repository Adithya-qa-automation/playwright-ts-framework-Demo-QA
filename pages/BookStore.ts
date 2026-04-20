import {expect, type Locator, type Page} from '@playwright/test'

export default class BookStore{

    public page: Page;
    public readonly searchBoxTxtBox: Locator;
    public readonly searchedBookName: Locator;

    constructor(page: Page){
        this.page = page;
        this.searchBoxTxtBox = page.getByRole('textbox', { name: 'Type to search' });
        this.searchedBookName = page.locator('.action-buttons');
    }
    async searchBook(bookName: string){
        await this.searchBoxTxtBox.fill(bookName);
    }
    async verifySearchedBookName(bookName: string){
        await expect(this.searchedBookName).toBeVisible()
        await expect(this.searchedBookName).toHaveText(bookName);
    }
}