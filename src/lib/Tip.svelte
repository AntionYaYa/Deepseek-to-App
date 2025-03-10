<script lang="ts">
  let {
    tipImgSrc,
    showTip,
    closeTip,
  }: {
    tipImgSrc: string;
    showTip: boolean;
    closeTip?: (showTip: boolean) => boolean;
  } = $props();
  function installed() {
    localStorage.setItem("PWAInsatlled", "Insatlled");
    clickCloseTip()
  }
  function clickCloseTip() {
    if (closeTip) {
      closeTip(false);
    }
  }
</script>

{#if showTip}
  <div>
    <img src={tipImgSrc} alt="" />
    <p>请单击这个图标进行安装</p>
    <button onclick={clickCloseTip}>知道了</button>
    <button onclick={installed}>已经安装了</button>
    <a href="https://antion.site">来自：Mooogor</a>
  </div>
{/if}

<style>
  div {
    padding: var(--space);
  }
  img {
    width: 100%;
    border-radius: var(--border_radius);
  }
  p {
    font-size: var(--font_size);
    padding: var(--space);
    margin: 0;
    color: var(--color);
  }
</style>
