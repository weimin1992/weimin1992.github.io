/*
 * @Author: weimin1992
 * @Email: weimin1992@outlook.com
 * @Date: 2022-12-14 14:33:02
 * @Last Modified by: weimin1992
 * @Last Modified time: 2022-12-16 15:18:16
 * @Description: 版权信息
 */

<script setup>
import { blogInfo } from '../../config'
import { reactive, onUnmounted, onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

let timer = ref(null)
function getDurationStr() {
  // 计算间隔秒数
  const durationSeconds = dayjs(new Date()).diff(dayjs(blogInfo.siteStart), 'second')
  return dayjs.duration(durationSeconds, "seconds").format('Y年 M月 D日 H时 m分 ss秒')
}

const currentYear = new Date().getFullYear()
const startYear = new Date(blogInfo.siteStart).getFullYear()
const state = reactive({
  duration: getDurationStr()
})

onMounted(() => {
  timer = setInterval(() => {
    state.duration = getDurationStr()
  }, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>
<template>
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
</template>
