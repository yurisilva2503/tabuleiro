tailwind.config = {
  theme: {
    extend: {
      boxShadow: {
        soft: "0 10px 25px -5px rgba(0,0,0,0.15)",
      },
    },
  },
};

const DILEMAS = [
  {
    titulo: "Uso de dados para marketing",
    texto:
      "Sua empresa quer usar dados de navegação dos usuários para vender mais, sem pedir consentimento explícito.",
    opcoes: [
      {
        label: "Recusar sem consentimento e sugerir opt-in claro",
        score: +3,
        efeito: 0,
        principio: "Privacidade e Transparência",
        nota: "Alinha-se a princípios de privacidade (consentimento informado).",
      },
      {
        label: "Analisar base legal e anonimizar dados",
        score: +1,
        efeito: 0,
        principio: "Minimização de Dados",
        nota: "Mitiga risco, mas exige forte governança.",
      },
      {
        label: "Seguir com uso interno sem comunicar",
        score: -3,
        efeito: 0,
        principio: "Violação de Privacidade",
        nota: "Risco ético e legal significativo.",
      },
    ],
  },
  {
    titulo: "Acessibilidade no produto",
    texto:
      "O prazo está apertado e o gestor quer cortar testes de acessibilidade para lançar a tempo.",
    opcoes: [
      {
        label: "Defender critérios mínimos (WCAG) no escopo",
        score: +3,
        efeito: 0,
        principio: "Inclusão e Equidade",
        nota: "Garante acesso para todos e reduz retrabalho.",
      },
      {
        label: "Registrar débito técnico com plano claro",
        score: +1,
        efeito: 0,
        principio: "Responsabilidade",
        nota: "Aceitável se houver compromisso e rastreabilidade.",
      },
      {
        label: "Ignorar acessibilidade nesta versão",
        score: -2,
        efeito: 0,
        principio: "Exclusão",
        nota: "Compromete usuários e reputação.",
      },
    ],
  },
  {
    titulo: "Pressão por horas extras",
    texto:
      "O time é pressionado a fazer horas extras contínuas sem compensação para cumprir metas agressivas.",
    opcoes: [
      {
        label: "Negociar prazos/escopo e proteger saúde do time",
        score: +2,
        efeito: 0,
        principio: "Bem-estar e Sustentabilidade",
        nota: "Produtividade sustentável e prevenção de burnout.",
      },
      {
        label: "Aceitar excepcionalmente com compensação formal",
        score: 0,
        efeito: 0,
        principio: "Equidade",
        nota: "Só se for exceção, com limites claros.",
      },
      {
        label: "Impor horas extras sem diálogo",
        score: -3,
        efeito: 0,
        principio: "Abuso",
        nota: "Prática antiética e insustentável.",
      },
    ],
  },
  {
    titulo: "Relato de vulnerabilidade",
    texto: "Você encontrou uma falha de segurança crítica em produção.",
    opcoes: [
      {
        label:
          "Reportar imediatamente via canal responsável (responsible disclosure)",
        score: +3,
        efeito: 0,
        principio: "Segurança",
        nota: "Protege usuários e o negócio.",
      },
      {
        label: "Corrigir silenciosamente sem registro",
        score: -1,
        efeito: 0,
        principio: "Rastreabilidade",
        nota: "Falta de transparência prejudica aprendizado.",
      },
      {
        label: "Postar nas redes antes de corrigir",
        score: -3,
        efeito: -1,
        principio: "Exposição",
        nota: "Aumenta risco aos usuários.",
      },
    ],
  },
  {
    titulo: "Reuso de código sem licença",
    texto:
      "Um colega sugere copiar trechos de um repositório sem licença compatível para acelerar entregas.",
    opcoes: [
      {
        label: "Verificar licença e buscar alternativa compatível",
        score: +3,
        efeito: 0,
        principio: "Conformidade de Licenças",
        nota: "Evita riscos legais e respeita autores.",
      },
      {
        label: "Citar a fonte, mas usar mesmo incompatível",
        score: -1,
        efeito: 0,
        principio: "Incompatibilidade",
        nota: "Citação não corrige violação de licença.",
      },
      {
        label: "Copiar sem citar",
        score: -3,
        efeito: 0,
        principio: "Plágio",
        nota: "Antiético e arriscado.",
      },
    ],
  },
  {
    titulo: "Dark patterns",
    texto:
      "O time de growth quer esconder o botão de cancelamento para reduzir churn.",
    opcoes: [
      {
        label: "Rejeitar e propor UX transparente",
        score: +3,
        efeito: 0,
        principio: "Honestidade",
        nota: "Respeita a autonomia do usuário.",
      },
      {
        label: "Testar com aviso claro e opção fácil",
        score: +1,
        efeito: 0,
        principio: "Transparência",
        nota: "Equilíbrio entre negócio e ética.",
      },
      {
        label: "Aceitar ocultar o cancelamento",
        score: -3,
        efeito: 0,
        principio: "Manipulação",
        nota: "Erosão de confiança e sanções.",
      },
    ],
  },
  {
    titulo: "Viés em IA",
    texto:
      "Um modelo de IA apresenta viés contra um grupo específico, mas a acurácia geral é alta.",
    opcoes: [
      {
        label: "Bloquear release até mitigar viés",
        score: +3,
        efeito: 0,
        principio: "Justiça e Não Discriminação",
        nota: "Qualidade inclui equidade.",
      },
      {
        label: "Lançar como beta com monitoramento ativo",
        score: 0,
        efeito: 0,
        principio: "Prudência",
        nota: "Aceitável com salvaguardas e plano público.",
      },
      {
        label: "Ignorar viés por causa da média",
        score: -3,
        efeito: 0,
        principio: "Injustiça",
        nota: "Prejudica pessoas e o produto.",
      },
    ],
  },
  {
    titulo: "Log de dados sensíveis",
    texto: "Logs de produção contêm senhas e tokens em texto puro.",
    opcoes: [
      {
        label: "Sanitizar e criptografar imediatamente",
        score: +3,
        efeito: 0,
        principio: "Segurança de Dados",
        nota: "Boas práticas de observabilidade segura.",
      },
      {
        label: "Reduzir verbosidade e limitar acesso",
        score: +1,
        efeito: 0,
        principio: "Princípio do Menor Privilégio",
        nota: "Mitiga enquanto corrige.",
      },
      {
        label: "Manter como está para facilitar debug",
        score: -3,
        efeito: 0,
        principio: "Exposição",
        nota: "Risco grave de vazamento.",
      },
    ],
  },
  {
    titulo: "Green IT",
    texto:
      "Arquitetura proposta consome 3x mais recursos sem benefício claro ao usuário.",
    opcoes: [
      {
        label: "Otimizar e medir impacto ambiental",
        score: +2,
        efeito: 0,
        principio: "Sustentabilidade",
        nota: "Eficiência reduz custos e emissão.",
      },
      {
        label: "Aceitar solução por pressa",
        score: -1,
        efeito: 0,
        principio: "Desperdício",
        nota: "Custos e pegada aumentam.",
      },
      {
        label: "Revisar para serverless/auto-scale",
        score: +2,
        efeito: 0,
        principio: "Eficiência",
        nota: "Ajuste técnico e ambiental.",
      },
    ],
  },
  {
    titulo: "Conflito de interesses",
    texto:
      "Você foi convidado a indicar um fornecedor onde um parente trabalha.",
    opcoes: [
      {
        label: "Declarar conflito e se abster da decisão",
        score: +3,
        efeito: 0,
        principio: "Imparcialidade",
        nota: "Transparência protege o processo.",
      },
      {
        label: "Indicar, mas sem revelar vínculo",
        score: -2,
        efeito: 0,
        principio: "Omissão",
        nota: "Fere confiança do time.",
      },
      {
        label: "Conduzir avaliação pública e comparativa",
        score: +1,
        efeito: 0,
        principio: "Mérito Técnico",
        nota: "Aceitável se registro for claro.",
      },
    ],
  },
  {
    titulo: "Qualidade vs. prazo",
    texto:
      "Lançar com testes unitários mínimos e sem revisão de código para não perder a janela de marketing.",
    opcoes: [
      {
        label: "Manter revisão e testes essenciais",
        score: +2,
        efeito: 0,
        principio: "Profissionalismo",
        nota: "Qualidade evita regressões críticas.",
      },
      {
        label: "Feature toggle + rollback e monitoramento",
        score: 0,
        efeito: 0,
        principio: "Gestão de Risco",
        nota: "Viável com governança sólida.",
      },
      {
        label: "Pular testes e code review",
        score: -3,
        efeito: 0,
        principio: "Imprudência",
        nota: "Aumenta falhas e custos.",
      },
    ],
  },
  {
    titulo: "Transparência com cliente",
    texto:
      "Um bug grave foi detectado próximo ao go-live de um cliente estratégico.",
    opcoes: [
      {
        label: "Comunicar o risco e propor plano",
        score: +3,
        efeito: 0,
        principio: "Honestidade",
        nota: "Constrói confiança de longo prazo.",
      },
      {
        label: "Lançar e corrigir depois em silêncio",
        score: -2,
        efeito: 0,
        principio: "Ocultação",
        nota: "Risco à relação e ao negócio.",
      },
      {
        label: "Adiar release com justificativa técnica",
        score: +1,
        efeito: 0,
        principio: "Cautela",
        nota: "Preferível a expor o cliente.",
      },
    ],
  },
  {
    titulo: "Monitoramento de produtividade",
    texto:
      "A empresa quer instalar software para monitorar cada clique e tempo de tela dos devs.",
    opcoes: [
      {
        label: "Propor métricas de resultado em vez de vigilância",
        score: +3,
        efeito: 0,
        principio: "Respeito e Confiança",
        nota: "Foco em entregas é mais saudável.",
      },
      {
        label: "Aceitar se houver transparência e consentimento",
        score: 0,
        efeito: 0,
        principio: "Equilíbrio",
        nota: "Somente válido com regras claras.",
      },
      {
        label: "Instalar sem informar o time",
        score: -3,
        efeito: 0,
        principio: "Violação de Privacidade",
        nota: "Prática abusiva e antiética.",
      },
    ],
  },
  {
    titulo: "Pagamento de dívida técnica",
    texto:
      "A diretoria pressiona para priorizar só features visíveis, ignorando dívidas técnicas acumuladas.",
    opcoes: [
      {
        label: "Defender refatoração mínima por sprint",
        score: +2,
        efeito: 0,
        principio: "Sustentabilidade Técnica",
        nota: "Evita degradação do produto.",
      },
      {
        label: "Aceitar adiar indefinidamente",
        score: -2,
        efeito: 0,
        principio: "Negligência",
        nota: "Causa riscos de longo prazo.",
      },
      {
        label: "Incluir débito técnico no roadmap público",
        score: +1,
        efeito: 0,
        principio: "Transparência",
        nota: "Ajuda a balancear prioridades.",
      },
    ],
  },
  {
    titulo: "Uso de IA para seleção de currículos",
    texto:
      "O RH propõe usar uma IA para filtrar currículos, mas não há clareza sobre o critério do algoritmo.",
    opcoes: [
      {
        label: "Exigir explicabilidade e auditoria",
        score: +3,
        efeito: 0,
        principio: "Justiça",
        nota: "Evita discriminação oculta.",
      },
      {
        label: "Usar como apoio, mas manter decisão humana",
        score: +1,
        efeito: 0,
        principio: "Responsabilidade",
        nota: "Equilíbrio de automação e julgamento humano.",
      },
      {
        label: "Deixar IA decidir sozinha",
        score: -3,
        efeito: 0,
        principio: "Omissão de Dever",
        nota: "Pode reproduzir vieses sem controle.",
      },
    ],
  },
  {
    titulo: "Adoção de software proprietário",
    texto:
      "Um fornecedor pressiona para adotar SDK fechado que cria dependência forte.",
    opcoes: [
      {
        label: "Buscar alternativas open-source",
        score: +2,
        efeito: 0,
        principio: "Autonomia Tecnológica",
        nota: "Reduz lock-in e custos futuros.",
      },
      {
        label: "Aceitar se benefício imediato for grande",
        score: 0,
        efeito: 0,
        principio: "Pragmatismo",
        nota: "Pode ser válido se riscos forem claros.",
      },
      {
        label: "Adotar sem avaliar riscos",
        score: -2,
        efeito: 0,
        principio: "Imprudência",
        nota: "Cria dependência perigosa.",
      },
    ],
  },
  {
    titulo: "Mentoria para iniciantes",
    texto:
      "Seu gestor pede para não perder tempo apoiando estagiários, focando apenas em entregas.",
    opcoes: [
      {
        label: "Defender espaço para mentoria",
        score: +2,
        efeito: 0,
        principio: "Formação e Cooperação",
        nota: "Constrói time mais forte no longo prazo.",
      },
      {
        label: "Apoiar fora do expediente",
        score: -1,
        efeito: 0,
        principio: "Desgaste",
        nota: "Ajuda, mas sacrifica equilíbrio pessoal.",
      },
      {
        label: "Ignorar completamente",
        score: -2,
        efeito: 0,
        principio: "Individualismo",
        nota: "Prejudica aprendizado e cultura.",
      },
    ],
  },
  {
    titulo: "Privacidade em testes de usabilidade",
    texto:
      "Um colega sugere gravar vídeos de usuários sem informar claramente.",
    opcoes: [
      {
        label: "Exigir consentimento explícito",
        score: +3,
        efeito: 0,
        principio: "Privacidade",
        nota: "Testes só são válidos com transparência.",
      },
      {
        label: "Gravar mas anonimizar depois",
        score: 0,
        efeito: 0,
        principio: "Mitigação Parcial",
        nota: "Ainda falha em obter consentimento.",
      },
      {
        label: "Gravar escondido",
        score: -3,
        efeito: 0,
        principio: "Violação Ética",
        nota: "Prática invasiva e antiética.",
      },
    ],
  },
  {
    titulo: "Fake commits",
    texto:
      "Um desenvolvedor sugere criar commits falsos para parecer mais produtivo.",
    opcoes: [
      {
        label: "Recusar e orientar boas métricas",
        score: +3,
        efeito: 0,
        principio: "Honestidade",
        nota: "Métricas devem refletir valor real.",
      },
      {
        label: "Ignorar e não se envolver",
        score: -1,
        efeito: 0,
        principio: "Omissão",
        nota: "Conivência reforça má prática.",
      },
      {
        label: "Apoiar commits falsos",
        score: -3,
        efeito: 0,
        principio: "Engano",
        nota: "Prática desonesta e tóxica.",
      },
    ],
  },
  {
    titulo: "Descarte de hardware",
    texto:
      "A empresa planeja descartar computadores antigos sem reciclagem adequada.",
    opcoes: [
      {
        label: "Propor doação ou reciclagem certificada",
        score: +3,
        efeito: 0,
        principio: "Sustentabilidade",
        nota: "Minimiza impacto ambiental e social.",
      },
      {
        label: "Guardar em depósito sem uso",
        score: -1,
        efeito: 0,
        principio: "Desperdício",
        nota: "Causa acúmulo e perda de valor.",
      },
      {
        label: "Descartar em lixo comum",
        score: -3,
        efeito: 0,
        principio: "Dano Ambiental",
        nota: "Impacto ecológico severo.",
      },
    ],
  },
  {
    titulo: "Feature exclusiva para VIPs",
    texto: "O produto terá acessibilidade plena apenas no plano pago premium.",
    opcoes: [
      {
        label: "Defender acessibilidade como direito universal",
        score: +3,
        efeito: 0,
        principio: "Equidade",
        nota: "Acessibilidade não deve ser paywall.",
      },
      {
        label: "Oferecer parcial grátis e completa no pago",
        score: -1,
        efeito: 0,
        principio: "Desigualdade",
        nota: "Cria barreiras a pessoas vulneráveis.",
      },
      {
        label: "Manter recurso só no premium",
        score: -2,
        efeito: 0,
        principio: "Exclusão",
        nota: "Contraria boas práticas de inclusão.",
      },
    ],
  },
  {
    titulo: "Engenharia de testes",
    texto:
      "Sugere-se cortar testes automatizados porque 'manual é mais rápido'.",
    opcoes: [
      {
        label: "Defender cobertura mínima automatizada",
        score: +2,
        efeito: 0,
        principio: "Qualidade",
        nota: "Previne regressões graves.",
      },
      {
        label: "Aceitar só manual",
        score: -2,
        efeito: 0,
        principio: "Negligência",
        nota: "Maior risco de falhas futuras.",
      },
      {
        label: "Equilibrar manual e smoke tests automáticos",
        score: +1,
        efeito: 0,
        principio: "Pragmatismo",
        nota: "Reduz impacto imediato sem abandonar automação.",
      },
    ],
  },
  {
    titulo: "Uso de software pirata",
    texto:
      "Um colega sugere usar software pirata para economizar custos da equipe.",
    opcoes: [
      {
        label: "Recusar e propor alternativa gratuita/open-source",
        score: +3,
        efeito: 0,
        principio: "Legalidade",
        nota: "Evita riscos legais e éticos.",
      },
      {
        label: "Aceitar temporariamente até comprar licença",
        score: -1,
        efeito: 0,
        principio: "Risco",
        nota: "Ainda expõe a empresa a riscos.",
      },
      {
        label: "Usar pirata sem informar",
        score: -3,
        efeito: 0,
        principio: "Ilegalidade",
        nota: "Prática criminosa e antiética.",
      },
    ],
  },
  {
    titulo: "Exploração de estagiários",
    texto:
      "Gestor pede para estagiários assumirem trabalho de nível pleno sem remuneração justa.",
    opcoes: [
      {
        label: "Denunciar prática e defender valorização",
        score: +3,
        efeito: 0,
        principio: "Equidade",
        nota: "Protege direitos e aprendizado.",
      },
      {
        label: "Orientar estagiário mas aceitar sobrecarga",
        score: -1,
        efeito: 0,
        principio: "Conivência",
        nota: "Ajuda mas perpetua injustiça.",
      },
      {
        label: "Ignorar situação",
        score: -2,
        efeito: 0,
        principio: "Omissão",
        nota: "Falha em proteger colegas.",
      },
    ],
  },
  {
    titulo: "Falha em produção escondida",
    texto:
      "Um bug só acontece em produção, mas o time decide não registrar para evitar 'manchar métricas'.",
    opcoes: [
      {
        label: "Registrar bug e abrir investigação",
        score: +3,
        efeito: 0,
        principio: "Transparência",
        nota: "A verdade permite corrigir.",
      },
      {
        label: "Ignorar se impacto for pequeno",
        score: -2,
        efeito: 0,
        principio: "Negligência",
        nota: "Pequenos bugs acumulam riscos.",
      },
      {
        label: "Corrigir rápido mas sem rastrear",
        score: -1,
        efeito: 0,
        principio: "Falta de documentação",
        nota: "Solução parcial, sem aprendizado.",
      },
    ],
  },
  {
    titulo: "Promoção injusta",
    texto: "Um gestor promove um amigo mesmo com desempenho inferior a outros.",
    opcoes: [
      {
        label: "Registrar e escalar denúncia",
        score: +3,
        efeito: 0,
        principio: "Justiça",
        nota: "Preserva meritocracia.",
      },
      {
        label: "Conversar diretamente com gestor",
        score: +1,
        efeito: 0,
        principio: "Diálogo",
        nota: "Tenta resolver sem confronto.",
      },
      {
        label: "Aceitar sem questionar",
        score: -2,
        efeito: 0,
        principio: "Conivência",
        nota: "Reflete injustiça estrutural.",
      },
    ],
  },
  {
    titulo: "Uso de dados sensíveis para treinamento",
    texto:
      "Propõem usar dados médicos reais para treinar modelo sem anonimização.",
    opcoes: [
      {
        label: "Exigir anonimização e consentimento",
        score: +3,
        efeito: 0,
        principio: "Privacidade",
        nota: "Protege dados pessoais.",
      },
      {
        label: "Usar só com contratos legais fortes",
        score: +1,
        efeito: 0,
        principio: "Conformidade",
        nota: "Aceitável com salvaguardas.",
      },
      {
        label: "Treinar direto com dados brutos",
        score: -3,
        efeito: 0,
        principio: "Violação grave",
        nota: "Antiético e arriscado.",
      },
    ],
  },
  {
    titulo: "Nepotismo em contratação",
    texto:
      "Um gestor quer contratar apenas conhecidos pessoais para novas vagas.",
    opcoes: [
      {
        label: "Defender processo seletivo transparente",
        score: +3,
        efeito: 0,
        principio: "Imparcialidade",
        nota: "Garante diversidade e justiça.",
      },
      {
        label: "Aceitar desde que entreguem resultados",
        score: -1,
        efeito: 0,
        principio: "Pragmatismo duvidoso",
        nota: "Arrisca clima organizacional.",
      },
      {
        label: "Indicar amigos sem abrir seleção",
        score: -2,
        efeito: 0,
        principio: "Nepotismo",
        nota: "Prática antiética e desigual.",
      },
    ],
  },
  {
    titulo: "Exposição pública de funcionário",
    texto:
      "Gestor expõe erro individual em reunião aberta para envergonhar dev.",
    opcoes: [
      {
        label: "Defender feedback privado e construtivo",
        score: +3,
        efeito: 0,
        principio: "Respeito",
        nota: "Cria cultura saudável.",
      },
      {
        label: "Ignorar e seguir a reunião",
        score: -2,
        efeito: 0,
        principio: "Omissão",
        nota: "Normaliza abuso.",
      },
      {
        label: "Confrontar gestor publicamente",
        score: 0,
        efeito: 0,
        principio: "Coragem",
        nota: "Pode resolver mas gera conflito.",
      },
    ],
  },
  {
    titulo: "Automação que elimina empregos",
    texto:
      "Empresa quer automatizar processos sem oferecer recolocação aos afetados.",
    opcoes: [
      {
        label: "Defender plano de requalificação",
        score: +2,
        efeito: 0,
        principio: "Responsabilidade Social",
        nota: "Minimiza impacto humano.",
      },
      {
        label: "Aceitar demissões sem mitigação",
        score: -2,
        efeito: 0,
        principio: "Indiferença",
        nota: "Ignora impacto social.",
      },
      {
        label: "Propor uso gradual com adaptação",
        score: +1,
        efeito: 0,
        principio: "Equilíbrio",
        nota: "Transição menos abrupta.",
      },
    ],
  },
  {
    titulo: "Plágio acadêmico",
    texto:
      "Um colega sugere copiar artigo científico para acelerar entrega de documentação.",
    opcoes: [
      {
        label: "Recusar e citar fontes corretamente",
        score: +3,
        efeito: 0,
        principio: "Integridade",
        nota: "Respeita propriedade intelectual.",
      },
      {
        label: "Reescrever parcialmente sem citar",
        score: -1,
        efeito: 0,
        principio: "Desonestidade",
        nota: "Ainda configura plágio.",
      },
      {
        label: "Copiar integralmente",
        score: -3,
        efeito: 0,
        principio: "Fraude",
        nota: "Grave violação ética.",
      },
    ],
  },
  {
    titulo: "Backdoor intencional",
    texto:
      "Um colega propõe inserir acesso oculto ao sistema para suporte remoto sem informar clientes.",
    opcoes: [
      {
        label: "Recusar e relatar imediatamente",
        score: +3,
        efeito: 0,
        principio: "Segurança",
        nota: "Protege integridade do produto.",
      },
      {
        label: "Aceitar se for só para suporte",
        score: -2,
        efeito: 0,
        principio: "Risco",
        nota: "Ainda é falha grave.",
      },
      {
        label: "Implementar sem questionar",
        score: -3,
        efeito: 0,
        principio: "Traição de confiança",
        nota: "Altamente antiético.",
      },
    ],
  },
  {
    titulo: "Viés de gênero em anúncios",
    texto:
      "Algoritmo de anúncios direciona majoritariamente vagas de TI só para homens.",
    opcoes: [
      {
        label: "Corrigir algoritmo para equilíbrio",
        score: +3,
        efeito: 0,
        principio: "Igualdade",
        nota: "Promove diversidade.",
      },
      {
        label: "Monitorar mas não corrigir agora",
        score: -1,
        efeito: 0,
        principio: "Indiferença",
        nota: "Adia solução.",
      },
      {
        label: "Ignorar porque gera mais cliques",
        score: -3,
        efeito: 0,
        principio: "Discriminação",
        nota: "Contraria ética.",
      },
    ],
  },
  {
    titulo: "Transparência salarial",
    texto:
      "Descobriu-se que colegas no mesmo cargo recebem valores muito diferentes.",
    opcoes: [
      {
        label: "Defender política salarial clara",
        score: +3,
        efeito: 0,
        principio: "Justiça",
        nota: "Reduz desigualdade.",
      },
      {
        label: "Ignorar para evitar conflito",
        score: -2,
        efeito: 0,
        principio: "Omissão",
        nota: "Mantém injustiça.",
      },
      {
        label: "Reclamar só individualmente",
        score: 0,
        efeito: 0,
        principio: "Interesse Pessoal",
        nota: "Ajuda só a si mesmo.",
      },
    ],
  },
  {
    titulo: "Clickbait no marketing",
    texto: "Equipe de marketing sugere títulos enganosos para atrair usuários.",
    opcoes: [
      {
        label: "Recusar e propor títulos honestos",
        score: +3,
        efeito: 0,
        principio: "Honestidade",
        nota: "Constrói confiança a longo prazo.",
      },
      {
        label: "Usar clickbait moderado",
        score: -1,
        efeito: 0,
        principio: "Meia verdade",
        nota: "Ainda prejudica credibilidade.",
      },
      {
        label: "Adotar títulos enganosos",
        score: -3,
        efeito: 0,
        principio: "Manipulação",
        nota: "Contraproducente e antiético.",
      },
    ],
  },
  {
    titulo: "Uso de energia em data center",
    texto: "Empresa mantém servidores ociosos ligados 24h sem necessidade.",
    opcoes: [
      {
        label: "Propor políticas de desligamento automático",
        score: +2,
        efeito: 0,
        principio: "Sustentabilidade",
        nota: "Reduz consumo energético.",
      },
      {
        label: "Ignorar para evitar retrabalho",
        score: -1,
        efeito: 0,
        principio: "Desperdício",
        nota: "Aumenta custos e impacto ambiental.",
      },
      {
        label: "Revisar arquitetura para cloud eficiente",
        score: +2,
        efeito: 0,
        principio: "Eficiência",
        nota: "Solução técnica sustentável.",
      },
    ],
  },
  {
    titulo: "Vazamento interno de informação",
    texto:
      "Um colega compartilhou em grupo público informações do roadmap secreto.",
    opcoes: [
      {
        label: "Reportar imediatamente",
        score: +3,
        efeito: 0,
        principio: "Confidencialidade",
        nota: "Protege a empresa.",
      },
      {
        label: "Avisar colega em particular",
        score: +1,
        efeito: 0,
        principio: "Prudência",
        nota: "Resolve sem expor, mas risco continua.",
      },
      {
        label: "Ignorar vazamento",
        score: -2,
        efeito: 0,
        principio: "Omissão",
        nota: "Coloca negócio em risco.",
      },
    ],
  },
  {
    titulo: "Uso de IA generativa sem revisão",
    texto: "Equipe quer publicar conteúdo gerado por IA sem validação humana.",
    opcoes: [
      {
        label: "Exigir revisão editorial",
        score: +3,
        efeito: 0,
        principio: "Responsabilidade",
        nota: "Garante qualidade e evita erros.",
      },
      {
        label: "Publicar direto para agilizar",
        score: -2,
        efeito: 0,
        principio: "Negligência",
        nota: "Risco de fake news e imprecisão.",
      },
      {
        label: "Usar IA só como rascunho",
        score: +1,
        efeito: 0,
        principio: "Equilíbrio",
        nota: "Combina produtividade com segurança.",
      },
    ],
  },
  {
    titulo: "Favorecimento em revisão de código",
    texto:
      "Um revisor aprova código de amigos sem analisar, mas rejeita de outros com rigor.",
    opcoes: [
      {
        label: "Defender critérios iguais",
        score: +3,
        efeito: 0,
        principio: "Imparcialidade",
        nota: "Mantém justiça técnica.",
      },
      {
        label: "Aceitar porque acelera o time",
        score: -1,
        efeito: 0,
        principio: "Facilitismo",
        nota: "Sacrifica qualidade.",
      },
      {
        label: "Ignorar para evitar conflito",
        score: -2,
        efeito: 0,
        principio: "Omissão",
        nota: "Perpetua injustiça.",
      },
    ],
  },
  {
    titulo: "Uso de dispositivos pessoais sem segurança",
    texto:
      "Funcionários usam celulares pessoais sem MDM para acessar dados críticos.",
    opcoes: [
      {
        label: "Propor política BYOD com segurança",
        score: +2,
        efeito: 0,
        principio: "Segurança",
        nota: "Reduz riscos.",
      },
      {
        label: "Aceitar para não incomodar",
        score: -2,
        efeito: 0,
        principio: "Negligência",
        nota: "Aumenta chance de vazamentos.",
      },
      {
        label: "Bloquear totalmente acesso pessoal",
        score: 0,
        efeito: 0,
        principio: "Controle",
        nota: "Seguro mas pouco flexível.",
      },
    ],
  },
  {
    titulo: "Mentir em relatório",
    texto: "Gestor pede para alterar dados de performance para parecer melhor.",
    opcoes: [
      {
        label: "Recusar e manter dados verdadeiros",
        score: +3,
        efeito: 0,
        principio: "Honestidade",
        nota: "Relatórios devem refletir realidade.",
      },
      {
        label: "Ajustar números levemente",
        score: -1,
        efeito: 0,
        principio: "Manipulação",
        nota: "Ainda é desonesto.",
      },
      {
        label: "Aceitar manipulação total",
        score: -3,
        efeito: 0,
        principio: "Fraude",
        nota: "Antiético e perigoso.",
      },
    ],
  },
  {
    titulo: "Uso de IA para deepfake",
    texto: "Colega sugere criar deepfake para publicidade sem avisar público.",
    opcoes: [
      {
        label: "Recusar e alertar riscos",
        score: +3,
        efeito: 0,
        principio: "Ética",
        nota: "Deepfake enganoso prejudica confiança.",
      },
      {
        label: "Usar se for apenas humorístico",
        score: -1,
        efeito: 0,
        principio: "Ambiguidade",
        nota: "Ainda exige aviso claro.",
      },
      {
        label: "Publicar sem revelar",
        score: -3,
        efeito: 0,
        principio: "Engano",
        nota: "Prática desonesta.",
      },
    ],
  },
  {
    titulo: "Compartilhamento de credenciais",
    texto: "Equipe compartilha mesma senha de admin para agilizar.",
    opcoes: [
      {
        label: "Implementar contas individuais",
        score: +3,
        efeito: 0,
        principio: "Segurança",
        nota: "Garante rastreabilidade.",
      },
      {
        label: "Compartilhar mas trocar senha todo mês",
        score: -1,
        efeito: 0,
        principio: "Mitigação parcial",
        nota: "Ainda falho em segurança.",
      },
      {
        label: "Manter senha única para todos",
        score: -3,
        efeito: 0,
        principio: "Exposição",
        nota: "Altamente inseguro.",
      },
    ],
  },
  {
    titulo: "Shadow IT",
    texto: "Funcionários usam serviços externos sem aprovação de TI.",
    opcoes: [
      {
        label: "Integrar oficialmente após avaliação",
        score: +2,
        efeito: 0,
        principio: "Governança",
        nota: "Traz inovação com segurança.",
      },
      {
        label: "Ignorar práticas paralelas",
        score: -2,
        efeito: 0,
        principio: "Risco",
        nota: "Pode gerar vazamentos.",
      },
      {
        label: "Punir sem ouvir motivos",
        score: -1,
        efeito: 0,
        principio: "Autoritarismo",
        nota: "Desestimula inovação.",
      },
    ],
  },
  {
    titulo: "Exclusão de minorias",
    texto: "Um colega faz piadas ofensivas em chat interno.",
    opcoes: [
      {
        label: "Denunciar e exigir respeito",
        score: +3,
        efeito: 0,
        principio: "Inclusão",
        nota: "Combate assédio.",
      },
      {
        label: "Ignorar para evitar atrito",
        score: -2,
        efeito: 0,
        principio: "Omissão",
        nota: "Normaliza discriminação.",
      },
      {
        label: "Rir junto",
        score: -3,
        efeito: 0,
        principio: "Cumplicidade",
        nota: "Contribui para exclusão.",
      },
    ],
  },
];

