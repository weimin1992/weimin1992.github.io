/*
 * @Author: weimin1992
 * @Email: weimin1992@outlook.com
 * @Date: 2023-01-03 10:11:33
 * @Last Modified by: weimin1992
 * @Last Modified time: 2023-01-04 16:08:18
 * @Description: 音乐播放器
 */
<script setup>
import ParentNavbarBrand from '@vuepress/theme-default/lib/client/components/NavbarBrand.vue'
import 'aplayer/dist/APlayer.min.css';
import { onUnmounted, onMounted, ref } from 'vue'
let audioRef = ref(null)

onMounted(() => {
  import('APlayer').then(module => {
    if (module.default) {
      audioRef = new module.default({
        container: document.getElementById('audio-container'),
        fixed: true,
        lrcType: 3,
        autoplay: true,
        theme: '#2496ed',
        audio: [{
          name: '我期待',
          artist: '张雨生',
          url: 'https://cdn.porridge.fun/blog/audio/%E5%BC%A0%E9%9B%A8%E7%94%9F%20-%20%E6%88%91%E6%9C%9F%E5%BE%85.mp3',
          cover: 'https://cdn.porridge.fun/blog/audio/%E5%BC%A0%E9%9B%A8%E7%94%9F%20-%20%E6%88%91%E6%9C%9F%E5%BE%85.jpg',
          lrc: 'https://cdn.porridge.fun/blog/audio/%E5%BC%A0%E9%9B%A8%E7%94%9F%20-%20%E6%88%91%E6%9C%9F%E5%BE%85.lrc'
        }]
      })
    }

  })


})

onUnmounted(() => {
  if (audioRef) {
    audioRef = null
  }
})

</script>

<template>
  <ParentNavbarBrand />
  <ClientOnly>
    <div id="audio-container">
    </div>
  </ClientOnly>
</template>
