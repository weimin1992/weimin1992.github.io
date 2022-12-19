export const siteData = JSON.parse("{\"base\":\"/blog/\",\"lang\":\"zh-CN\",\"title\":\"浪铭的博客\",\"description\":\"化繁为简/make it easier\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"https://github.com/weimin1992.png\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
