import { defineUserConfig, viteBundler } from 'vuepress'
import { childTheme } from './theme'
import Unocss from 'unocss/vite'
import { blogInfo } from '../config'
import { searchPlugin } from '@vuepress/plugin-search'
// @ts-ignore
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { copyCodePlugin } from "vuepress-plugin-copy-code2"
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
// import alias from '@rollup/plugin-alias'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig(
  {
    lang: 'zh-CN',
    title: `${blogInfo.auther}的博客`,
    description: '化繁为简/make it easier',
    head: [
      [
        'link',
        { rel: 'icon', href: blogInfo.siteLogo || 'https://cdn.porridge.fun/avatar/langming.jpeg' }
      ]
    ],
    theme: childTheme({
      repo: 'https://github.com/weimin1992/weimin1992.github.io',
      docsBranch: 'main',
      repoLabel: 'GitHub',
      logo: blogInfo.siteLogo,
      contributors: false,
      editLink: false,
      lastUpdatedText: '最近修改时间',
      backToHome: '返回主页',
      navbar: [
        {
          text: '发布文章',
          link: '/posts'
        },
        {
          text: '不吃灰收藏夹',
          link: '/favorites'
        },
        {
          text: '关于',
          link: '/about/index.md'
        },
        {
          text: '开往',
          link: 'https://www.travellings.cn'
        }
      ]
    }),
    plugins: [
      searchPlugin({
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
      }),
      shikiPlugin({}),
      copyCodePlugin({}),
      registerComponentsPlugin({
        components: {
          MingBadge: path.resolve(__dirname, './components/MingBadge.vue'),
          MingPosts: path.resolve(__dirname, './components/MingPosts.vue')
        }
      })
    ],
    bundler: viteBundler({
      viteOptions: {
        plugins: [
          Unocss()
        ]
      }
    })
  }
)
