<template>
  <div class="flex flex-col items-center bg-neutral-50 mx-28 border-2 shadow-xl rounded-md m-2 w-full">
    <div class="flex flex-col items-center gap-2 p-8 w-full">
      <a :href="url"><img class="w-40" :src="image" :alt="alt"/></a>
      <TypeHeader class="text-blue-900" variant="giga" weight="strong">{{ name }}</TypeHeader>
      <TypeSubHeader class="text-blue-900" weight="strong">{{ subheader }}</TypeSubHeader>
      <TypeBody class="text-blue-900" weight="strong">{{ date }}</TypeBody>
      <ul v-if="hasLangauges()" class="flex flex-row gap-2">
        <li v-for="item in languages">
          <BaseTag :text="item"/>
        </li>
        <BaseTag variant="solid"></BaseTag>
      </ul>
      <ul v-if="hasDescription()" class="flex flex-col p-8 gap-4 list-disc w-full">
        <li v-if="description" v-for="item in description">
          <TypeBody class="text-blue-900" variant="medium">{{ item }}</TypeBody>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Icon from "@/components/BaseIcon.vue";
import TypeHeader from "@/components/TypeHeader.vue";
import TypeSubHeader from "@/components/TypeSubHeader.vue";
import TypeBody from "@/components/TypeBody.vue";
import BaseTag from "@/components/BaseTag.vue";
import { defineComponent, PropType } from "vue";

export default defineComponent({
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
      type: String as PropType<string>,
      required: true,
      default: "",
    },
    url: {
      type:String as PropType<string>, 
    },
    alt: {
      type:String as PropType<string>,
    },
    name: {
      type: String as PropType<string>,
    },
    subheader: {
      type: String as PropType<string>,
    },
    date: {
      type: String as PropType<string>,
    },
    description: {
      type: Array as PropType<Array<string>>
    },
    languages: {
      type: Array as PropType<Array<string>>
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
});
</script>
<style></style>
