<template>
  <div class="flex flex-col items-center mx-28 border-2 border-gray-100 rounded-md m-2 w-2/3 lg:w-1/2">
    <div class="flex flex-col items-center p-8">
      <img class="w-20" :src="image" />
      <TypeHeader class="text-neutral-200">{{ name }}</TypeHeader>
      <TypeSubHeader class="text-neutral-200" weight="strong">{{ subheader }}</TypeSubHeader>
      <TypeBody class="text-neutral-200" weight="strong">{{ date }}</TypeBody>
      <ul class="flex flex-col p-8 gap-2 list-disc text-neutral-200">
        <li v-for="item in description">
          <TypeBody>{{ item }}</TypeBody>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Icon from "@/components/Icon.vue";
import TypeHeader from "@/components/TypeHeader.vue";
import TypeSubHeader from "@/components/TypeSubHeader.vue";
import TypeBody from "@/components/TypeBody.vue";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "FeatureCard",
  components: {
    Icon,
    TypeHeader,
    TypeSubHeader,
    TypeBody,
  },
  props: {
    image: {
      type: String as PropType<string>,
      required: true,
      default: "",
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
});
</script>
<style></style>
