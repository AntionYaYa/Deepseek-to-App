import Content from '@/entrypoints/content/content.svelte';
import { mount } from 'svelte';
export default defineContentScript({
  matches: ['https://chat.deepseek.com/*'],
  cssInjectionMode: 'ui',
  async main(ctx) {

    injctlinkEl()

    const ui = await createShadowRootUi(ctx, {
      name: 'mooogor-ui',
      mode: 'open',
      position: 'inline',
      anchor: 'html',
      onMount: (container) => {
        mount(Content, {
          target: container,
        });
      },
    });
    ui.mount();
  },
});

function injctlinkEl() {
  // 创建 link 元素
  const link = document.createElement('link');
  link.rel = 'manifest';
  link.href = chrome.runtime.getURL('deepseek/manifest.json'); // 获取扩展内资源的正确URL

  // 将 link 添加到页面的 head 中
  document.head.appendChild(link);
} 
