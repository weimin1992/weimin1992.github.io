/*
 * @Author: weimin1992
 * @Email: weimin1992@outlook.com
 * @Date: 2023-01-03 10:11:33
 * @Last Modified by: weimin1992
 * @Last Modified time: 2023-01-04 16:14:27
 * @Description: 音乐播放器
 */
<script setup>
import ParentNavbarBrand from '@vuepress/theme-default/lib/client/components/NavbarBrand.vue'
import 'aplayer/dist/APlayer.min.css';
import { onUnmounted, onMounted, ref } from 'vue'
let audioRef = ref(null)

onMounted(() => {
  import('aplayer').then(module => {
    if (module.default) {
      audioRef = new module.default({
        container: document.getElementById('audio-container'),
        fixed: true,
        lrcType: 3,
        autoplay: false,
        theme: '#2496ed',
        audio: [{
          name: '你笑着流出了泪',
          artist: '尹吾',
          url: 'https://cdn.porridge.fun/blog/audio/%E5%B0%B9%E5%90%BE%20-%20%E4%BD%A0%E7%AC%91%E7%9D%80%E6%B5%81%E5%87%BA%E4%BA%86%E6%B3%AA.mp3',
          cover: 'https://cdn.porridge.fun/blog/audio/%E5%B0%B9%E5%90%BE%20-%20%E4%BD%A0%E7%AC%91%E7%9D%80%E6%B5%81%E5%87%BA%E4%BA%86%E6%B3%AA.jpg',
          lrc: 'https://cdn.porridge.fun/blog/audio/%E5%B0%B9%E5%90%BE%20-%20%E4%BD%A0%E7%AC%91%E7%9D%80%E6%B5%81%E5%87%BA%E4%BA%86%E6%B3%AA.lrc'
        }, {
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
  <div id="audio-container" />
</template>
