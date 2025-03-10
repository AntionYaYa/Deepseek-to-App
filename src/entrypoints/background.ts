
export default defineBackground(() => {
  browser.runtime.onInstalled.addListener(async function (details) {
    if (details.reason === "install") {
      await browser.tabs.create({ url: 'https://chat.deepseek.com/' });
    }
  });

  // start()
});
// async function start() {
//   onMessage("updatContent", updatContent);
//   browser.tabs.onActivated.addListener(onActivated)
//   browser.windows.onFocusChanged.addListener(onFocusChanged)
// }

// function onFocusChanged(windowid: number) {
//   if (windowid === -1) return
//   updatContent()
// }
// async function onActivated(event: any) {
//   const activTab = await browser.tabs.get(event.tabId)
//   if (activTab.status !== "complete") return
//   updatContent()
// }

// async function updatContent() {
//   const activeTab = await getActiveTab()
//   if (!activeTab) return false
//   await sendMessage(
//     "updatContent",
//     {},
//     "content-script@" + activeTab.id,
//   );
// }

// async function getActiveTab() {
//   let queryOptions = { active: true, lastFocusedWindow: true };
//   let [tab] = await browser.tabs.query(queryOptions);
//   return tab;
// }