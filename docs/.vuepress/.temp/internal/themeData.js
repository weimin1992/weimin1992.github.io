export const themeData = JSON.parse("{\"repo\":\"https://github.com/weimin1992/weimin1992.github.io\",\"docsBranch\":\"main\",\"repoLabel\":\"GitHub\",\"logo\":\"https://cdn.porridge.fun/avatar/langming.jpeg\",\"contributors\":false,\"editLink\":false,\"lastUpdatedText\":\"最近修改时间\",\"backToHome\":\"返回主页\",\"navbar\":[{\"text\":\"发布文章\",\"link\":\"/posts\"},{\"text\":\"不吃灰收藏夹\",\"link\":\"/favorites\"},{\"text\":\"关于\",\"link\":\"/about/index.md\"},{\"text\":\"开往\",\"link\":\"https://www.travellings.cn\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
