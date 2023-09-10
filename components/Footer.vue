<template>
  <div class="flex flex-col items-center gap-4 mx-8 py-4 lg:mx-24">
    <div class="flex flex-row gap-4">
      <a :href="navItems?.github">
          <BaseIcon class="text-blue-900" icon="faGithub" size="medium" />
        </a>
        <a :href="navItems?.linkedin">
          <BaseIcon class="text-blue-900" icon="faLinkedin" size="medium" />
        </a>
        <a :href="navItems?.resume">
          <BaseIcon class="text-blue-900" icon="faFile" size="medium" />
        </a>
    </div>
    <TypeBody class="text-blue-900 text-xl laptop:text-2xl">{{`Copyright ©${copyright} Edward Lee. All rights reserved`}}.
    </TypeBody>
  </div>
</template>
<script lang="ts">
import Icon from "@/components/BaseIcon.vue";
import TypeBody from "@/components/TypeBody.vue";
import { defineComponent, PropType } from "vue";
import { NavigationItems } from "@/constants/interfaces";

export default defineComponent({
  name: "Footer",
  props: {
    navItems: {
      type: Object as PropType<NavigationItems>,
    },
  },
  components: {
    Icon,
    TypeBody,
  },
  computed: {
    copyright: function() {
      return new Date().getFullYear();
    },
  }
});
</script>
<style>
.nuxt-logo {
  height: 180px;
}
</style>
  