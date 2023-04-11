<template>
  <div class="party">
    <video controls autoplay="true" src="../assets/emily.mp4"></video>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.party {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;

  video {
    width: 100%;
    height: 100%;
  }
}
</style>
