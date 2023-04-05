<template>
  <div class="scav-main">
    <h4>{{ msg }}</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "scav-basic",
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
h4 {
  font-size: medium;
}
</style>
