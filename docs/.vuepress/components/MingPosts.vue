<script setup>
import { postDataSource } from '../../config'
</script>

<template>
  <article class="ming-article">
    <div v-for="(postYearItem, index) in postDataSource.data">
      <ul>
        <div relative h20 pointer-events-none>
          <span text-blue text-8em op30 absolute left--3rem top--2rem font-bold>{{ postYearItem.year }}</span>
        </div>
        <RouterLink v-for="(post, _postIndex) in postYearItem.posts" :to="post.link"
          class="block font-normal mb-6 mt-2 no-underline" hover:op100>
          <li no-underline list-none>
            <div title text-lg leading-1.2em>
              <span align-middle>{{ post.text }}</span>
            </div>
            <div opacity-70 text-sm>
              {{ post.date }}
              <MingBadge v-for="(tag, _tagIndex) in post.tag" :type="tag.toLowerCase()" :text="tag" vertical="middle" />
            </div>
          </li>
        </RouterLink>
      </ul>
    </div>
  </article>
</template>

<style>
article.ming-article a {
  transition: .2s all ease-out;
  text-decoration: none;
  border-bottom: none !important;
  opacity: .7;
}

article.ming-article a:hover {
  text-decoration: none;
}
</style>
