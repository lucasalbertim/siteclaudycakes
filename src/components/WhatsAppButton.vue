<template>
  <a 
    href="https://wa.me/5581997895740?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20de%20bolo." 
    target="_blank" 
    rel="noopener noreferrer"
    class="whatsapp-button"
    aria-label="Fale conosco no WhatsApp"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
    <span class="tooltip">Fale conosco!</span>
  </a>
</template>

<script>
export default {
  name: 'WhatsAppButton'
}
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #25D366, #128C7E);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  z-index: 999;
  animation: pulse 2s infinite;
}

.whatsapp-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
  animation: none;
}

.tooltip {
  position: absolute;
  right: 70px;
  background: var(--text-dark);
  color: white;
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 0.9rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.tooltip::after {
  content: '';
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  border: 8px solid transparent;
  border-left-color: var(--text-dark);
}

.whatsapp-button:hover .tooltip {
  opacity: 1;
}

@keyframes pulse {
  0% {
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  }
  50% {
    box-shadow: 0 4px 30px rgba(37, 211, 102, 0.7);
  }
  100% {
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .whatsapp-button {
    bottom: 20px;
    right: 20px;
    width: 55px;
    height: 55px;
  }
  
  .tooltip {
    display: none;
  }
}
</style>
