<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'
import Nav from './Nav.vue'
import Sidebar from './Sidebar.vue'

const { page, frontmatter, site } = useData()
const route = useRoute()

const isHome = computed(() => frontmatter.value.layout === 'home')
</script>

<template>
  <div class="desktop">
    <!-- Taskbar at top -->
    <Nav />

    <div class="desktop-content">
      <!-- Sidebar window -->
      <Sidebar />

      <!-- Main content window -->
      <div class="window main-window">
        <div class="title-bar">
          <div class="title-bar-text">{{ page.title || site.title }}</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div class="window-body">
          <div v-if="isHome" class="home-content">
            <h1>{{ site.title }}</h1>
            <p class="home-tagline">{{ site.description }}</p>
            <hr />
            <div v-if="frontmatter.hero">
              <p>{{ frontmatter.hero.tagline }}</p>
              <div class="home-actions">
                <a
                  v-for="action in frontmatter.hero.actions"
                  :key="action.text"
                  :href="action.link"
                >
                  <button>{{ action.text }}</button>
                </a>
              </div>
            </div>
            <div v-if="frontmatter.features" class="home-features">
              <fieldset v-for="feature in frontmatter.features" :key="feature.title">
                <legend>{{ feature.title }}</legend>
                <p>{{ feature.details }}</p>
              </fieldset>
            </div>
          </div>
          <div v-else class="page-content">
            <Content />
          </div>
        </div>
      </div>
    </div>

    <!-- Taskbar at bottom -->
    <div class="taskbar">
      <div class="taskbar-start">
        <button class="start-button">
          <img src="https://win98icons.alexmeub.com/icons/png/windows-0.png" alt="" width="16" height="16" />
          <span>Start</span>
        </button>
      </div>
      <div class="taskbar-tray">
        <span class="tray-clock">{{ new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</span>
      </div>
    </div>
  </div>
</template>
