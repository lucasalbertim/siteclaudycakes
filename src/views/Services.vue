<template>
  <div class="services-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1 class="fade-in">Nossos Serviços</h1>
        <p class="fade-in">Transformamos seus sonhos em realidade doce com qualidade e dedicação</p>
      </div>
    </section>

    <!-- Serviços Principais -->
    <section class="main-services">
      <div class="container">
        <div class="service-detail fade-in-up">
          <div class="service-image">
            <SmartImage src="/service-wedding-cakes.jpg" alt="Bolos de Casamento" :icon="'💒'" title="Bolos de Casamento" sizeLabel="800x600px" wrapperClass="placeholder-service" placeholderClass="placeholder-service" />
          </div>
          <div class="service-content">
            <h2>Bolos de Casamento</h2>
            <p>
              Criamos bolos de casamento majestosos que se tornam o centro das atenções da sua 
              celebração. Cada camada é cuidadosamente planejada para harmonizar sabor, textura 
              e beleza visual.
            </p>
            <ul class="service-features">
              <li>Design personalizado exclusivo para o casal</li>
              <li>Variedade de sabores e recheios artesanais</li>
              <li>Decorações elaboradas com flores de açúcar</li>
              <li>Estruturas de múltiplas camadas</li>
              <li>Degustação prévia dos sabores</li>
              <li>Entrega e montagem no local</li>
            </ul>
          </div>
        </div>

        <div class="service-detail fade-in-up reverse">
          <div class="service-image">
            <SmartImage src="/service-sugar-flowers.jpg" alt="Flores de Açúcar" :icon="'🌸'" title="Flores de Açúcar" sizeLabel="800x600px" wrapperClass="placeholder-service" placeholderClass="placeholder-service" />
          </div>
          <div class="service-content">
            <h2>Flores de Açúcar Artesanais</h2>
            <p>
              Nossa especialidade mais refinada: flores de açúcar feitas completamente à mão, 
              pétala por pétala. Cada flor é uma obra de arte com realismo impressionante, 
              indistinguível das flores naturais.
            </p>
            <ul class="service-features">
              <li>Rosas, peônias, orquídeas, lírios e mais</li>
              <li>Flores tropicais e exóticas</li>
              <li>Bouquets e arranjos personalizados</li>
              <li>Cores customizadas para combinar com o tema</li>
              <li>Durabilidade e conservação garantida</li>
              <li>Perfeição em cada detalhe</li>
            </ul>
          </div>
        </div>

        <div class="service-detail fade-in-up">
          <div class="service-image">
            <SmartImage src="/service-custom-projects.jpg" alt="Projetos Personalizados" :icon="'🎨'" title="Projetos Personalizados" sizeLabel="800x600px" wrapperClass="placeholder-service" placeholderClass="placeholder-service" />
          </div>
          <div class="service-content">
            <h2>Projetos Personalizados</h2>
            <p>
              Desenvolvemos projetos exclusivos do zero, trabalhando em estreita colaboração 
              com você. Se você tem uma visão única ou um tema especial, transformamos sua 
              ideia em realidade.
            </p>
            <ul class="service-features">
              <li>Consultoria e desenvolvimento de conceito</li>
              <li>Sketches e apresentação visual do projeto</li>
              <li>Temas temáticos e personalizados</li>
              <li>Esculturas em açúcar e detalhes únicos</li>
              <li>Combinações exclusivas de sabores</li>
              <li>Acompanhamento em todas as etapas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Outros Serviços -->
    <section class="other-services">
      <div class="container">
        <h2 class="section-title">Outros <span class="highlight">Eventos Especiais</span></h2>
        <div class="services-grid">
          <div class="service-card card fade-in">
            <div class="card-icon">🎂</div>
            <h3>Aniversários</h3>
            <p>Bolos personalizados para celebrar momentos especiais de todas as idades.</p>
          </div>

          <div class="service-card card fade-in">
            <div class="card-icon">👶</div>
            <h3>Batizados</h3>
            <p>Bolos delicados e elegantes para celebrar esse momento sagrado.</p>
          </div>

          <div class="service-card card fade-in">
            <div class="card-icon">🎓</div>
            <h3>Formaturas</h3>
            <p>Bolos que celebram conquistas e novos começos com estilo.</p>
          </div>

          <div class="service-card card fade-in">
            <div class="card-icon">💍</div>
            <h3>Noivados</h3>
            <p>Bolos românticos para celebrar o início de uma nova jornada.</p>
          </div>

          <div class="service-card card fade-in">
            <div class="card-icon">🎉</div>
            <h3>Eventos Corporativos</h3>
            <p>Bolos sofisticados para eventos empresariais e celebrações corporativas.</p>
          </div>

          <div class="service-card card fade-in">
            <div class="card-icon">🌟</div>
            <h3>Ocasiões Especiais</h3>
            <p>Bolos personalizados para qualquer celebração que mereça ser memorável.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Processo -->
    <section class="process">
      <div class="container">
        <h2 class="section-title">Como <span class="highlight">Funciona</span></h2>
        <div class="process-steps">
          <div class="process-step fade-in-up">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Contato Inicial</h3>
              <p>Entre em contato conosco através do formulário, WhatsApp ou Instagram para agendar uma consulta.</p>
            </div>
          </div>

          <div class="process-step fade-in-up">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Consulta e Briefing</h3>
              <p>Conversamos sobre suas ideias, tema do evento, número de convidados e preferências de sabores.</p>
            </div>
          </div>

          <div class="process-step fade-in-up">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Proposta e Orçamento</h3>
              <p>Desenvolvemos uma proposta personalizada com sketches, descrição detalhada e orçamento.</p>
            </div>
          </div>

          <div class="process-step fade-in-up">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Degustação</h3>
              <p>Agendamos uma degustação para você experimentar os sabores e fazer suas escolhas.</p>
            </div>
          </div>

          <div class="process-step fade-in-up">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3>Criação</h3>
              <p>Iniciamos o processo de criação artesanal do seu bolo com extremo cuidado e atenção aos detalhes.</p>
            </div>
          </div>

          <div class="process-step fade-in-up">
            <div class="step-number">6</div>
            <div class="step-content">
              <h3>Entrega e Montagem</h3>
              <p>Entregamos e montamos o bolo no local do evento, garantindo perfeição até o último detalhe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content fade-in">
          <h2>Pronta para Criar seu Bolo dos Sonhos?</h2>
          <p>Entre em contato e vamos conversar sobre como transformar sua visão em realidade!</p>
          <div class="cta-buttons">
            <router-link to="/contato" class="btn btn-primary btn-large">Solicitar Orçamento</router-link>
            <router-link to="/portfolio" class="btn btn-secondary btn-large">Ver Portfólio</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SmartImage from '../components/SmartImage.vue'

