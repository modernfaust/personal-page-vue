<template>
    <component
      :is="tag"
      :class="[
        `type-subheader-${variant}`,
        `type-subheader-${weight}`,
      ]"
      class="type-subheader font-poppins"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot />
    </component>
  </template>
  
  <script>
  export default {
    name: "TypeSubHeader",
    props: {
      /** The html tag to use for this component. */
      tag: {
        type: String,
        default: "span",
      },
      /** One of `small`, `medium`, `large`. */
      variant: {
        type: String,
        default: "medium",
      },
      /** One of `regular`, or `strong`. */
      weight: {
        type: String,
        default: "regular",
      },
    },
  };
  </script>
  <style>
  .type-subheader-small {
    font-size: 1rem;
  }
  .type-subheader-medium {
    font-size: 1.5rem;
  }
  .type-subheader-large {
    font-size: 2rem;
  }
  .type-subheader-regular {
    font-weight: normal;
  }
  .type-subheader-strong {
    font-weight: bold;
  }
  </style>
  