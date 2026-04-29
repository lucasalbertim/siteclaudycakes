<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="navbar-content">
        <router-link to="/" class="logo">
          <SmartImage src="/logo.png" alt="Claudycakes logo" :icon="'🎂'" wrapperClass="logo-placeholder" imgClass="logo-img" placeholderClass="logo-placeholder" />
          <span class="logo-text">Claudycakes</span>
        </router-link>
        
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul class="nav-menu" :class="{ active: menuOpen }">
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/sobre" @click="closeMenu">Sobre</router-link></li>
          <li><router-link to="/servicos" @click="closeMenu">Serviços</router-link></li>
          <li><router-link to="/portfolio" @click="closeMenu">Portfólio</router-link></li>
          <li><router-link to="/contato" @click="closeMenu" class="btn-nav">Contato</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import SmartImage from './SmartImage.vue'

export default {
  name: 'Navbar',
  components: { SmartImage },
  data() {
    return {
      isScrolled: false,
      menuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 20px 0;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.navbar.scrolled {
  padding: 15px 0;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 15px;
}

.logo-img {
  height: 50px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo-placeholder {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: linear-gradient(135deg, var(--accent-pink), var(--dark-pink));
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.logo:hover .logo-img,
.logo:hover .logo-placeholder {
  transform: scale(1.05);
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--accent-pink), var(--dark-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--accent-pink);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 35px;
  align-items: center;
  margin: 0;
}

.nav-menu a {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav-menu a:not(.btn-nav)::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-pink);
  transition: width 0.3s ease;
}

.nav-menu a:not(.btn-nav):hover::after,
.nav-menu a:not(.btn-nav).router-link-active::after {
  width: 100%;
}

.nav-menu a:hover {
  color: var(--accent-pink);
}

.btn-nav {
  background: linear-gradient(135deg, var(--accent-pink), var(--dark-pink));
  color: var(--white) !important;
  padding: 10px 25px;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.btn-nav:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(212, 115, 155, 0.3);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
    z-index: 1001;
  }
  
  .menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
  }
  
  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background: var(--white);
    flex-direction: column;
    padding: 100px 30px 30px;
    gap: 25px;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    align-items: flex-start;
  }
  
  .nav-menu.active {
    right: 0;
  }
  
  .logo-text {
    font-size: 1.5rem;
  }
  
  .logo-img {
    height: 40px;
  }
}
</style>
