/*
 * @Author: weimin1992
 * @Email: weimin1992@outlook.com
 * @Date: 2022-12-14 13:27:17
 * @Last Modified by: weimin1992
 * @Last Modified time: 2023-03-08 09:00:45
 * @Description: 子主题
 */
import { defaultTheme } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export const childTheme = (options) => {
  return {
    name: 'vuepress-theme-child',
    extends: defaultTheme(options),

    // 在子主题的客户端配置文件中覆盖布局
    clientConfigFile: path.resolve(__dirname, './client.js'),

    // 覆盖组件别名
    alias: {
      // '@theme/Home.vue': path.resolve(__dirname, './components/MingHome.vue'),
      '@theme/Page.vue': path.resolve(__dirname, './components/MingPage.vue'),
      '@theme/HomeFooter.vue': path.resolve(__dirname, './components/MingHomeFooter.vue'),
      '@theme/AutoLink.vue': path.resolve(__dirname, './components/MingAutoLink.vue'),
      '@theme/NavbarBrand.vue': path.resolve(__dirname, './components/MingMusicPlayer.vue'),
    },
  }
}
