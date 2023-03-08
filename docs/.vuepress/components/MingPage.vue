<script setup>
import Page from '@vuepress/theme-default/lib/client/components/Page.vue'
import { usePageData } from '@vuepress/client'
import CopyRight from './CopyRight.vue'
import { computed } from 'vue'
// const pageFrontmatter = usePageFrontmatter()
// const isShow = computed(() => Boolean(pageFrontmatter.value["comment"])).value
const pageData = usePageData();
const isPage = computed(()=>pageData.value.path.includes('/posts/') && !pageData.value.path.endsWith('/posts/')).value
// console.log('isPage:', isPage)
</script>
<template>
  <Page>
    <template #bottom>
      <CommentService v-show="isPage" />
      <hr>
      <CopyRight />
    </template>
  </Page>
</template>
