<template>
  <div class="flex flex-col items-center mx-28 border-2 border-gray-100 rounded-md m-2 w-full">
    <div class="flex flex-col items-center p-8">
      <img class="w-20" :src="image" />
      <TypeHeader class="text-blue-900">{{ name }}</TypeHeader>
      <TypeSubHeader class="text-blue-900" weight="strong">{{ subheader }}</TypeSubHeader>
      <TypeBody class="text-blue-900" weight="strong">{{ date }}</TypeBody>
      <ul v-if="hasLangauges()" class="flex flex-row gap-2">
        <li v-for="item in languages">
          <BaseTag :text="item"/>
        </li>
        <BaseTag variant="solid"></BaseTag>
      </ul>
      <ul v-if="hasDescription()" class="flex flex-col p-8 gap-2 list-disc text-blue-900">
        <li v-if="description" v-for="item in description">
          <TypeBody >{{ item }}</TypeBody>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue/types/v3-define-component";
import { PropType } from "vue/types";
import Icon from "./Icon.vue";
import TypeHeader from "./TypeHeader.vue";
import TypeSubHeader from "./TypeSubHeader.vue";
import TypeBody from "./TypeBody.vue";
import BaseTag from "./BaseTag.vue";

export default {
  name: "FeatureCard",
  components: {
    Icon,
    TypeHeader,
    TypeSubHeader,
    TypeBody,
    BaseTag,
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
      type: Array<string>,
    },
    languages: {
      type: Array<string>,
    },
  },
  setup(props) {
    const hasLangauges=()=> {
      if (props.languages) {
        return props.languages.every((value)=> {
          return value;
        });
      }
    }
    const hasDescription=()=> {
      if (props.description) {
        return props.description.every((value)=> {
          return value;
        });
      }
    }
    return {
      hasLangauges,
      hasDescription,
    }
  }
};
</script>
<style></style>
