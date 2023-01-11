/*
 * @Author: weimin1992
 * @Email: weimin1992@outlook.com
 * @Date: 2022-12-14 14:33:02
 * @Last Modified by: weimin1992
 * @Last Modified time: 2023-01-04 13:59:52
 * @Description: 版权信息
 */

<script setup>
import { blogInfo } from '../../config'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { ClientOnly } from '@vuepress/client';
dayjs.extend(duration)
const currentYear = new Date().getFullYear()
const startYear = new Date(blogInfo.siteStart).getFullYear()
</script>
<template>
  <ClientOnly>
    <div p-5 flex-col gap-1 flex justify-center items-center text-center dark:text-theme-dark>
      <div>Copyright &copy; {{ `${startYear}~${currentYear}` }} <a href="https://github.com/weimin1992"
          target="_blank"><span inline-flex i-carbon-logo-github text-1xl></span>浪铭</a></div>
      <div flex items-center gap-1>
        <div inline-flex i-noto-v1-flag-for-flag-china hover:animate-bounce></div>
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">{{ blogInfo.siteRecord }}</a>
      </div>
      <div>
        <div text-rose-5 animate-bounce inline-flex i-dashicons-heart></div> 站点已运行：{{ state.duration }}
      </div>
    </div>
  </ClientOnly>
</template>
