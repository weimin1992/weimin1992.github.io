export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"date\":\"2022-10-24T00:00:00.000Z\",\"title\":\"主页\",\"heroHeight\":100,\"heroImage\":\"https://cdn.porridge.fun/avatar/langming.jpeg\",\"features\":[{\"title\":\"发布文章\",\"details\":\"不定期发布技术文章，包括解决问题的方法、技术使用手册等。\"},{\"title\":\"不吃灰收藏夹\",\"details\":\"收录特色的GitHub项目、开源博客以及api手册等。\"},{\"title\":\"关于\",\"details\":\"站点构建说明、搭建博客的目的。\"}],\"actions\":[{\"text\":\"最新文章\",\"link\":\"/posts/webpack/terser\",\"type\":\"primary\"},{\"text\":\"关于\",\"link\":\"/about\",\"type\":\"secondary\"}]},\"headers\":[],\"git\":{\"updatedTime\":1673407090000},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
