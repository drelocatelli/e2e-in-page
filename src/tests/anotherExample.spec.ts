import { Browser, Page } from "puppeteer";
import AutomationTestSetup from "../../bootstrap/automationSetup";

class AnotherExampleSpec extends AutomationTestSetup {

    constructor(page: Page, browser: Browser) {
        super();
        this.assert(page);
    }

    async assert(page: Page) {
        const confirm = await this.readDialog(page, 'hello', 'confirm');
        if(confirm) {
            await page.goto('http://youtube.com');
        }
    }
    
}

export default AnotherExampleSpec;