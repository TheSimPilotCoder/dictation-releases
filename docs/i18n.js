// Website languages. German is written in the pages themselves; this file only holds the other languages.
// The language comes from ?lang=, otherwise from the browser, otherwise English. Nothing is stored:
// internal links carry ?lang= on to the next page.
(() => {
  const names = { de: 'Deutsch', en: 'English', fr: 'Français', it: 'Italiano', es: 'Español' };

  const texts = {
    en: {
      'nav.lang': 'Language',
      'foot.imprint': 'Legal notice',
      'foot.privacy': 'Privacy',
      'foot.license': 'Licence',
      'legal.note': 'Translation for your convenience. Only the German version is legally binding.',
      'country': 'Germany',
      'email': 'Email:',

      'index.title': 'Dictation – free speech-to-text for Windows',
      'index.desc': 'Dictation turns speech into text locally on your Windows PC. Free and non-commercial.',
      'index.h1': 'Speak instead of typing.',
      'index.lead': 'Dictation turns spoken words into text on your Windows PC and inserts it wherever your cursor is. Speech recognition with Whisper runs entirely on your PC.',
      'index.badge': 'Free · non-commercial',
      'index.download': 'Download setup',
      'index.register': 'Register',
      'index.req': 'Windows 10 or 11 (64-bit). On the download page, choose the file <code>Dictation-Setup-…-x64.exe</code> under <strong>Assets</strong>. On first start, Dictation downloads the speech model once (about 550 MB).',
      'index.howH': 'How it works',
      'index.step1': 'Install the setup and start Dictation.',
      'index.step2': 'Place the cursor in the text field you want to dictate into.',
      'index.step3': 'Hold <strong>Ctrl + Windows</strong> and speak. When you let go, the text is recognised and inserted. You will also find every dictation in the history.',
      'index.langH': 'In your language',
      'index.lang': 'The Dictation interface is available in German, English, French, Italian and Spanish. It follows your Windows language automatically and can be changed in the settings. You can dictate in more than 25 languages.',
      'index.freeH': 'Free, with registration',
      'index.free1': 'Dictation is a private project by Christian Harter (SimFlightChris), free and without commercial intent. I would like to know who uses Dictation, though. That is why you register once: the first ten starts are free, after that you need your personal registration code.',
      'index.free2': 'To do so, click <strong>Register</strong> in Dictation and then <strong>Register online</strong>. I will send you the code by email. Redeem it in Dictation within 24 hours; after that, Dictation stays registered for your Windows user for good, even offline and after updates.',
      'index.dataH': 'Your data',
      'index.data': 'Your recordings and texts never leave your PC. Dictation collects no usage data. It only goes online when you download the speech model, check for updates or register. Details are in the <a href="datenschutz.html">privacy policy</a>.',

      'imp.title': 'Dictation · Legal notice',
      'imp.h1': 'Legal notice',
      'imp.basis': 'Information pursuant to § 18 (1) of the German Interstate Media Treaty (Medienstaatsvertrag)',
      'imp.project': 'Dictation is a private, non-commercial project. It is offered free of charge.',

      'reg.title': 'Register Dictation',
      'reg.lead': 'Registration is free. It only tells me who uses Dictation.',
      'reg.step1': '1. Your installation ID',
      'reg.known': 'Dictation has passed on your ID:',
      'reg.unknown': 'Open Dictation, click <strong>Register</strong> and then <strong>Register online</strong>. Or copy the ID there and paste it here:',
      'reg.idLabel': 'Installation ID',
      'reg.invalid': 'The ID starts with <code>DICT-</code> followed by 32 characters.',
      'reg.step2': '2. Fill in the registration form',
      'reg.formText': 'Name, email address and ID are all it takes. The ID is already filled in. The form is in German.',
      'reg.formButton': 'Open the registration form',
      'reg.mailButton': 'Use email instead',
      'reg.formNote': 'The form is hosted by Google Forms. What happens to your details is described in the <a href="datenschutz.html#registrierung">privacy policy</a>.',
      'reg.step3': '3. Redeem the code',
      'reg.code': 'Once I have approved it, you will receive your registration code by email. Paste it into Dictation within 24 hours and click <strong>Confirm code</strong>.',
      'reg.mailBody': 'Hello Chris,\n\nplease register Dictation for me.\nInstallation ID: {id}\n\nThank you!',

      'ds.title': 'Dictation · Privacy',
      'ds.h1': 'Privacy policy',
      'ds.lead': 'In short: Dictation works locally. I only store what you send me when you register, and only use it for that.',
      'ds.respH': 'Controller',
      'ds.private': 'Dictation is a private, non-commercial project.',
      'ds.appH': 'The Dictation program',
      'ds.app1': 'Recordings, recognised texts and the history stay on your PC. Dictation sends no usage or analytics data. Dictation itself connects to the internet in only three cases, and each time only when you trigger it:',
      'ds.appModel': '<strong>Downloading the speech model:</strong> the model file is fetched from Hugging Face, Inc. (USA). Your IP address is transmitted in the process.',
      'ds.appUpdate': '<strong>Checking for updates:</strong> the latest version is queried from GitHub, Inc. (USA) and, if applicable, the setup is downloaded. Your IP address and the Dictation version are transmitted in the process.',
      'ds.appRegister': '<strong>Registering online:</strong> opens this website in your browser (see below).',
      'ds.app2': 'The installation ID is generated randomly on your PC. It contains no information about you or your hardware.',
      'ds.app3': 'The history is stored encrypted (Windows DPAPI) on your PC, for your Windows user only. In the settings you can switch it off, limit it to the latest dictations, obscure it and delete it permanently. Dictations do not end up in the Windows clipboard history or the cloud clipboard.',
      'ds.supportH': 'Support package',
      'ds.support': 'When you send a support package in Dictation under Settings &gt; Support, Dictation creates a ZIP file with the diagnostic log (times, program states, error messages, names of the target programs when pasting) and details of the Windows version, processor, memory, microphones and settings. Dictations, recordings and the history are never included; user and PC names are made unrecognisable. Dictation sends nothing itself: the file only reaches me through your email program when you send the email. I use it solely to solve your problem and delete it once the case is closed. The legal basis is your request (Art. 6(1)(b) GDPR).',
      'ds.webH': 'This website',
      'ds.web1': 'The website is hosted on GitHub Pages (GitHub, Inc., USA). When you visit it, GitHub processes technically necessary data such as your IP address in order to deliver the site and protect it from abuse. The legal basis is my legitimate interest in providing it securely (Art. 6(1)(f) GDPR). GitHub is certified under the EU-US Data Privacy Framework. More in <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub\'s privacy statement</a>.',
      'ds.web2': 'The site sets no cookies, stores nothing in your browser, uses no analytics tools and loads no content from other providers. The chosen language is only part of the address (<code>?lang=</code>). The installation ID that Dictation passes on when opening the page is in the part of the address after the <code>#</code>. This part stays in your browser and is not sent to GitHub.',
      'ds.regH': 'Registration',
      'ds.reg1': 'For the registration I need your name, your email address and the installation ID. I use them to check your request, send you the registration code and know who uses Dictation. If there is important news about Dictation, such as a serious bug, I may send you a short email. There is no advertising, and I do not pass your data on to anyone. The legal basis is carrying out the registration you requested (Art. 6(1)(b) GDPR).',
      'ds.reg2': '<strong>Using the registration form:</strong> the form is a Google form provided by Google Ireland Limited (Ireland). Your details are stored in my Google account. Google may also process data in the USA. Google is certified under the EU-US Data Privacy Framework. More in <a href="https://policies.google.com/privacy?hl=en">Google\'s privacy policy</a>.',
      'ds.reg3': '<strong>By email, WhatsApp or another messenger:</strong> I then process the details from your message, i.e. name, sender address or phone number and ID. In addition, the respective provider processes the message under its own terms, for example Google for Gmail or WhatsApp/Meta.',
      'ds.reg4': 'I keep the registration data for as long as you use Dictation. Just write to me if you want me to delete it. A code that has already been redeemed keeps working afterwards.',
      'ds.rightsH': 'Your rights',
      'ds.rights': 'You have the right of access, rectification, erasure and restriction of processing, the right to data portability and the right to object to processing based on legitimate interests. An email to me is enough. You can also lodge a complaint with a data protection supervisory authority, for example the one where you live.',
      'ds.date': 'Last updated: November 2026'
    },

    fr: {
      'nav.lang': 'Langue',
      'foot.imprint': 'Mentions légales',
      'foot.privacy': 'Confidentialité',
      'foot.license': 'Licence',
      'legal.note': 'Traduction fournie pour votre commodité. Seule la version allemande fait foi.',
      'country': 'Allemagne',
      'email': 'E-mail :',

      'index.title': 'Dictation – dictée vocale gratuite pour Windows',
      'index.desc': 'Dictation convertit la parole en texte localement sur votre PC Windows. Gratuit et non commercial.',
      'index.h1': 'Parlez au lieu de taper.',
      'index.lead': 'Dictation convertit la parole en texte sur votre PC Windows et l’insère là où se trouve votre curseur. La reconnaissance vocale avec Whisper fonctionne entièrement en local.',
      'index.badge': 'Gratuit · non commercial',
      'index.download': 'Télécharger le programme d’installation',
      'index.register': 'S’enregistrer',
      'index.req': 'Windows 10 ou 11 (64 bits). Sur la page de téléchargement, choisissez sous <strong>Assets</strong> le fichier <code>Dictation-Setup-…-x64.exe</code>. Au premier démarrage, Dictation télécharge une seule fois le modèle vocal (environ 550 Mo).',
      'index.howH': 'Comment ça marche',
      'index.step1': 'Installez le programme et démarrez Dictation.',
      'index.step2': 'Placez le curseur dans le champ de texte où vous voulez dicter.',
      'index.step3': 'Maintenez <strong>Ctrl + Windows</strong> enfoncées et parlez. Lorsque vous relâchez, le texte est reconnu et inséré. Chaque dictée se retrouve aussi dans l’historique.',
      'index.langH': 'Dans votre langue',
      'index.lang': 'L’interface de Dictation existe en allemand, anglais, français, italien et espagnol. Elle suit automatiquement la langue de Windows et peut être changée dans les paramètres. Vous pouvez dicter dans plus de 25 langues.',
      'index.freeH': 'Gratuit, avec enregistrement',
      'index.free1': 'Dictation est un projet privé de Christian Harter (SimFlightChris), gratuit et sans but commercial. J’aimerais toutefois savoir qui utilise Dictation. C’est pourquoi vous vous enregistrez une seule fois : les dix premiers démarrages sont libres, ensuite il vous faut votre code d’enregistrement personnel.',
      'index.free2': 'Pour cela, cliquez dans Dictation sur <strong>S’enregistrer</strong>, puis sur <strong>S’enregistrer en ligne</strong>. Je vous envoie le code par e-mail. Vous l’utilisez dans Dictation dans les 24 heures ; ensuite Dictation reste enregistré pour votre utilisateur Windows, même hors ligne et après les mises à jour.',
      'index.dataH': 'Vos données',
      'index.data': 'Vos enregistrements et vos textes ne quittent pas votre PC. Dictation ne collecte aucune donnée d’utilisation. Il ne se connecte à Internet que lorsque vous téléchargez le modèle vocal, recherchez des mises à jour ou vous enregistrez. Les détails figurent dans la <a href="datenschutz.html">politique de confidentialité</a>.',

      'imp.title': 'Dictation · Mentions légales',
      'imp.h1': 'Mentions légales',
      'imp.basis': 'Informations selon le § 18, al. 1 du traité inter-États allemand sur les médias (Medienstaatsvertrag)',
      'imp.project': 'Dictation est un projet privé et non commercial. Il est proposé gratuitement.',

      'reg.title': 'Enregistrer Dictation',
      'reg.lead': 'L’enregistrement est gratuit. Il me permet seulement de savoir qui utilise Dictation.',
      'reg.step1': '1. Votre identifiant d’installation',
      'reg.known': 'Dictation a transmis votre identifiant :',
      'reg.unknown': 'Ouvrez Dictation, cliquez sur <strong>S’enregistrer</strong>, puis sur <strong>S’enregistrer en ligne</strong>. Ou copiez l’identifiant et collez-le ici :',
      'reg.idLabel': 'Identifiant d’installation',
      'reg.invalid': 'L’identifiant commence par <code>DICT-</code> suivi de 32 caractères.',
      'reg.step2': '2. Remplir le formulaire d’inscription',
      'reg.formText': 'Nom, adresse e-mail et identifiant suffisent. L’identifiant est déjà rempli. Le formulaire est en allemand.',
      'reg.formButton': 'Ouvrir le formulaire d’inscription',
      'reg.mailButton': 'Par e-mail à la place',
      'reg.formNote': 'Le formulaire est hébergé par Google Forms. Ce qu’il advient de vos données est décrit dans la <a href="datenschutz.html#registrierung">politique de confidentialité</a>.',
      'reg.step3': '3. Utiliser le code',
      'reg.code': 'Après validation, vous recevez votre code d’enregistrement par e-mail. Collez-le dans Dictation dans les 24 heures et cliquez sur <strong>Valider le code</strong>.',
      'reg.mailBody': 'Bonjour Chris,\n\nmerci d’enregistrer Dictation pour moi.\nIdentifiant d’installation : {id}\n\nMerci beaucoup !',

      'ds.title': 'Dictation · Confidentialité',
      'ds.h1': 'Politique de confidentialité',
      'ds.lead': 'En bref : Dictation fonctionne en local. Je ne conserve que ce que vous m’envoyez lors de l’enregistrement, et je ne l’utilise que pour cela.',
      'ds.respH': 'Responsable du traitement',
      'ds.private': 'Dictation est un projet privé et non commercial.',
      'ds.appH': 'Le programme Dictation',
      'ds.app1': 'Les enregistrements, les textes reconnus et l’historique restent sur votre PC. Dictation n’envoie aucune donnée d’utilisation ou d’analyse. Dictation ne se connecte lui-même à Internet que dans trois cas, et chaque fois uniquement à votre initiative :',
      'ds.appModel': '<strong>Téléchargement du modèle vocal :</strong> le fichier du modèle est récupéré auprès de Hugging Face, Inc. (États-Unis). Votre adresse IP est alors transmise.',
      'ds.appUpdate': '<strong>Recherche de mises à jour :</strong> la dernière version est demandée à GitHub, Inc. (États-Unis) et, le cas échéant, le programme d’installation est téléchargé. Votre adresse IP et la version de Dictation sont alors transmises.',
      'ds.appRegister': '<strong>Enregistrement en ligne :</strong> ouvre ce site web dans votre navigateur (voir ci-dessous).',
      'ds.app2': 'L’identifiant d’installation est généré aléatoirement sur votre PC. Il ne contient aucune information sur vous ou votre matériel.',
      'ds.app3': 'L’historique est stocké chiffré (DPAPI de Windows) sur votre PC, uniquement pour votre utilisateur Windows. Dans les paramètres, vous pouvez le désactiver, le limiter aux dernières dictées, le flouter et le supprimer définitivement. Les dictées n’apparaissent ni dans l’historique du presse-papiers de Windows ni dans le presse-papiers cloud.',
      'ds.supportH': 'Paquet d’assistance',
      'ds.support': 'Lorsque vous envoyez un paquet d’assistance dans Dictation sous Paramètres &gt; Assistance, Dictation crée un fichier ZIP contenant le journal de diagnostic (horodatages, états du programme, messages d’erreur, noms des programmes cibles lors du collage) et des informations sur la version de Windows, le processeur, la mémoire, les microphones et les paramètres. Les dictées, les enregistrements et l’historique n’y figurent jamais ; les noms d’utilisateur et de PC sont rendus méconnaissables. Dictation n’envoie rien lui-même : le fichier ne me parvient que par votre messagerie, lorsque vous envoyez l’e-mail. Je l’utilise uniquement pour résoudre votre problème et le supprime une fois le cas réglé. La base juridique est votre demande (art. 6, par. 1, point b du RGPD).',
      'ds.webH': 'Ce site web',
      'ds.web1': 'Le site est hébergé sur GitHub Pages (GitHub, Inc., États-Unis). Lors de votre visite, GitHub traite des données techniquement nécessaires comme votre adresse IP afin de fournir le site et de le protéger contre les abus. La base juridique est mon intérêt légitime à une mise à disposition sécurisée (art. 6, par. 1, point f du RGPD). GitHub est certifié selon le cadre de protection des données UE-États-Unis (Data Privacy Framework). Pour en savoir plus, consultez la <a href="https://docs.github.com/fr/site-policy/privacy-policies/github-general-privacy-statement">déclaration de confidentialité de GitHub</a>.',
      'ds.web2': 'Le site ne dépose aucun cookie, ne stocke rien dans votre navigateur, n’utilise aucun outil d’analyse et ne charge aucun contenu d’autres fournisseurs. La langue choisie figure uniquement dans l’adresse (<code>?lang=</code>). L’identifiant d’installation que Dictation transmet à l’ouverture se trouve dans la partie de l’adresse après le <code>#</code>. Cette partie reste dans votre navigateur et n’est pas envoyée à GitHub.',
      'ds.regH': 'Enregistrement',
      'ds.reg1': 'Pour l’enregistrement, j’ai besoin de votre nom, de votre adresse e-mail et de l’identifiant d’installation. Je les utilise pour vérifier votre demande, vous envoyer le code d’enregistrement et savoir qui utilise Dictation. En cas de nouvelle importante concernant Dictation, par exemple un bug grave, je peux vous écrire un court e-mail. Il n’y a pas de publicité et je ne transmets vos données à personne. La base juridique est l’exécution de l’enregistrement que vous avez demandé (art. 6, par. 1, point b du RGPD).',
      'ds.reg2': '<strong>Via le formulaire d’inscription :</strong> le formulaire est un formulaire Google de Google Ireland Limited (Irlande). Vos données sont enregistrées dans mon compte Google. Google peut également traiter des données aux États-Unis. Google est certifié selon le cadre de protection des données UE-États-Unis. Pour en savoir plus, consultez les <a href="https://policies.google.com/privacy?hl=fr">règles de confidentialité de Google</a>.',
      'ds.reg3': '<strong>Par e-mail, WhatsApp ou une autre messagerie :</strong> je traite alors les données de votre message, c’est-à-dire nom, adresse d’expéditeur ou numéro de téléphone et identifiant. En outre, le fournisseur concerné traite le message selon ses propres conditions, par exemple Google pour Gmail ou WhatsApp/Meta.',
      'ds.reg4': 'Je conserve les données d’enregistrement tant que vous utilisez Dictation. Écrivez-moi simplement si vous souhaitez que je les supprime. Un code déjà utilisé continue de fonctionner ensuite.',
      'ds.rightsH': 'Vos droits',
      'ds.rights': 'Vous disposez d’un droit d’accès, de rectification, d’effacement et de limitation du traitement, d’un droit à la portabilité des données ainsi que du droit de vous opposer à un traitement fondé sur des intérêts légitimes. Un e-mail suffit. Vous pouvez également introduire une réclamation auprès d’une autorité de contrôle de la protection des données, par exemple celle de votre lieu de résidence.',
      'ds.date': 'Mise à jour : novembre 2026'
    },

    it: {
      'nav.lang': 'Lingua',
      'foot.imprint': 'Note legali',
      'foot.privacy': 'Privacy',
      'foot.license': 'Licenza',
      'legal.note': 'Traduzione di cortesia. Fa fede soltanto la versione tedesca.',
      'country': 'Germania',
      'email': 'E-mail:',

      'index.title': 'Dictation – dettatura vocale gratuita per Windows',
      'index.desc': 'Dictation trasforma la voce in testo localmente sul tuo PC Windows. Gratuito e non commerciale.',
      'index.h1': 'Parla invece di scrivere.',
      'index.lead': 'Dictation trasforma la voce in testo sul tuo PC Windows e lo inserisce dove si trova il cursore. Il riconoscimento vocale con Whisper funziona interamente in locale.',
      'index.badge': 'Gratuito · non commerciale',
      'index.download': 'Scarica il programma di installazione',
      'index.register': 'Registrati',
      'index.req': 'Windows 10 o 11 (64 bit). Nella pagina di download, sotto <strong>Assets</strong>, scegli il file <code>Dictation-Setup-…-x64.exe</code>. Al primo avvio Dictation scarica una sola volta il modello vocale (circa 550 MB).',
      'index.howH': 'Come funziona',
      'index.step1': 'Installa il programma e avvia Dictation.',
      'index.step2': 'Posiziona il cursore nel campo di testo in cui vuoi dettare.',
      'index.step3': 'Tieni premuti <strong>Ctrl + Windows</strong> e parla. Quando rilasci, il testo viene riconosciuto e inserito. Ogni dettatura si trova anche nella cronologia.',
      'index.langH': 'Nella tua lingua',
      'index.lang': 'L’interfaccia di Dictation è disponibile in tedesco, inglese, francese, italiano e spagnolo. Segue automaticamente la lingua di Windows e si può cambiare nelle impostazioni. Puoi dettare in più di 25 lingue.',
      'index.freeH': 'Gratuito, con registrazione',
      'index.free1': 'Dictation è un progetto privato di Christian Harter (SimFlightChris), gratuito e senza scopo commerciale. Vorrei però sapere chi usa Dictation. Per questo ti registri una sola volta: i primi dieci avvii sono liberi, poi ti serve il tuo codice di registrazione personale.',
      'index.free2': 'Per farlo, in Dictation fai clic su <strong>Registrati</strong> e poi su <strong>Registrati online</strong>. Ti invio il codice via e-mail. Lo inserisci in Dictation entro 24 ore; da quel momento Dictation resta registrato per il tuo utente Windows, anche offline e dopo gli aggiornamenti.',
      'index.dataH': 'I tuoi dati',
      'index.data': 'Le tue registrazioni e i tuoi testi non lasciano il PC. Dictation non raccoglie dati di utilizzo. Si collega a Internet solo quando scarichi il modello vocale, cerchi aggiornamenti o ti registri. I dettagli sono nell’<a href="datenschutz.html">informativa sulla privacy</a>.',

      'imp.title': 'Dictation · Note legali',
      'imp.h1': 'Note legali',
      'imp.basis': 'Informazioni ai sensi del § 18, comma 1 del Trattato interstatale tedesco sui media (Medienstaatsvertrag)',
      'imp.project': 'Dictation è un progetto privato e non commerciale. Viene offerto gratuitamente.',

      'reg.title': 'Registra Dictation',
      'reg.lead': 'La registrazione è gratuita. Mi dice solo chi usa Dictation.',
      'reg.step1': '1. Il tuo ID di installazione',
      'reg.known': 'Dictation ha trasmesso il tuo ID:',
      'reg.unknown': 'Apri Dictation, fai clic su <strong>Registrati</strong> e poi su <strong>Registrati online</strong>. Oppure copia lì l’ID e incollalo qui:',
      'reg.idLabel': 'ID di installazione',
      'reg.invalid': 'L’ID inizia con <code>DICT-</code> seguito da 32 caratteri.',
      'reg.step2': '2. Compila il modulo di registrazione',
      'reg.formText': 'Bastano nome, indirizzo e-mail e ID. L’ID è già inserito. Il modulo è in tedesco.',
      'reg.formButton': 'Apri il modulo di registrazione',
      'reg.mailButton': 'Oppure via e-mail',
      'reg.formNote': 'Il modulo è ospitato da Google Forms. Cosa succede ai tuoi dati è spiegato nell’<a href="datenschutz.html#registrierung">informativa sulla privacy</a>.',
      'reg.step3': '3. Inserisci il codice',
      'reg.code': 'Dopo la mia approvazione ricevi il codice di registrazione via e-mail. Inseriscilo in Dictation entro 24 ore e fai clic su <strong>Conferma codice</strong>.',
      'reg.mailBody': 'Ciao Chris,\n\nper favore registra Dictation per me.\nID di installazione: {id}\n\nGrazie mille!',

      'ds.title': 'Dictation · Privacy',
      'ds.h1': 'Informativa sulla privacy',
      'ds.lead': 'In breve: Dictation funziona in locale. Conservo solo ciò che mi invii al momento della registrazione e lo uso solo a quello scopo.',
      'ds.respH': 'Titolare del trattamento',
      'ds.private': 'Dictation è un progetto privato e non commerciale.',
      'ds.appH': 'Il programma Dictation',
      'ds.app1': 'Le registrazioni, i testi riconosciuti e la cronologia restano sul tuo PC. Dictation non invia dati di utilizzo o di analisi. Dictation si collega a Internet da solo solo in tre casi, e ogni volta solo se sei tu ad avviarlo:',
      'ds.appModel': '<strong>Download del modello vocale:</strong> il file del modello viene scaricato da Hugging Face, Inc. (USA). In questa occasione viene trasmesso il tuo indirizzo IP.',
      'ds.appUpdate': '<strong>Ricerca di aggiornamenti:</strong> la versione più recente viene richiesta a GitHub, Inc. (USA) ed eventualmente viene scaricato il programma di installazione. In questa occasione vengono trasmessi il tuo indirizzo IP e la versione di Dictation.',
      'ds.appRegister': '<strong>Registrazione online:</strong> apre questo sito web nel tuo browser (vedi sotto).',
      'ds.app2': 'L’ID di installazione viene generato casualmente sul tuo PC. Non contiene informazioni su di te o sul tuo hardware.',
      'ds.app3': 'La cronologia è salvata in forma crittografata (DPAPI di Windows) sul tuo PC, solo per il tuo utente Windows. Nelle impostazioni puoi disattivarla, limitarla alle ultime dettature, offuscarla ed eliminarla definitivamente. Le dettature non finiscono nella cronologia degli appunti di Windows né negli appunti cloud.',
      'ds.supportH': 'Pacchetto di assistenza',
      'ds.support': 'Quando invii un pacchetto di assistenza da Dictation in Impostazioni &gt; Assistenza, Dictation crea un file ZIP con il registro diagnostico (orari, stati del programma, messaggi di errore, nomi dei programmi di destinazione durante l’incolla) e informazioni su versione di Windows, processore, memoria, microfoni e impostazioni. Dettature, registrazioni e cronologia non sono mai incluse; i nomi utente e del PC vengono resi irriconoscibili. Dictation non invia nulla da solo: il file mi arriva solo tramite il tuo programma di posta, quando invii l’e-mail. Lo uso esclusivamente per risolvere il tuo problema e lo elimino una volta chiuso il caso. La base giuridica è la tua richiesta (art. 6, par. 1, lett. b GDPR).',
      'ds.webH': 'Questo sito web',
      'ds.web1': 'Il sito è ospitato su GitHub Pages (GitHub, Inc., USA). Quando lo visiti, GitHub tratta i dati tecnicamente necessari, come il tuo indirizzo IP, per fornire il sito e proteggerlo da abusi. La base giuridica è il mio legittimo interesse a una fornitura sicura (art. 6, par. 1, lett. f GDPR). GitHub è certificato secondo l’EU-US Data Privacy Framework. Maggiori informazioni nella <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">dichiarazione sulla privacy di GitHub</a>.',
      'ds.web2': 'Il sito non imposta cookie, non salva nulla nel tuo browser, non usa strumenti di analisi e non carica contenuti di altri fornitori. La lingua scelta compare solo nell’indirizzo (<code>?lang=</code>). L’ID di installazione che Dictation trasmette all’apertura si trova nella parte dell’indirizzo dopo il <code>#</code>. Questa parte resta nel tuo browser e non viene inviata a GitHub.',
      'ds.regH': 'Registrazione',
      'ds.reg1': 'Per la registrazione mi servono il tuo nome, il tuo indirizzo e-mail e l’ID di installazione. Li uso per verificare la tua richiesta, inviarti il codice di registrazione e sapere chi usa Dictation. Se ci sono novità importanti su Dictation, per esempio un errore grave, posso scriverti una breve e-mail. Non c’è pubblicità e non comunico i tuoi dati a nessuno. La base giuridica è l’esecuzione della registrazione da te richiesta (art. 6, par. 1, lett. b GDPR).',
      'ds.reg2': '<strong>Tramite il modulo di registrazione:</strong> il modulo è un modulo Google di Google Ireland Limited (Irlanda). I tuoi dati vengono salvati nel mio account Google. Google può trattare dati anche negli USA. Google è certificato secondo l’EU-US Data Privacy Framework. Maggiori informazioni nelle <a href="https://policies.google.com/privacy?hl=it">norme sulla privacy di Google</a>.',
      'ds.reg3': '<strong>Via e-mail, WhatsApp o altro messenger:</strong> in questo caso tratto i dati del tuo messaggio, cioè nome, indirizzo del mittente o numero di telefono e ID. Inoltre il relativo fornitore tratta il messaggio secondo le proprie condizioni, per esempio Google per Gmail o WhatsApp/Meta.',
      'ds.reg4': 'Conservo i dati di registrazione finché usi Dictation. Scrivimi semplicemente se vuoi che li cancelli. Un codice già inserito continua a funzionare anche dopo.',
      'ds.rightsH': 'I tuoi diritti',
      'ds.rights': 'Hai diritto di accesso, rettifica, cancellazione e limitazione del trattamento, alla portabilità dei dati e il diritto di opporti a un trattamento basato su interessi legittimi. Basta un’e-mail. Puoi inoltre presentare reclamo a un’autorità di controllo per la protezione dei dati, per esempio quella del luogo in cui vivi.',
      'ds.date': 'Aggiornamento: novembre 2026'
    },

    es: {
      'nav.lang': 'Idioma',
      'foot.imprint': 'Aviso legal',
      'foot.privacy': 'Privacidad',
      'foot.license': 'Licencia',
      'legal.note': 'Traducción ofrecida por comodidad. Solo la versión alemana es jurídicamente vinculante.',
      'country': 'Alemania',
      'email': 'Correo electrónico:',

      'index.title': 'Dictation – dictado por voz gratuito para Windows',
      'index.desc': 'Dictation convierte la voz en texto de forma local en tu PC con Windows. Gratuito y sin fines comerciales.',
      'index.h1': 'Habla en lugar de teclear.',
      'index.lead': 'Dictation convierte lo que dices en texto en tu PC con Windows y lo inserta donde esté el cursor. El reconocimiento de voz con Whisper funciona totalmente en local.',
      'index.badge': 'Gratuito · sin fines comerciales',
      'index.download': 'Descargar el instalador',
      'index.register': 'Registrarse',
      'index.req': 'Windows 10 u 11 (64 bits). En la página de descarga, en <strong>Assets</strong>, elige el archivo <code>Dictation-Setup-…-x64.exe</code>. En el primer inicio, Dictation descarga una sola vez el modelo de voz (unos 550 MB).',
      'index.howH': 'Así funciona',
      'index.step1': 'Instala el programa e inicia Dictation.',
      'index.step2': 'Coloca el cursor en el campo de texto en el que quieras dictar.',
      'index.step3': 'Mantén pulsadas <strong>Ctrl + Windows</strong> y habla. Al soltarlas, el texto se reconoce y se inserta. Cada dictado también queda en el historial.',
      'index.langH': 'En tu idioma',
      'index.lang': 'La interfaz de Dictation está disponible en alemán, inglés, francés, italiano y español. Sigue automáticamente el idioma de Windows y se puede cambiar en la configuración. Puedes dictar en más de 25 idiomas.',
      'index.freeH': 'Gratuito, con registro',
      'index.free1': 'Dictation es un proyecto privado de Christian Harter (SimFlightChris), gratuito y sin fines comerciales. Aun así, me gustaría saber quién usa Dictation. Por eso te registras una sola vez: los diez primeros inicios son libres; después necesitas tu código de registro personal.',
      'index.free2': 'Para ello, haz clic en Dictation en <strong>Registrarse</strong> y después en <strong>Registrarse en línea</strong>. Te envío el código por correo electrónico. Lo canjeas en Dictation en un plazo de 24 horas; a partir de entonces Dictation queda registrado para tu usuario de Windows, también sin conexión y tras las actualizaciones.',
      'index.dataH': 'Tus datos',
      'index.data': 'Tus grabaciones y textos no salen de tu PC. Dictation no recopila datos de uso. Solo se conecta a Internet cuando descargas el modelo de voz, buscas actualizaciones o te registras. Los detalles están en la <a href="datenschutz.html">política de privacidad</a>.',

      'imp.title': 'Dictation · Aviso legal',
      'imp.h1': 'Aviso legal',
      'imp.basis': 'Información conforme al § 18, apdo. 1 del Tratado Interestatal alemán de Medios (Medienstaatsvertrag)',
      'imp.project': 'Dictation es un proyecto privado y sin fines comerciales. Se ofrece de forma gratuita.',

      'reg.title': 'Registrar Dictation',
      'reg.lead': 'El registro es gratuito. Solo me indica quién usa Dictation.',
      'reg.step1': '1. Tu ID de instalación',
      'reg.known': 'Dictation ha enviado tu ID:',
      'reg.unknown': 'Abre Dictation, haz clic en <strong>Registrarse</strong> y después en <strong>Registrarse en línea</strong>. O copia allí el ID y pégalo aquí:',
      'reg.idLabel': 'ID de instalación',
      'reg.invalid': 'El ID empieza por <code>DICT-</code> seguido de 32 caracteres.',
      'reg.step2': '2. Rellenar el formulario de registro',
      'reg.formText': 'Basta con el nombre, la dirección de correo y el ID. El ID ya está rellenado. El formulario está en alemán.',
      'reg.formButton': 'Abrir el formulario de registro',
      'reg.mailButton': 'Por correo en su lugar',
      'reg.formNote': 'El formulario está alojado en Google Forms. Lo que ocurre con tus datos se explica en la <a href="datenschutz.html#registrierung">política de privacidad</a>.',
      'reg.step3': '3. Canjear el código',
      'reg.code': 'Cuando lo apruebe, recibirás tu código de registro por correo electrónico. Pégalo en Dictation en un plazo de 24 horas y haz clic en <strong>Confirmar código</strong>.',
      'reg.mailBody': 'Hola, Chris:\n\npor favor, registra Dictation para mí.\nID de instalación: {id}\n\n¡Muchas gracias!',

      'ds.title': 'Dictation · Privacidad',
      'ds.h1': 'Política de privacidad',
      'ds.lead': 'En resumen: Dictation funciona en local. Solo guardo lo que me envías al registrarte y solo lo uso para eso.',
      'ds.respH': 'Responsable',
      'ds.private': 'Dictation es un proyecto privado y sin fines comerciales.',
      'ds.appH': 'El programa Dictation',
      'ds.app1': 'Las grabaciones, los textos reconocidos y el historial se quedan en tu PC. Dictation no envía datos de uso ni de análisis. Dictation solo se conecta por sí mismo a Internet en tres casos, y siempre solo cuando tú lo inicias:',
      'ds.appModel': '<strong>Descargar el modelo de voz:</strong> el archivo del modelo se obtiene de Hugging Face, Inc. (EE. UU.). Durante la descarga se transmite tu dirección IP.',
      'ds.appUpdate': '<strong>Buscar actualizaciones:</strong> se consulta la versión más reciente en GitHub, Inc. (EE. UU.) y, en su caso, se descarga el instalador. Durante el proceso se transmiten tu dirección IP y la versión de Dictation.',
      'ds.appRegister': '<strong>Registrarse en línea:</strong> abre este sitio web en tu navegador (ver más abajo).',
      'ds.app2': 'El ID de instalación se genera al azar en tu PC. No contiene información sobre ti ni sobre tu hardware.',
      'ds.app3': 'El historial se guarda cifrado (DPAPI de Windows) en tu PC, solo para tu usuario de Windows. En la configuración puedes desactivarlo, limitarlo a los últimos dictados, difuminarlo y eliminarlo definitivamente. Los dictados no acaban en el historial del portapapeles de Windows ni en el portapapeles en la nube.',
      'ds.supportH': 'Paquete de soporte',
      'ds.support': 'Cuando envías un paquete de soporte desde Dictation en Configuración &gt; Soporte, Dictation crea un archivo ZIP con el registro de diagnóstico (horas, estados del programa, mensajes de error, nombres de los programas de destino al pegar) e información sobre la versión de Windows, el procesador, la memoria, los micrófonos y la configuración. Los dictados, las grabaciones y el historial nunca se incluyen; los nombres de usuario y del PC se hacen irreconocibles. Dictation no envía nada por sí mismo: el archivo solo me llega a través de tu programa de correo cuando envías el mensaje. Lo uso exclusivamente para resolver tu problema y lo elimino cuando el caso está cerrado. La base jurídica es tu solicitud (art. 6, apdo. 1, letra b del RGPD).',
      'ds.webH': 'Este sitio web',
      'ds.web1': 'El sitio está alojado en GitHub Pages (GitHub, Inc., EE. UU.). Al visitarlo, GitHub trata datos técnicamente necesarios, como tu dirección IP, para servir el sitio y protegerlo frente a abusos. La base jurídica es mi interés legítimo en un servicio seguro (art. 6, apdo. 1, letra f del RGPD). GitHub está certificado conforme al Marco de Privacidad de Datos UE-EE. UU. Más información en la <a href="https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement">declaración de privacidad de GitHub</a>.',
      'ds.web2': 'El sitio no instala cookies, no guarda nada en tu navegador, no usa herramientas de análisis y no carga contenidos de otros proveedores. El idioma elegido solo figura en la dirección (<code>?lang=</code>). El ID de instalación que Dictation transmite al abrir la página está en la parte de la dirección que sigue a <code>#</code>. Esa parte se queda en tu navegador y no se envía a GitHub.',
      'ds.regH': 'Registro',
      'ds.reg1': 'Para el registro necesito tu nombre, tu dirección de correo electrónico y el ID de instalación. Los uso para comprobar tu solicitud, enviarte el código de registro y saber quién usa Dictation. Si hay novedades importantes sobre Dictation, por ejemplo un error grave, puedo escribirte un breve correo. No hay publicidad y no cedo tus datos a nadie. La base jurídica es la realización del registro que has solicitado (art. 6, apdo. 1, letra b del RGPD).',
      'ds.reg2': '<strong>Mediante el formulario de registro:</strong> el formulario es un formulario de Google de Google Ireland Limited (Irlanda). Tus datos se guardan en mi cuenta de Google. Google también puede tratar datos en EE. UU. Google está certificado conforme al Marco de Privacidad de Datos UE-EE. UU. Más información en la <a href="https://policies.google.com/privacy?hl=es">política de privacidad de Google</a>.',
      'ds.reg3': '<strong>Por correo electrónico, WhatsApp u otra mensajería:</strong> en ese caso trato los datos de tu mensaje, es decir, nombre, dirección del remitente o número de teléfono e ID. Además, el proveedor correspondiente trata el mensaje según sus propias condiciones, por ejemplo Google en Gmail o WhatsApp/Meta.',
      'ds.reg4': 'Guardo los datos de registro mientras uses Dictation. Escríbeme si quieres que los elimine. Un código ya canjeado sigue funcionando después.',
      'ds.rightsH': 'Tus derechos',
      'ds.rights': 'Tienes derecho de acceso, rectificación, supresión y limitación del tratamiento, a la portabilidad de los datos y derecho a oponerte a un tratamiento basado en intereses legítimos. Basta con un correo electrónico. También puedes presentar una reclamación ante una autoridad de control de protección de datos, por ejemplo la de tu lugar de residencia.',
      'ds.date': 'Última actualización: noviembre de 2026'
    }
  };

  function choose() {
    const asked = new URLSearchParams(location.search).get('lang');
    if (asked && names[asked]) return asked;
    for (const tag of navigator.languages || [navigator.language || '']) {
      const code = String(tag).slice(0, 2).toLowerCase();
      if (names[code]) return code;
    }
    return 'en';
  }

  const lang = choose();
  const own = texts[lang] || {};
  window.dictationLang = lang;
  window.dictationText = (key, german) => own[key] ?? german;
  // Hides the German page text until it is replaced, so it does not flash.
  if (lang !== 'de') document.documentElement.classList.add('i18n-pending');

  function withLang(href, code) {
    const url = new URL(href, location.href);
    url.searchParams.set('lang', code);
    return (url.pathname.split('/').pop() || './') + url.search + url.hash;
  }

  function apply() {
    document.documentElement.lang = lang;
    for (const el of document.querySelectorAll('[data-i18n]')) {
      const text = own[el.dataset.i18n];
      if (text !== undefined) { el.innerHTML = text; if (el.dataset.i18n === 'legal.note') el.hidden = false; }
    }
    for (const el of document.querySelectorAll('[data-i18n-content]')) {
      const text = own[el.dataset.i18nContent];
      if (text !== undefined) el.setAttribute('content', text);
    }
    // Pages of this site keep the chosen language.
    for (const a of document.querySelectorAll('a[href]')) {
      const href = a.getAttribute('href');
      if (/^(\.\/|[\w-]+\.html)/.test(href)) a.setAttribute('href', withLang(href, lang));
    }
    const header = document.querySelector('header.site');
    if (header) {
      const nav = document.createElement('nav');
      nav.className = 'langs';
      nav.setAttribute('aria-label', own['nav.lang'] ?? 'Sprache');
      for (const [code, name] of Object.entries(names)) {
        const link = document.createElement('a');
        link.textContent = code.toUpperCase();
        link.title = name;
        link.lang = code;
        link.href = withLang(location.href, code);
        if (code === lang) link.setAttribute('aria-current', 'true');
        nav.appendChild(link);
      }
      header.appendChild(nav);
    }
    document.documentElement.classList.remove('i18n-pending');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();
})();
