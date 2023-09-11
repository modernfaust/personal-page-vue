<template>
  <nav class="w-full fixed top-0 bg-slate-100">
    <div class="flex mx-8 py-4 lg:mx-24">
      <router-link to="/"><img class="h-10" :src="navItems?.logo" :alt="navItems?.logoAlt" /></router-link>
      <button class="tablet:hidden text-gray-500 ms-auto w-10 h-10 relative focus:outline-none" @click="revealPanel">
        <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
          <span aria-hidden="true"
            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
            :class="{ 'rotate-45': isPanelOpen, ' -translate-y-1.5': !isPanelOpen }"></span>
          <span aria-hidden="true"
            class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out"
            :class="{ 'opacity-0': isPanelOpen }"></span>
          <span aria-hidden="true"
            class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out"
            :class="{ '-rotate-45': isPanelOpen, ' translate-y-1.5': !isPanelOpen }"></span>
        </div>
      </button>
      <ul class="flex flex-row gap-4 ms-auto hidden tablet:inline-flex ">
        <li>
          <a :href="navItems?.github">
            <BaseIcon class="text-blue-900" icon="faGithub" size="medium" />
          </a>
        </li>
        <li>
          <a :href="navItems?.linkedin">
            <BaseIcon class="text-blue-900" icon="faLinkedin" size="medium" />
          </a>
        </li>
        <li>
          <a :href="navItems?.resume">
            <BaseIcon class="text-blue-900" icon="faFile" size="medium" />
          </a>
        </li>
      </ul>
    </div>
    <ul class="w-full flex flex-col items-center" v-if="isPanelOpen" v-for="item in panelItemsArray">
      <li class="h-12">
        <NavigationPanelItem :item="item" :url="navItems[item]" />
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import BaseIcon from "@/components/BaseIcon.vue";
import NavigationPanelItem from "./NavigationPanelItem.vue";
import {
  defineComponent,
  PropType,
  ref,
  computed,
} from "vue";
import { NavigationItems } from "@/constants/interfaces";

export default defineComponent({
  name: "NavBar",
  props: {
    navItems: {
      type: Object as PropType<NavigationItems>,
    },
  },
  components: {
    BaseIcon,
    NavigationPanelItem,
  },
  setup(props) {
    const isPanelOpen = ref(false);
    const panelItemsArray = computed(() => {
      let navItems = props.navItems ? Object.keys(props.navItems) : [];

      return navItems.filter((item) => {
        return item !== 'logo' && item !== 'logoAlt';
      })
    }
    );

    function revealPanel() {
      if (isPanelOpen.value) {
        isPanelOpen.value = false;
      }
      else {
        isPanelOpen.value = true;
      }
    }

    return {
      revealPanel,
      isPanelOpen,
      panelItemsArray,
    };
  },
});
</script>
