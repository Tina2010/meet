import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
    let browser;
    let page;
    jest.setTimeout(900 * 1000);
  
    beforeAll(async () => {
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 250, // slow down by 250ms
       ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
      }); //only add headless mode after the entire test-file ran succesfully
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.eventCard');
    });
  
    afterAll(() => {
      browser.close();
    });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.eventCard .eventDetails.active');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.eventCard .detailsButton');
    const eventDetails = await page.$('.eventCard .eventDetails');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.eventCard .detailsButton');
    const eventDetails = await page.$('.eventCard .eventDetails.active');
    expect(eventDetails).toBeNull();
  });
});

describe('Filter events by city', () => {
    let browser;
    let page;
    jest.setTimeout(900 * 1000);
  
    beforeAll(async () => {
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 250, // slow down by 250ms
       ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
      }); //only add headless mode after the entire test-file ran succesfully
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.eventCard');
    });
  
    afterAll(() => {
      browser.close();
    });

    test('When user hasn’t searched for a city, show upcoming events from all cities.', () => {
        expect('.event').toHaveLength(6);
    });

    test('User should see a list of suggestions when they search for a city.', async () => {
        await page.type('.city', 'Berlin');
        expect('li').toHaveLength(2);
    });

    test('User can select a city from the suggested list.', async () => {
        await page.evaluate( () => document.querySelector(".city").value = "");
        await page.type('.city', 'Berlin');
        await page.click('.suggestions', 'Berlin, Germany');
        await page.evaluate(
            () => document.querySelector(".city").value === "Berlin, Germany"
          );       
    });
});
