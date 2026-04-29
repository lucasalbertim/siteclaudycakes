<template>
  <div class="portfolio-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1 class="fade-in">Portfólio</h1>
        <p class="fade-in">Conheça nossos trabalhos e se inspire para seu próximo evento</p>
      </div>
    </section>

    <!-- Instagram Feed -->
    <section class="instagram-section">
      <div class="container">
        <h2 class="section-title">Nossos <span class="highlight">Trabalhos</span></h2>


        <!-- CTA Instagram -->
        <div class="instagram-cta-box fade-in">
          <div class="instagram-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
          
          <h3>Veja Nosso Portfólio Completo no Instagram</h3>
          <p class="cta-description">
            Todos os nossos trabalhos estão no Instagram! Lá você encontra fotos de bolos de casamento, 
            flores de açúcar, bastidores da confeitaria e muito mais. São centenas de fotos para você 
            se inspirar e conhecer melhor nosso trabalho.
          </p>

          <div class="instagram-features">
            <div class="feature-item">
              <span class="feature-icon">📸</span>
              <span>Fotos de todos os trabalhos</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🎥</span>
              <span>Vídeos e bastidores</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">💬</span>
              <span>Depoimentos de clientes</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">✨</span>
              <span>Novidades em primeira mão</span>
            </div>
          </div>

          <a 
            href="https://www.instagram.com/claudycakes/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn btn-primary btn-large btn-instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Ver Portfólio no Instagram @claudycakes
          </a>

          <p class="follow-note">Siga-nos para não perder nenhuma novidade!</p>
        </div>
      </div>
    </section>

    <!-- Depoimentos -->
    <section class="testimonials">
      <div class="container">
        <h2 class="section-title">O que Dizem <span class="highlight">Nossos Clientes</span></h2>
        <div class="testimonials-grid">
          <div class="testimonial-card fade-in">
            <div class="quote-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="var(--accent-pink)">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>
            <p class="testimonial-text">
              "O bolo do nosso casamento foi simplesmente perfeito! As flores de açúcar eram tão 
              realistas que os convidados não acreditavam que eram comestíveis. Além da beleza, 
              o sabor estava divino. Muito obrigada por tornar nosso dia ainda mais especial!"
            </p>
            <div class="testimonial-author">
              <strong>Juliana & Carlos</strong>
              <span>Casamento - Dezembro 2024</span>
            </div>
            <div class="stars">★★★★★</div>
          </div>

          <div class="testimonial-card fade-in">
            <div class="quote-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="var(--accent-pink)">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>
            <p class="testimonial-text">
              "Contratei a Claudycakes para o aniversário de 15 anos da minha filha e superou 
              todas as expectativas. O bolo foi a atração da festa! O cuidado com os detalhes 
              e o profissionalismo são impecáveis. Super recomendo!"
            </p>
            <div class="testimonial-author">
              <strong>Mariana Silva</strong>
              <span>Aniversário de 15 Anos - Outubro 2024</span>
            </div>
            <div class="stars">★★★★★</div>
          </div>

          <div class="testimonial-card fade-in">
            <div class="quote-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="var(--accent-pink)">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>
            <p class="testimonial-text">
              "Trabalho incrível! Queríamos algo único e personalizado para nosso casamento, 
              e a Claudia conseguiu captar exatamente nossa visão. As flores de açúcar eram 
              verdadeiras obras de arte. Vale cada centavo!"
            </p>
            <div class="testimonial-author">
              <strong>Fernanda & Ricardo</strong>
              <span>Casamento - Setembro 2024</span>
            </div>
            <div class="stars">★★★★★</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content fade-in">
          <h2>Gostou do Que Viu?</h2>
          <p>Vamos criar algo especial para você também!</p>
          <router-link to="/contato" class="btn btn-primary btn-large">Solicitar Orçamento</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SmartImage from '../components/SmartImage.vue'

export default {
  name: 'Portfolio',
  components: { SmartImage }
}
</script>

