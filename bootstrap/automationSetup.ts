import puppeteer, { Browser, Page } from 'puppeteer';
import fs from 'fs';

abstract class AutomationTestSetup {
    async initializer(url: string, waitInitialContainer?: string): Promise<{ page: Page; browser: Browser }> {
        const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
        const page = await browser.newPage();
        
        await this.open(page, url, waitInitialContainer);
        
        return { browser, page };
    }
    
    async open(page: Page, url: string, waitInitialContainer?: string) {
        const port = process.env.PORT ?? 3000;
        await page.goto(url);
        if(waitInitialContainer) {
            await page.waitForSelector(waitInitialContainer);
        }
    }

    protected async getFilesInDir(dir: string) {
        const files = fs.readdirSync(dir);
        return files.filter(f => !f.startsWith('basic')).map(t => t = t.replace('.spec.ts', ''));
    }


}

export default AutomationTestSetup;