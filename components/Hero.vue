<template>
  <div class="flex flex-col items-center lg:flex-row lg:mx-24">
    <img class="w-1/2 object-scale-down" :src="hero.image" />
    <div class="w-1/2 flex flex-col items-center">
      <TypeHeader class="text-blue-400" variant="peta" weight="strong">
        {{hero.header}}
      </TypeHeader>
      <TypeHeader class="text-blue-400" variant="medium" weight="strong">
        {{hero.subheader}}
      </TypeHeader>
    </div>
  </div>
</template>
<script lang="ts">
import Icon from "./Icon.vue";
import TypeHeader from "./TypeHeader.vue";
import { HeroItem } from "../constants/interfaces";
import { defineComponent, PropType } from "vue";

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
  },
});
</script>
<style></style>
