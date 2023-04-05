<template>
  <div class="first">
    <b-card class="card">
      <ScavBasic
        msg="Well, to start this off, lets get something to drink from a favorite of ours. This place is almost the same name as Red Rock.... Maybe a different color?"
      />
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Answer:"
          label-for="input-1"
          description="This is a place that we love, but it's kinda loud."
        >
          <b-form-input
            id="input-1"
            v-model="form.answer"
            type="text"
            placeholder="Enter Answer"
            required
          ></b-form-input>
        </b-form-group>
        <b-button class="button" type="submit" variant="primary"
          >Submit</b-button
        >
        <b-button class="button" type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { notify } from "@kyvg/vue3-notification";
import ScavBasic from "@/components/ScavBasic.vue";

export default defineComponent({
  name: "FirstView",
  components: {
    ScavBasic,
  },
  data() {
    return {
      form: {
        answer: "",
      },
      show: true,
    };
  },
  mounted() {
    // when the page is loaded, trigger a notification to the user
    console.log("working");
    notify({
      type: "success",
      title: "Welcome to the Scavenger Hunt!",
      text: "Congratulations on making it to the first stop!",
    });
  },
  methods: {
    onSubmit(event: any) {
      event.preventDefault();
      if (
        this.form.answer == "black rock" ||
        this.form.answer == "black rock " ||
        this.form.answer == "Black Rock " ||
        this.form.answer == "Black Rock"
      ) {
        this.$router.push("/second");
      } else {
        alert("Sorry, that's not the right answer. Try again!");
      }
    },
    onReset(event: any) {
      event.preventDefault();
      // Reset our form values
      this.form.answer = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
});
</script>

<style scoped lang="scss">
.first {
  text-align: center;
  margin: 0 auto;
  width: 300px;
}
</style>
