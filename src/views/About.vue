<template>
  <div class="about-page">
    <!-- Hero da Página Sobre -->
    <section class="page-hero">
      <div class="container">
        <h1 class="fade-in">Nossa História</h1>
        <p class="fade-in">Conheça a trajetória e paixão por trás da Claudycakes</p>
      </div>
    </section>

    <!-- História -->
    <section class="story">
      <div class="container">
        <div class="story-content">
          <div class="story-image fade-in">
            <SmartImage src="/confeiteira.jpg" alt="Foto da confeiteira" :icon="'👩‍🍳'" title="Foto da Confeiteira" sizeLabel="800x1000px" wrapperClass="placeholder-confeiteira" placeholderClass="placeholder-confeiteira" />
            <div class="quote-decoration">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="var(--accent-pink)">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>
          </div>
          
          <div class="story-text fade-in-up">
            <h2>A Arte de Transformar <span class="highlight">Sonhos em Bolos</span></h2>
            <div class="text-content">
              <!-- INSTRUÇÕES PARA O CLIENTE: 
                   Substitua este texto pela história real da confeitaria.
                   Conte sobre:
                   - Como começou a confeitaria
                   - A paixão por bolos de casamento
                   - A especialização em flores de açúcar
                   - Conquistas e marcos importantes
                   - O que te motiva no dia a dia
              -->
              <p>
                A Claudycakes nasceu de uma paixão que começou na infância, quando os primeiros bolos 
                eram feitos na cozinha de casa, com muito amor e dedicação. O que era um hobby se 
                transformou em uma verdadeira vocação ao perceber a alegria que cada criação trazia 
                para as pessoas.
              </p>
              <p>
                Ao longo dos anos, me especializei na arte da confeitaria fina, com foco especial em 
                bolos de casamento e na criação de flores de açúcar artesanais. Cada pétala, cada 
                detalhe, é trabalhado com extrema precisão e cuidado, buscando a perfeição que seu 
                momento especial merece.
              </p>
              <p>
                Hoje, a Claudycakes é reconhecida pela excelência em transformar sonhos em realidade 
                doce. Cada bolo conta uma história única, reflete a personalidade do casal e eterniza 
                momentos que ficarão para sempre na memória.
              </p>
              <p>
                Minha missão é criar muito mais do que bolos: é criar memórias inesquecíveis através 
                da arte da confeitaria.
              </p>
            </div>
            
            <div class="signature">
              <p class="signature-text">Com carinho,</p>
              <p class="signature-name">Claudy</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Valores -->
    <section class="values">
      <div class="container">
        <h2 class="section-title">Nossos <span class="highlight">Valores</span></h2>
        <div class="values-grid">
          <div class="value-card card fade-in">
            <div class="value-icon">💖</div>
            <h3>Paixão</h3>
            <p>Cada bolo é criado com amor e dedicação, como se fosse para nossa própria família.</p>
          </div>

          <div class="value-card card fade-in">
            <div class="value-icon">✨</div>
            <h3>Excelência</h3>
            <p>Buscamos a perfeição em cada detalhe, utilizando técnicas refinadas e ingredientes premium.</p>
          </div>

          <div class="value-card card fade-in">
            <div class="value-icon">🎨</div>
            <h3>Criatividade</h3>
            <p>Transformamos ideias em arte comestível, criando peças únicas e personalizadas.</p>
          </div>

          <div class="value-card card fade-in">
            <div class="value-icon">🤝</div>
            <h3>Compromisso</h3>
            <p>Seu sonho é nossa responsabilidade. Garantimos qualidade e pontualidade em cada entrega.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Especialidades -->
    <section class="specialties">
      <div class="container">
        <h2 class="section-title">Nossas <span class="highlight">Especialidades</span></h2>
        <div class="specialties-content">
          <div class="specialty-item fade-in-up">
            <div class="specialty-number">01</div>
            <h3>Bolos de Casamento</h3>
            <p>
              Criamos bolos majestosos que se tornam o centro das atenções. Cada camada é 
              pensada para harmonizar sabor, textura e beleza visual, refletindo o estilo 
              e personalidade do casal.
            </p>
          </div>

          <div class="specialty-item fade-in-up">
            <div class="specialty-number">02</div>
            <h3>Flores de Açúcar Artesanais</h3>
            <p>
              Nossa especialidade mais refinada: flores de açúcar feitas à mão, pétala por 
              pétala, com realismo impressionante. De rosas a orquídeas, cada flor é uma 
              obra de arte que encanta pela perfeição dos detalhes.
            </p>
          </div>

          <div class="specialty-item fade-in-up">
            <div class="specialty-number">03</div>
            <h3>Projetos Personalizados</h3>
            <p>
              Desenvolvemos projetos exclusivos do zero, trabalhando em conjunto com você 
              para criar algo verdadeiramente único. Desde o design até a execução, cada 
              etapa é pensada para superar expectativas.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Números -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item fade-in">
            <div class="stat-number">1000+</div>
            <div class="stat-label">Bolos Criados</div>
          </div>
          <div class="stat-item fade-in">
            <div class="stat-number">200+</div>
            <div class="stat-label">Casamentos Realizados</div>
          </div>
          <div class="stat-item fade-in">
            <div class="stat-number">2000+</div>
            <div class="stat-label">Flores Artesanais</div>
          </div>
          <div class="stat-item fade-in">
            <div class="stat-number">100%</div>
            <div class="stat-label">Clientes Satisfeitos</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content fade-in">
          <h2>Vamos Criar Algo Especial Juntas?</h2>
          <p>Entre em contato e vamos conversar sobre o bolo dos seus sonhos!</p>
          <router-link to="/contato" class="btn btn-primary btn-large">Solicitar Orçamento</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SmartImage from '../components/SmartImage.vue'