<style scoped>
/* Page Hero */
.page-hero {
  padding: 150px 20px 80px;
  background: linear-gradient(135deg, var(--light-pink), var(--secondary-pink));
  text-align: center;
}

.page-hero h1 {
  color: var(--accent-pink);
  margin-bottom: 15px;
}

.page-hero p {
  font-size: 1.2rem;
  color: var(--text-light);
}

/* Instagram Section */
.instagram-section {
  padding: 100px 20px;
  background: var(--white);
}

.instagram-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-light);
  margin-bottom: 50px;
}

.instagram-subtitle a {
  color: var(--accent-pink);
  text-decoration: none;
  font-weight: 600;
}

.instagram-subtitle a:hover {
  text-decoration: underline;
}

/* Instagram CTA Box */
.instagram-cta-box {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(135deg, var(--light-pink), var(--secondary-pink));
  padding: 80px 50px;
  border-radius: 25px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.instagram-icon {
  margin-bottom: 30px;
}

.instagram-icon svg {
  color: var(--accent-pink);
  filter: drop-shadow(0 4px 8px rgba(212, 115, 155, 0.3));
}

.instagram-cta-box h3 {
  color: var(--accent-pink);
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: var(--font-heading);
}

.cta-description {
  color: var(--text-dark);
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.instagram-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 45px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--white);
  padding: 15px 20px;
  border-radius: 12px;
  font-weight: 500;
  color: var(--text-dark);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.feature-icon {
  font-size: 1.5rem;
}

.btn-instagram {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 20px 45px;
  font-size: 1.15rem;
  font-weight: 600;
  background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 20px;
}

.btn-instagram:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(131, 58, 180, 0.4);
}

.follow-note {
  color: var(--text-light);
  font-size: 0.95rem;
  font-style: italic;
  margin: 0;
}

/* Categories Section */
.categories {
  padding: 100px 20px;
  background: linear-gradient(135deg, var(--white), var(--light-pink));
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.category-card {
  text-align: center;
  padding: 0;
  overflow: hidden;
}

.category-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.placeholder-category {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--light-pink), var(--secondary-pink));
  gap: 15px;
}

.placeholder-category span {
  font-size: 4rem;
}

.placeholder-category p {
  color: var(--accent-pink);
  font-weight: 600;
  margin: 0;
  padding: 0;
}

.category-card:hover .category-image img {
  transform: scale(1.1);
}

.category-card h3 {
  color: var(--accent-pink);
  margin: 25px 0 10px;
  padding: 0 20px;
}

.category-card p {
  padding: 0 20px;
  margin-bottom: 15px;
}

.category-count {
  background: var(--secondary-pink);
  color: var(--accent-pink);
  padding: 8px 20px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 15px;
}

/* Testimonials */
.testimonials {
  padding: 100px 20px;
  background: var(--white);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.testimonial-card {
  background: linear-gradient(135deg, var(--light-pink), var(--secondary-pink));
  padding: 40px 30px;
  border-radius: 15px;
  position: relative;
}

.quote-icon {
  margin-bottom: 20px;
}

.testimonial-text {
  color: var(--text-dark);
  font-style: italic;
  line-height: 1.8;
  margin-bottom: 25px;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 15px;
}

.testimonial-author strong {
  color: var(--accent-pink);
  font-size: 1.1rem;
}

.testimonial-author span {
  color: var(--text-light);
  font-size: 0.9rem;
}

.stars {
  color: var(--gold);
  font-size: 1.2rem;
  letter-spacing: 2px;
}

/* CTA Section */
.cta-section {
  padding: 100px 20px;
  background: linear-gradient(135deg, var(--accent-pink), var(--dark-pink));
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  color: var(--white);
  margin-bottom: 20px;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.btn-large {
  padding: 18px 50px;
  font-size: 1.1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .instagram-cta-box {
    padding: 60px 30px;
  }

  .instagram-cta-box h3 {
    font-size: 1.6rem;
  }

  .instagram-features {
    grid-template-columns: 1fr;
  }

  .btn-instagram {
    padding: 18px 30px;
    font-size: 1rem;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
