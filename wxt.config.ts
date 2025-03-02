import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-svelte'],
  manifest: {
    name: '__MSG_extName__',
    description: '__MSG_extDescription__',
    default_locale: 'zh_CN',
    version: '1.0.0',
    version_name: '1.0.0',
    web_accessible_resources: [{
      resources: ["/deepseek/*"],
      matches: ["https://chat.deepseek.com/*"]
    }]
  },
});
