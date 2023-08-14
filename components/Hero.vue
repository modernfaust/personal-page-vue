<template>
  <div class="flex flex-col items-center">
    <img class="w-1/2 object-scale-down" src="../assets/images/shiba_inu.png" />
    <p>content goes here</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue/types/v3-define-component";
import { PropType } from "vue/types";
import Icon from "./Icon.vue";

export default {
  name: "Hero",
  components: {
    Icon,
  },
};
</script>
<style>
</style>
