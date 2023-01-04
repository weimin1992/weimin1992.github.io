import { defineClientConfig } from '@vuepress/client'
import Layout from './layouts/Layout.vue'
import 'APlayer/dist/APlayer.min.css';

export default defineClientConfig({
  // enhance({ app, router, siteData }) {},
  // setup() {},
  // rootComponents: [],
  layouts: {
    Layout
  },
})
