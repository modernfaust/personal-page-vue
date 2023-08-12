<template>
  <component
    :is="getComponent(icon)"
    :icon="getIcon(icon)"
    class="base-icon"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>
<script>
import { camelCase } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FAIcons = Object.freeze({
  faGithub,
  faLinkedin,
  faFile,
});

Object.values(FAIcons).forEach((icon) => {
  library.add(icon);
});

export const isValidIcon = (value) => {
  Object.values(FAIcons).includes(camelCase(value));
};

export const getComponent = () => FontAwesomeIcon;

export const getIcon = (icon) => FAIcons[camelCase(icon)] || null;

export default {
  props: {
    icon: {
      type: String,
      required: true,
      validator: isValidIcon,
    },
  },
  setup() {
    return {
      getComponent,
      getIcon,
    };
  },
};
</script>
<style>
.base-icon {
  height: 1em;
  width: 1em;
}
</style>