const STATE = {
  pos: 0,
  score: 0,
  turn: 1,
  historico: [],
  casas: 30,
  fim: false,
};

const el = (sel) => document.querySelector(sel);
const els = (sel) => Array.from(document.querySelectorAll(sel));

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function atualizarHUD() {
  el("#hud-pos").textContent = STATE.pos + 1 + " / " + STATE.casas;
  el("#hud-score").textContent = STATE.score;
  el("#hud-turn").textContent = STATE.turn;
  els(".tile").forEach((t, i) => {
    t.classList.toggle("ring-4", i === STATE.pos);
    t.classList.toggle("ring-indigo-500", i === STATE.pos);
    t.classList.toggle("bg-indigo-50", i === STATE.pos);
  });
  // barra de progresso ética
  const pct = Math.max(0, Math.min(100, 50 + STATE.score * 5)); // centro em 50
  el("#barra").style.width = pct + "%";
  el("#barra-label").textContent = `Índice Ético: ${STATE.score}`;
}

function rolarDado() {
  if (STATE.fim) return;
  const n = rand(1, 6);
  animarDado(n);
  mover(n);
}

function animarDado(n) {
  const d = el("#dado");
  d.classList.add("animate-bounce");
  d.textContent = "🎲 " + n;
  setTimeout(() => d.classList.remove("animate-bounce"), 600);
}

