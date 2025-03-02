export default defineBackground(() => {
  browser.runtime.onInstalled.addListener(async function (details) {
    if (details.reason === "install") {
      await browser.tabs.create({ url: 'https://chat.deepseek.com/' });
    }
  });
});
