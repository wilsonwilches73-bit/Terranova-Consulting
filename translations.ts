export interface Translations {
  appTitle: string;
  appSubtitle: string;
  footerText: (year: number) => string;
  countrySelector: {
    from: string;
    to: string;
    placeholder: string;
  };
  inquiryBox: {
    label: string;
    placeholder: string;
    button: string;
    buttonLoading: string;
  };
  infoCard: {
    loading: string;
    loadingSub: string;
    error: string;
    errorSub: string;
    regarding: string;
    sourcesTitle: string;
    exportButton: string;
    exportingButton: string;
  };
  currencyCalculator: {
    title: string;
    amountLabel: string;
    from: string;
    to: string;
    rateLabel: string;
    rateValue: (rate: number, from: string, to: string) => string;
    disclaimer: string;
  };
  imageBanner: {
    generatingVision: string;
  };
  categories: {
    visa: string;
    cost: string;
    housing: string;
    health: string;
    education: string;
    safety: string;
    culture: string;
    attractions: string;
    finances: string;
    entertainment: string;
    climate: string;
    legal: string;
  };
}

const en: Translations = {
  appTitle: "Your World, Reimagined",
  appSubtitle: "Select your origin and destination to get started.",
  footerText: (year) => `© ${year} Terranova World Relocation Consulting. All information is AI-generated and should be verified.`,
  countrySelector: {
    from: "From",
    to: "To",
    placeholder: "Select a destination...",
  },
  inquiryBox: {
    label: "Have a specific question?",
    placeholder: "e.g., What are the requirements for bringing a pet...",
    button: "Ask",
    buttonLoading: "Asking...",
  },
  infoCard: {
    loading: "Generating your personalized guide...",
    loadingSub: "This may take a moment.",
    error: "An error occurred",
    errorSub: "Failed to fetch information. Please check your API key and try again.",
    regarding: "Regarding:",
    sourcesTitle: "Sources",
    exportButton: "Export as PDF",
    exportingButton: "Exporting...",
  },
  currencyCalculator: {
    title: "Currency Exchange Calculator",
    amountLabel: "Amount to convert",
    from: "From",
    to: "To",
    rateLabel: "Live Exchange Rate",
    rateValue: (rate, from, to) => `1 ${from} ≈ ${rate.toFixed(4)} ${to}`,
    disclaimer: "Rates are for informational purposes only and may vary.",
  },
  imageBanner: {
    generatingVision: "Generating a vision of your new home...",
  },
  categories: {
    visa: "Immigration & Visas",
    cost: "Cost of Living",
    housing: "Housing & Accommodation",
    health: "Healthcare System",
    education: "Education System",
    safety: "Safety & Security",
    culture: "Cultural Adaptation",
    attractions: "Local Attractions",
    finances: "Finances & Banking",
    entertainment: "Entertainment & Leisure",
    climate: "Climate & Environment",
    legal: "Legal & Financial",
  },
};

const es: Translations = {
  appTitle: "Tu Mundo, Reinventado",
  appSubtitle: "Selecciona tu origen y destino para empezar.",
  footerText: (year) => `© ${year} Terranova World Relocation Consulting. Toda la información es generada por IA y debe ser verificada.`,
  countrySelector: {
    from: "Desde",
    to: "Hacia",
    placeholder: "Selecciona un destino...",
  },
  inquiryBox: {
    label: "¿Tienes una pregunta específica?",
    placeholder: "Ej: ¿Cuáles son los requisitos para traer una mascota...",
    button: "Preguntar",
    buttonLoading: "Preguntando...",
  },
  infoCard: {
    loading: "Generando tu guía personalizada...",
    loadingSub: "Esto puede tardar un momento.",
    error: "Ocurrió un error",
    errorSub: "No se pudo obtener la información. Por favor, revisa tu clave de API e inténtalo de nuevo.",
    regarding: "Respecto a:",
    sourcesTitle: "Fuentes",
    exportButton: "Exportar como PDF",
    exportingButton: "Exportando...",
  },
  currencyCalculator: {
    title: "Calculadora de Cambio de Divisas",
    amountLabel: "Monto a convertir",
    from: "Desde",
    to: "A",
    rateLabel: "Tasa de Cambio en Vivo",
    rateValue: (rate, from, to) => `1 ${from} ≈ ${rate.toFixed(4)} ${to}`,
    disclaimer: "Las tasas son solo para fines informativos y pueden variar.",
  },
  imageBanner: {
    generatingVision: "Generando una visión de tu nuevo hogar...",
  },
  categories: {
    visa: "Inmigración y Visas",
    cost: "Costo de Vida",
    housing: "Vivienda y Alojamiento",
    health: "Sistema de Salud",
    education: "Sistema Educativo",
    safety: "Seguridad",
    culture: "Adaptación Cultural",
    attractions: "Atracciones Locales",
    finances: "Finanzas y Banca",
    entertainment: "Entretenimiento y Ocio",
    climate: "Clima y Medio Ambiente",
    legal: "Legal y Financiero",
  },
};