function mover(passos) {
  STATE.pos += passos;
  if (STATE.pos >= STATE.casas - 1) {
    STATE.pos = STATE.casas - 1;
    atualizarHUD();
    abrirDilema(); // último dilema
    finalizar();
    return;
  }
  atualizarHUD();
  abrirDilema();
}

function abrirDilema() {
  const idx = STATE.pos % DILEMAS.length;
  const d = DILEMAS[idx];
  el("#modal-titulo").textContent = `Casa ${STATE.pos + 1}: ${d.titulo}`;
  el("#modal-texto").textContent = d.texto;

  // embaralhar cópia das opções
  const opcoes = [...d.opcoes];
  for (let i = opcoes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opcoes[i], opcoes[j]] = [opcoes[j], opcoes[i]];
  }

  const cont = el("#modal-opcoes");
  cont.innerHTML = "";
  opcoes.forEach((op) => {
    const btn = document.createElement("button");
    btn.className =
      "w-full text-left p-4 mb-2 rounded-2xl border hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-indigo-500";
    btn.innerHTML = `<div class="font-medium">${op.label}</div><div class="text-sm opacity-70">${op.principio}</div>`;
    btn.addEventListener("click", () => escolherOpcao(d, op));
    cont.appendChild(btn);
  });

  el("#modal-dilema").classList.remove("hidden");
}

