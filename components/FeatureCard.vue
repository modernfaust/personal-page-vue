<template>
  <div class="flex flex-col">
    <img class="w-20" :src="image" />
    <div class="flex flex-col">
      <p>{{ name }}</p>
      <p>{{ subheader }}</p>
      <p>{{ date }}</p>
    </div>
    <ul class="flex flex-col">
      <li v-for="item in description">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue/types/v3-define-component";
import { PropType } from "vue/types";
import Icon from "./Icon.vue";

export default {
  name: "FeatureCard",
  components: {
    Icon,
  },
  props: {
    image: {
      type: String,
      required: true,
      default: "",
    },
    name: {
      type: String,
    },
    subheader: {
      type: String,
    },
    date: {
      type: String,
    },
    description: {
      type: Array<String>,
    },
    languages: {
      type: Array<String>,
    },
  },
};
</script>
<style></style>
