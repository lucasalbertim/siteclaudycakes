<template>
  <div class="contact-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1 class="fade-in">Entre em Contato</h1>
        <p class="fade-in">Vamos conversar sobre o bolo dos seus sonhos!</p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Formulário -->
          <div class="contact-form-section fade-in-up">
            <h2>Solicite seu <span class="highlight">Orçamento</span></h2>
            <p class="form-description">
              Preencha o formulário abaixo com os detalhes do seu evento e entraremos em contato em breve!
            </p>

            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Nome Completo *</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="formData.name" 
                    required
                    placeholder="Seu nome"
                  >
                </div>

                <div class="form-group">
                  <label for="phone">WhatsApp *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="formData.phone" 
                    required
                    placeholder="(00) 00000-0000"
                  >
                </div>
              </div>

              <div class="form-group">
                <label for="email">E-mail *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  required
                  placeholder="seu@email.com"
                >
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="eventType">Tipo de Evento *</label>
                  <select id="eventType" v-model="formData.eventType" required>
                    <option value="">Selecione...</option>
                    <option value="casamento">Casamento</option>
                    <option value="aniversario">Aniversário</option>
                    <option value="batizado">Batizado</option>
                    <option value="formatura">Formatura</option>
                    <option value="noivado">Noivado</option>
                    <option value="corporativo">Evento Corporativo</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="eventDate">Data do Evento *</label>
                  <input 
                    type="date" 
                    id="eventDate" 
                    v-model="formData.eventDate" 
                    required
                    :min="minDate"
                  >
                </div>
              </div>

              <div class="form-group">
                <label for="guests">Número de Convidados *</label>
                <input 
                  type="number" 
                  id="guests" 
                  v-model="formData.guests" 
                  required
                  placeholder="Ex: 100"
                  min="1"
                >
              </div>

              <div class="form-group">
                <label>
                  <input 
                    type="checkbox" 
                    v-model="formData.needSugarFlowers"
                    class="checkbox"
                  >
                  Desejo flores de açúcar artesanais
                </label>
              </div>

              <div class="form-group">
                <label for="message">Descreva sua Ideia *</label>
                <textarea 
                  id="message" 
                  v-model="formData.message" 
                  required
                  rows="6"
                  placeholder="Conte-nos sobre sua visão para o bolo, cores, tema, sabores preferidos e qualquer detalhe que considere importante..."
                ></textarea>
              </div>

              <div class="form-group">
                <label>
                  <input 
                    type="checkbox" 
                    v-model="formData.agreedToTerms"
                    required
                    class="checkbox"
                  >
                  Concordo em receber contato por WhatsApp e e-mail *
                </label>
              </div>

              <button type="submit" class="btn btn-primary btn-submit" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Enviar Solicitação</span>
                <span v-else>Enviando...</span>
              </button>

              <div v-if="submitMessage" class="submit-message" :class="submitStatus">
                {{ submitMessage }}
              </div>
            </form>
          </div>

          <!-- Informações de Contato -->
          <div class="contact-info-section fade-in">
            <div class="info-card">
              <h3>Outras Formas de Contato</h3>
              
              <div class="info-item">
                <div class="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <div class="info-content">
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/5581997895740" target="_blank">(81) 99789-5740</a>
                  <p>Resposta rápida e atendimento personalizado</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div class="info-content">
                  <h4>Instagram</h4>
                  <a href="https://www.instagram.com/claudycakes/" target="_blank">@claudycakes</a>
                  <p>Veja nossos trabalhos e envie mensagem direto</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div class="info-content">
                  <h4>Localização</h4>
                  <p>Igarassu - PE</p>
                  <p class="small">Atendemos toda a região metropolitana</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div class="info-content">
                  <h4>Horário de Atendimento</h4>
                  <p>Segunda - Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 14h</p>
                  <p class="small">Domingo: Fechado</p>
                </div>
              </div>
            </div>

            <div class="cta-whatsapp">
              <h4>Prefere falar agora?</h4>
              <p>Clique no botão abaixo para iniciar uma conversa no WhatsApp</p>
              <a 
                href="https://wa.me/5581997895740?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20de%20bolo." 
                target="_blank"
                class="btn btn-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">Perguntas <span class="highlight">Frequentes</span></h2>
        <div class="faq-grid">
          <div class="faq-item fade-in">
            <h3>Qual a antecedência mínima para encomendar?</h3>
            <p>
              Para bolos de casamento e projetos personalizados com flores de açúcar, recomendamos 
              pelo menos 3 meses de antecedência. Para outros eventos, 2-3 semanas é o ideal.
            </p>
          </div>

          <div class="faq-item fade-in">
            <h3>Vocês entregam em toda região metropolitana?</h3>
            <p>
              Sim! Realizamos entregas em Igarassu e região metropolitana do Recife. A entrega e montagem 
              no local estão incluídas no orçamento.
            </p>
          </div>

          <div class="faq-item fade-in">
            <h3>Posso fazer degustação dos sabores?</h3>
            <p>
              Com certeza! Após o orçamento inicial, agendamos uma degustação para você 
              experimentar nossos sabores e fazer suas escolhas.
            </p>
          </div>

          <div class="faq-item fade-in">
            <h3>As flores de açúcar são comestíveis?</h3>
            <p>
              Sim! Nossas flores são feitas 100% de açúcar e são completamente comestíveis, 
              além de lindas e realistas.
            </p>
          </div>

          <div class="faq-item fade-in">
            <h3>Como funciona o pagamento?</h3>
            <p>
              Trabalhamos com sinal de 50% na confirmação do pedido e os 50% restantes 
              na data da entrega. Aceitamos PIX, transferência e dinheiro.
            </p>
          </div>

          <div class="faq-item fade-in">
            <h3>Vocês fazem bolos para pessoas com restrições alimentares?</h3>
            <p>
              Sim! Fazemos bolos sem glúten, sem lactose e veganos. Consulte-nos sobre 
              suas necessidades específicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        email: '',
        eventType: '',
        eventDate: '',
        guests: '',
        needSugarFlowers: false,
        message: '',
        agreedToTerms: false
      },
      isSubmitting: false,
      submitMessage: '',
      submitStatus: '',
      minDate: ''
    }
  },
  mounted() {
    // Set minimum date to tomorrow
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    this.minDate = tomorrow.toISOString().split('T')[0]
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true
      this.submitMessage = ''
      
      // Preparar mensagem para WhatsApp
      const whatsappMessage = this.createWhatsAppMessage()
      const whatsappUrl = `https://wa.me/5581997895740?text=${encodeURIComponent(whatsappMessage)}`
      
      // Simular envio (aqui você pode integrar com um backend real)
      setTimeout(() => {
        this.isSubmitting = false
        this.submitMessage = 'Solicitação enviada! Redirecionando para o WhatsApp...'
        this.submitStatus = 'success'
        
        // Redirecionar para WhatsApp
        setTimeout(() => {
          window.open(whatsappUrl, '_blank')
          this.resetForm()
        }, 1500)
      }, 1000)
    },
    
    createWhatsAppMessage() {
      const eventDate = new Date(this.formData.eventDate).toLocaleDateString('pt-BR')
      
      let message = `🎂 *Solicitação de Orçamento - Claudycakes*\n\n`
      message += `👤 *Nome:* ${this.formData.name}\n`
      message += `📱 *Telefone:* ${this.formData.phone}\n`
      message += `📧 *E-mail:* ${this.formData.email}\n\n`
      message += `🎉 *Tipo de Evento:* ${this.getEventTypeLabel(this.formData.eventType)}\n`
      message += `📅 *Data do Evento:* ${eventDate}\n`
      message += `👥 *Número de Convidados:* ${this.formData.guests}\n`
      
      if (this.formData.needSugarFlowers) {
        message += `🌸 *Flores de Açúcar:* Sim, desejo flores artesanais\n`
      }
      
      message += `\n📝 *Descrição:*\n${this.formData.message}`
      
      return message
    },
    
    getEventTypeLabel(type) {
      const types = {
        'casamento': 'Casamento',
        'aniversario': 'Aniversário',
        'batizado': 'Batizado',
        'formatura': 'Formatura',
        'noivado': 'Noivado',
        'corporativo': 'Evento Corporativo',
        'outro': 'Outro'
      }
      return types[type] || type
    },
    
    resetForm() {
      this.formData = {
        name: '',
        phone: '',
        email: '',
        eventType: '',
        eventDate: '',
        guests: '',
        needSugarFlowers: false,
        message: '',
        agreedToTerms: false
      }
      this.submitMessage = ''
      this.submitStatus = ''
    }
  }
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

