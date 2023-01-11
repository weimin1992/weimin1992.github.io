export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"浪铭的博客\",\"description\":\"化繁为简/make it easier\",\"head\":[[\"meta\",{\"name\":\"baidu-site-verification\",\"content\":\"undefined\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"https://cdn.porridge.fun/avatar/langming.jpeg\"}],[\"script\",{},\"\\n          var _hmt = _hmt || [];\\n          (function() {\\n            var hm = document.createElement(\\\"script\\\");\\n            hm.src = \\\"https://hm.baidu.com/hm.js?024136d62585d8175585d32e3be1bdda\\\";\\n            var s = document.getElementsByTagName(\\\"script\\\")[0]; \\n            s.parentNode.insertBefore(hm, s);\\n          })();\\n        \"]],\"locales\":{}}")

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
