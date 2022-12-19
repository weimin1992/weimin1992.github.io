/*
 * @Author: weimin1992
 * @Email: weimin1992@outlook.com
 * @Date: 2022-12-14 13:27:17
 * @Last Modified by: weimin1992
 * @Last Modified time: 2022-12-14 13:28:26
 * @Description: 子主题
 */
import type { Theme } from '@vuepress/core'
import { defaultTheme, type DefaultThemeOptions } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export const childTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-child',
    extends: defaultTheme(options),

    // 在子主题的客户端配置文件中覆盖布局
    clientConfigFile: path.resolve(__dirname, './client.ts'),

    // 覆盖组件别名
    alias: {
      '@theme/HomeFooter.vue': path.resolve(__dirname, './components/MyHomeFooter.vue'),
    },
  }
}