(() => {
  'use strict';

  const translations = {
    it: { flag: '🇮🇹', name: 'Italiano', home: 'Home', body: 'Body Inspector', lens: 'Lens Inspector', language: 'Lingua', newInspection: 'Nuova ispezione', export: 'Esporta JSON', import: 'Importa JSON', report: 'Rapporto PDF', all: 'Tutti i controlli', open: 'Apri strumento', offline: 'Offline e senza tracciamento', inspect: 'Verifica prima di acquistare.' },
    en: { flag: '🇬🇧', name: 'English', home: 'Home', body: 'Body Inspector', lens: 'Lens Inspector', language: 'Language', newInspection: 'New inspection', export: 'Export JSON', import: 'Import JSON', report: 'PDF report', all: 'All checks', open: 'Open tool', offline: 'Offline and no tracking', inspect: 'Inspect before you buy.' },
    es: { flag: '🇪🇸', name: 'Español', home: 'Inicio', body: 'Body Inspector', lens: 'Lens Inspector', language: 'Idioma', newInspection: 'Nueva inspección', export: 'Exportar JSON', import: 'Importar JSON', report: 'Informe PDF', all: 'Todos los controles', open: 'Abrir herramienta', offline: 'Sin conexión y sin seguimiento', inspect: 'Comprueba antes de comprar.' },
    de: { flag: '🇩🇪', name: 'Deutsch', home: 'Startseite', body: 'Body Inspector', lens: 'Lens Inspector', language: 'Sprache', newInspection: 'Neue Prüfung', export: 'JSON exportieren', import: 'JSON importieren', report: 'PDF-Bericht', all: 'Alle Prüfungen', open: 'Tool öffnen', offline: 'Offline und ohne Tracking', inspect: 'Prüfe vor dem Kauf.' },
    zh: { flag: '🇨🇳', name: '简体中文', home: '首页', body: 'Body Inspector', lens: 'Lens Inspector', language: '语言', newInspection: '新建检查', export: '导出 JSON', import: '导入 JSON', report: 'PDF 报告', all: '全部检查', open: '打开工具', offline: '离线使用且无跟踪', inspect: '购买前先检查。' }
  };

  const uiTranslations = {
    en: {
      'Identità del corpo macchina': 'Camera body identity', 'Identità dell’obiettivo': 'Lens identity', 'Configura le caratteristiche: la checklist si adatta automaticamente.': 'Configure the features: the checklist adapts automatically.', 'Esplora verifiche': 'Explore checks', 'Tutti i controlli': 'All checks', 'Sensore': 'Sensor', 'Meccanica': 'Mechanics', 'Scatto e AF': 'Shooting and AF', 'Display e I/O': 'Display and I/O', 'Corredo': 'Kit', 'Affidabilità': 'Reliability', 'Ottica': 'Optics', 'Elettronica': 'Electronics', 'Resa fotografica': 'Image performance', 'Come funziona?': 'How it works', 'Assegna un voto da': 'Give each check a score from', 'Valutazione': 'Rating', 'Conferma': 'Confirm', 'Da fare': 'To do', 'Come eseguire il controllo': 'How to perform the check', 'Checklist del corpo macchina': 'Camera body checklist', 'Checklist di verifica': 'Inspection checklist', 'Prima di acquistare un corpo,': 'Before buying a camera body,', 'mettilo alla prova.': 'put it to the test.', 'Risultato complessivo': 'Overall result', 'Valutazione economica': 'Financial evaluation', 'Qualità per area': 'Quality by area', 'Avanzamento': 'Progress', 'Mercato · Excellent': 'Market · Excellent', 'Valore corretto stimato': 'Estimated adjusted value', 'Prezzo pagato': 'Price paid', 'Margine sul valore corretto': 'Margin on adjusted value', 'In attesa di verifica': 'Awaiting inspection', 'Da verificare': 'To inspect', 'Con criticità': 'With issues', 'Valutati': 'Rated', 'Tutti': 'All', 'Nessun controllo valutato': 'No checks rated', 'Valuta i controlli applicabili.': 'Rate the applicable checks.', 'Elimina': 'Delete', 'Marca': 'Brand', 'Modello': 'Model', 'Attacco / sistema': 'Mount / system', 'Attacco': 'Mount', 'Prezzo pagato': 'Price paid', 'Funzioni presenti': 'Available features', 'Caratteristiche': 'Features', 'Apri istruzioni': 'Open instructions', 'Chiudi istruzioni': 'Close instructions', 'PESO ALTO': 'HIGH WEIGHT', 'PESO MEDIO': 'MEDIUM WEIGHT', 'PESO BASSO': 'LOW WEIGHT', 'DA FARE': 'TO DO', 'N/A': 'N/A'
    },
    es: {
      'Identità del corpo macchina': 'Identidad de la cámara', 'Identità dell’obiettivo': 'Identidad del objetivo', 'Esplora verifiche': 'Explorar controles', 'Tutti i controlli': 'Todos los controles', 'Sensore': 'Sensor', 'Meccanica': 'Mecánica', 'Scatto e AF': 'Disparo y AF', 'Display e I/O': 'Pantalla y E/S', 'Corredo': 'Equipo', 'Affidabilità': 'Fiabilidad', 'Ottica': 'Óptica', 'Elettronica': 'Electrónica', 'Resa fotografica': 'Rendimiento fotográfico', 'Come funziona?': 'Cómo funciona', 'Valutazione': 'Evaluación', 'Conferma': 'Confirmar', 'Da fare': 'Pendiente', 'Come eseguire il controllo': 'Cómo realizar el control', 'Checklist del corpo macchina': 'Lista de control de la cámara', 'Checklist di verifica': 'Lista de control', 'Risultato complessivo': 'Resultado general', 'Valutazione economica': 'Evaluación económica', 'Qualità per area': 'Calidad por área', 'Avanzamento': 'Progreso', 'Da verificare': 'Por revisar', 'Con criticità': 'Con problemas', 'Valutati': 'Evaluados', 'Tutti': 'Todos', 'Elimina': 'Eliminar', 'Marca': 'Marca', 'Modello': 'Modelo', 'Attacco / sistema': 'Montura / sistema', 'Attacco': 'Montura', 'Prezzo pagato': 'Precio pagado', 'Funzioni presenti': 'Funciones disponibles', 'Caratteristiche': 'Características', 'Apri istruzioni': 'Abrir instrucciones', 'Chiudi istruzioni': 'Cerrar instrucciones', 'PESO ALTO': 'PESO ALTO', 'PESO MEDIO': 'PESO MEDIO', 'PESO BASSO': 'PESO BAJO', 'DA FARE': 'PENDIENTE'
    },
    de: {
      'Identità del corpo macchina': 'Kamera-Identität', 'Identità dell’obiettivo': 'Objektiv-Identität', 'Esplora verifiche': 'Prüfungen durchsuchen', 'Tutti i controlli': 'Alle Prüfungen', 'Sensore': 'Sensor', 'Meccanica': 'Mechanik', 'Scatto e AF': 'Aufnahme und AF', 'Display e I/O': 'Display und I/O', 'Corredo': 'Zubehör', 'Affidabilità': 'Zuverlässigkeit', 'Ottica': 'Optik', 'Elettronica': 'Elektronik', 'Resa fotografica': 'Bildleistung', 'Come funziona?': 'So funktioniert es', 'Valutazione': 'Bewertung', 'Conferma': 'Bestätigen', 'Da fare': 'Offen', 'Come eseguire il controllo': 'Prüfung durchführen', 'Checklist del corpo macchina': 'Kamera-Checkliste', 'Checklist di verifica': 'Prüfungs-Checkliste', 'Risultato complessivo': 'Gesamtergebnis', 'Valutazione economica': 'Wirtschaftliche Bewertung', 'Qualità per area': 'Qualität nach Bereich', 'Avanzamento': 'Fortschritt', 'Da verificare': 'Zu prüfen', 'Con criticità': 'Mit Problemen', 'Valutati': 'Bewertet', 'Tutti': 'Alle', 'Elimina': 'Löschen', 'Marca': 'Marke', 'Modello': 'Modell', 'Attacco / sistema': 'Anschluss / System', 'Attacco': 'Anschluss', 'Prezzo pagato': 'Bezahlter Preis', 'Funzioni presenti': 'Vorhandene Funktionen', 'Caratteristiche': 'Eigenschaften', 'Apri istruzioni': 'Anleitungen öffnen', 'Chiudi istruzioni': 'Anleitungen schließen', 'PESO ALTO': 'HOHES GEWICHT', 'PESO MEDIO': 'MITTLERES GEWICHT', 'PESO BASSO': 'NIEDRIGES GEWICHT', 'DA FARE': 'OFFEN'
    },
    zh: {
      'Identità del corpo macchina': '相机机身信息', 'Identità dell’obiettivo': '镜头信息', 'Esplora verifiche': '浏览检查项目', 'Tutti i controlli': '全部检查', 'Sensore': '传感器', 'Meccanica': '机械', 'Scatto e AF': '拍摄与自动对焦', 'Display e I/O': '显示屏与接口', 'Corredo': '配件', 'Affidabilità': '可靠性', 'Ottica': '光学', 'Elettronica': '电子', 'Resa fotografica': '成像表现', 'Come funziona?': '使用方法', 'Valutazione': '评分', 'Conferma': '确认', 'Da fare': '待检查', 'Come eseguire il controllo': '如何执行检查', 'Checklist del corpo macchina': '机身检查清单', 'Checklist di verifica': '检查清单', 'Risultato complessivo': '总体结果', 'Valutazione economica': '经济评估', 'Qualità per area': '分项质量', 'Avanzamento': '进度', 'Da verificare': '待检查', 'Con criticità': '存在问题', 'Valutati': '已评分', 'Tutti': '全部', 'Elimina': '删除', 'Marca': '品牌', 'Modello': '型号', 'Attacco / sistema': '卡口 / 系统', 'Attacco': '卡口', 'Prezzo pagato': '购买价格', 'Funzioni presenti': '可用功能', 'Caratteristiche': '功能', 'Apri istruzioni': '展开说明', 'Chiudi istruzioni': '收起说明', 'PESO ALTO': '高权重', 'PESO MEDIO': '中权重', 'PESO BASSO': '低权重', 'DA FARE': '待检查'
    }
  };

  const checklistTranslations = {
    en: {
      'Superficie del sensore': 'Sensor surface', 'Polvere e macchie nelle immagini': 'Dust and spots in images', 'Pixel anomali e pixel caldi': 'Dead and hot pixels', 'Banding e uniformità del RAW': 'RAW banding and uniformity', 'Colori e artefatti insoliti': 'Unusual colors and artifacts', 'Scocca e segni di urto': 'Body shell and impact marks', 'Baionetta e sgancio': 'Mount and release', 'Pulsanti, ghiere e joystick': 'Buttons, dials, and joystick', 'Sportelli e chiusure': 'Doors and closures', 'Filettatura del treppiede': 'Tripod thread', 'Otturatore meccanico': 'Mechanical shutter', 'Guarnizioni e protezione WR': 'Seals and weather resistance', 'Scatto singolo ed esposizione': 'Single shot and exposure', 'Esposimetro e ISO': 'Metering and ISO', 'Raffica, buffer e scrittura': 'Burst, buffer, and writing', 'Autofocus statico': 'Single-point autofocus', 'Autofocus continuo': 'Continuous autofocus', 'Stabilizzazione IBIS': 'IBIS stabilization', 'Otturatore elettronico': 'Electronic shutter', 'Sincronizzazione flash': 'Flash sync', 'Schermo posteriore': 'Rear screen', 'Comandi touchscreen': 'Touchscreen controls', 'Cerniera display orientabile': 'Articulated display hinge', 'Mirino elettronico EVF': 'Electronic viewfinder EVF', 'Mirino ottico e specchio': 'Optical viewfinder and mirror', 'Slot della scheda': 'Card slot', 'Secondo slot e backup': 'Second slot and backup', 'USB, HDMI e porte audio': 'USB, HDMI, and audio ports', 'Wi-Fi e Bluetooth': 'Wi-Fi and Bluetooth', 'Slitta flash e contatti': 'Hot shoe and contacts', 'Flash incorporato': 'Built-in flash', 'Video e audio': 'Video and audio', 'Batteria e contatti': 'Battery and contacts', 'Ricarica e alimentazione': 'Charging and power', 'Accessori dichiarati': 'Declared accessories', 'Seriale e provenienza': 'Serial number and provenance', 'Accensione, standby e risveglio': 'Startup, standby, and wake', 'Prova d\'uso prolungata': 'Extended use test', 'Firmware, menu e reset': 'Firmware, menu, and reset', 'Lenti e trattamenti': 'Glass and coatings', 'Polvere interna': 'Internal dust', 'Funghi, velature, umidità': 'Fungus, haze, and moisture', 'Controluce e contrasto': 'Backlight and contrast', 'Barilotto e segni d’urto': 'Barrel and impact marks', 'Baionetta e innesto': 'Mount and fitting', 'Ghiera di messa a fuoco': 'Focus ring', 'Ghiera dello zoom': 'Zoom ring', 'Ghiera del diaframma': 'Aperture ring', 'Filettatura e paraluce': 'Thread and hood', 'Guarnizioni visibili': 'Visible seals', 'Contatti e comunicazione': 'Contacts and communication', 'Autofocus statico (AF-S)': 'Single autofocus (AF-S)', 'Autofocus continuo (AF-C)': 'Continuous autofocus (AF-C)', 'Stabilizzazione ottica': 'Optical stabilization', 'Diaframma ed esposizione': 'Aperture and exposure', 'Nitidezza al centro': 'Center sharpness', 'Uniformità e decentramento': 'Uniformity and decentering', 'Messa a fuoco ravvicinata': 'Close focusing', 'Resa lungo lo zoom': 'Performance throughout the zoom range', 'Collare da treppiede': 'Tripod collar'
    }
  };

  const operationalTranslations = {
    it: {},
    en: {
      "Spegni la fotocamera. Rimuovi l'obiettivo solo in ambiente pulito e osserva con luce morbida, senza toccare il sensore.": 'Turn off the camera. Remove the lens only in a clean environment and inspect it in soft light without touching the sensor.',
      'Rimuovi i tappi e osserva frontalmente e lateralmente le lenti anteriore e posteriore, con luce morbida.': 'Remove the caps and inspect the front and rear elements from the front and side in soft light.'
    },
    es: {
      "Spegni la fotocamera. Rimuovi l'obiettivo solo in ambiente pulito e osserva con luce morbida, senza toccare il sensore.": 'Apaga la cámara. Retira el objetivo solo en un entorno limpio y obsérvalo con luz suave sin tocar el sensor.',
      'Rimuovi i tappi e osserva frontalmente e lateralmente le lenti anteriore e posteriore, con luce morbida.': 'Retira las tapas y observa de frente y de lado las lentes delantera y trasera con luz suave.'
    },
    de: {
      "Spegni la fotocamera. Rimuovi l'obiettivo solo in ambiente pulito e osserva con luce morbida, senza toccare il sensore.": 'Schalte die Kamera aus. Entferne das Objektiv nur in sauberer Umgebung und prüfe den Sensor bei weichem Licht, ohne ihn zu berühren.',
      'Rimuovi i tappi e osserva frontalmente e lateralmente le lenti anteriore e posteriore, con luce morbida.': 'Entferne die Deckel und prüfe die vordere und hintere Linse von vorne und der Seite bei weichem Licht.'
    },
    zh: {
      "Spegni la fotocamera. Rimuovi l'obiettivo solo in ambiente pulito e osserva con luce morbida, senza toccare il sensore.": '关闭相机。仅在洁净环境中取下镜头，并在柔和光线下观察，不要触摸传感器。',
      'Rimuovi i tappi e osserva frontalmente e lateralmente le lenti anteriore e posteriore, con luce morbida.': '取下镜头盖，在柔和光线下从正面和侧面观察前后镜片。'
    }
  };

  const commonUiTranslations = {
    en: { 'Il laboratorio digitale per valutare corpi macchina fotografici usati': 'A digital workshop for evaluating used camera bodies', 'Il laboratorio digitale per valutare obiettivi fotografici usati': 'A digital workshop for evaluating used camera lenses', 'Un buon obiettivo si verifica.': 'A good lens is tested.', 'Non si presume.': 'It is not assumed.', 'Inspection workspace': 'Inspection workspace', 'Dal sensore all\'otturatore, dall\'autofocus alla tenuta nel tempo: una verifica guidata, documentabile e indipendente dal prezzo dichiarato dal venditore.': 'From sensor to shutter, autofocus to long-term reliability: a guided, documented check independent of the seller\'s asking price.', 'Un controllo tecnico guidato, documentabile e indipendente dal prezzo dichiarato dal venditore.': 'A guided, documented technical check independent of the seller\'s asking price.', 'Punteggio ponderato sui test valutati': 'Weighted score across rated checks', 'Nessun controllo valutato': 'No checks rated', 'VERIFICATO': 'VERIFIED', 'CRITICITÀ': 'ISSUES', 'USURA / LIMITE': 'WEAR / LIMIT', 'DA FARE': 'TO DO', 'Completati': 'completed', 'controlli completati': 'checks completed', 'provv.': 'provisional', 'Eliminare questa ispezione dal browser? Esporta prima un JSON se vuoi conservarla.': 'Delete this inspection from the browser? Export JSON first if you want to keep it.', 'Nuova ispezione creata': 'New inspection created', 'Ispezione eliminata': 'Inspection deleted', 'Ispezione importata correttamente': 'Inspection imported successfully', 'Importazione non riuscita:': 'Import failed:', 'Aggiungi una nota o un’anomalia…': 'Add a note or anomaly…', 'Annota difetti, prove e osservazioni...': 'Note defects, tests, and observations...', 'Punteggio per': 'Score for', '1 · Grave': '1 · Severe', '3 · Discreto': '3 · Fair', '5 · Perfetto': '5 · Perfect' },
    es: { 'Il laboratorio digitale per valutare corpi macchina fotografici usati': 'Laboratorio digital para evaluar cámaras usadas', 'Il laboratorio digitale per valutare obiettivi fotografici usati': 'Laboratorio digital para evaluar objetivos usados', 'Un buon obiettivo si verifica.': 'Un buen objetivo se comprueba.', 'Non si presume.': 'No se da por hecho.', 'Punteggio ponderato sui test valutati': 'Puntuación ponderada de los controles evaluados', 'Nessun controllo valutato': 'Ningún control evaluado', 'VERIFICATO': 'VERIFICADO', 'CRITICITÀ': 'PROBLEMAS', 'USURA / LIMITE': 'DESGASTE / LÍMITE', 'DA FARE': 'PENDIENTE', 'Aggiungi una nota o un’anomalia…': 'Añade una nota o anomalía…', '1 · Grave': '1 · Grave', '3 · Discreto': '3 · Regular', '5 · Perfetto': '5 · Perfecto' },
    de: { 'Il laboratorio digitale per valutare corpi macchina fotografici usati': 'Digitales Labor für die Prüfung gebrauchter Kameras', 'Il laboratorio digitale per valutare obiettivi fotografici usati': 'Digitales Labor für die Prüfung gebrauchter Objektive', 'Un buon obiettivo si verifica.': 'Ein gutes Objektiv wird geprüft.', 'Non si presume.': 'Man nimmt es nicht einfach an.', 'Punteggio ponderato sui test valutati': 'Gewichtete Bewertung der geprüften Tests', 'Nessun controllo valutato': 'Keine Prüfung bewertet', 'VERIFICATO': 'GEPRÜFT', 'CRITICITÀ': 'PROBLEME', 'USURA / LIMITE': 'VERSCHLEISS / GRENZE', 'DA FARE': 'OFFEN', 'Aggiungi una nota o un’anomalia…': 'Notiz oder Auffälligkeit hinzufügen …', '1 · Grave': '1 · Schwer', '3 · Discreto': '3 · Befriedigend', '5 · Perfetto': '5 · Perfekt' },
    zh: { 'Il laboratorio digitale per valutare corpi macchina fotografici usati': '用于评估二手相机的数字工具', 'Il laboratorio digitale per valutare obiettivi fotografici usati': '用于评估二手镜头的数字工具', 'Un buon obiettivo si verifica.': '好镜头需要实际检查。', 'Non si presume.': '不能只凭猜测。', 'Punteggio ponderato sui test valutati': '已检查项目的加权评分', 'Nessun controllo valutato': '尚无已评分项目', 'VERIFICATO': '已验证', 'CRITICITÀ': '存在问题', 'USURA / LIMITE': '磨损 / 限制', 'DA FARE': '待检查', 'Aggiungi una nota o un’anomalia…': '添加备注或异常…', '1 · Grave': '1 · 严重', '3 · Discreto': '3 · 一般', '5 · Perfetto': '5 · 完美' }
  };

  const recurringTranslations = {
    en: { 'Valutazione': 'Rating', 'Conferma': 'Confirm', 'Da fare': 'To do', 'Da verificare': 'To inspect', 'Con criticità': 'With issues', 'Valutati': 'Rated', 'Tutti': 'All', 'Apri istruzioni': 'Open instructions', 'Chiudi istruzioni': 'Close instructions', 'Come eseguire il controllo': 'How to perform the check', 'Cerca un controllo': 'Search checks', 'Annota difetti, prove e osservazioni...': 'Note defects, tests, and observations...', 'Aggiungi una nota o un’anomalia…': 'Add a note or anomaly…', 'Es. Fujifilm': 'E.g. Fujifilm', 'Stima': 'Estimate', 'Facoltativo': 'Optional', 'Ispezione salvata': 'Saved inspection', 'Scegli un’ispezione salvata': 'Choose a saved inspection', 'Elimina l’ispezione attiva': 'Delete the active inspection', 'Identità del corpo macchina': 'Camera body identity', 'Identità dell’obiettivo': 'Lens identity', 'Superficie del sensore': 'Sensor surface', 'Lenti e trattamenti': 'Glass and coatings', 'Prima di acquistare un corpo,': 'Before buying a camera body,', 'mettilo alla prova.': 'put it to the test.', 'Da revisionare': 'Needs review', 'Buono': 'Good', 'Scarso': 'Poor', 'Valutazione in corso': 'Evaluation in progress', 'Prezzi da completare': 'Complete prices', 'Attenzione: controllo critico': 'Warning: critical check', 'PESO ALTO': 'HIGH WEIGHT', 'PESO MEDIO': 'MEDIUM WEIGHT', 'PESO BASSO': 'LOW WEIGHT', 'DA FARE': 'TO DO', 'Nessun controllo corrisponde ai filtri selezionati.': 'No checks match the selected filters.', 'completati': 'completed', 'Valuta i controlli applicabili.': 'Rate the applicable checks.' },
    es: { 'Valutazione': 'Evaluación', 'Conferma': 'Confirmar', 'Da fare': 'Pendiente', 'Da verificare': 'Por revisar', 'Con criticità': 'Con problemas', 'Valutati': 'Evaluados', 'Tutti': 'Todos', 'Apri istruzioni': 'Abrir instrucciones', 'Chiudi istruzioni': 'Cerrar instrucciones', 'Come eseguire il controllo': 'Cómo realizar el control', 'Cerca un controllo': 'Buscar controles', 'Annota difetti, prove e osservazioni...': 'Anota defectos, pruebas y observaciones...', 'Aggiungi una nota o un’anomalia…': 'Añade una nota o anomalía…', 'Es. Fujifilm': 'Ej. Fujifilm', 'Stima': 'Estimación', 'Facoltativo': 'Opcional', 'Ispezione salvata': 'Inspección guardada', 'Scegli un’ispezione salvata': 'Elegir una inspección guardada', 'Elimina l’ispezione attiva': 'Eliminar la inspección activa', 'Identità del corpo macchina': 'Identidad de la cámara', 'Identità dell’obiettivo': 'Identidad del objetivo', 'Superficie del sensore': 'Superficie del sensor', 'Lenti e trattamenti': 'Lentes y revestimientos', 'Prima di acquistare un corpo,': 'Antes de comprar una cámara,', 'mettilo alla prova.': 'ponla a prueba.', 'Da revisionare': 'Revisar', 'Buono': 'Bueno', 'Scarso': 'Deficiente', 'Valutazione in corso': 'Evaluación en curso', 'Prezzi da completare': 'Completa los precios', 'Attenzione: controllo critico': 'Atención: control crítico', 'PESO ALTO': 'PESO ALTO', 'PESO MEDIO': 'PESO MEDIO', 'PESO BASSO': 'PESO BAJO', 'DA FARE': 'PENDIENTE', 'Nessun controllo corrisponde ai filtri selezionati.': 'Ningún control coincide con los filtros seleccionados.', 'completati': 'completados', 'Valuta i controlli applicabili.': 'Evalúa los controles aplicables.' },
    de: { 'Valutazione': 'Bewertung', 'Conferma': 'Bestätigen', 'Da fare': 'Offen', 'Da verificare': 'Zu prüfen', 'Con criticità': 'Mit Problemen', 'Valutati': 'Bewertet', 'Tutti': 'Alle', 'Apri istruzioni': 'Anleitungen öffnen', 'Chiudi istruzioni': 'Anleitungen schließen', 'Come eseguire il controllo': 'Prüfung durchführen', 'Cerca un controllo': 'Prüfungen suchen', 'Annota difetti, prove e osservazioni...': 'Notiere Mängel, Tests und Beobachtungen ...', 'Aggiungi una nota o un’anomalia…': 'Notiz oder Auffälligkeit hinzufügen …', 'Es. Fujifilm': 'z. B. Fujifilm', 'Stima': 'Schätzung', 'Facoltativo': 'Optional', 'Ispezione salvata': 'Gespeicherte Prüfung', 'Scegli un’ispezione salvata': 'Gespeicherte Prüfung wählen', 'Elimina l’ispezione attiva': 'Aktive Prüfung löschen', 'Identità del corpo macchina': 'Kamera-Identität', 'Identità dell’obiettivo': 'Objektiv-Identität', 'Superficie del sensore': 'Sensoroberfläche', 'Lenti e trattamenti': 'Linsen und Vergütung', 'Prima di acquistare un corpo,': 'Vor dem Kauf einer Kamera,', 'mettilo alla prova.': 'prüfe sie gründlich.', 'Da revisionare': 'Überprüfen', 'Buono': 'Gut', 'Scarso': 'Schlecht', 'Valutazione in corso': 'Bewertung läuft', 'Prezzi da completare': 'Preise ergänzen', 'Attenzione: controllo critico': 'Achtung: kritische Prüfung', 'PESO ALTO': 'HOHES GEWICHT', 'PESO MEDIO': 'MITTLERES GEWICHT', 'PESO BASSO': 'NIEDRIGES GEWICHT', 'DA FARE': 'OFFEN', 'Nessun controllo corrisponde ai filtri selezionati.': 'Keine Prüfung entspricht den gewählten Filtern.', 'completati': 'abgeschlossen', 'Valuta i controlli applicabili.': 'Bewerte die zutreffenden Prüfungen.' },
    zh: { 'Valutazione': '评分', 'Conferma': '确认', 'Da fare': '待检查', 'Da verificare': '待检查', 'Con criticità': '存在问题', 'Valutati': '已评分', 'Tutti': '全部', 'Apri istruzioni': '展开说明', 'Chiudi istruzioni': '收起说明', 'Come eseguire il controllo': '如何执行检查', 'Cerca un controllo': '搜索检查项目', 'Annota difetti, prove e osservazioni...': '记录缺陷、测试和观察...', 'Aggiungi una nota o un’anomalia…': '添加备注或异常…', 'Es. Fujifilm': '例如 Fujifilm', 'Stima': '估算', 'Facoltativo': '可选', 'Ispezione salvata': '已保存的检查', 'Scegli un’ispezione salvata': '选择已保存的检查', 'Elimina l’ispezione attiva': '删除当前检查', 'Identità del corpo macchina': '相机机身信息', 'Identità dell’obiettivo': '镜头信息', 'Superficie del sensore': '传感器表面', 'Lenti e trattamenti': '镜片与镀膜', 'Prima di acquistare un corpo,': '购买相机前，', 'mettilo alla prova.': '请先进行检查。', 'Da revisionare': '需要复查', 'Buono': '良好', 'Scarso': '较差', 'Valutazione in corso': '评估进行中', 'Prezzi da completare': '请补充价格', 'Attenzione: controllo critico': '注意：关键检查', 'PESO ALTO': '高权重', 'PESO MEDIO': '中权重', 'PESO BASSO': '低权重', 'DA FARE': '待检查', 'Nessun controllo corrisponde ai filtri selezionati.': '没有检查项目符合所选筛选条件。', 'completati': '已完成', 'Valuta i controlli applicabili.': '评估适用的检查项目。' }
  };
  const catalogs = { translations, uiTranslations, checklistTranslations, commonUiTranslations, operationalTranslations };
  const englishCatalog = { ...uiTranslations.en, ...checklistTranslations.en, ...commonUiTranslations.en };
  Object.keys(recurringTranslations).forEach((locale) => {
    uiTranslations[locale] = { ...englishCatalog, ...(uiTranslations[locale] || {}), ...recurringTranslations[locale] };
    commonUiTranslations[locale] = { ...englishCatalog, ...(commonUiTranslations[locale] || {}), ...recurringTranslations[locale] };
    checklistTranslations[locale] = { ...englishCatalog, ...(checklistTranslations[locale] || {}), ...recurringTranslations[locale] };
  });
  uiTranslations.it = { ...recurringTranslations.it };
  checklistTranslations.it = { ...recurringTranslations.it };
  commonUiTranslations.it = { ...recurringTranslations.it };

  const localeKey = () => localStorage.getItem('photo-utils-locale') || document.documentElement.lang || 'it';
  const t = (key) => (translations[localeKey()] || translations.it)[key] || translations.it[key] || key;
  const linkFor = (tool) => tool === 'body' ? 'body_inspector.html' : tool === 'lens' ? 'lens_inspector.html' : 'index.html';

  function logoMarkup() { return '<img src="assets/logo.svg" alt="Photo Utils" width="42" height="42">'; }
  function switcherMarkup(tool) {
    const current = localeKey();
    return `<nav class="pu-switcher" aria-label="${t('home')}"><a href="index.html">${t('home')}</a><a href="body_inspector.html" ${tool === 'body' ? 'aria-current="page"' : ''}>${t('body')}</a><a href="lens_inspector.html" ${tool === 'lens' ? 'aria-current="page"' : ''}>${t('lens')}</a><div class="pu-language"><label for="pu-locale">${t('language')}</label><select id="pu-locale" aria-label="${t('language')}">${Object.entries(translations).map(([key, value]) => `<option value="${key}" ${key === current ? 'selected' : ''}>${value.flag} ${value.name}</option>`).join('')}</select></div></nav>`;
  }
  function illustrationKind(card) {
    const value = `${card.dataset.id || ''} ${card.dataset.category || ''}`.toLowerCase();
    if (/sensor|dust|pixel|band|color|front|fungus|flare/.test(value)) return 'optic';
    if (/af|focus|shoot|meter|exposure|burst|stabil|shutter|image/.test(value)) return 'focus';
    if (/screen|lcd|display|evf|ovf|touch|port|slot|wifi|contact|flash|video/.test(value)) return 'interface';
    if (/battery|charge|power|reliab|startup|firmware|longuse/.test(value)) return 'power';
    return 'mechanic';
  }
  function illustrationSvg(kind) {
    const colors = { optic: ['#2563eb','#14b8a6'], focus: ['#ec4899','#f59e0b'], interface: ['#0f766e','#38bdf8'], power: ['#f59e0b','#ef4444'], mechanic: ['#475569','#8b5cf6'] };
    const [main, accent] = colors[kind] || colors.mechanic;
    const shapes = {
      optic: `<circle cx="50" cy="50" r="29" fill="#17243d" stroke="${main}" stroke-width="6"/><circle cx="50" cy="50" r="16" fill="${accent}"/><circle cx="44" cy="44" r="6" fill="#dffcff" opacity=".8"/>`,
      focus: `<path d="M20 68 35 33h30l15 35" fill="none" stroke="${main}" stroke-width="7" stroke-linejoin="round"/><circle cx="50" cy="49" r="13" fill="${accent}"/><path d="M28 75h44" stroke="#17243d" stroke-width="6" stroke-linecap="round"/>`,
      interface: `<rect x="20" y="22" width="60" height="52" rx="8" fill="#17243d"/><rect x="28" y="30" width="44" height="29" rx="3" fill="${accent}"/><path d="M37 67h26" stroke="${main}" stroke-width="6" stroke-linecap="round"/><circle cx="65" cy="66" r="3" fill="#fff"/>`,
      power: `<rect x="28" y="24" width="44" height="52" rx="7" fill="#17243d" stroke="${main}" stroke-width="5"/><path d="M46 35 38 53h10l-4 14 18-22H52l5-10z" fill="${accent}"/>`,
      mechanic: `<circle cx="50" cy="50" r="24" fill="#17243d" stroke="${main}" stroke-width="8"/><circle cx="50" cy="50" r="8" fill="${accent}"/><path d="M50 17v9m0 48v9M17 50h9m48 0h9" stroke="${main}" stroke-width="6" stroke-linecap="round"/>`
    };
    return `<svg viewBox="0 0 100 100" role="img" aria-label="${kind}" xmlns="http://www.w3.org/2000/svg">${shapes[kind]}</svg>`;
  }
  function addSharedChrome(tool) {
    const topbar = document.querySelector('.topbar');
    if (!topbar || topbar.querySelector('.pu-switcher')) return;
    const actions = topbar.querySelector('.top-actions');
    const fragment = document.createElement('div');
    fragment.innerHTML = switcherMarkup(tool);
    topbar.insertBefore(fragment.firstElementChild, actions || null);
  }
  function addIllustrations() {
    document.querySelectorAll('.test-card').forEach((card) => {
      if (card.querySelector('.control-visual')) return;
      const visual = document.createElement('div');
      const kind = illustrationKind(card);
      visual.className = 'control-visual';
      visual.dataset.illustration = kind;
      visual.innerHTML = illustrationSvg(kind);
      const head = card.querySelector('.test-head');
      if (head) head.appendChild(visual);
    });
  }
  function translateButtons() {
    const map = { '＋ Nuova ispezione': 'newInspection', '⇩ Esporta JSON': 'export', '⇧ Importa JSON': 'import', '▤ Rapporto PDF': 'report' };
    document.querySelectorAll('.top-btn').forEach((button) => { const key = map[button.textContent.trim()]; if (key) button.textContent = t(key); });
  }
  function translateValue(value, map) {
    if (!value) return value;
    if (map[value]) return map[value];
    return Object.entries(map).sort((a, b) => b[0].length - a[0].length).reduce((result, [source, target]) => result.replaceAll(source, target), value);
  }
  function ensureOperationalCatalog(root) {
    root.querySelectorAll?.('.steps summary, .steps li').forEach((node) => {
      const source = node.textContent.trim();
      if (!source || operationalTranslations.it[source]) return;
      operationalTranslations.it[source] = source;
      ['en', 'es', 'de', 'zh'].forEach((locale) => {
        if (!operationalTranslations[locale][source]) operationalTranslations[locale][source] = `${locale.toUpperCase()}: ${source}`;
      });
    });
  }
  function translateUi(root = document.body) {
    const locale = localeKey();
    ensureOperationalCatalog(root);
    const map = { ...(commonUiTranslations[locale] || {}), ...(uiTranslations[locale] || {}), ...(checklistTranslations[locale] || {}), ...(operationalTranslations[locale] || {}), ...(recurringTranslations[locale] || {}) };
    if (!map) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const source = node.nodeValue.trim();
      const translated = translateValue(source, map);
      if (translated !== source) node.nodeValue = node.nodeValue.replace(source, translated);
    });
    root.querySelectorAll?.('input, select, option, [aria-label], [title]').forEach((node) => {
      ['placeholder', 'aria-label', 'title'].forEach((attribute) => {
        const source = node.getAttribute(attribute);
        const translated = translateValue(source, map);
        if (source && translated !== source) node.setAttribute(attribute, translated);
      });
    });
    root.querySelectorAll?.('option').forEach((node) => { node.textContent = translateValue(node.textContent, map); });
  }
  function applyLocale(tool) {
    const locale = localeKey();
    document.documentElement.lang = locale;
    document.querySelectorAll('[data-shared]').forEach((node) => { node.textContent = t(node.dataset.shared); });
    const select = document.querySelector('#pu-locale');
    if (select) select.value = locale;
    translateButtons();
    translateUi();
    const title = document.querySelector('title');
    if (title) title.textContent = translateValue(title.textContent, { 'Valuta un corpo macchina usato': locale === 'en' ? 'Evaluate a used camera body' : locale === 'es' ? 'Evalúa una cámara usada' : locale === 'de' ? 'Bewerte eine gebrauchte Kamera' : locale === 'zh' ? '评估二手相机' : 'Valuta un corpo macchina usato', 'Valuta un obiettivo usato': locale === 'en' ? 'Evaluate a used lens' : locale === 'es' ? 'Evalúa un objetivo usado' : locale === 'de' ? 'Bewerte ein gebrauchtes Objektiv' : locale === 'zh' ? '评估二手镜头' : 'Valuta un obiettivo usato' });
    if (!window.PhotoUtilsLocaleObserver) {
      window.PhotoUtilsLocaleObserver = new MutationObserver((records) => {
        records.forEach((record) => record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) translateUi(node.nodeType === Node.TEXT_NODE ? node.parentElement : node);
        }));
      });
      window.PhotoUtilsLocaleObserver.observe(document.body, { childList: true, subtree: true, characterData: true });
    }
    const subtitle = document.querySelector('.brand-sub');
    if (subtitle && locale !== 'it') subtitle.textContent = t('inspect');
    document.querySelectorAll('.pu-switcher').forEach((node) => { node.outerHTML = switcherMarkup(tool); });
    const viewStateKey = `photo-utils-view-${tool}`;
    const savedViewState = JSON.parse(localStorage.getItem(viewStateKey) || 'null');
    if (savedViewState) setTimeout(() => {
      const search = document.querySelector('#search');
      if (search && savedViewState.query) { search.value = savedViewState.query; search.dispatchEvent(new Event('input', { bubbles: true })); }
      const category = document.querySelector(`[data-category-nav="${savedViewState.category}"]`);
      if (category) category.click();
      const status = document.querySelector(`[data-status-filter="${savedViewState.status}"]`);
      if (status) status.click();
    }, 0);
    document.querySelector('#pu-locale')?.addEventListener('change', (event) => {
      const state = { query: document.querySelector('#search')?.value || '', category: document.querySelector('[data-category-nav].active')?.dataset.categoryNav || 'all', status: document.querySelector('[data-status-filter].active')?.dataset.statusFilter || 'all' };
      localStorage.setItem(viewStateKey, JSON.stringify(state));
      localStorage.setItem('photo-utils-locale', event.target.value);
      location.reload();
    });
  }
  function init({ tool = 'home' } = {}) {
    addSharedChrome(tool);
    addIllustrations();
    applyLocale(tool);
  }
  window.PhotoUtils = { init, t, translations, catalogs, illustrationSvg, linkFor };
  document.addEventListener('DOMContentLoaded', () => init({ tool: document.body.dataset.tool || 'home' }));
})();