const fr: Translations = {
  appTitle: "Votre Monde, Réimaginé",
  appSubtitle: "Sélectionnez votre origine et destination pour commencer.",
  footerText: (year) => `© ${year} Terranova World Relocation Consulting. Toutes les informations sont générées par l'IA et doivent être vérifiées.`,
  countrySelector: {
    from: "De",
    to: "À",
    placeholder: "Sélectionnez une destination...",
  },
  inquiryBox: {
    label: "Avez-vous une question spécifique ?",
    placeholder: "Ex: Quelles sont les conditions pour amener un animal de compagnie...",
    button: "Demander",
    buttonLoading: "En cours...",
  },
  infoCard: {
    loading: "Génération de votre guide personnalisé...",
    loadingSub: "Cela peut prendre un moment.",
    error: "Une erreur est survenue",
    errorSub: "Échec de la récupération des informations. Veuillez vérifier votre clé API et réessayer.",
    regarding: "Concernant :",
    sourcesTitle: "Sources",
    exportButton: "Exporter en PDF",
    exportingButton: "Exportation...",
  },
  currencyCalculator: {
    title: "Calculateur de Change",
    amountLabel: "Montant à convertir",
    from: "De",
    to: "À",
    rateLabel: "Taux de Change en Direct",
    rateValue: (rate, from, to) => `1 ${from} ≈ ${rate.toFixed(4)} ${to}`,
    disclaimer: "Les taux sont à titre informatif uniquement et peuvent varier.",
  },
  imageBanner: {
    generatingVision: "Création d'une vision de votre nouveau foyer...",
  },
  categories: {
    visa: "Immigration & Visas",
    cost: "Coût de la Vie",
    housing: "Logement & Hébergement",
    health: "Système de Santé",
    education: "Système Éducatif",
    safety: "Sûreté & Sécurité",
    culture: "Adaptation Culturelle",
    attractions: "Attractions Locales",
    finances: "Finances & Banque",
    entertainment: "Divertissement & Loisirs",
    climate: "Climat & Environnement",
    legal: "Légal et Financier",
  },
};

const de: Translations = {
  appTitle: "Ihre Welt, Neu Erfunden",
  appSubtitle: "Wählen Sie Ihren Herkunfts- und Zielort, um zu beginnen.",
  footerText: (year) => `© ${year} Terranova World Relocation Consulting. Alle Informationen werden von KI generiert und sollten überprüft werden.`,
  countrySelector: {
    from: "Von",
    to: "Nach",
    placeholder: "Wählen Sie ein Ziel...",
  },
  inquiryBox: {
    label: "Haben Sie eine spezielle Frage?",
    placeholder: "z.B. Was sind die Anforderungen für die Mitnahme eines Haustieres...",
    button: "Fragen",
    buttonLoading: "Frage wird gestellt...",
  },
  infoCard: {
    loading: "Ihr persönlicher Leitfaden wird erstellt...",
    loadingSub: "Dies kann einen Moment dauern.",
    error: "Ein Fehler ist aufgetreten",
    errorSub: "Informationen konnten nicht abgerufen werden. Bitte überprüfen Sie Ihren API-Schlüssel und versuchen Sie es erneut.",
    regarding: "Betreff:",
    sourcesTitle: "Quellen",
    exportButton: "Als PDF exportieren",
    exportingButton: "Exportiere...",
  },
  currencyCalculator: {
    title: "Währungsrechner",
    amountLabel: "Betrag zum Umrechnen",
    from: "Von",
    to: "Nach",
    rateLabel: "Live-Wechselkurs",
    rateValue: (rate, from, to) => `1 ${from} ≈ ${rate.toFixed(4)} ${to}`,
    disclaimer: "Die Kurse dienen nur zu Informationszwecken und können variieren.",
  },
  imageBanner: {
    generatingVision: "Erstelle eine Vision deines neuen Zuhauses...",
  },
  categories: {
    visa: "Einwanderung & Visa",
    cost: "Lebenshaltungskosten",
    housing: "Wohnen & Unterkunft",
    health: "Gesundheitssystem",
    education: "Bildungssystem",
    safety: "Sicherheit",
    culture: "Kulturelle Anpassung",
    attractions: "Lokale Attraktionen",
    finances: "Finanzen & Bankwesen",
    entertainment: "Unterhaltung & Freizeit",
    climate: "Klima & Umwelt",
    legal: "Rechtliches & Finanzielles",
  },
};

