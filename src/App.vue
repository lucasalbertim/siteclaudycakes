<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    WhatsAppButton
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
