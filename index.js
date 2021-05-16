const {
	chromium
} = require('playwright');

(async () => {
	const browser = await chromium.launch({
		headless: false,
		slowMo: 50
	});
	const context = await browser.newContext();
	const page = await context.newPage();

	await page.goto('https://web.gencat.cat/ca/inici');

	const [newPage] = await Promise.all([
		context.waitForEvent('page'),
		page.click("a[href='http://agenda.cultura.gencat.cat']")
	])
	await newPage.waitForLoadState(); //Cuando la nueva pagina este cargada
	await newPage.click("#cerca-button")

	//await browser.close();
})();