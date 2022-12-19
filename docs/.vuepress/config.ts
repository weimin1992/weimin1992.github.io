import { defineUserConfig } from 'vuepress'
import { childTheme } from './theme'
import { viteBundler } from '@vuepress/bundler-vite'
import Unocss from 'unocss/vite'
import { blogInfo } from '../config'
import { shikiPlugin } from '@vuepress/plugin-shiki'

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
      editLink: false,
      navbar: [
        {
          text: '工具',
          children: [
            {
              text: '暂无',
              children: []
            }
          ]
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
                  text: '安装',
                  link: '/posts/oracle/install',
                },
                {
                  text: '表空间',
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
                  text: 'wordpress建站',
                  link: '/posts/docker/wordpress'
                },
                {
                  text: '根路径修改',
                  link: '/posts/docker/setrootdir'
                }
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
        }
      ]
    }),
    plugins: [
      shikiPlugin({})
    ],
    bundler: viteBundler({
      viteOptions: {
        plugins: [
          Unocss(),
        ]
      }
    })
  }
)
