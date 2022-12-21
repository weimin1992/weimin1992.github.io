import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
import { childTheme } from './theme'
import Unocss from 'unocss/vite'
import { blogInfo } from '../config'
import { searchPlugin } from '@vuepress/plugin-search'
// @ts-ignore
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { copyCodePlugin } from "vuepress-plugin-copy-code2"
// import vuePlugin from '@vitejs/plugin-vue'

export default defineUserConfig(
  {
    lang: 'zh-CN',
    title: `${blogInfo.auther}的博客`,
    description: '化繁为简/make it easier',
    head: [
      [
        'link',
        { rel: 'icon', href: blogInfo.siteLogo || 'https://github.com/weimin1992.png' }
      ]
    ],
    theme: childTheme({
      repo: 'https://github.com/weimin1992/weimin1992.github.io',
      docsBranch: 'main',
      repoLabel: 'GitHub',
      logo: blogInfo.siteLogo,
      contributors: false,
      lastUpdatedText: '最近修改时间',
      backToHome: '返回主页',
      navbar: [
        {
          text: '不吃灰收藏夹',
          link: '/favorites'
        },
        {
          text: '前端',
          children: [
            {
              text: '暂无',
              children: []
            }
          ]
        },
        {
          text: '后端',
          children: [
            {
              text: 'Oracle',
              children: [
                {
                  text: '安装-Windows',
                  link: '/posts/oracle/install',
                },
                {
                  text: '安装-MacOS',
                  link: '/posts/oracle/sqlplus',
                },
                {
                  text: '表空间创建',
                  link: '/posts/oracle/create'
                },
                {
                  text: '备份与还原',
                  link: '/posts/oracle/bak'
                }
              ]
            }
          ]
        },
        {
          text: '运维',
          children: [
            {
              text: 'Docker',
              children: [
                {
                  text: '根路径修改',
                  link: '/posts/docker/setrootdir'
                },
                {
                  text: 'wordpress建站',
                  link: '/posts/docker/wordpress'
                },
              ]
            },
            {
              text: 'Linux',
              children: [
                {
                  text: '常用命令',
                  link: '/posts/linux/cmd'
                },
              ]
            }
          ]
        },
        {
          text: '关于',
          link: '/posts/about/index.md'
        }
      ]
    }),
    plugins: [
      searchPlugin({}),
      shikiPlugin({}),
      copyCodePlugin({})
    ],
    bundler: viteBundler({
      viteOptions: {
        plugins: [
          Unocss(),
          // vuePlugin({
          //   template: {
          //     compilerOptions: {
          //       isCustomElement: (tag) => ['ming-copyright'].includes(tag),
          //     }
          //   }
          // })
        ]
      }
    })
  }
)
