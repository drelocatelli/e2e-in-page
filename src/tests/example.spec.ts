import { Browser, Page } from "puppeteer";
import AutomationTestSetup from "../../bootstrap/automationSetup";

class ExampleSpec extends AutomationTestSetup {

    constructor(page: Page, browser: Browser) {
        super();
        this.assert(page);
    }

    async assert(page: Page) {
        const input = await page.waitForSelector('input');
        input?.evaluate(inp => {
            (inp as HTMLInputElement).value = 'Ola mundo'
            console.log(inp)
        })
    }
    
}

export default ExampleSpec;