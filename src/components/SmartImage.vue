<template>
  <div :class="['smart-image-wrapper', wrapperClass]">
    <img
      v-if="src && !errored"
      :src="srcFull"
      :alt="alt || ''"
      :class="imgClass"
      @error="onError"
      @load="onLoad"
    />

    <div v-else class="placeholder" :class="placeholderClass">
      <div class="placeholder-icon">{{ icon }}</div>
      <div class="placeholder-text">
        <p v-if="title">{{ title }}</p>
        <small v-if="sizeLabel">{{ sizeLabel }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartImage',
  props: {
    src: { type: String, required: false },
    alt: { type: String, required: false },
    icon: { type: String, default: '🖼️' },
    title: { type: String, default: '' },
    sizeLabel: { type: String, default: '' },
    wrapperClass: { type: String, default: '' },
    imgClass: { type: String, default: '' },
    placeholderClass: { type: String, default: '' }
  },
  data() {
    return { errored: false, loaded: false }
  },
  computed: {
    srcFull() {
      if (!this.src) return null
      if (/^https?:\/\//.test(this.src)) return this.src
      // ensure leading slash so it points to public/
      return this.src.startsWith('/') ? this.src : `/${this.src}`
    }
  },
  methods: {
    onError() {
      this.errored = true
    },
    onLoad() {
      this.loaded = true
      this.errored = false
    }
  }
}
</script>

<style scoped>
.smart-image-wrapper {
  width: 100%;
  height: 100%;
  display: block;
}
.smart-image-wrapper img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}
.placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  color: var(--accent-pink);
}
.placeholder-icon { font-size: 2.6rem; }
.placeholder-text p { margin: 0; font-weight: 600 }
.placeholder-text small { color: var(--text-light) }
</style>