const zh: Translations = {
  appTitle: "您的世界，焕然一新",
  appSubtitle: "选择您的出发地和目的地以开始。",
  footerText: (year) => `© ${year} Terranova World Relocation Consulting. 所有信息均由人工智能生成，请核实。`,
  countrySelector: {
    from: "从",
    to: "到",
    placeholder: "选择一个目的地...",
  },
  inquiryBox: {
    label: "有具体问题吗？",
    placeholder: "例如，带宠物入境有什么要求...",
    button: "提问",
    buttonLoading: "提问中...",
  },
  infoCard: {
    loading: "正在生成您的个性化指南...",
    loadingSub: "请稍等片刻。",
    error: "发生错误",
    errorSub: "无法获取信息。请检查您的API密钥并重试。",
    regarding: "关于：",
    sourcesTitle: "来源",
    exportButton: "导出为 PDF",
    exportingButton: "正在导出...",
  },
  currencyCalculator: {
    title: "货币兑换计算器",
    amountLabel: "要转换的金额",
    from: "从",
    to: "到",
    rateLabel: "实时汇率",
    rateValue: (rate, from, to) => `1 ${from} ≈ ${rate.toFixed(4)} ${to}`,
    disclaimer: "汇率仅供参考，可能会有变化。",
  },
  imageBanner: {
    generatingVision: "正在生成您新家的景象...",
  },
  categories: {
    visa: "移民与签证",
    cost: "生活成本",
    housing: "住房与住宿",
    health: "医疗保健系统",
    education: "教育体系",
    safety: "安全保障",
    culture: "文化适应",
    attractions: "当地景点",
    finances: "金融与银行业",
    entertainment: "娱乐与休闲",
    climate: "气候与环境",
    legal: "法律与金融",
  },
};

const ja: Translations = {
  appTitle: "あなたの世界を、再創造",
  appSubtitle: "出発地と目的地を選択して開始します。",
  footerText: (year) => `© ${year} Terranova World Relocation Consulting. すべての情報はAIによって生成されたものであり、確認が必要です。`,
  countrySelector: {
    from: "出発地",
    to: "目的地",
    placeholder: "目的地を選択...",
  },
  inquiryBox: {
    label: "具体的な質問がありますか？",
    placeholder: "例：ペットを連れて行くための要件は何ですか...",
    button: "質問する",
    buttonLoading: "質問中...",
  },
  infoCard: {
    loading: "パーソナライズされたガイドを生成中...",
    loadingSub: "しばらくお待ちください。",
    error: "エラーが発生しました",
    errorSub: "情報の取得に失敗しました。APIキーを確認して、もう一度お試しください。",
    regarding: "件名：",
    sourcesTitle: "情報源",
    exportButton: "PDFとしてエクスポート",
    exportingButton: "エクスポート中...",
  },
  currencyCalculator: {
    title: "為替レート計算機",
    amountLabel: "変換する金額",
    from: "元",
    to: "先",
    rateLabel: "リアルタイム為替レート",
    rateValue: (rate, from, to) => `1 ${from} ≈ ${rate.toFixed(4)} ${to}`,
    disclaimer: "レートは情報提供のみを目的としており、変動する場合があります。",
  },
  imageBanner: {
    generatingVision: "新しい家のビジョンを生成しています...",
  },
  categories: {
    visa: "移住とビザ",
    cost: "生活費",
    housing: "住宅と宿泊施設",
    health: "医療制度",
    education: "教育制度",
    safety: "安全とセキュリティ",
    culture: "文化適応",
    attractions: "地元の観光名所",
    finances: "金融と銀行",
    entertainment: "エンターテイメントとレジャー",
    climate: "気候と環境",
    legal: "法務と金融",
  },
};

