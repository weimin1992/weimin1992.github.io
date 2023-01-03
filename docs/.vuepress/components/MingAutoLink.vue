/*
 * @Author: weimin1992
 * @Email: weimin1992@outlook.com
 * @Date: 2022-12-14 14:17:13
 * @Last Modified by: weimin1992
 * @Last Modified time: 2022-12-21 17:18:10
 * @Description: 全局AutoLink
 */
<script setup>
import ParentAutoLink from '@vuepress/theme-default/lib/client/components/AutoLink.vue'
import { postDataSource } from '../../config'
</script>

<template>
  <ParentAutoLink>
    <template #before>
      <span inline-flex :class="{'i-carbon-catalog-publish': $attrs.item.text === '发布文章', 'i-carbon-information': $attrs.item.text === '关于', 'i-carbon-bookmark-add': $attrs.item.text === '不吃灰收藏夹'}" ></span>
    </template>
    <template #after>
      <MingBadge type="red" :text="`${postDataSource.total}`" vertical="top" v-if="$attrs.item.text === '发布文章'" />
    </template>
  </ParentAutoLink>
</template>
