/*
 * @Author: weimin1992
 * @Email: weimin1992@outlook.com
 * @Date: 2022-12-14 14:17:13
 * @Last Modified by: weimin1992
 * @Last Modified time: 2022-12-21 08:55:34
 * @Description: 非主页的全局Layout
 */

<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import CopyRight from '../components/CopyRight.vue'
import 'uno.css';
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div>
        <hr>
        <CopyRight />
      </div>
    </template>
  </ParentLayout>
</template>
