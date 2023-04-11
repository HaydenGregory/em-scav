<template>
  <img alt="Tom" class="tom" src="../assets/tom.svg" />
  <div class="home">
    <b-card class="card">
      <ScavBasic msg="Hi Emily! To start, please enter our anniversary date" />
      <div id="date-picker">
        <VueDatePicker
          v-on:closed="onDateChange(date)"
          v-model="date"
          :enable-time-picker="false"
        ></VueDatePicker>
      </div>
    </b-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ScavBasic from "@/components/ScavBasic.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default defineComponent({
  name: "HomeView",
  components: {
    VueDatePicker,
    ScavBasic,
  },
  data() {
    return {
      date: null,
    };
  },
  methods: {
    onDateChange(date: any) {
      // if no date is selected, return
      if (!date) {
        return;
      }
      // format the date to only include the month and day and year
      date = date.toString().slice(4, 15);
      if (date === "Sep 13 2020") {
        this.$router.push("/first");
      } else {
        alert("Sorry, that's not the right date. Try again!");
      }
    },
  },
});
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
