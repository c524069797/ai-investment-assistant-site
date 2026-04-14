<template>
  <div class="giscus-wrap">
    <div ref="container"></div>
  </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const container = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (!container.value) return
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.setAttribute('data-repo', 'c524069797/ai-investment-assistant-site')
  script.setAttribute('data-repo-id', '') // optional
  script.setAttribute('data-category', 'General')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')

  container.value.appendChild(script)
})
</script>

<style scoped>
.giscus-wrap {
  min-height: 200px;
}
</style>

