<script lang="ts">
  let { tipImgSrc } = $props();

 
</script>

<div>
  <img src={tipImgSrc} alt="" />
  <p>请单击这个图标进行安装</p>
  <button>知道了</button>
  <p>mooogor</p>
</div>

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
