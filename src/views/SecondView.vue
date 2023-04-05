<template>
  <div class="second">
    <b-card>
      <ScavBasic
        msg="Did you get a good coffee? GOOD! Now, lets go to a place that is a little more... fun. This places name is a three letter word. Noah had one."
      />
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Answer:"
          label-for="input-1"
          description="Half off Saturdays!"
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
  name: "SecondView",
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
      title: "Correct!",
      text: "Let's go to the next stop!",
    });
  },
  methods: {
    onSubmit(event: any) {
      event.preventDefault();
      if (
        this.form.answer == "Arc" ||
        this.form.answer == "Arc " ||
        this.form.answer == "arc " ||
        this.form.answer == "arc"
      ) {
        this.$router.push("/third");
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
.second {
  text-align: center;
  margin: 0 auto;
  width: 300px;
}
</style>
