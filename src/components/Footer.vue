<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Logo e Descrição -->
        <div class="footer-section">
          <div class="footer-logo">
            <SmartImage src="/logo.png" alt="Claudycakes logo" :icon="'🎂'" wrapperClass="footer-logo-placeholder" imgClass="footer-logo-img" placeholderClass="footer-logo-placeholder" />
            <h3>Claudycakes</h3>
          </div>
          <p class="footer-description">
            Especialistas em bolos de casamento e flores de açúcar artesanais.
            Transformamos sonhos em realidade através da arte da confeitaria.
          </p>
          <div class="social-links">
            <a href="https://www.instagram.com/claudycakes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://wa.me/5581997895740" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Links Rápidos -->
        <div class="footer-section">
          <h4>Menu</h4>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/sobre">Sobre</router-link></li>
            <li><router-link to="/servicos">Serviços</router-link></li>
            <li><router-link to="/portfolio">Portfólio</router-link></li>
            <li><router-link to="/contato">Contato</router-link></li>
          </ul>
        </div>

        <!-- Contato -->
        <div class="footer-section">
          <h4>Contato</h4>
          <ul class="footer-contact">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a href="https://wa.me/5581997895740">(81) 99789-5740</a>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Igarassu - PE</span>
            </li>
          </ul>
        </div>

        <!-- Horário -->
        <div class="footer-section">
          <h4>Horário de Atendimento</h4>
          <ul class="footer-schedule">
            <li>Segunda - Sexta: 9h às 18h</li>
            <li>Sábado: 9h às 14h</li>
            <li>Domingo: Fechado</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Claudycakes. Todos os direitos reservados.</p>
        <p class="developer">Desenvolvido por <a href="https://albertimtechsolution.com" target="_blank" rel="noopener noreferrer">Albertim Tech Solution</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
import SmartImage from './SmartImage.vue'

export default {
  name: 'Footer',
  components: { SmartImage },
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, var(--light-pink), var(--secondary-pink));
  padding: 60px 20px 20px;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3,
.footer-section h4 {
  color: var(--dark-pink);
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.footer-logo-img {
  height: 40px;
  width: auto;
}

.footer-logo-placeholder {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: linear-gradient(135deg, var(--accent-pink), var(--dark-pink));
  border-radius: 8px;
}

.footer-description {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  border-radius: 50%;
  color: var(--accent-pink);
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: var(--accent-pink);
  color: var(--white);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(212, 115, 155, 0.3);
}

.footer-links,
.footer-contact,
.footer-schedule {
  list-style: none;
  padding: 0;
}

.footer-links li,
.footer-contact li,
.footer-schedule li {
  margin-bottom: 12px;
}

.footer-links a,
.footer-contact a {
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.footer-links a:hover,
.footer-contact a:hover {
  color: var(--accent-pink);
  padding-left: 5px;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-light);
  font-size: 0.95rem;
}

.footer-contact svg {
  color: var(--accent-pink);
  flex-shrink: 0;
}

.footer-schedule li {
  color: var(--text-light);
  font-size: 0.95rem;
}

.footer-bottom {
  border-top: 1px solid rgba(212, 115, 155, 0.2);
  padding-top: 25px;
  text-align: center;
}

.footer-bottom p {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.developer a {
  color: var(--accent-pink);
  text-decoration: none;
  font-weight: 500;
}

.developer a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .footer {
    padding: 40px 15px 15px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
