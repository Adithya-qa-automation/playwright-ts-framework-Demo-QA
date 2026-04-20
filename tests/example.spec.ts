import { test, expect } from '@playwright/test';
import DemoQAFirstPage from '../pages/DemoQAFirstPage.ts'
import BookStoreBasePage from '../pages/BookStoreBasePage.ts';
import BookStoreLogin from '../pages/BookStoreLogin.ts';
import BookStore from '../pages/BookStore.ts';
test("DemoQA Bookstore Workflow", async({page})=>{

  const demoQAFirstPageObj = new DemoQAFirstPage(page); // Creating obj and initializing through constructor

  await test.step("Go to DemoQA starting page", async()=>{
    await demoQAFirstPageObj.gotoHomePage()
  })
  
  await test.step("Go to Book My Store Application", async()=>{
    await demoQAFirstPageObj.gotoBookStoreApplication()
    
  })

  const bookStoreBasePage = new BookStoreBasePage(page);

  await test.step("Navigate to Book Store Login link", async()=>{
    await bookStoreBasePage.gotoLogin();
    
  })

  const bookStoreLogin = new BookStoreLogin(page);
  const username = process.env.USER_NAME!;
  const password = process.env.password!;

  await test.step("Enter user credentials and hit the log in button", async()=>{
    await bookStoreLogin.loginWithCredential(username,password);
  })

  await test.step("Verify Logged in user name and presence of log out button", async()=>{
   await bookStoreBasePage.verifyLoggedInUser(username);
   await bookStoreBasePage.verifyLogoutButton();
   
  })

  await test.step("Go to Book Store link", async()=>{
    await bookStoreBasePage.gotoBookStore();
  })

  const bookStore = new BookStore(page);

  await test.step("Enter the book name", async()=>{
    await bookStore.searchBook("Learning JavaScript Design Patterns");
    
  })

  await test.step("Validate the searched book name came as suggestion", async()=>{
    await bookStore.verifySearchedBookName("Learning JavaScript Design Patterns");
    await page.pause();
  })
  
})