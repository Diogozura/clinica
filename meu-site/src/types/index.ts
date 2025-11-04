// Tipos para os dados JSON do projeto

export interface Conteudo {
  titulo: string;
  subtitulo: string;
  descricao: string;
  descricao1: string;
}

export interface Vantagem {
  titulo: string;
  descricao: string;
}

export interface MissaoVisaoValor {
  titulo: string;
  descricao: string;
}

export interface Tratamento {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
}

export interface TratamentoContato {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
}

export interface TratamentoDestaque {
  titulo: string;
  link: string;
  imagem: string;
  descricao: string;
}

export interface Tela {
  id: number;
  nome: string;
  url: string;
}

export interface ConsentData {
  accepted: boolean;
  timestamp: number;
}

// Extensão global do Window para suportar propriedades customizadas
declare global {
  interface Window {
    __gtag_loaded?: boolean;
    dataLayer?: any[];
  }
}

  // Tipos marketing
  export interface HeroContent {
    titulo: string;
    subtitulo: string;
    whatsappNumero: string; // E.164, ex: 5511975645902
    whatsappMensagem: string;
    backgroundImagem?: string;
    ctaTexto?: string;
  }

  export interface Testemunho {
    nome: string;
    texto: string;
    avatar?: string;
  }

  export interface SocialProofContent {
    titulo?: string;
    testemunhos?: Testemunho[];
    logos?: string[];
    avaliacaoMedia?: number; // 0-5
    totalAvaliacoes?: number;
  }

  export interface OfferContent {
    titulo: string;
    bullets: string[];
    ctaTexto: string;
  }

  export interface GuaranteesContent {
    titulo?: string;
    itens: string[];
  }

  export interface FaqItem {
    titulo: string;
    descricao: string;
  }

  export interface FaqContent {
    titulo?: string;
    itens: FaqItem[];
  }

  export interface AuthorityContent {
    pacientesAtendidos?: number;
    seloTexto?: string;
    seloImagem?: string;
  }

  export interface MarketingContent {
    hero: HeroContent;
    socialProof: SocialProofContent;
    offer: OfferContent;
    guarantees: GuaranteesContent;
    faq: FaqContent;
    authority: AuthorityContent;
  }
