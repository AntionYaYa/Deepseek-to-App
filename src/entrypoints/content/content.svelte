<script lang="ts">
  import "@/assets/app.css";
  import Tip from "@/lib/Tip.svelte";
  const tipImgSrc = browser.runtime.getURL("/deepseek/tip.jpg");

  function isPWAInstalled() {
    return window.matchMedia("(display-mode: standalone)").matches;
  }

  onMount(() => {
    isPWAInstalled();
    if (isPWAInstalled()) {
      console.log("PWA 已安装");
    } else {
      console.log("PWA 未安装");
    }
  });
</script>

{#if }
  
{/if}
<div>
  
  <Tip {tipImgSrc} />
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