const hi: Translations = {
  appTitle: "आपकी दुनिया, फिर से कल्पना की गई",
  appSubtitle: "शुरू करने के लिए अपना मूल और गंतव्य चुनें।",
  footerText: (year) => `© ${year} टेरानोवा वर्ल्ड रिलोकेशन कंसल्टिंग। सभी जानकारी एआई-जनित है और इसे सत्यापित किया जाना चाहिए।`,
  countrySelector: {
    from: "से",
    to: "तक",
    placeholder: "एक गंतव्य चुनें...",
  },
  inquiryBox: {
    label: "क्या आपका कोई विशिष्ट प्रश्न है?",
    placeholder: "उदा., पालतू जानवर लाने के लिए क्या आवश्यकताएं हैं...",
    button: "पूछें",
    buttonLoading: "पूछ रहा है...",
  },
  infoCard: {
    loading: "आपकी व्यक्तिगत गाइड तैयार की जा रही है...",
    loadingSub: "इसमें कुछ समय लग सकता है।",
    error: "एक त्रुटि हुई",
    errorSub: "जानकारी प्राप्त करने में विफल। कृपया अपनी एपीआई कुंजी जांचें और पुनः प्रयास करें।",
    regarding: "विषय:",
    sourcesTitle: "स्रोत",
    exportButton: "पीडीएफ के रूप में निर्यात करें",
    exportingButton: "निर्यात हो रहा है...",
  },
  currencyCalculator: {
    title: "मुद्रा विनिमय कैलकुलेटर",
    amountLabel: "परिवर्तित करने के लिए राशि",
    from: "से",
    to: "में",
    rateLabel: "लाइव विनिमय दर",
    rateValue: (rate, from, to) => `1 ${from} ≈ ${rate.toFixed(4)} ${to}`,
    disclaimer: "दरें केवल सूचनात्मक उद्देश्यों के लिए हैं और भिन्न हो सकती हैं।",
  },
  imageBanner: {
    generatingVision: "आपके नए घर की एक दृष्टि उत्पन्न हो रही है...",
  },
  categories: {
    visa: "आप्रवासन और वीजा",
    cost: "जीवन यापन की लागत",
    housing: "आवास",
    health: "स्वास्थ्य प्रणाली",
    education: "शिक्षा प्रणाली",
    safety: "सुरक्षा",
    culture: "सांस्कृतिक अनुकूलन",
    attractions: "स्थानीय आकर्षण",
    finances: "वित्त और बैंकिंग",
    entertainment: "मनोरंजन और आराम",
    climate: "जलवायु और पर्यावरण",
    legal: "कानूनी और वित्तीय",
  },
};

const pt: Translations = {
  appTitle: "Seu Mundo, Reimaginado",
  appSubtitle: "Selecione sua origem e destino para começar.",
  footerText: (year) => `© ${year} Terranova World Relocation Consulting. Todas as informações são geradas por IA e devem ser verificadas.`,
  countrySelector: {
    from: "De",
    to: "Para",
    placeholder: "Selecione um destino...",
  },
  inquiryBox: {
    label: "Tem uma pergunta específica?",
    placeholder: "Ex: Quais são os requisitos para trazer um animal de estimação...",
    button: "Perguntar",
    buttonLoading: "Perguntando...",
  },
  infoCard: {
    loading: "Gerando seu guia personalizado...",
    loadingSub: "Isso pode levar um momento.",
    error: "Ocorreu um erro",
    errorSub: "Falha ao buscar informações. Verifique sua chave de API e tente novamente.",
    regarding: "Assunto:",
    sourcesTitle: "Fontes",
    exportButton: "Exportar como PDF",
    exportingButton: "Exportando...",
  },
  currencyCalculator: {
    title: "Calculadora de Câmbio",
    amountLabel: "Valor a converter",
    from: "De",
    to: "Para",
    rateLabel: "Taxa de Câmbio ao Vivo",
    rateValue: (rate, from, to) => `1 ${from} ≈ ${rate.toFixed(4)} ${to}`,
    disclaimer: "As taxas são apenas para fins informativos e podem variar.",
  },
  imageBanner: {
    generatingVision: "Gerando uma visão do seu novo lar...",
  },
  categories: {
    visa: "Imigração e Vistos",
    cost: "Custo de Vida",
    housing: "Moradia e Acomodação",
    health: "Sistema de Saúde",
    education: "Sistema Educacional",
    safety: "Segurança",
    culture: "Adaptação Cultural",
    attractions: "Atrações Locais",
    finances: "Finanças e Banco",
    entertainment: "Entretenimento e Lazer",
    climate: "Clima e Meio Ambiente",
    legal: "Legal e Financeiro",
  },
};


export const translations = {
  en,
  es,
  fr,
  de,
  zh,
  ja,
  hi,
  pt,
};