function escolherOpcao(d, op) {
  STATE.score += op.score;
  STATE.historico.push({
    casa: STATE.pos + 1,
    titulo: d.titulo,
    escolha: op.label,
    scoreDelta: op.score,
    principio: op.principio,
    nota: op.nota,
  });
  // marcar casa como resolvida
  const tile = els(".tile")[STATE.pos];
  if (op.score >= 2) {
    tile.classList.add("bg-green-100");
  } else if (op.score <= -2) {
    tile.classList.add("bg-red-100");
  } else {
    tile.classList.add("bg-yellow-100");
  }
  el("#modal-dilema").classList.add("hidden");
  STATE.turn++;
  atualizarHUD();
  if (STATE.pos === STATE.casas - 1) {
    finalizar();
  }
}

function finalizar() {
  if (STATE.fim) return;
  STATE.fim = true;
  const s = STATE.score;
  let nivel, cor, msg;
  if (s >= 12) {
    nivel = "Guardião Ético";
    cor = "text-green-700";
    msg =
      "Suas decisões mostram forte compromisso com princípios de privacidade, justiça e transparência.";
  } else if (s >= 5) {
    nivel = "Navegador Consciente";
    cor = "text-emerald-700";
    msg =
      "Boas escolhas gerais, com espaço para evoluir em consistência sob pressão.";
  } else if (s >= -4) {
    nivel = "Equilibrista";
    cor = "text-yellow-700";
    msg =
      "Você equilibrou objetivos, mas em alguns pontos colocou o negócio acima de valores-chave.";
  } else {
    nivel = "Zona de Risco Ético";
    cor = "text-red-700";
    msg =
      "Várias decisões feriram princípios fundamentais. Reflita e replaneje suas práticas.";
  }

  el("#fim-nivel").textContent = nivel;
  el("#fim-nivel").className = "font-semibold " + cor;
  el("#fim-score").textContent = s;
  const ul = el("#fim-lista");
  ul.innerHTML = "";
  STATE.historico.forEach((h) => {
    const li = document.createElement("li");
    const signo = h.scoreDelta > 0 ? "➕" : h.scoreDelta < 0 ? "➖" : "➗";
    li.className = "mb-2";
    li.innerHTML = `<span class=\"font-medium\">Casa ${h.casa} — ${h.titulo}</span><br><span class=\"opacity-80\">Escolha:</span> ${h.escolha} <span class=\"opacity-60\">(${h.principio})</span> <span class=\"ml-2\">${signo} ${h.scoreDelta}</span>`;
    ul.appendChild(li);
  });
  el("#modal-final").classList.remove("hidden");
}

