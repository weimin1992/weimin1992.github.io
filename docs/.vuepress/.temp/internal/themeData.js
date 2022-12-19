export const themeData = JSON.parse("{\"repo\":\"https://github.com/weimin1992/weimin1992.github.io\",\"docsBranch\":\"main\",\"repoLabel\":\"GitHub\",\"logo\":\"https://github.com/weimin1992.png\",\"contributors\":false,\"lastUpdatedText\":\"最近修改时间\",\"backToHome\":\"返回主页\",\"editLink\":false,\"navbar\":[{\"text\":\"工具\",\"children\":[{\"text\":\"暂无\",\"children\":[]}]},{\"text\":\"前端\",\"children\":[{\"text\":\"暂无\",\"children\":[]}]},{\"text\":\"后端\",\"children\":[{\"text\":\"Oracle\",\"children\":[{\"text\":\"安装\",\"link\":\"/posts/oracle/install\"},{\"text\":\"表空间\",\"link\":\"/posts/oracle/create\"},{\"text\":\"备份与还原\",\"link\":\"/posts/oracle/bak\"}]}]},{\"text\":\"运维\",\"children\":[{\"text\":\"Docker\",\"children\":[{\"text\":\"wordpress建站\",\"link\":\"/posts/docker/wordpress\"},{\"text\":\"根路径修改\",\"link\":\"/posts/docker/setrootdir\"}]},{\"text\":\"Linux\",\"children\":[{\"text\":\"常用命令\",\"link\":\"/posts/linux/cmd\"}]}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
