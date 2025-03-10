<script lang="ts">
  import "@/assets/app.css";
  import Tip from "@/lib/Tip.svelte";
  const tipImgSrc = browser.runtime.getURL("/deepseek/tip.jpg");

  let showTip = $state(false);
  let mediaQuery: MediaQueryList;

  function checkDisplayMode() {
    mediaQuery = window.matchMedia("(display-mode: standalone)");
    return !mediaQuery.matches;
  }
  $effect.pre(() => {
   const PWAInsatlled= localStorage.getItem("PWAInsatlled");
  if (PWAInsatlled === 'Insatlled') {
    showTip =false
  }else{
    showTip = checkDisplayMode();
  }
  });

  window.addEventListener("appinstalled", () => {
    showTip = false; // 更新状态
  });

  function clickCloseTip(close:boolean) {
    showTip = close
    return showTip
  }
</script>

<div>
  <Tip
    {tipImgSrc}
    {showTip}
    closeTip={(close) => clickCloseTip(close)}
  />
</div>

<style>
  div {
    width: 320px;
    position: absolute;
    top: var(--space);
    right: var(--space);
    border-radius: var(--border_radius1);
    background-color: var(--bg_color);
    box-shadow: var(--shadow);
  }
</style>
