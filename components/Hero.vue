<template>
  <section class="flex flex-col items-center laptop:flex-row w-full">
    <div class="flex flex-col items-center py-12" :class="hero?.image.length > 0 ? 'w-1/2' : 'w-full'">
      <div class="flex flex-col items-center" :class="hero?.image.length > 0 ? 'laptop:items-start' : 'laptop:items-center'">
        <TypeHeader class="text-blue-900" variant="peta" weight="strong">
          {{ hero?.header }}
        </TypeHeader>
        <TypeSubHeader class="text-blue-900" variant="medium" weight="strong">
          {{ hero?.subheader }}
        </TypeSubHeader>
        <TypeBody class="text-blue-900" variant="medium" weight="strong">
          {{ hero?.description }}
        </TypeBody>
      </div>
    </div>
    <img v-if="hero?.image.length > 0" class="w-1/2 object-scale-down" :src="hero?.image" :alt="hero?.alt"/>
  </section>
</template>
<script lang="ts">
import Icon from "@/components/BaseIcon.vue";
import TypeHeader from "@/components/TypeHeader.vue";
import TypeSubHeader from "./TypeSubHeader.vue";
import TypeBody from "./TypeBody.vue";
import { HeroItem } from "@/constants/interfaces";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: "Hero",
  props: {
    hero: {
      type: Object as PropType<HeroItem>
    }
  },
  components: {
    Icon,
    TypeHeader,
    TypeSubHeader,
    TypeBody,
  },
  setup() {
  },
});
</script>