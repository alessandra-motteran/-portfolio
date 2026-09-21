/* Motore condiviso del portfolio: reveal, parallasse, contatori, transizione di pagina, switch IT/EN */
(function () {
  const DICT = {
    // navigazione e ricorrenti
    "Metodo": "Method",
    "Case study": "Case studies",
    "Contatti": "Contacts",
    "Alessandra Motteran — Design Manager": "Alessandra Motteran — Design Manager",
    "Design Manager — B2B industriale": "Design Manager — Industrial B2B",
    "Progetto coperto da NDA: nome del cliente omesso, dati sensibili e materiali visivi anonimizzati o non mostrati per obblighi di riservatezza.":
      "Project under NDA: the client name is withheld, and sensitive data and visual material are anonymised or not shown for confidentiality reasons.",
    "Tutti i case study": "All case studies",
    "Contatti →": "Contacts →",
    "Vedi tutti i case study →": "See all case studies →",
    "← Sistema SCADA & Panel Design": "← SCADA System & Panel Design",
    "HMI di gruppo & Design System →": "Group HMI & Design System →",
    "← HMI di gruppo & Design System": "← Group HMI & Design System",
    "Operator Platform →": "Operator Platform →",
    "← Operator Platform": "← Operator Platform",
    "Self-shopping retail →": "Retail self-shopping →",
    "← Self-shopping retail": "← Retail self-shopping",
    "Contesto cliente": "Client context",
    "Impianti ad alta complessità tecnica e un team di sviluppo distribuito su più sedi europee.":
      "Highly complex production plants and a development team spread across several European sites.",
    "Due filoni di prodotto paralleli da tenere insieme, senza un impianto di design né un framework condiviso con lo sviluppo.":
      "Two parallel product streams to hold together, with no design foundation and no framework shared with development.",
    "Una risk map per livelli di fedeltà come standard di progetto, pianificazione trimestrale e user testing condotto in prima persona.":
      "A fidelity-based risk map as the project standard, quarterly planning and user testing run first-hand.",
    "Proprietaria del processo di design e punto di riferimento unico del cliente, fino al passaggio di consegne del proprio ruolo.":
      "Owner of the design process and the client's single point of reference, through to handing over her own role.",
    "Consegna on time con un terzo del budget annuale consumato, e un'offerta rinnovata per cinque anni consecutivi.":
      "On-time delivery with a third of the annual budget consumed, and a contract renewed five years running.",
    "Più società operative sotto un unico gruppo, ciascuna con la propria storia di prodotto digitale.":
      "Several operating companies under one group, each with its own digital product history.",
    "Interfacce macchina sviluppate in autonomia brand per brand, senza un linguaggio di design condiviso.":
      "Machine interfaces developed independently brand by brand, with no shared design language.",
    "Dal benchmark internazionale al principio progetta una volta, estendi al gruppo — con ripianificazione trasparente nel momento critico.":
      "From international benchmarking to the principle design once, extend to the group — with transparent re-planning at the critical moment.",
    "Proprietà end-to-end dei filoni di progetto e ideazione del Design System di Gruppo, proposto e non commissionato.":
      "End-to-end ownership of the project streams and the Group Design System, proposed rather than commissioned.",
    "Priorità consegnate nonostante la sospensione, e due nuove aree di progetto nate dalla fiducia del cliente.":
      "Agreed priorities delivered despite the suspension, and two new project areas born of client trust.",
    "Macchine utensili per i mercati italiano e internazionale, Cina inclusa.":
      "Machine tools for the Italian and international markets, China included.",
    "Progettare una piattaforma da zero in un contesto dove i bisogni reali non erano ancora mappati.":
      "Designing a platform from scratch in a context where real needs had not yet been mapped.",
    "Tre fasi sequenziali e verificabili, con ricerca sul campo tra Italia e Cina e Design Sprint iterativi.":
      "Three sequential, verifiable phases, with field research across Italy and China and iterative Design Sprints.",
    "Guida del progetto come Design Manager, dalle regole delle interviste al coordinamento con director e partner.":
      "Leading the project as Design Manager, from interview guidelines to coordination with directors and partner.",
    "Chiusura al 76% del budget stimato, con stime verificate a metà progetto e in chiusura.":
      "Closed at 76% of the estimated budget, with estimates verified at mid-project and at closing.",
    "Identificazione automatica e soluzioni tecnologiche per il retail su scala enterprise.":
      "Automatic identification and retail technology solutions at enterprise scale.",
    "Otto settimane per capire quali funzionalità avrebbero davvero differenziato il prodotto.":
      "Eight weeks to work out which features would genuinely differentiate the product.",
    "Benchmark competitivo, generazione di funzionalità candidate e prioritizzazione guidata con il cliente.":
      "Competitive benchmarking, generation of candidate features and guided prioritisation with the client.",
    "Guida di Discovery e Definizione, con la fase di Visual Design affidata a una collega specialista.":
      "Leading Discovery and Definition, with Visual Design handed to a specialist colleague.",
    "Consegna on time nel perimetro compresso: 45 funzionalità ridotte a 11, 27 schermate chiave.":
      "On-time delivery within the compressed scope: 45 features reduced to 11, 27 key screens.",
    "Sfida": "Challenge",
    "Approccio & metodo": "Approach & method",
    "Ruolo nel team": "Role in the team",
    "Risultati misurabili": "Measurable results",
    "01 — Contesto": "01 — Context",
    "02 — Sfida": "02 — Challenge",
    "03 — Approccio": "03 — Approach",
    "04 — Ruolo": "04 — Role",
    "05 — Risultati": "05 — Results",
    "06 — Evoluzione": "06 — Evolution",
    "Evoluzione nel tempo — 2021 / 2025": "How it evolved — 2021 / 2025",
    "Evoluzione nel tempo": "How it evolved",
    "Un'analisi competitor su un singolo brand apre la relazione con il gruppo.":
      "A competitor analysis for a single brand opens the relationship with the group.",
    "Quell'analisi si trasforma in un mandato di ricerca strategica a livello di gruppo, su scala internazionale.":
      "That analysis turns into a mandate for strategic research at group level, on an international scale.",
    "La relazione produce il primo redesign HMI completo su un brand del gruppo.":
      "The relationship produces the first complete HMI redesign for one of the group's brands.",
    "Lo stesso metodo viene esteso a un secondo brand e a un Design System per l'intero gruppo, superando un imprevisto contrattuale che avrebbe potuto interrompere la relazione, non solo il progetto — uno scope che cresce per fiducia costruita passo dopo passo, non per contratto pianificato dall'inizio.":
      "The same method is extended to a second brand and to a Design System for the whole group, surviving a contractual setback that could have ended the relationship, not just the project — a scope that grew through trust built step by step, not through a contract planned from the outset.",
    "Definizione processo e risk map": "Design process and risk map defined",
    "Doppio filone: SCADA e Panel Design": "Parallel streams: SCADA and Panel Design",
    "Pianificazione continuativa e handoff": "Continuous planning and handover",
    "La relazione parte con la fase di ricerca e raccolta dei requisiti sui due filoni di prodotto.":
      "The relationship begins with research and requirements gathering across the two product streams.",
    "La progettazione entra nel vivo con la definizione del processo di design e della prima risk map.":
      "Design work gets underway with the definition of the design process and the first risk map.",
    "Cresce nei due filoni paralleli — redesign SCADA e Panel Design — con ampliamento del team dedicato e introduzione di un design system a supporto della scalabilità.":
      "It grows across the two parallel streams — SCADA redesign and Panel Design — with a larger dedicated team and a design system introduced to support scalability.",
    "Il progetto entra in una fase di pianificazione continuativa per trimestre, con un passaggio di consegne strutturato verso il team del cliente — una relazione che dal 2021 matura da esecuzione a trasferimento di metodo.":
      "The project moves into continuous quarterly planning, with a structured handover to the client's team — a relationship that, since 2021, has matured from execution to transfer of method.",

    // home
    "Metto a fuoco": "I bring the problem",
    "il problema.": "into focus.",
    "Costruisco la direzione.": "I build the direction.",
    "Cinque anni di consulenza strategica su prodotti industriali complessi — manufacturing, machinery, retail tech. Oggi verso un ruolo in-house.":
      "Five years of strategic consulting on complex industrial products — manufacturing, machinery, retail tech. Now moving to an in-house role.",
    "anni": "years",
    "settori": "sectors",
    "Durata massima di una relazione cliente continuativa": "Longest continuous client relationship",
    "Case study di progetti enterprise B2B": "Enterprise B2B case studies",
    "Manufacturing e food processing, machinery industriale, retail tech": "Manufacturing and food processing, industrial machinery, retail tech",
    "Negli ultimi 5+ anni": "Over the past 5+ years",
    "ho lavorato come Design Manager in consulenza strategica per clienti B2B in contesti complessi e regolamentati — manufacturing, mobility, packaging — entrando spesso su progetti senza requisiti chiari e restando abbastanza a lungo da trasformarli in sistemi e relazioni che durano: da un singolo Panel Design a una Design Library completa, da un benchmark di mercato a un Design System di Gruppo.":
      "I have worked as a Design Manager in strategic consulting for B2B clients in complex, regulated contexts — manufacturing, mobility, packaging — often joining projects with no clear requirements and staying long enough to turn them into systems and relationships that last: from a single Panel Design to a complete Design Library, from a market benchmark to a Group-wide Design System.",
    "Ho gestito budget con margini di efficienza tra il 30% e il 40%, mantenuto la fiducia del cliente anche nei passaggi di team più delicati, e oggi porto questa esperienza verso un ruolo in-house, dove voglio applicare lo stesso metodo a un solo contesto, in profondità, nel tempo.":
      "I have managed budgets with efficiency margins between 30% and 40%, kept client trust through the most delicate team transitions, and I am now bringing that experience in-house, to apply the same method to a single context, in depth, over time.",
    "Ogni progetto nasce in un contesto diverso, ma segue la stessa logica: capire il contesto, strutturare un metodo, guidare team e cliente, misurare il risultato con numeri verificabili.":
      "Every project starts in a different context but follows the same logic: understand the context, structure a method, lead team and client, measure the outcome with verifiable numbers.",
    "Scopri il metodo →": "Explore the method →",
    "Vedi tutti →": "See all →",
    "Quattro case study selezionati — clicca per aprirli": "Four selected case studies — click to open",
    "Capire il contesto": "Understand the context",
    "Strutturare il metodo": "Structure the method",
    "Guidare team e cliente": "Lead team and client",
    "Misurare il risultato": "Measure the outcome",
    "Discovery, ricerca sul campo, benchmark": "Discovery, field research, benchmarking",
    "Framework, risk map, processo a sprint": "Framework, risk map, sprint-based process",
    "Leadership, prioritizzazione, decisioni": "Leadership, prioritisation, decisions",
    "Budget, tempi, esiti concreti": "Budget, timing, concrete outcomes",
    "Self-shopping retail": "Retail self-shopping",
    "Sistema SCADA & Panel Design": "SCADA System & Panel Design",
    "HMI di gruppo & Design System": "Group HMI & Design System",
    "Operator Platform": "Operator Platform",
    "Azienda enterprise · Retail tech": "Enterprise company · Retail tech",
    "Multinazionale enterprise · Food processing": "Enterprise multinational · Food processing",
    "Gruppo industriale multi-brand · Machinery": "Multi-brand industrial group · Machinery",
    "Azienda manufacturing · Macchine utensili": "Manufacturing company · Machine tools",
    "45 funzionalità candidate ridotte a 11, 27 schermate disegnate in 8 settimane.":
      "45 candidate features reduced to 11, 27 screens designed in 8 weeks.",
    "5 anni di relazione, budget gestito al 30-35%.": "5-year relationship, budget managed at 30-35%.",
    "4 anni di relazione, budget rivisto utilizzato al 72% nonostante una sospensione contrattuale.":
      "4-year relationship, 72% of the revised budget used despite a contractual suspension.",
    "Progetto chiuso al 76% del budget stimato.": "Project closed at 76% of the estimated budget.",
    "Se questi progetti ti sembrano rilevanti per il tuo team,": "If these projects feel relevant to your team,",
    "scrivimi": "get in touch",
    "Contattami": "Contact me",
    "Dettaglio di progetto": "Project detail",
    "Dettaglio SCADA / Panel Design": "SCADA / Panel Design detail",
    "Dettaglio HMI / Design System": "HMI / Design System detail",
    "Dettaglio Operator Platform": "Operator Platform detail",
    "Tutti i progetti sono coperti da accordi di riservatezza. I clienti sono descritti per tipologia, settore e fascia di fatturato, senza nomi né dati identificativi, e per lo stesso motivo non sono incluse immagini di interfacce o materiali di progetto.":
      "All projects are covered by confidentiality agreements. Clients are described by type, sector and revenue range, with no names or identifying data, and for the same reason no interface screens or project materials are included.",
    "Progetti internazionali in complessi settori B2B regolamentati": "International projects in complex, regulated B2B sectors",
    "Clienti B2B serviti in 5 anni": "B2B clients served in 5 years",
    "Designers guidati nel team": "Designers led in the team",
    "Un metodo, oltre venti progetti.": "One method, more than twenty projects.",
    "I progetti nascono in contesti diversi — food processing, macchine industriali, retail tech — ma condividono lo stesso punto di partenza: requisiti non ancora chiari, stakeholder multipli, ambiguità da strutturare prima di poter progettare qualsiasi cosa. In ognuno il lavoro segue la stessa logica: capire a fondo il contesto, introdurre un framework che lo renda gestibile, guidare il team e il cliente attraverso di esso, misurare il risultato con numeri verificabili.":
      "The projects start in different contexts — food processing, industrial machinery, retail tech — but share the same starting point: requirements not yet clear, multiple stakeholders, ambiguity to structure before anything can be designed. In each of them the work follows the same logic: understand the context in depth, introduce a framework that makes it manageable, lead team and client through it, measure the outcome with verifiable numbers.",
    "Discovery, ricerca sul campo, interviste, benchmark di mercato. Prima di progettare, mappare come funziona davvero il business e cosa fa il resto del settore.":
      "Discovery, field research, interviews, market benchmarking. Before designing, map how the business actually works and what the rest of the industry is doing.",
    "Se pensi che potremmo fare qualcosa di interessante insieme,": "If you think we could do something interesting together,",
    "Se pensi che potremmo fare qualcosa di interessante insieme, scrivimi.": "If you think we could do something interesting together, get in touch.",

    // hub case study
    "Quattro case study selezionati tra oltre venti progetti internazionali: ciascuno è partito da un contesto ambiguo e si è trasformato in un sistema o in una relazione che dura.":
      "Four case studies selected from more than twenty international projects: each one started from an ambiguous context and became a system — or a relationship — that lasts.",
    "Clicca un progetto per aprire il case study completo": "Click a project to open the full case study",
    "Progetti coperti da NDA: nomi dei clienti omessi, dati sensibili e materiali visivi anonimizzati o non mostrati per obblighi di riservatezza.":
      "Projects under NDA: client names are withheld, and sensitive data and visual material are anonymised or not shown for confidentiality reasons.",

    // pagina metodo
    "Quattro progetti, una sola logica.": "Four projects, one logic.",
    "I quattro progetti che seguono nascono in contesti diversi — food processing, macchine industriali, retail tech — ma condividono lo stesso punto di partenza: requisiti non ancora chiari, stakeholder multipli, ambiguità da strutturare prima di poter progettare qualsiasi cosa. In ognuno, il lavoro segue la stessa logica: capire a fondo il contesto, introdurre un framework che lo renda gestibile, guidare il team e il cliente attraverso di esso, misurare il risultato con numeri verificabili.":
      "The four projects that follow start in different contexts — food processing, industrial machinery, retail tech — but share the same starting point: requirements not yet clear, multiple stakeholders, ambiguity to be structured before anything can be designed. In each of them the work follows the same logic: understand the context in depth, introduce a framework that makes it manageable, lead team and client through it, measure the outcome with verifiable numbers.",
    "Discovery, ricerca sul campo, interviste, benchmark di mercato. Prima di progettare, mappare come funziona davvero il business e cosa fa il resto del settore.":
      "Discovery, field research, interviews, market benchmarking. Before designing, map how the business actually works and what the rest of the industry is doing.",
    "Framework condivisi, risk map per livelli di fedeltà, processo a sprint. Rendere il contesto gestibile e leggibile da tutti, design e sviluppo.":
      "Shared frameworks, a fidelity-based risk map, a sprint process. Making the context manageable and legible to everyone, design and development alike.",
    "Leadership sul processo, prioritizzazione esplicita, decisioni prese con il cliente e non al posto suo. Un solo punto di riferimento tra i filoni di lavoro.":
      "Leadership over the process, explicit prioritisation, decisions taken with the client rather than for them. A single point of reference across workstreams.",
    "Budget consumato, tempi rispettati, scope consegnato. Ogni progetto si chiude con numeri verificabili, non con impressioni.":
      "Budget consumed, deadlines met, scope delivered. Every project closes with verifiable numbers, not impressions.",
    "Lo stesso metodo, quattro contesti diversi.": "The same method, four different contexts.",
    "Vedi i case study": "See the case studies",

    // contatti
    "Parliamone": "Let's talk",
    "Se questi progetti ti sembrano rilevanti per un ruolo nel tuo team, scrivimi.":
      "If these projects feel relevant to a role on your team, get in touch.",
    "Aperta a ruoli di Design Leadership, Lead Product Design, Product Manager, Design Project Manager e Design Strategy in contesti complessi e internazionali.":
      "Open to Design Leadership, Lead Product Design, Product Manager, Design Project Manager and Design Strategy roles in complex, international contexts.",
    "Disponibilità": "Availability",
    "Area Modena, Bologna e remoto": "Modena and Bologna area, and remote",
    "Prenota una call": "Book a call",
    "Scrivimi una mail": "Send me an email",
    "Trenta minuti, agenda aperta: contesto del ruolo, progetti, domande.":
      "Thirty minutes, open agenda: the role, the projects, your questions.",

    // intestazioni case study
    "Case study 01 — Food processing": "Case study 01 — Food processing",
    "Case study 02 — Machinery": "Case study 02 — Machinery",
    "Case study 03 — Macchine utensili": "Case study 03 — Machine tools",
    "Case study 04 — Retail tech": "Case study 04 — Retail tech",
    "Multinazionale enterprise del processing e packaging alimentare. Cinque anni di relazione, due filoni di prodotto, un metodo trasferito al team del cliente.":
      "Enterprise multinational in food processing and packaging. Five years of relationship, two product streams, a method handed over to the client's team.",
    "Gruppo industriale multi-brand nelle macchine per la lavorazione di metalli e serramenti. Da un benchmark su un singolo brand a un sistema di design condiviso.":
      "Multi-brand industrial group in metal and window-frame machining. From a single-brand benchmark to a shared design system.",
    "Azienda manufacturing di centri di lavorazione industriali. Piattaforma per gli operatori di macchina progettata da zero, con ricerca tra Italia e Cina.":
      "Manufacturing company making industrial machining centres. A machine-operator platform designed from scratch, with research across Italy and China.",
    "Self-shopping di prossima generazione per supermercati: da 45 funzionalità candidate a 11, in otto settimane.":
      "Next-generation self-shopping for supermarkets: from 45 candidate features to 11, in eight weeks.",

    // progetto 01
    "Multinazionale enterprise nel settore del processing e packaging industriale per l'alimentare, fatturato annuo superiore ai €10 miliardi — impianti e macchinari di produzione ad alta complessità tecnica, team di sviluppo interno distribuito su più sedi europee.":
      "Enterprise multinational in industrial food processing and packaging, annual revenue above €10 billion — highly complex production plants and machinery, with an in-house development team spread across several European sites.",
    "Doppio filone di prodotto: redesign completo del sistema SCADA per il monitoraggio e controllo della produzione lato food processing, e design dei pannelli di controllo (HMI) calati sul singolo macchinario. Il progetto parte senza un impianto di design strutturato: componenti costruiti che generano inconsistenza visiva, debito tecnico e difficoltà di scalabilità tra i due filoni; l'assenza di un framework di tracciamento crea rischio di fraintendimenti tra design e sviluppo; la pianificazione dello sviluppo non è condivisa con il team design, con il rischio concreto di mancare le date di rilascio se emergono urgenze non pianificate.":
      "Two parallel product streams: a complete redesign of the SCADA system for monitoring and controlling food-processing production, and the design of machine-level control panels (HMI). The project starts with no structured design foundation: components built by eye generate visual inconsistency, technical debt and scalability problems across the two streams; the lack of a tracking framework creates the risk of misunderstandings between design and development; development planning is not shared with the design team, with a concrete risk of missing release dates whenever unplanned urgencies appear.",
    "Introduzione e proprietà della risk map basata sui livelli di fedeltà del design, adottata come standard per l'intero progetto.":
      "Introduced and owned the risk map based on design fidelity levels, adopted as the standard for the whole project.",
    "Pianificazione trimestrale delle attività di design e sviluppo, con gestione del lavoro per sprint su Jira, stima a story point e revisione continua degli scostamenti tra stima e capacità reale del team.":
      "Quarterly planning of design and development activities, with sprint-based work management in Jira, story-point estimation and continuous review of the gap between estimates and the team's real capacity.",
    "Progettazione e conduzione diretta dello user testing con clienti reali, interni ed esterni: definizione di scenari e script, registrazione delle sessioni e mappatura dei click, sintesi degli insight e applicazione diretta al design.":
      "Designed and ran user testing directly with real users, internal and external: scenarios and scripts, session recordings and click mapping, insight synthesis applied straight back into the design.",
    "Gestione diretta dell'allineamento tra la pianificazione di design e le deadline di release e sviluppo del cliente, in coordinamento costante con il project management interno.":
      "Direct ownership of the alignment between design planning and the client's release and development deadlines, in constant coordination with internal project management.",
    "Guida del confronto con gli stakeholder di progetto su Figma e Airtable per la raccolta strutturata di feedback e requisiti.":
      "Led the exchange with project stakeholders on Figma and Airtable for structured collection of feedback and requirements.",
    "Struttura e architettura": "Structure and architecture",
    "Validazione": "Validation",
    "Prototipo": "Prototype",
    "Delivery": "Delivery",
    "I quattro livelli di fedeltà su cui è costruita la risk map adottata dal progetto.":
      "The four fidelity levels the project's risk map is built on.",
    "Ownership del processo di design del progetto fin dall'inizio: definizione e introduzione della metodologia di risk map basata sui livelli di fedeltà, adottata come standard per l'intero progetto.":
      "Ownership of the project's design process from the start: defined and introduced the fidelity-based risk map methodology, adopted as the standard for the whole project.",
    "Punto di riferimento unico per il cliente nel tenere insieme i due filoni paralleli e i relativi requisiti, con un ruolo di guida attiva del core team del cliente nelle fasi decisionali — non solo di supporto, ma di indirizzo sulle scelte da prendere.":
      "Single point of reference for the client in holding the two parallel streams and their requirements together, actively guiding the client's core team through decision-making — not only supporting it, but steering the choices.",
    "Responsabilità diretta sulla pianificazione delle attività di design in coordinamento con le deadline di sviluppo del cliente, e sulla gestione del team interno: due risorse allocate full time, estensione delle offerte negoziata e confermata più volte nell'arco dei cinque anni, gestione dell'uscita di una risorsa chiave con handoff strutturato per garantire continuità.":
      "Direct responsibility for design planning in step with the client's development deadlines, and for managing the internal team: two full-time resources, contract extensions negotiated and confirmed several times across the five years, and the exit of a key resource handled with a structured handoff to guarantee continuity.",
    "Nel 2025, titolare del passaggio di consegne del proprio ruolo verso il team del cliente — un trasferimento di metodo, non solo di attività, reso possibile dalla profondità della conoscenza costruita nel tempo.":
      "In 2025, owner of the handover of her own role to the client's team — a transfer of method, not just of tasks, made possible by the depth of knowledge built over time.",
    "Utilizzo del budget nei tempi stimati a inizio anno": "Budget used within the timeframe estimated at the start of the year",
    "Consumo medio mensile del budget": "Average monthly budget consumption",
    "Relazione continuativa, con estensioni dell'offerta confermate più volte": "Continuous relationship, with contract extensions confirmed several times",
    "Consegna on time e on target nell'anno di riferimento. Valore riconosciuto esplicitamente dal cliente nel mantenere un filo conduttore tra i diversi filoni di lavoro e nel guidare il team nelle fasi decisionali.":
      "Delivery on time and on target in the reference year. The client explicitly recognised the value of keeping a common thread across the different workstreams and of guiding the team through decision-making.",
    "Ricerca e raccolta requisiti": "Research and requirements gathering",
    "Definizione del processo e prima risk map": "Design process defined and first risk map",
    "Doppio filone SCADA e Panel Design, design system a supporto": "Parallel SCADA and Panel Design streams, supported by a design system",
    "Pianificazione continuativa e passaggio di consegne": "Continuous planning and handover",
    "Il progetto nasce nel 2021 con la ricerca e la raccolta dei requisiti, e prosegue nel 2022 con la definizione del processo di design e della prima risk map. Cresce nel 2023-2024 nei due filoni paralleli — redesign SCADA e Panel Design — con ampliamento del team dedicato e introduzione di un design system a supporto della scalabilità. Nel 2025 entra in una fase di pianificazione continuativa per trimestre, con un passaggio di consegne strutturato verso il team del cliente: in cinque anni la relazione matura da esecuzione a trasferimento di metodo.":
      "The project starts in 2021 with research and requirements gathering, and continues in 2022 with the definition of the design process and the first risk map. It grows in 2023-2024 across the two parallel streams — SCADA redesign and Panel Design — with a larger dedicated team and a design system introduced to support scalability. In 2025 it moves into continuous quarterly planning, with a structured handover to the client's team: over five years the relationship matures from execution to transfer of method.",
    "Dettaglio SCADA (da fornire)": "SCADA detail (to be supplied)",
    "Dettaglio Panel Design (da fornire)": "Panel Design detail (to be supplied)",

    // progetto 02
    "Gruppo industriale multi-brand nel settore delle macchine per la lavorazione di metalli e serramenti, fatturato annuo di circa €350 milioni, composto da diverse società operative sotto un unico gruppo.":
      "Multi-brand industrial group in machinery for metal and window-frame processing, annual revenue around €350 million, made up of several operating companies under one group.",
    "Ogni brand del gruppo ha sviluppato nel tempo interfacce macchina in autonomia, senza un linguaggio di design condiviso — una frammentazione che pesa sia sull'esperienza utente sia sulla capacità del gruppo di scalare gli investimenti in digitale tra le diverse società.":
      "Each brand in the group developed its machine interfaces independently over time, with no shared design language — a fragmentation that weighs both on user experience and on the group's ability to scale digital investment across its companies.",
    "Il percorso parte nel 2021 con un'analisi competitor online e in fiera per uno dei brand del gruppo, strutturata in un database di riferimento, seguita da una fase di ricerca preliminare su una piattaforma digitale di gruppo.":
      "The path starts in 2021 with competitor analysis online and at trade fairs for one of the group's brands, structured into a reference database, followed by preliminary research on a group-wide digital platform.",
    "Nel 2023 la ricerca si allarga a un benchmark di mercato su scala internazionale — 13 competitor globali, analisi desk e sul campo in fiera — fornendo al gruppo una visione strategica ampia sul posizionamento digitale del settore.":
      "In 2023 the research widens into an international market benchmark — 13 global competitors, desk and on-site analysis at trade fairs — giving the group a broad strategic view of digital positioning in the sector.",
    "Dal 2024 l'approccio diventa progetta una volta, estendi al gruppo: un redesign HMI completo viene sviluppato in profondità su un primo brand e poi esteso, adattandolo, a un secondo brand, riducendo tempo e rischio grazie al lavoro già validato.":
      "From 2024 the approach becomes design once, extend to the group: a complete HMI redesign is developed in depth for a first brand and then adapted and extended to a second one, cutting time and risk thanks to work already validated.",
    "Ricerca diretta sul campo, ideata e condotta in prima persona, con interviste ai clienti finali dei macchinari per far emergere requisiti espliciti e bisogni latenti prima di ogni redesign.":
      "Field research conceived and run first-hand, with interviews of the machines' end customers to surface explicit requirements and latent needs before each redesign.",
    "Nel 2025 un ordine non firmato in tempo dal cliente costringe a una sospensione temporanea del progetto: la risposta è una ripianificazione trasparente delle attività residue, basata su ore disponibili, priorità del cliente e valore strategico, comunicando apertamente cosa non si sarebbe potuto garantire con il nuovo budget — invece di lasciarlo scoprire a consegna.":
      "In 2025 an order the client did not sign in time forces a temporary suspension: the response is a transparent re-planning of the remaining work, based on available hours, client priorities and strategic value, openly communicating what the new budget could not guarantee — instead of letting it surface at delivery.",
    "Proprietà end-to-end della gestione dei filoni di progetto, con responsabilità diretta su pianificazione, priorità e allocazione delle risorse tra i diversi brand del gruppo.":
      "End-to-end ownership of the project streams, with direct responsibility for planning, priorities and resource allocation across the group's brands.",
    "Ideazione e proposta del Design System di Gruppo come nuova direzione progettuale, e guida dell'intera realizzazione — dalla mappatura di brand e scelte di design esistenti fino alla struttura delle librerie condivise.":
      "Conceived and proposed the Group Design System as a new direction, and led its entire delivery — from mapping brands and existing design decisions to structuring the shared libraries.",
    "Conduzione diretta della ricerca utente con i clienti finali dei macchinari, per raccogliere requisiti espliciti e bisogni latenti non ancora formulati dal cliente stesso.":
      "Ran user research directly with the machines' end customers, gathering explicit requirements and latent needs the client had not yet articulated.",
    "Ruolo reso possibile dalla conoscenza pluriennale del cliente costruita negli anni precedenti, che ha permesso di proporre — non solo eseguire — la direzione strategica del progetto.":
      "A role made possible by years of accumulated client knowledge, which allowed proposing — not just executing — the project's strategic direction.",
    "Gestione diretta della ripianificazione durante la sospensione contrattuale del 2025, mantenendo la fiducia degli stakeholder nel momento più critico.":
      "Directly managed the re-planning during the 2025 contractual suspension, keeping stakeholder trust at the most critical moment.",
    "Utilizzo del budget rivisto dopo la sospensione contrattuale": "Use of the revised budget after the contractual suspension",
    "Nuove aree di progetto non previste dall'offerta iniziale": "New project areas beyond the original proposal",
    "Competitor globali analizzati nel benchmark di mercato": "Global competitors analysed in the market benchmark",
    "Nonostante la sospensione, consegna delle priorità concordate con il cliente. La fiducia degli stakeholder porta a due aree di progetto non previste dall'offerta iniziale: l'estensione del redesign a un secondo brand e l'avvio di un Design System condiviso per l'intero gruppo. I clienti finali intervistati riconoscono esplicitamente il valore dell'approccio proattivo di coinvolgimento diretto.":
      "Despite the suspension, the priorities agreed with the client were delivered. Stakeholder trust led to two project areas beyond the original proposal: extending the redesign to a second brand and starting a shared Design System for the whole group. The end customers interviewed explicitly recognised the value of the proactive, hands-on approach.",
    "Benchmark competitor su un brand": "Competitor benchmark for one brand",
    "Ricerca strategica a livello di gruppo": "Strategic research at group level",
    "Primo redesign HMI completo": "First complete HMI redesign",
    "Estensione a un secondo brand e Design System di Gruppo": "Extension to a second brand and Group Design System",
    "Un'analisi competitor su un singolo brand nel 2021 si trasforma, nel 2023, in un mandato di ricerca strategica a livello di gruppo. Nel 2024 la relazione produce il primo redesign HMI completo, e nel 2025 lo stesso metodo viene esteso a un secondo brand e a un progetto di Design System per l'intero gruppo — superando anche un imprevisto contrattuale che avrebbe potuto interrompere la relazione, non solo il progetto. Quattro anni in cui lo scope cresce non per contratto pianificato dall'inizio, ma per fiducia costruita passo dopo passo.":
      "A competitor analysis for a single brand in 2021 becomes, in 2023, a mandate for strategic research at group level. In 2024 the relationship produces the first complete HMI redesign, and in 2025 the same method is extended to a second brand and to a Design System project for the whole group — surviving a contractual setback that could have ended the relationship, not just the project. Four years in which the scope grew not through a contract planned from the outset, but through trust built step by step.",
    "Dettaglio HMI (da fornire)": "HMI detail (to be supplied)",
    "Dettaglio libreria (da fornire)": "Library detail (to be supplied)",

    // progetto 03
    "Azienda manufacturing nel settore delle macchine utensili industriali (centri di lavorazione e asportazione truciolo), fatturato annuo di circa €108 milioni, con presenza sui mercati italiano e internazionale, incluso il mercato cinese.":
      "Manufacturing company in industrial machine tools (machining and chip-removal centres), annual revenue around €108 million, present in the Italian and international markets, including China.",
    "Progettare da zero la piattaforma digitale per gli operatori di macchina, in un contesto dove i bisogni reali non erano ancora mappati: servivano da un lato una comprensione approfondita del business e della tecnologia interna, dall'altro un confronto diretto con il mercato — inclusi i clienti finali in Italia e in Cina — per capire come si posizionava l'offerta rispetto ai competitor internazionali del settore.":
      "Designing the digital platform for machine operators from scratch, in a context where real needs had not yet been mapped: it required both a deep understanding of the business and its internal technology, and direct contact with the market — including end customers in Italy and China — to understand how the offer stood against international competitors.",
    "Applicazione di un metodo strutturato in fasi sequenziali e verificabili — Discovery, Product Definition, Product Design — fatto proprio nel tempo e guidato con proprie regole e indicazioni operative.":
      "Application of a method structured into sequential, verifiable phases — Discovery, Product Definition, Product Design — made her own over time and led with her own rules and operating guidance.",
    "Sulla fase di Discovery, definizione dell'impostazione e delle linee guida per le interviste — Business e Technology Discovery su oltre dieci ruoli chiave dell'organizzazione cliente, dal R&D al Service, dalla Supply Chain al Marketing — e per il Market Discovery, con visite dirette a clienti e competitor sia in Italia sia in Cina e benchmark competitivo sulle soluzioni digitali del settore.":
      "For Discovery, defined the setup and guidelines for interviews — Business and Technology Discovery across more than ten key roles in the client organisation, from R&D to Service, from Supply Chain to Marketing — and for Market Discovery, with direct visits to customers and competitors in both Italy and China and a competitive benchmark of the sector's digital solutions.",
    "La fase di Product Design è stata organizzata in Design Sprint iterativi, per validare le funzionalità chiave con il cliente prima della consegna finale.":
      "Product Design was organised into iterative Design Sprints, validating key features with the client before final delivery.",
    "Guida del progetto in qualità di Design Manager, con definizione delle regole e delle indicazioni operative seguite dal team nella conduzione delle interviste di Discovery, e responsabilità diretta sul coordinamento con i design consultant, i director e il partner coinvolti.":
      "Led the project as Design Manager, defining the rules and operating guidance the team followed in the Discovery interviews, with direct responsibility for coordination with the design consultants, directors and partner involved.",
    "Gestione diretta della trasferta in Cina per il Business Discovery e le visite di mercato.":
      "Directly managed the trip to China for Business Discovery and market visits.",
    "Leadership riconosciuta esplicitamente dal team come fattore che ha reso l'ambiente di lavoro efficiente e concentrato, in un progetto con una fase di ricerca internazionale intensa in tempi compressi.":
      "Leadership explicitly recognised by the team as what made the working environment efficient and focused, in a project with an intense international research phase on a compressed timeline.",
    "Budget stimato effettivamente utilizzato a chiusura": "Estimated budget actually used at closing",
    "Ruoli chiave dell'organizzazione cliente intervistati in Discovery": "Key roles in the client organisation interviewed during Discovery",
    "mercati": "markets",
    "Ricerca sul campo tra Italia e Cina, clienti finali e competitor": "Field research across Italy and China, end customers and competitors",
    "Progetto chiuso al 76% del budget stimato, con stime di risparmio e allocazione delle risorse confermate accurate a metà progetto e riverificate in chiusura. Soddisfazione del cliente espressa ripetutamente in più momenti chiave — trasferta in Cina, consegna della Discovery, sessioni di Design Sprint — con riconoscimento esplicito della qualità dei risultati su journey map, concept di design e funzionalità chiave progettate durante gli sprint.":
      "Project closed at 76% of the estimated budget, with savings estimates and resource allocation confirmed accurate at mid-project and re-checked at closing. Client satisfaction expressed repeatedly at key moments — the trip to China, the Discovery handover, the Design Sprint sessions — with explicit recognition of the quality of the journey maps, design concepts and key features designed during the sprints.",
    "Dettaglio journey map (da fornire)": "Journey map detail (to be supplied)",
    "Dettaglio concept (da fornire)": "Concept detail (to be supplied)",

    // progetto 04
    "Azienda enterprise nel settore dell'identificazione automatica e delle soluzioni tecnologiche per il retail, fatturato annuo di circa €500 milioni.":
      "Enterprise company in automatic identification and retail technology solutions, annual revenue around €500 million.",
    "Progettare, in un arco di tempo compresso (8 settimane), la prossima generazione della soluzione digitale self-shopping per supermercati: individuare quali funzionalità avrebbero davvero fatto la differenza rispetto ai competitor, partendo da un mercato dove le soluzioni esistenti erano numerose ma poco distintive.":
      "Designing, within a compressed eight-week window, the next generation of the self-shopping solution for supermarkets: identifying which features would genuinely make a difference against competitors, in a market where existing solutions were numerous but hardly distinctive.",
    "Guida dell'analisi di benchmark su due competitor diretti, mappando inizialmente 15 funzionalità sul campo e poi ampliando la ricerca con metodi da remoto fino a 31 evidenze correlate a 35 funzionalità competitive.":
      "Led the benchmark analysis of two direct competitors, first mapping 15 features in the field and then widening the research remotely to 31 pieces of evidence linked to 35 competitive features.",
    "Da questa base, generazione di 11 nuove funzionalità come opportunità di differenziazione per il cliente, raggruppate in cinque categorie per un totale di 45 funzionalità candidate.":
      "From that base, generated 11 new features as differentiation opportunities for the client, grouped into five categories for a total of 45 candidate features.",
    "Guida diretta del cliente nel processo di prioritizzazione, fino alla selezione finale delle funzionalità da sviluppare nella fase successiva.":
      "Guided the client directly through prioritisation, up to the final selection of features to develop in the next phase.",
    "Sostenibilità": "Sustainability",
    "Inclusività": "Inclusivity",
    "Coinvolgimento del cliente": "Customer engagement",
    "Convenienza": "Value for money",
    "Assistenza allo shopping": "Shopping assistance",
    "Guida della fase di Discovery e Definizione: benchmark competitivo, generazione delle funzionalità candidate e prioritizzazione con il cliente.":
      "Led the Discovery and Definition phase: competitive benchmark, generation of candidate features and prioritisation with the client.",
    "Gestione efficiente delle risorse nella fase iniziale di analisi, contenendo il rischio di consumo eccessivo di ore nelle fasi successive.":
      "Efficient resource management during the initial analysis, containing the risk of over-spending hours in later phases.",
    "La fase di Visual Design è stata affidata a una collega con competenza specialistica in UX/UI, sulla base del lavoro di Discovery e Definizione precedentemente impostato.":
      "Visual Design was handed to a colleague with specialist UX/UI expertise, building on the Discovery and Definition work already set up.",
    "Funzionalità candidate, poi selezionate per lo sviluppo": "Candidate features, then selected for development",
    "Schermate chiave disegnate sulla base di Discovery e Definizione": "Key screens designed on the basis of Discovery and Definition",
    "sett.": "weeks",
    "Perimetro compresso, consegna on time e on target": "Compressed scope, delivery on time and on target",
    "Consegna on time e on target nonostante il perimetro compresso di 8 settimane; 45 funzionalità candidate ridotte a 11 selezionate per lo sviluppo; risultato finale di 27 schermate chiave disegnate sulla base del lavoro di Discovery e Definizione.":
      "Delivery on time and on target despite the compressed eight-week scope; 45 candidate features reduced to 11 selected for development; a final result of 27 key screens designed on the basis of the Discovery and Definition work.",
    "Dettagli di interfaccia anonimizzati — nomi, marchi e dati dei prodotti non sono leggibili.":
      "Anonymised interface details — product names, brands and data are not legible.",
    "Dettaglio UI": "UI detail",
    "Dettaglio": "Detail"
  };

  const FRAG = {
    "Doppio filone di prodotto:": "Two parallel product streams:",
    "Introduzione e proprietà della risk map basata sui livelli di fedeltà del design": "Introduced and owned the risk map based on design fidelity levels",
    "Punto di riferimento unico per il cliente": "Single point of reference for the client",
    "un trasferimento di metodo, non solo di attività": "a transfer of method, not just of tasks",
    "senza un linguaggio di design condiviso": "with no shared design language",
    "progetta una volta, estendi al gruppo": "design once, extend to the group",
    "Ideazione e proposta del Design System di Gruppo": "Conceived and proposed the Group Design System",
    "una ripianificazione trasparente delle attività residue": "a transparent re-planning of the remaining work",
    "i bisogni reali non erano ancora mappati": "real needs had not yet been mapped",
    "Applicazione di un metodo strutturato in fasi sequenziali e verificabili": "Application of a method structured into sequential, verifiable phases",
    "Guida del progetto in qualità di Design Manager": "Led the project as Design Manager",
    "Gestione diretta della trasferta in Cina": "Directly managed the trip to China",
    "quali funzionalità avrebbero davvero fatto la differenza rispetto ai competitor": "which features would genuinely make a difference against competitors",
    "generazione di 11 nuove funzionalità come opportunità di differenziazione": "generated 11 new features as differentiation opportunities",
    "Guida diretta del cliente nel processo di prioritizzazione": "Guided the client directly through prioritisation",
    "Guida della fase di Discovery e Definizione": "Led the Discovery and Definition phase"
  };
  const FRAG_REV = {};
  Object.keys(FRAG).forEach(k => { FRAG_REV[FRAG[k]] = k; });

  const REV = {};
  Object.keys(DICT).forEach(k => { REV[DICT[k]] = k; });

  let nodes = [];
  let richNodes = [];
  let lang = (typeof localStorage !== 'undefined' && localStorage.getItem('portfolio-lang')) || 'it';

  function collect() {
    nodes = [];
    richNodes = [];
    const rich = new Set();
    document.body.querySelectorAll('p, dd, span, li').forEach(el => {
      const strong = el.querySelector(':scope > strong');
      if (!strong) return;
      const full = (el.textContent || '').replace(/\s+/g, ' ').trim();
      const fullIt = REV[full] || full;
      const fragTxt = (strong.textContent || '').replace(/\s+/g, ' ').trim();
      const fragIt = FRAG_REV[fragTxt] || fragTxt;
      if (!DICT[fullIt] || !FRAG[fragIt]) return;
      richNodes.push({ el, it: fullIt, frag: fragIt, style: strong.getAttribute('style') || '' });
      rich.add(el);
    });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const p = n.parentNode;
        if (!p || /^(SCRIPT|STYLE)$/.test(p.nodeName)) return NodeFilter.FILTER_REJECT;
        for (let a = p; a && a !== document.body; a = a.parentNode) if (rich.has(a)) return NodeFilter.FILTER_REJECT;
        return n.nodeValue && n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    let n;
    while ((n = walker.nextNode())) {
      const raw = n.nodeValue, t = raw.trim();
      if (DICT[t] || REV[t]) nodes.push({ node: n, it: REV[t] || t, pre: raw.slice(0, raw.indexOf(t)), post: raw.slice(raw.indexOf(t) + t.length) });
    }
  }

  function paint() {
    nodes.forEach(({ node, it, pre, post }) => {
      node.nodeValue = pre + (lang === 'en' ? (DICT[it] || it) : it) + post;
    });
    richNodes.forEach(({ el, it, frag, style }) => {
      const text = lang === 'en' ? (DICT[it] || it) : it;
      const piece = lang === 'en' ? (FRAG[frag] || frag) : frag;
      const i = text.indexOf(piece);
      const esc = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      el.innerHTML = i === -1
        ? esc(text)
        : esc(text.slice(0, i)) + '<strong style="' + style + '">' + esc(piece) + '</strong>' + esc(text.slice(i + piece.length));
    });
    document.querySelectorAll('[placeholder]').forEach(el => {
      const cur = el.getAttribute('placeholder');
      const it = REV[cur] || cur;
      el.setAttribute('placeholder', lang === 'en' ? (DICT[it] || it) : it);
    });
    document.querySelectorAll('[data-lang-switch] [data-lang]').forEach(b => {
      const on = b.dataset.lang === lang;
      b.style.background = on ? '#5C2A63' : 'transparent';
      b.style.color = on ? '#F7F4F2' : '#6B5F68';
      b.style.cursor = on ? 'default' : 'pointer';
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.documentElement.lang = lang;
  }

  function setLang(next) {
    lang = next;
    try { localStorage.setItem('portfolio-lang', next); } catch (e) {}
    collect();
    paint();
  }

  function reveal(root) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.remove('pre'); e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -12% 0px' });
    const els = Array.from(root.querySelectorAll('[data-rise]'));
    els.forEach((el, i) => { el.classList.add('pre'); el.style.animationDelay = (i % 4) * 90 + 'ms'; io.observe(el); });
    setTimeout(() => els.forEach(el => { el.classList.remove('pre'); el.classList.add('in'); }), 1800);
  }

  function counters(root) {
    const els = Array.from(root.querySelectorAll('[data-count]'));
    const run = el => {
      if (el.dataset.counted) return;
      el.dataset.counted = '1';
      const target = parseFloat(el.dataset.count) || 0, t0 = performance.now(), dur = 1100;
      el.textContent = String(target);
      const tick = t => {
        const p = Math.min(1, (t - t0) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick); else el.textContent = String(target);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    els.forEach(el => io.observe(el));
    setTimeout(() => els.forEach(run), 1800);
  }

  function parallax(root) {
    const pars = Array.from(root.querySelectorAll('[data-par]'));
    if (!pars.length) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const vh = window.innerHeight;
        pars.forEach(el => {
          const r = el.getBoundingClientRect();
          const rel = (r.top + r.height / 2 - vh / 2) / vh;
          el.style.transform = 'translate3d(0,' + (rel * parseFloat(el.dataset.par) * 160).toFixed(1) + 'px,0)';
        });
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  let started = false;
  const API = {
    init() {
      const root = document.body;
      collect();
      paint();
      if (started) return;
      started = true;
      reveal(root);
      counters(root);
      parallax(root);
      document.addEventListener('click', ev => {
        const btn = ev.target.closest('[data-lang]');
        if (btn) { ev.preventDefault(); if (btn.dataset.lang !== lang) setLang(btn.dataset.lang); return; }
        const a = ev.target.closest('a[href$=".html"]');
        if (!a || ev.metaKey || ev.ctrlKey) return;
        ev.preventDefault();
        document.body.style.transition = 'opacity .32s ease';
        document.body.style.opacity = '0';
        setTimeout(() => { window.location.href = a.getAttribute('href'); }, 300);
      });
      requestAnimationFrame(() => { document.body.style.transition = 'opacity .5s ease'; document.body.style.opacity = '1'; });
    },
    refresh() { collect(); paint(); },
    setLang
  };

  window.PortfolioUI = API;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => API.init());
  } else {
    API.init();
  }
})();
