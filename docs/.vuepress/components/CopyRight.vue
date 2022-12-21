/*
 * @Author: weimin1992
 * @Email: weimin1992@outlook.com
 * @Date: 2022-12-14 14:33:02
 * @Last Modified by: weimin1992
 * @Last Modified time: 2022-12-21 08:56:10
 * @Description: 版权信息
 */

<script setup>
import { blogInfo } from '../../config'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)
const currentYear = new Date().getFullYear()
const startYear = new Date(blogInfo.siteStart).getFullYear()
</script>
<template>
  <div p-5 flex-col gap-1 flex justify-center items-center text-center dark:text-theme-dark>
    <div>Copyright &copy; {{ `${startYear}~${currentYear}` }} <a href="https://github.com/weimin1992"
        target="_blank"><span inline-flex i-carbon-logo-github text-1xl></span>浪铭</a></div>
  </div>
</template>
