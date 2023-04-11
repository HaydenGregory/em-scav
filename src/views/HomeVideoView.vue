<template>
  <img alt="Tom" class="tom" src="../assets/tom.svg" />
  <div class="home-vid">
    <!-- iframe this video here https://youtu.be/ekNXLuLUEWE -->
    <iframe
      title="Home Video"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/ekNXLuLUEWE"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope;
      picture-in-picture"
      allowfullscreen
    ></iframe>
    <!-- create a b-button that when clicked goes to party page -->
    <b-button variant="primary" @click="onClicked">Next</b-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeVideoView",
  components: {},
  data() {
    return {};
  },
  mounted() {
    // when the page is loaded, trigger a notification to the user
    console.log("working");
  },
  // when the button is clicked, redirect to the party page
  methods: {
    onClicked() {
      this.$router.push("/party");
    },
  },
});
</script>

<style lang="scss" scoped>
.home-vid {
  text-align: center;
  margin: 0 auto;
  width: 500px;
}
</style>
