const { test, expect } = require('@playwright/test');

// test('basic test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   const title = page.locator('.navbar__inner .navbar__title');
//   await expect(title).toHaveText('Playwright');
//   await page.pause();
// });



const playwright = require('playwright');
const assert = require('chai').assert;
const Mailosaur = require('mailosaur');



// test("basic test", async () => {

//   const apiKey = 'hfyf5MFP0puPtUeo';
//   const mailosaur = new Mailosaur(apiKey);
  
//   const serverId = 'uvgsnjwv';
//   const serverDomain = 'uvgsnjwv.mailosaur.net';

//   const browser = await playwright.chromium.launch({headless:false});
//   const context = await browser.newContext();
//   const page = await context.newPage();
    
//   await page.goto('https://example.mailosaur.com/password-reset');
//   await page.screenshot({ path: `password-request.png` });

//   // Make up an email address for this test
//   const randomString = new Date().getTime();
//   const testEmail = `${randomString}@${serverDomain}`;

//   // Request a password reset for our test email address
//   await page.fill('#email', testEmail);
//   await page.click('button[type="submit"]');

//   console.log("hey")

//   await page.screenshot({ path: `password-request-sent.png` });

//     // Search for the email
//     const email = await mailosaur.messages.get(serverId, {
//       sentTo: testEmail
//     });
  
//     assert.equal(email.subject, 'Set your new password for ACME Product');
//     console.log(email.subject);
//     console.log(email.html.body); 

//   await browser.close();
// })




test("basic test", async () => {

  const apiKey = 'hfyf5MFP0puPtUeo';
  const mailosaur = new Mailosaur(apiKey);
  
  const serverId = 'uvgsnjwv';
  const serverDomain = 'uvgsnjwv.mailosaur.net';

  const browser = await playwright.chromium.launch({headless:false});
  const context = await browser.newContext();
  const page = await context.newPage();
    
  await page.goto('http://localhost:5000/');
  await page.screenshot({ path: `password-request.png` });

  // Make up an email address for this test
  const randomString = new Date().getTime();
  const testEmail = `${randomString}@${serverDomain}`;

  // Request a password reset for our test email address
  await page.fill('#name', "Muthu!!");
  await page.fill('#email', 'hey@uvgsnjwv.mailosaur.net');
  await page.fill('#subject', "Just_checking");
  await page.fill("#message", "come on mail")

  
  await page.click('input[type="submit"]');

  console.log("hey")

  await page.screenshot({ path: `password-request-sent.png` });

    // Search for the email
    const email = await mailosaur.messages.get(serverId, {
      sentTo: 'hey@uvgsnjwv.mailosaur.net'
    });
  
    assert.equal(email.subject, 'Just_checking');
    console.log(email.subject);
    // console.log(email.html.body); 

  await browser.close();
})

