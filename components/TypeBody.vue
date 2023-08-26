<template>
    <component
      :is="tag"
      :class="[
        `type-body-${variant}`,
        `type-body-${weight}`,
      ]"
      class="type-body font-poppins"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot />
    </component>
  </template>
  
  <script>
  export default {
    name: "TypeBody",
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
  .type-body-small {
    font-size: 0.5rem;
  }
  .type-body-medium {
    font-size: 1rem;
  }
  .type-body-large {
    font-size: 1.5rem;
  }
  .type-body-regular {
    font-weight: normal;
  }
  .type-body-strong {
    font-weight: bold;
  }
  </style>
  