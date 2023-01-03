/*
 * @Author: weimin1992
 * @Email: weimin1992@outlook.com
 * @Date: 2022-12-21 13:32:15
 * @Last Modified by: weimin1992
 * @Last Modified time: 2022-12-21 13:32:41
 * @Description: 拓展vuepress内置badge
 */

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    required: false,
    default: 'tip',
  },
  text: {
    type: String,
    required: false,
    default: '',
  },
  vertical: {
    type: String,
    required: false,
    default: undefined,
  },
})
</script>

<template>
  <span
    class="badge ming-badge"
    :class="type"
    :style="{
      verticalAlign: vertical,
    }"
  >
    <slot>{{ text }}</slot>
  </span>
</template>
