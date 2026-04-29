/**
 * Serviço de Integração com Instagram Basic Display API
 * 
 * Este serviço busca fotos do feed do Instagram de forma gratuita.
 * Requer configuração prévia no Facebook Developers.
 * 
 * Documentação: https://developers.facebook.com/docs/instagram-basic-display-api
 */

const INSTAGRAM_CONFIG = {
  // Você precisa preencher esses valores após criar seu app no Facebook Developers
  accessToken: import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN || '',
  userId: import.meta.env.VITE_INSTAGRAM_USER_ID || '',
};

/**
 * Busca as últimas fotos do Instagram
 * @param {number} limit - Número de fotos a buscar (padrão: 12)
 * @returns {Promise<Array>} Array de objetos com dados das fotos
 */
export async function getInstagramFeed(limit = 12) {
  // Se não tiver token configurado, retorna placeholders
  if (!INSTAGRAM_CONFIG.accessToken || !INSTAGRAM_CONFIG.userId) {
    console.warn('Instagram API não configurada. Usando imagens placeholder.');
    return getPlaceholderImages(limit);
  }

  try {
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
    const url = `https://graph.instagram.com/${INSTAGRAM_CONFIG.userId}/media?fields=${fields}&access_token=${INSTAGRAM_CONFIG.accessToken}&limit=${limit}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Filtra apenas imagens e vídeos, formata os dados
    return data.data
      .filter(item => item.media_type === 'IMAGE' || item.media_type === 'VIDEO' || item.media_type === 'CAROUSEL_ALBUM')
      .map(item => ({
        id: item.id,
        image: item.media_type === 'VIDEO' ? item.thumbnail_url : item.media_url,
        caption: item.caption || '',
        link: item.permalink,
        timestamp: item.timestamp,
        type: item.media_type,
      }))
      .slice(0, limit);
      
  } catch (error) {
    console.error('Erro ao buscar fotos do Instagram:', error);
    // Em caso de erro, retorna placeholders
    return getPlaceholderImages(limit);
  }
}

/**
 * Retorna imagens placeholder enquanto a API não está configurada
 * @param {number} count - Número de placeholders
 * @returns {Array} Array de objetos placeholder
 */
function getPlaceholderImages(count = 12) {
  return Array.from({ length: count }, (_, i) => ({
    id: `placeholder-${i + 1}`,
    image: `/portfolio/portfolio-${i + 1}.jpg`,
    caption: `Trabalho ${i + 1}`,
    link: 'https://www.instagram.com/claudycakes/',
    timestamp: new Date().toISOString(),
    type: 'IMAGE',
    isPlaceholder: true,
  }));
}

/**
 * Atualiza o token de acesso (tokens expiram após 60 dias)
 * @param {string} currentToken - Token atual
 * @returns {Promise<object>} Novo token e data de expiração
 */
export async function refreshAccessToken(currentToken) {
  try {
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    return {
      accessToken: data.access_token,
      expiresIn: data.expires_in,
    };
  } catch (error) {
    console.error('Erro ao renovar token do Instagram:', error);
    throw error;
  }
}

/**
 * Valida se o token de acesso está funcionando
 * @returns {Promise<boolean>}
 */
export async function validateToken() {
  if (!INSTAGRAM_CONFIG.accessToken || !INSTAGRAM_CONFIG.userId) {
    return false;
  }

  try {
    const url = `https://graph.instagram.com/${INSTAGRAM_CONFIG.userId}?fields=id,username&access_token=${INSTAGRAM_CONFIG.accessToken}`;
    const response = await fetch(url);
    return response.ok;
  } catch (error) {
    return false;
  }
}
