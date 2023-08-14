<template>
  <component
    :is="getComponent(icon)"
    :icon="getIcon(icon)"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>
<script>
import { snakeCase,camelCase } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FAIcons = Object.freeze({
  faGithub,
  faLinkedin,
  faFile,
});

const CustomIcons = Object.freeze({});

Object.values(FAIcons).forEach((icon) => {
  library.add(icon);
});

export const Icons = Object.freeze(
  [...Object.keys(FAIcons), ...Object.keys(CustomIcons)].sort().reduce(
    (obj, val) => ({
      ...obj,
      [snakeCase(val).toUpperCase()]: val,
    }),
    {}
  )
);

export const isValidIcon = (value) =>
  Object.values(Icons).includes(camelCase(value));

const isCustomIcon = (iconName) => Object.keys(CustomIcons).includes(iconName);

export const getComponent = (iconName) =>
  isCustomIcon(iconName) ? CustomIcons[iconName] : FontAwesomeIcon;

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
</style>
