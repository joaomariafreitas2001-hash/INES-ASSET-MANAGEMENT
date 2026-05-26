/* Alpha Ridge Capital — EN / ES / PT */
(function () {
  'use strict';

  const STORAGE_KEY = 'arc-lang';

  const T = {
    en: {
      'meta.title': 'Alpha Ridge Capital — ESADE Asset Management',
      'nav.brand': 'Alpha Ridge Capital',
      'nav.assignment': 'Assignment',
      'nav.journey': 'Our Process',
      'nav.strategy': 'Strategy',
      'nav.results': 'Results',
      'nav.allocator': 'Allocator Case',
      'nav.methodology': 'Methodology',
      'nav.qa': 'Q&A Prep',
      'nav.refs': 'References',
      'hero.badge': 'ESADE Asset Management | Group Project',
      'hero.title': 'Alpha Ridge Capital',
      'hero.sub': 'Multi-Asset Trend-Following CTA Strategy — simulated quant fund pitch raising USD 100M',
      'hero.kpi1': 'Net CAGR — Full Period',
      'hero.kpi2': 'Sharpe Ratio — Net',
      'hero.kpi3': 'GFC 2008–09 Return',
      'hero.kpi4': 'Maximum Drawdown',
      'hero.meta': 'Back-test period: 2006–2024 · In-sample: 2006–2019 · OOS: 2020–2024 · Universe: 10 liquid ETFs · Live pitch: 10 June 2025',
      'hero.disclaimer': 'All returns are <strong>simulated back-tests</strong>. No live track record exists. Past simulated performance is not indicative of future results. Presented for academic purposes only.',
      'assign.label': 'Context',
      'assign.title': 'The Assignment',
      'assign.sub': 'ESADE Asset Management course — group project requiring a full quant fund pitch as if raising USD 100M from institutional investors.',
      'assign.deliverables': 'Deliverables',
      'assign.del1': 'Pitch deck — PDF, max 15 slides',
      'assign.del2': 'Quant appendix — Jupyter notebook with full back-test',
      'assign.del3': 'Presentation to a panel as if raising capital',
      'assign.del3tag': 'Live 10 Jun',
      'assign.requirements': 'Requirements',
      'assign.req1': 'Design a systematic (rules-based) investment strategy',
      'assign.req2': 'Back-test it rigorously with proper IS/OOS split',
      'assign.req3': 'Present it to a panel of finance professionals',
      'assign.req4': 'Defend every assumption and parameter choice',
      'assign.req5': 'Address biases, capacity, and risk explicitly',
      'process.label': 'For the team',
      'process.title': 'How we got here',
      'process.sub': 'Full record of our work — from the assignment brief to the CTA strategy we are pitching. Use this section to align before the live presentation.',
      'process.status.title': 'Where we are now',
      'process.status.sub': 'Last updated: May 2025',
      'process.s1': 'Assignment & course materials reviewed',
      'process.s2': 'First strategy (equity L/S) built and back-tested',
      'process.s3': 'Negative results analysed — pivot decision documented',
      'process.s4': 'CTA strategy implemented in quant appendix',
      'process.s5': 'Pitch deck (PowerPoint) generated',
      'process.s6': 'Team website + charts published',
      'process.s7': 'Live pitch & panel Q&A — 10 June',
      'process.next': '<strong>Next:</strong> rehearse pitch narrative, assign speaking roles, run through Q&A below.',
      'journey.label': 'Decision log',
      'journey.title': 'Strategy evolution',
      'journey.sub': 'We did not start with a CTA. Below is what we tried, what failed, and why we switched.',
      'strategy.label': 'How it works',
      'strategy.title': 'The Strategy',
      'strategy.universe': 'Universe — 10 Liquid ETFs',
      'strategy.signal': 'Signal & Sizing',
      'strategy.dual': 'Why dual MA instead of single?',
      'strategy.dual.p': 'A single 10-month MA generates very similar signals to a 12-month MA but with different exact threshold dates. Using the average of both reduces threshold sensitivity — a robustness argument, not an optimisation.',
      'strategy.vol': 'Why vol-target instead of equal weight?',
      'strategy.vol.p': 'Equal-weight allocates equal capital but unequal risk. Without vol-targeting, one commodity position would dominate risk. Vol-targeting ensures every asset contributes equally to portfolio risk.',
      'strategy.cost': 'Why 5 bps transaction cost?',
      'strategy.cost.p': 'ETF bid-ask spreads for SPY, QQQ, TLT are 1–2 bps. We use 5 bps per side to be conservative. At ~37%/month turnover, friction is ~2.6% annually.',
      'strategy.exec': 'What is the execution protocol?',
      'strategy.exec.p': 'Signal computed at month-end close of day t. Weights entered at open of day t+1 (one business day lag). This strictly prevents look-ahead bias.',
      'results.label': 'Back-test',
      'results.title': 'Performance Results',
      'results.sub': '2006–2024 full period, IS/OOS split at 2020-01-01. All returns net of 5 bps/side transaction costs.',
      'results.insight': '<strong>Key insight:</strong> OOS Sharpe (0.45) is <em>higher</em> than IS (0.39) — no evidence of overfitting. Full-period correlation with 60/40: <strong>−0.02</strong>, confirming genuine diversification.',
      'results.stress': 'Stress Scenarios',
      'results.disclaimer': 'All returns are simulated. No live track record. Past simulated performance is not indicative of future results.',
      'alloc.label': 'The allocator case',
      'alloc.title': 'What does adding CTA do to your portfolio?',
      'alloc.sub': 'A CTA is not sold as a standalone replacement for equities. It is an overlay that improves risk-adjusted return. Use the slider to see the impact.',
      'alloc.slider': 'CTA Allocation',
      'alloc.cagr': 'Blended CAGR',
      'alloc.sharpe': 'Sharpe Ratio',
      'alloc.dd': 'Max Drawdown',
      'alloc.vol': 'Ann. Volatility',
      'alloc.crisis': 'Crisis performance comparison',
      'alloc.crisis.th1': 'Crisis',
      'alloc.crisis.th2': 'Pure 60/40',
      'alloc.crisis.th3': 'Blended',
      'alloc.crisis.th4': 'Delta',
      'alloc.crisis.r1': 'GFC 2008–09',
      'alloc.crisis.r2': 'COVID 2020',
      'alloc.crisis.r3': '2022 Rate-Hike',
      'alloc.chart.note': 'Sharpe ratio (blue) and max drawdown magnitude (red) vs CTA allocation. Dotted line = currently selected.',
      'alloc.disclaimer': 'Blended portfolio = (1−α) × 60/40 + α × CTA, monthly rebalanced. CTA returns net of 5 bps/side. All results are simulated.',
      'method.label': 'Rigour',
      'method.title': 'Methodology & Limitations',
      'method.data': 'Data',
      'method.backtest': 'Back-Test Rules',
      'method.capacity': 'Capacity',
      'method.bias': 'Known Biases & Mitigations',
      'qa.label': 'Pitch preparation',
      'qa.title': 'Anticipated panel questions',
      'qa.sub': 'The hardest questions a panel will ask, with prepared answers.',
      'refs.label': 'Academic foundation',
      'refs.title': 'References',
      'footer.l1': 'Alpha Ridge Capital — ESADE Asset Management Course — June 2025',
      'footer.l2': 'All returns are simulated back-tests. No live track record. Not investment advice. Academic purposes only.',
      'chart.equity': 'Equity curve (top), drawdown (middle), rolling 12-month Sharpe (bottom). Shaded region = OOS 2020–2024.',
      'chart.heatmap': 'Monthly returns heatmap (net). Green = positive month, red = negative.',
      'chart.corr': 'Return correlation matrix. CTA has near-zero correlation with SPY and 60/40.',
      'alloc.vs': 'vs pure 60/40',
      'alloc.pp': 'pp'
    },
    es: {
      'meta.title': 'Alpha Ridge Capital — Gestión de Activos ESADE',
      'nav.brand': 'Alpha Ridge Capital',
      'nav.assignment': 'Tarea',
      'nav.journey': 'Nuestro proceso',
      'nav.strategy': 'Estrategia',
      'nav.results': 'Resultados',
      'nav.allocator': 'Caso allocator',
      'nav.methodology': 'Metodología',
      'nav.qa': 'Prep. Q&A',
      'nav.refs': 'Referencias',
      'hero.badge': 'Gestión de Activos ESADE | Proyecto en grupo',
      'hero.title': 'Alpha Ridge Capital',
      'hero.sub': 'Estrategia CTA multiactivo de seguimiento de tendencia — pitch simulado de fondo cuantitativo por USD 100M',
      'hero.kpi1': 'CAGR neto — período completo',
      'hero.kpi2': 'Ratio de Sharpe — neto',
      'hero.kpi3': 'Retorno GFC 2008–09',
      'hero.kpi4': 'Drawdown máximo',
      'hero.meta': 'Back-test: 2006–2024 · In-sample: 2006–2019 · OOS: 2020–2024 · Universo: 10 ETFs líquidos · Pitch en vivo: 10 junio 2025',
      'hero.disclaimer': 'Todos los retornos son <strong>back-tests simulados</strong>. No existe track record en vivo. El rendimiento simulado pasado no garantiza resultados futuros. Solo fines académicos.',
      'assign.label': 'Contexto',
      'assign.title': 'La tarea',
      'assign.sub': 'Curso de Gestión de Activos ESADE — proyecto en grupo: pitch completo de un fondo cuantitativo como si se recaudaran USD 100M de inversores institucionales.',
      'assign.deliverables': 'Entregables',
      'assign.del1': 'Pitch deck — PDF, máx. 15 diapositivas',
      'assign.del2': 'Apéndice cuantitativo — notebook Jupyter con back-test completo',
      'assign.del3': 'Presentación ante un panel como si se recaudara capital',
      'assign.del3tag': 'En vivo 10 jun',
      'assign.requirements': 'Requisitos',
      'assign.req1': 'Diseñar una estrategia sistemática (basada en reglas)',
      'assign.req2': 'Back-test riguroso con división IS/OOS correcta',
      'assign.req3': 'Presentar ante un panel de profesionales de finanzas',
      'assign.req4': 'Defender cada supuesto y elección de parámetros',
      'assign.req5': 'Abordar sesgos, capacidad y riesgo explícitamente',
      'process.label': 'Para el equipo',
      'process.title': 'Cómo llegamos hasta aquí',
      'process.sub': 'Registro completo del trabajo — desde el brief de la tarea hasta la estrategia CTA que presentamos. Usad esta sección para alinearos antes del pitch en vivo.',
      'process.status.title': 'Dónde estamos ahora',
      'process.status.sub': 'Última actualización: mayo 2025',
      'process.s1': 'Tarea y materiales del curso revisados',
      'process.s2': 'Primera estrategia (L/S renta variable) construida y back-testeada',
      'process.s3': 'Resultados negativos analizados — pivote documentado',
      'process.s4': 'Estrategia CTA implementada en el apéndice cuantitativo',
      'process.s5': 'Pitch deck (PowerPoint) generado',
      'process.s6': 'Web del equipo + gráficos publicados',
      'process.s7': 'Pitch en vivo y Q&A del panel — 10 junio',
      'process.next': '<strong>Siguiente:</strong> ensayar la narrativa del pitch, repartir roles y repasar el Q&A de abajo.',
      'journey.label': 'Registro de decisiones',
      'journey.title': 'Evolución de la estrategia',
      'journey.sub': 'No empezamos con un CTA. Abajo está lo que probamos, qué falló y por qué cambiamos.',
      'strategy.label': 'Cómo funciona',
      'strategy.title': 'La estrategia',
      'strategy.universe': 'Universo — 10 ETFs líquidos',
      'strategy.signal': 'Señal y dimensionamiento',
      'strategy.dual': '¿Por qué doble MA en lugar de una sola?',
      'strategy.dual.p': 'Una MA de 10 meses genera señales muy similares a una de 12 meses pero con fechas umbral distintas. Promediar ambas reduce la sensibilidad al parámetro — argumento de robustez, no de optimización.',
      'strategy.vol': '¿Por qué vol-target en lugar de peso igual?',
      'strategy.vol.p': 'El peso igual asigna capital igual pero riesgo desigual. Sin vol-targeting, una posición en materias primas dominaría el riesgo. El vol-targeting iguala la contribución al riesgo del portfolio.',
      'strategy.cost': '¿Por qué 5 bps de coste de transacción?',
      'strategy.cost.p': 'Los spreads de ETFs como SPY, QQQ, TLT son de 1–2 bps. Usamos 5 bps por lado por conservadurismo. Con ~37% de rotación mensual, la fricción es ~2,6% anual.',
      'strategy.exec': '¿Cuál es el protocolo de ejecución?',
      'strategy.exec.p': 'Señal al cierre de fin de mes t. Pesos al open de t+1 (un día de retraso). Evita estrictamente el look-ahead bias.',
      'results.label': 'Back-test',
      'results.title': 'Resultados de rendimiento',
      'results.sub': 'Período 2006–2024, división IS/OOS en 2020-01-01. Retornos netos de 5 bps/lado.',
      'results.insight': '<strong>Conclusión clave:</strong> Sharpe OOS (0,45) es <em>superior</em> al IS (0,39) — sin señales de sobreajuste. Correlación con 60/40: <strong>−0,02</strong>, diversificación real.',
      'results.stress': 'Escenarios de estrés',
      'results.disclaimer': 'Todos los retornos son simulados. Sin track record en vivo. El rendimiento pasado simulado no es indicativo de resultados futuros.',
      'alloc.label': 'El caso del allocator',
      'alloc.title': '¿Qué aporta el CTA a tu cartera?',
      'alloc.sub': 'Un CTA no sustituye a la renta variable en solitario. Es un overlay que mejora el retorno ajustado por riesgo. Usa el slider para ver el impacto.',
      'alloc.slider': 'Asignación CTA',
      'alloc.cagr': 'CAGR combinado',
      'alloc.sharpe': 'Ratio de Sharpe',
      'alloc.dd': 'Drawdown máx.',
      'alloc.vol': 'Volatilidad anual',
      'alloc.crisis': 'Comparación en crisis',
      'alloc.crisis.th1': 'Crisis',
      'alloc.crisis.th2': '60/40 puro',
      'alloc.crisis.th3': 'Combinado',
      'alloc.crisis.th4': 'Delta',
      'alloc.crisis.r1': 'GFC 2008–09',
      'alloc.crisis.r2': 'COVID 2020',
      'alloc.crisis.r3': 'Subida tipos 2022',
      'alloc.chart.note': 'Sharpe (azul) y magnitud del drawdown máx. (rojo) vs asignación CTA. Línea punteada = selección actual.',
      'alloc.disclaimer': 'Cartera combinada = (1−α) × 60/40 + α × CTA, rebalanceo mensual. Retornos CTA netos de 5 bps/lado. Resultados simulados.',
      'method.label': 'Rigor',
      'method.title': 'Metodología y limitaciones',
      'method.data': 'Datos',
      'method.backtest': 'Reglas del back-test',
      'method.capacity': 'Capacidad',
      'method.bias': 'Sesgos conocidos y mitigaciones',
      'qa.label': 'Preparación del pitch',
      'qa.title': 'Preguntas anticipadas del panel',
      'qa.sub': 'Las preguntas más duras del panel, con respuestas preparadas.',
      'refs.label': 'Base académica',
      'refs.title': 'Referencias',
      'footer.l1': 'Alpha Ridge Capital — Gestión de Activos ESADE — Junio 2025',
      'footer.l2': 'Todos los retornos son back-tests simulados. Sin track record en vivo. No es asesoramiento de inversión. Solo fines académicos.',
      'chart.equity': 'Curva de capital (arriba), drawdown (centro), Sharpe móvil 12 meses (abajo). Zona sombreada = OOS 2020–2024.',
      'chart.heatmap': 'Mapa de calor de retornos mensuales (neto). Verde = mes positivo, rojo = negativo.',
      'chart.corr': 'Matriz de correlación. El CTA tiene correlación casi nula con SPY y 60/40.',
      'alloc.vs': 'vs 60/40 puro',
      'alloc.pp': 'pp'
    },
    pt: {
      'meta.title': 'Alpha Ridge Capital — Gestão de Ativos ESADE',
      'nav.brand': 'Alpha Ridge Capital',
      'nav.assignment': 'Trabalho',
      'nav.journey': 'O nosso processo',
      'nav.strategy': 'Estratégia',
      'nav.results': 'Resultados',
      'nav.allocator': 'Caso allocator',
      'nav.methodology': 'Metodologia',
      'nav.qa': 'Prep. Q&A',
      'nav.refs': 'Referências',
      'hero.badge': 'Gestão de Ativos ESADE | Projeto em grupo',
      'hero.title': 'Alpha Ridge Capital',
      'hero.sub': 'Estratégia CTA multiativo de seguimento de tendência — pitch simulado de fundo quantitativo a levantar USD 100M',
      'hero.kpi1': 'CAGR líquido — período completo',
      'hero.kpi2': 'Rácio de Sharpe — líquido',
      'hero.kpi3': 'Retorno GFC 2008–09',
      'hero.kpi4': 'Drawdown máximo',
      'hero.meta': 'Back-test: 2006–2024 · In-sample: 2006–2019 · OOS: 2020–2024 · Universo: 10 ETFs líquidos · Pitch ao vivo: 10 junho 2025',
      'hero.disclaimer': 'Todos os retornos são <strong>back-tests simulados</strong>. Não existe track record em vivo. O desempenho simulado passado não indica resultados futuros. Apenas fins académicos.',
      'assign.label': 'Contexto',
      'assign.title': 'O trabalho',
      'assign.sub': 'Curso de Gestão de Ativos ESADE — projeto em grupo: pitch completo de um fundo quantitativo como se se levantassem USD 100M de investidores institucionais.',
      'assign.deliverables': 'Entregáveis',
      'assign.del1': 'Pitch deck — PDF, máx. 15 slides',
      'assign.del2': 'Apêndice quantitativo — notebook Jupyter com back-test completo',
      'assign.del3': 'Apresentação a um painel como se se levantasse capital',
      'assign.del3tag': 'Ao vivo 10 jun',
      'assign.requirements': 'Requisitos',
      'assign.req1': 'Desenhar uma estratégia sistemática (baseada em regras)',
      'assign.req2': 'Back-test rigoroso com divisão IS/OOS correta',
      'assign.req3': 'Apresentar a um painel de profissionais de finanças',
      'assign.req4': 'Defender cada pressuposto e escolha de parâmetros',
      'assign.req5': 'Abordar vieses, capacidade e risco explicitamente',
      'process.label': 'Para a equipa',
      'process.title': 'Como chegámos aqui',
      'process.sub': 'Registo completo do trabalho — do brief da tarefa à estratégia CTA que vamos apresentar. Usa esta secção para alinhar antes do pitch ao vivo.',
      'process.status.title': 'Onde estamos agora',
      'process.status.sub': 'Última atualização: maio 2025',
      'process.s1': 'Tarefa e materiais do curso revistos',
      'process.s2': 'Primeira estratégia (L/S ações) construída e back-testada',
      'process.s3': 'Resultados negativos analisados — pivô documentado',
      'process.s4': 'Estratégia CTA implementada no apêndice quantitativo',
      'process.s5': 'Pitch deck (PowerPoint) gerado',
      'process.s6': 'Website da equipa + gráficos publicados',
      'process.s7': 'Pitch ao vivo e Q&A do painel — 10 junho',
      'process.next': '<strong>Próximo:</strong> ensaiar a narrativa do pitch, distribuir papéis e rever o Q&A abaixo.',
      'journey.label': 'Registo de decisões',
      'journey.title': 'Evolução da estratégia',
      'journey.sub': 'Não começámos com um CTA. Abaixo está o que tentámos, o que falhou e por que mudámos.',
      'strategy.label': 'Como funciona',
      'strategy.title': 'A estratégia',
      'strategy.universe': 'Universo — 10 ETFs líquidos',
      'strategy.signal': 'Sinal e dimensionamento',
      'strategy.dual': 'Porquê MA dupla em vez de uma só?',
      'strategy.dual.p': 'Uma MA de 10 meses gera sinais muito semelhantes a uma de 12 meses mas com datas limiar diferentes. A média das duas reduz a sensibilidade ao parâmetro — robustez, não otimização.',
      'strategy.vol': 'Porquê vol-target em vez de peso igual?',
      'strategy.vol.p': 'Peso igual aloca capital igual mas risco desigual. Sem vol-targeting, uma posição em matérias-primas dominaria o risco. O vol-targeting equilibra a contribuição ao risco.',
      'strategy.cost': 'Porquê 5 bps de custo de transação?',
      'strategy.cost.p': 'Spreads de ETFs como SPY, QQQ, TLT são 1–2 bps. Usamos 5 bps por lado por conservadorismo. Com ~37% de rotação mensal, a fricção é ~2,6% ao ano.',
      'strategy.exec': 'Qual é o protocolo de execução?',
      'strategy.exec.p': 'Sinal no fecho de fim de mês t. Pesos à abertura de t+1 (um dia de atraso). Evita rigorosamente look-ahead bias.',
      'results.label': 'Back-test',
      'results.title': 'Resultados de desempenho',
      'results.sub': 'Período 2006–2024, divisão IS/OOS em 2020-01-01. Retornos líquidos de 5 bps/lado.',
      'results.insight': '<strong>Insight chave:</strong> Sharpe OOS (0,45) é <em>superior</em> ao IS (0,39) — sem sinais de overfitting. Correlação com 60/40: <strong>−0,02</strong>, diversificação genuína.',
      'results.stress': 'Cenários de stress',
      'results.disclaimer': 'Todos os retornos são simulados. Sem track record em vivo. O desempenho passado simulado não é indicativo de resultados futuros.',
      'alloc.label': 'O caso do allocator',
      'alloc.title': 'O que acrescenta o CTA à tua carteira?',
      'alloc.sub': 'Um CTA não substitui ações isoladamente. É um overlay que melhora o retorno ajustado ao risco. Usa o slider para ver o impacto.',
      'alloc.slider': 'Alocação CTA',
      'alloc.cagr': 'CAGR combinado',
      'alloc.sharpe': 'Rácio de Sharpe',
      'alloc.dd': 'Drawdown máx.',
      'alloc.vol': 'Volatilidade anual',
      'alloc.crisis': 'Comparação em crises',
      'alloc.crisis.th1': 'Crise',
      'alloc.crisis.th2': '60/40 puro',
      'alloc.crisis.th3': 'Combinado',
      'alloc.crisis.th4': 'Delta',
      'alloc.crisis.r1': 'GFC 2008–09',
      'alloc.crisis.r2': 'COVID 2020',
      'alloc.crisis.r3': 'Subida de taxas 2022',
      'alloc.chart.note': 'Sharpe (azul) e magnitude do drawdown máx. (vermelho) vs alocação CTA. Linha tracejada = seleção atual.',
      'alloc.disclaimer': 'Carteira combinada = (1−α) × 60/40 + α × CTA, rebalanceamento mensal. Retornos CTA líquidos de 5 bps/lado. Resultados simulados.',
      'method.label': 'Rigor',
      'method.title': 'Metodologia e limitações',
      'method.data': 'Dados',
      'method.backtest': 'Regras do back-test',
      'method.capacity': 'Capacidade',
      'method.bias': 'Vieses conhecidos e mitigações',
      'qa.label': 'Preparação do pitch',
      'qa.title': 'Perguntas antecipadas do painel',
      'qa.sub': 'As perguntas mais difíceis do painel, com respostas preparadas.',
      'refs.label': 'Base académica',
      'refs.title': 'Referências',
      'footer.l1': 'Alpha Ridge Capital — Gestão de Ativos ESADE — Junho 2025',
      'footer.l2': 'Todos os retornos são back-tests simulados. Sem track record em vivo. Não é aconselhamento de investimento. Apenas fins académicos.',
      'chart.equity': 'Curva de capital (topo), drawdown (meio), Sharpe móvel 12 meses (fundo). Zona sombreada = OOS 2020–2024.',
      'chart.heatmap': 'Mapa de calor de retornos mensais (líquido). Verde = mês positivo, vermelho = negativo.',
      'chart.corr': 'Matriz de correlação. O CTA tem correlação quase nula com SPY e 60/40.',
      'alloc.vs': 'vs 60/40 puro',
      'alloc.pp': 'pp'
    }
  };

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return (saved && T[saved]) ? saved : 'en';
  }

  function setLang(lang) {
    if (!T[lang]) return;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'pt' ? 'pt' : lang;
    document.title = T[lang]['meta.title'];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = T[lang][key];
      if (val == null) return;
      if (el.getAttribute('data-i18n-html') === 'true') el.innerHTML = val;
      else el.textContent = val;
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    const tl = document.getElementById('journey-timeline');
    if (tl && window.ARC_TIMELINE && window.ARC_TIMELINE[lang]) {
      tl.innerHTML = window.ARC_TIMELINE[lang];
    }

    const qa = document.getElementById('qa-list');
    if (qa && window.ARC_QA && window.ARC_QA[lang]) {
      qa.innerHTML = window.ARC_QA[lang];
    }

  }

  window.ARC_I18N = { setLang: setLang, getLang: getLang, T: T };

  document.addEventListener('DOMContentLoaded', function () {
    const tl = document.getElementById('journey-timeline');
    if (tl) {
      window.ARC_TIMELINE = window.ARC_TIMELINE || {};
      window.ARC_TIMELINE.en = tl.innerHTML;
    }
    const qa = document.getElementById('qa-list');
    if (qa) {
      window.ARC_QA = window.ARC_QA || {};
      window.ARC_QA.en = qa.innerHTML;
    }

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
        const sl = document.getElementById('allocSlider');
        if (sl) sl.dispatchEvent(new Event('input'));
      });
    });
    setLang(getLang());
  });
})();