function copiarResumo() {
  const linhas = STATE.historico.map(
    (h) =>
      `Casa ${h.casa} — ${h.titulo}\nEscolha: ${h.escolha} (${h.principio})  Δ ${h.scoreDelta}\nNota: ${h.nota}\n`
  );
  const texto = `Jornada Ética — Resultado\n\nNível: ${
    el("#fim-nivel").textContent
  }\nÍndice Ético: ${STATE.score}\nTurnos: ${
    STATE.turn - 1
  }\n\nDetalhes:\n\n${linhas.join("\n")}`;
  navigator.clipboard.writeText(texto).then(() => {
    const b = el("#btn-copiar");
    b.textContent = "Copiado!";
    setTimeout(() => (b.textContent = "Copiar resumo"), 1200);
  });
}

function reiniciar() {
  location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = el("#grid");
  grid.innerHTML = "";
  for (let i = 0; i < STATE.casas; i++) {
    const cell = document.createElement("div");
    cell.className =
      "tile relative flex items-center justify-center rounded-2xl p-4 border bg-white";
    cell.innerHTML = `<div class=\"text-md opacity-60\">${i + 1}</div>`;
    grid.appendChild(cell);
  }
  atualizarHUD();
  el("#btn-dado").addEventListener("click", rolarDado);
  const btnsRestart = document.querySelectorAll("#btn-restart");
  btnsRestart.forEach((btn) => {
    btn.addEventListener("click", reiniciar);
  });

  el("#btn-copiar").addEventListener("click", copiarResumo);
  el("#btn-fechar-dilema").addEventListener("click", () =>
    el("#modal-dilema").classList.add("hidden")
  );
});