export default {
  name: 'Services',
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

/* Main Services */
.main-services {
  padding: 100px 20px;
  background: var(--white);
}

.service-detail {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 60px;
  align-items: center;
  margin-bottom: 100px;
}

.service-detail:last-child {
  margin-bottom: 0;
}

.service-detail.reverse {
  direction: rtl;
}

.service-detail.reverse > * {
  direction: ltr;
}

.service-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
}

.placeholder-service {
  width: 100%;
  aspect-ratio: 4/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--light-pink), var(--secondary-pink));
  border-radius: 20px;
  gap: 15px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
}

.placeholder-service span {
  font-size: 5rem;
}

.placeholder-service p {
  color: var(--accent-pink);
  font-weight: 600;
  margin: 0;
  font-size: 1.2rem;
  text-align: center;
}

.placeholder-service small {
  color: var(--text-light);
  font-size: 0.85rem;
}

.service-content h2 {
  color: var(--accent-pink);
  margin-bottom: 20px;
}

.service-content p {
  margin-bottom: 25px;
  line-height: 1.8;
}

.service-features {
  list-style: none;
  padding: 0;
}

.service-features li {
  padding: 12px 0 12px 35px;
  position: relative;
  color: var(--text-light);
  line-height: 1.6;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-pink);
  font-weight: bold;
  font-size: 1.2rem;
}

/* Other Services */
.other-services {
  padding: 100px 20px;
  background: linear-gradient(135deg, var(--light-pink), var(--white));
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.service-card {
  text-align: center;
  padding: 40px 25px;
}

.card-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.service-card h3 {
  color: var(--accent-pink);
  margin-bottom: 15px;
}

/* Flavors Section */
.flavors {
  padding: 100px 20px;
  background: var(--white);
}

.section-subtitle {
  text-align: center;
  color: var(--text-light);
  font-size: 1.1rem;
  margin-bottom: 50px;
}

/* Process Section */
.process {
  padding: 100px 20px;
  background: linear-gradient(135deg, var(--light-pink), var(--secondary-pink));
}

.process-steps {
  max-width: 900px;
  margin: 0 auto;
}

.process-step {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  margin-bottom: 40px;
  align-items: start;
}

.process-step:last-child {
  margin-bottom: 0;
}

.step-number {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--accent-pink), var(--dark-pink));
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 700;
  flex-shrink: 0;
}

.step-content h3 {
  color: var(--accent-pink);
  margin-bottom: 10px;
}

.step-content p {
  color: var(--text-light);
  line-height: 1.7;
}

/* CTA Section */
.cta-section {
  padding: 100px 20px;
  background: var(--white);
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  color: var(--accent-pink);
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 35px;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-large {
  padding: 18px 50px;
  font-size: 1.1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .service-detail {
    gap: 40px;
    margin-bottom: 60px;
  }
  
  .service-detail.reverse {
    direction: ltr;
  }
  
  .process-step {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 15px;
  }
  
  .step-number {
    margin: 0 auto;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-large {
    width: 100%;
    max-width: 350px;
  }
}
</style>