/* Contact Content */
.contact-content {
  padding: 100px 20px;
  background: var(--white);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 60px;
  max-width: 1400px;
  margin: 0 auto;
}

.form-description {
  color: var(--text-light);
  margin-bottom: 30px;
  line-height: 1.7;
}

/* Contact Form */
.contact-form {
  background: var(--light-pink);
  padding: 40px;
  border-radius: 15px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  color: var(--text-dark);
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="tel"],
.form-group input[type="date"],
.form-group input[type="number"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid var(--secondary-pink);
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background: var(--white);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-pink);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.checkbox {
  width: auto !important;
  margin-right: 10px;
  cursor: pointer;
}

.form-group label:has(.checkbox) {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
}

.btn-submit {
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
  margin-top: 10px;
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
}

.submit-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

/* Contact Info */
.info-card {
  background: linear-gradient(135deg, var(--light-pink), var(--secondary-pink));
  padding: 40px 30px;
  border-radius: 15px;
  margin-bottom: 30px;
}

.info-card h3 {
  color: var(--accent-pink);
  margin-bottom: 30px;
  font-size: 1.5rem;
}

.info-item {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(212, 115, 155, 0.2);
}

.info-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.info-icon {
  width: 50px;
  height: 50px;
  background: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--accent-pink);
}

.info-content h4 {
  color: var(--accent-pink);
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.info-content a {
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
}

.info-content a:hover {
  color: var(--accent-pink);
}

.info-content p {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 5px;
  line-height: 1.5;
}

.info-content .small {
  font-size: 0.85rem;
}

/* CTA WhatsApp */
.cta-whatsapp {
  background: linear-gradient(135deg, var(--accent-pink), var(--dark-pink));
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  color: var(--white);
}

.cta-whatsapp h4 {
  color: var(--white);
  margin-bottom: 10px;
}

.cta-whatsapp p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.cta-whatsapp .btn {
  background: var(--white);
  color: var(--accent-pink);
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.cta-whatsapp .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
}

/* FAQ Section */
.faq-section {
  padding: 100px 20px;
  background: linear-gradient(135deg, var(--white), var(--light-pink));
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.faq-item {
  background: var(--white);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.faq-item h3 {
  color: var(--accent-pink);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.faq-item p {
  color: var(--text-light);
  line-height: 1.7;
}

/* Responsive */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact-form {
    padding: 30px 20px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>