export default {
  name: 'About',
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

/* Story Section */
.story {
  padding: 100px 20px;
  background: var(--white);
}

.story-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 60px;
  align-items: center;
}

.story-image {
  position: relative;
}

.story-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
}

.placeholder-confeiteira {
  width: 100%;
  aspect-ratio: 4/5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--light-pink), var(--secondary-pink));
  border-radius: 20px;
  gap: 15px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
}

.placeholder-confeiteira span {
  font-size: 6rem;
}

.placeholder-confeiteira p {
  color: var(--accent-pink);
  font-weight: 600;
  margin: 0;
  font-size: 1.3rem;
}

.placeholder-confeiteira small {
  color: var(--text-light);
  font-size: 0.9rem;
}

.quote-decoration {
  position: absolute;
  top: -20px;
  left: -20px;
  background: var(--white);
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(212, 115, 155, 0.2);
}

.story-text h2 {
  margin-bottom: 30px;
}

.text-content p {
  margin-bottom: 20px;
  line-height: 1.9;
  text-align: justify;
}

.signature {
  margin-top: 40px;
  font-family: var(--font-heading);
}

.signature-text {
  color: var(--text-light);
  font-size: 1rem;
  margin-bottom: 5px;
}

.signature-name {
  font-size: 2rem;
  color: var(--accent-pink);
  font-style: italic;
}

/* Values Section */
.values {
  padding: 100px 20px;
  background: linear-gradient(135deg, var(--light-pink), var(--white));
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.value-card {
  text-align: center;
  padding: 40px 25px;
}

.value-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.value-card h3 {
  color: var(--accent-pink);
  margin-bottom: 15px;
}

/* Specialties Section */
.specialties {
  padding: 100px 20px;
  background: var(--white);
}

.specialties-content {
  max-width: 900px;
  margin: 0 auto;
}

.specialty-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  margin-bottom: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid var(--secondary-pink);
}

.specialty-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.specialty-number {
  font-family: var(--font-heading);
  font-size: 4rem;
  font-weight: 700;
  color: var(--secondary-pink);
  line-height: 1;
}

.specialty-item h3 {
  color: var(--accent-pink);
  margin-bottom: 15px;
}

.specialty-item p {
  line-height: 1.8;
}

/* Stats Section */
.stats {
  padding: 80px 20px;
  background: linear-gradient(135deg, var(--accent-pink), var(--dark-pink));
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--white);
  margin-bottom: 10px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  font-weight: 500;
}

/* CTA Section */
.cta-section {
  padding: 100px 20px;
  background: var(--white);
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  color: var(--accent-pink);
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.btn-large {
  padding: 18px 50px;
  font-size: 1.1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .story-content {
    gap: 40px;
  }
  
  .specialty-item {
    grid-template-columns: 1fr;
    gap: 15px;
    text-align: center;
  }
  
  .specialty-number {
    font-size: 3rem;
  }
  
  .quote-decoration {
    display: none;
  }
}
</style>
