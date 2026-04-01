<script setup lang="ts">
import { useData } from 'vitepress'

const { theme } = useData()
</script>

<template>
  <div class="window sidebar-window">
    <div class="title-bar">
      <div class="title-bar-text">Explorer</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close"></button>
      </div>
    </div>
    <div class="window-body">
      <ul class="tree-view">
        <li v-for="group in theme.sidebar" :key="group.text">
          <details open>
            <summary>{{ group.text }}</summary>
            <ul>
              <li v-for="item in group.items" :key="item.text">
                <a :href="item.link">{{ item.text }}</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
