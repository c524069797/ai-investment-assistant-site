<template>
  <ClientOnly>
    <div class="comment-wrap">
      <div ref="el" class="waline" />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { WalineInstance } from '@waline/client'

const el = ref<HTMLDivElement | null>(null)
let waline: WalineInstance | null = null

onMounted(async () => {
  // dynamic import to avoid SSR issues
  const { init } = await import('@waline/client')
  if (!el.value) return
  // NOTE: replace serverURL with your own deployed Waline server for production
  waline = init({
    el: el.value,
    serverURL: 'https://waline.vercel.app',
    lang: 'zh-CN',
    reaction: true,
    dark: 'html[class~="dark"]',
    requiredMeta: [], // allow guest comments without email/website
    comment: true,
  })
})

onBeforeUnmount(() => {
  waline && waline.destroy?.()
  waline = null
})
</script>

<style scoped>
.comment-wrap {
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(91,233,255,0.12);
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
}
</style>

