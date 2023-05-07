describe('Type Describe', function () {
    it('Type fetch details', async function () {
        browser.waitForAngular
        await browser.get('http://localhost:TypeHere/');

        await expect(browser.getTitle()).toEqual('TypeHere');

    });
});