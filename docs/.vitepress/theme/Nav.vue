<script setup lang="ts">
import { useData } from 'vitepress'

const { site, theme } = useData()
</script>

<template>
  <div class="window nav-bar">
    <div class="title-bar">
      <div class="title-bar-text">
        <a href="/" class="nav-title">{{ site.title }}</a>
      </div>
    </div>
    <div class="window-body nav-body">
      <div class="nav-links">
        <a v-for="item in theme.nav" :key="item.text" :href="item.link">
          <button class="nav-button">{{ item.text }}</button>
        </a>
        <span class="nav-separator">|</span>
        <a
          v-for="social in theme.socialLinks"
          :key="social.link"
          :href="social.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="nav-button">{{ social.icon }}</button>
        </a>
      </div>
    </div>
  </div>
</template>
