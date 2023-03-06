<script setup>
import Page from '@vuepress/theme-default/lib/client/components/Page.vue'
import { usePageData } from '@vuepress/client'

const pageData = usePageData();
const isPage = pageData.value.path.includes('/posts/') && !pageData.value.path.endsWith('/posts/')
</script>
<template>
  <Page>
    <template #bottom>
      <CommentService v-show="isPage"/>
    </template>
  </Page>
</template>
