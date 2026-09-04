/* Static legal site content. Operator currently listed as natural person. */
const OPERATOR = {
  legalName: "Fabian Schmid",
  street: "Schroffenstraße 8a",
  postal: "86163",
  city: "Augsburg",
  country: "Deutschland",
  contact: "linuteam@yahoo.com",
  privacy: "linuteam@yahoo.com",
  support: "linuteam@yahoo.com",
  lastUpdated: "4. September 2026",
  supabaseRegion: "eu-central-1 (Frankfurt)",
  /** Production builds may send technical crash data via Sentry. */
  errorMonitoring: "yes",
};

const contact = () => `<a href="mailto:${OPERATOR.contact}">${OPERATOR.contact}</a>`;
const privacyMail = () => `<a href="mailto:${OPERATOR.privacy}">${OPERATOR.privacy}</a>`;
const supportMail = () => `<a href="mailto:${OPERATOR.support}">${OPERATOR.support}</a>`;
const address = () =>
  `${OPERATOR.legalName}<br>${OPERATOR.street}<br>${OPERATOR.postal} ${OPERATOR.city}<br>${OPERATOR.country}`;

const supabaseNote = OPERATOR.supabaseRegion ? ` (${OPERATOR.supabaseRegion})` : "";

function errorMonitoringSentence(lang) {
  if (OPERATOR.errorMonitoring === "no") return "";
  if (OPERATOR.errorMonitoring === "yes") {
    if (lang === "de") {
      return " Fehler-Monitoring (z. B. Sentry) kann technische Absturz- und Performance-Daten nach Auftragsverarbeitung verarbeiten.";
    }
    if (lang === "es") {
      return " La monitorización de errores (p. ej. Sentry) puede tratar datos técnicos de fallos y rendimiento bajo un acuerdo de encargo.";
    }
    return " Error monitoring (for example Sentry) may process technical crash and performance data under a data-processing agreement.";
  }
  if (lang === "de") {
    return " Falls später Fehler-Monitoring aktiviert wird, verarbeitet es technische Absturzdaten nur nach Auftragsverarbeitung.";
  }
  if (lang === "es") {
    return " Si más adelante se activa la monitorización de errores, tratará datos técnicos de fallos solo bajo encargo.";
  }
  return " If error monitoring is enabled later, it will process technical crash data under a data-processing agreement only.";
}

const text = {
  en: {
    common: { back: "← Back to linu", updated: `Last updated: ${OPERATOR.lastUpdated}` },
    home: {
      eyebrow: "A quieter place for what matters",
      title: "Memories, kept close.",
      lead: "linu is a private space for family photos, videos, and a shared timeline.",
      privacy: "Privacy policy →",
      terms: "Terms of use →",
      imprint: "Legal notice →",
      footer: "Private by design.",
    },
    privacy: {
      title: "Privacy policy",
      intro:
        "linu is designed for private family memories — not for public feeds or advertising. This policy explains how the operator processes personal data when you use the linu app and this website.",
      controller: "Controller",
      controllerBody: `The controller is ${address()}. General contact: ${contact()}. Privacy: ${privacyMail()}.`,
      data: "Categories of data we process",
      dataBody: `
        <p>Depending on how you use linu, we may process:</p>
        <ul>
          <li><strong>Account data</strong> — email address, display name, account avatar, authentication and security data (for example password hashes managed by our auth provider, reset codes, session data).</li>
          <li><strong>Linu profiles and memberships</strong> — profile names and avatars, roles (owner, admin, member, viewer), invite codes, and who belongs to which profile.</li>
          <li><strong>Media and memories</strong> — photos, videos, audio memories, captions, timeline entries, story/blog content, and related metadata such as capture date, dimensions or technical file attributes when available.</li>
          <li><strong>Interactions</strong> — likes, comments, activity events and push-notification tokens or preferences.</li>
          <li><strong>Technical and security data</strong> — device/app diagnostics needed to operate and secure the service, including error reports if monitoring is enabled.</li>
          <li><strong>Storage and plan data</strong> — approximate storage use, plan status (for example free or Linu Plus) and related quota information. Card or store payment details are processed by Apple, Google or other payment providers — not stored by linu as full payment credentials.</li>
          <li><strong>Website preferences</strong> — language choice stored locally in your browser on this site.</li>
        </ul>`,
      purposes: "Purposes and legal bases",
      purposesBody: `
        <p>We process personal data to:</p>
        <ul>
          <li>create and authenticate accounts, provide the app, store and display content to authorised members, and manage invites and roles — <strong>Art. 6(1)(b) GDPR</strong> (contract);</li>
          <li>protect the service, prevent abuse, debug failures and meet security needs — <strong>Art. 6(1)(f) GDPR</strong> (legitimate interests);</li>
          <li>send optional push notifications where you enable them — <strong>Art. 6(1)(a) GDPR</strong> (consent), withdrawable in system or app settings;</li>
          <li>comply with legal duties (for example tax or regulatory requests where applicable) — <strong>Art. 6(1)(c) GDPR</strong>.</li>
        </ul>
        <p>We do <strong>not</strong> sell personal data, do not use family media for advertising, and do not analyse your photos or videos to train marketing models or build public recommendation feeds.</p>`,
      children: "Children and Linu profiles",
      childrenBody:
        "Accounts are intended for people aged <strong>16 or older</strong>. A Linu profile may describe a younger child as the subject of memories, but that profile is not a login account. People under 16 should not create their own account. Only upload content if you have the necessary rights and permissions — especially for identifiable children and other people.",
      sharing: "Who receives data",
      sharingBody: `
        <p>Content is shared only with members you (or other authorised roles) invite into the relevant Linu profile. We use processors needed to run linu, including:</p>
        <ul>
          <li>Supabase for database, authentication and media storage${supabaseNote};</li>
          <li>email/infrastructure providers configured for transactional mail (for example password-reset codes);</li>
          <li>app stores and their billing systems when you purchase Linu Plus;</li>
          <li>hosting for this public website.${errorMonitoringSentence("en")}</li>
        </ul>
        <p>Processors act under contracts and only for documented purposes. We may disclose data if required by law or to protect users and the service. Current core processors are listed above; if providers change, we will update this policy.</p>`,
      retention: "Storage and deletion",
      retentionBody: `
        <p>We keep account and family content while your account or the relevant Linu profile exists, subject to backups and legal retention duties.</p>
        <ul>
          <li>You can delete your account in the app.</li>
          <li>If you own Linu profiles with no other members, those profiles and their content are removed with your account.</li>
          <li>If you leave or delete your account while other members remain on a profile, you are removed as a member; your likes and comments are removed; the profile and its media generally remain for the remaining members (uploader attribution may fall back as designed in the product).</li>
          <li>Owners must transfer ownership before deleting an account if another member still needs the profile.</li>
          <li>Support and security logs are kept only as long as needed.</li>
        </ul>
        <p>Existing memories are not deleted solely because you reach a storage limit or leave a paid plan; new uploads may be refused until space is available again.</p>`,
      transfers: "International transfers",
      transfersBody:
        "Some providers may process data outside your country or the European Economic Area. Where required, the operator uses an adequacy decision, EU standard contractual clauses, or another lawful transfer mechanism. Core hosting for linu data is planned in the EU (Supabase eu-central-1, Frankfurt); individual subprocessors may still involve limited transfers under those safeguards.",
      rights: "Your rights",
      rightsBody: `Subject to legal limits, you may request access, correction, deletion, restriction, portability, or object to processing based on legitimate interests. Where processing relies on consent, you may withdraw it without affecting prior lawful processing. Contact ${privacyMail()} or ${supportMail()} for access or export requests. You may also complain to your local data-protection authority.`,
      security: "Security",
      securityBody:
        "linu uses authenticated access, role-based permissions, row-level security and signed media URLs where applicable. No internet service can guarantee absolute security. Report suspected abuse or a security issue to " +
        supportMail() +
        ".",
      cookies: "Cookies and local storage",
      cookiesBody:
        "This public website currently stores your language preference in the browser (local storage). It does not set advertising or analytics cookies. If we later add optional analytics or similar technologies, we will update this section and obtain consent where required. The mobile app may store account session and preference data on your device to keep you signed in and remember settings.",
      changes: "Changes",
      changesBody:
        "We may update this policy when the service, providers or law changes. We will publish the updated version with a new date on this page and, for material changes, inform you in the app or by email where appropriate. Continued use after notice of material changes that require a new agreement may be conditional on accepting the updated terms; where GDPR requires consent for a new purpose, we will ask for it.",
    },
    terms: {
      title: "Terms of use",
      intro: `These terms govern use of linu between you and ${OPERATOR.legalName}.`,
      eligibility: "Eligibility and accounts",
      eligibilityBody:
        "You must be at least <strong>16 years old</strong> and provide accurate registration information. Keep your password confidential and tell us if you suspect unauthorised access. You are responsible for activity under your account, including invites you send and roles you assign.",
      service: "The service",
      serviceBody:
        "linu provides private spaces (Linu profiles) for storing and sharing photos, videos, audio memories and timeline entries with authorised members. There is no public social feed and no advertising based on your family media. Features, limits and availability may change as the product develops. linu is not a professional archive, emergency service or guaranteed backup product — keep independent copies of content that matters to you.",
      content: "Your content and licence",
      contentBody: `
        <p>You retain ownership of content you upload. To operate the service you grant ${OPERATOR.legalName} a limited, worldwide, non-exclusive licence to host, store, process, create technical derivatives (for example thumbnails or display versions), back up, transmit and display that content solely to provide linu to you and to people you authorise. This licence ends when the content is deleted from linu, subject to residual backups and legal duties.</p>
        <p>You confirm that you have the rights and permissions required to upload the content, including consent or other lawful basis for identifiable people and children where needed.</p>`,
      sharing: "Invites and sharing",
      sharingBody:
        "When you invite someone to a Linu profile or assign a role, you enable that person to access content according to their permissions. You are responsible for choosing trustworthy invitees and appropriate roles. Content others upload remains their responsibility; shared profiles may contain media uploaded by several members.",
      conduct: "Acceptable use",
      conductBody: `
        <p>You agree not to:</p>
        <ul>
          <li>upload unlawful, abusive, harassing, discriminatory, infringing, malicious or sexually exploitative content;</li>
          <li>upload content you are not allowed to share, especially involving children without proper rights or permissions;</li>
          <li>attempt to access another account, bypass storage or role limits, scrape the service, disrupt infrastructure, or reverse-engineer the app beyond what the law allows;</li>
          <li>use linu for spam, commercial mass distribution, or purposes for which it is not designed.</li>
        </ul>
        <p>We may restrict, remove or suspend access where legally required or necessary to protect users or the service.</p>`,
      subscriptions: "Linu Plus, stores and storage",
      subscriptionsBody: `
        <p>Free and paid plans (for example Linu Plus) may offer different storage or feature limits. If you buy through the Apple App Store or Google Play, their terms, billing and refund rules also apply. Before purchase, the checkout or store listing shows price, period, renewal and cancellation information.</p>
        <ul>
          <li>Storage limits apply per billing account.</li>
          <li>If a limit is reached, new uploads may be refused until you free space or upgrade.</li>
          <li>Existing memories are not deleted solely because of a downgrade or quota state.</li>
          <li>If subscription prices change, we will notify you in advance where required; changes take effect for the next billing period and you may cancel before renewal.</li>
        </ul>`,
      termination: "Suspension and termination",
      terminationBody:
        "You may stop using linu and delete your account in the app at any time. We may suspend or terminate access for security, legal, abuse, non-payment or similar reasons. On account deletion, data is handled as described in the Privacy Policy (including profile ownership rules). We may modify or discontinue parts of the service with reasonable notice where practicable.",
      liability: "Liability",
      liabilityBody:
        "Nothing in these terms limits liability where the law does not allow it, including liability for intent, gross negligence, injury to life, body or health, product liability, or mandatory consumer rights. To the extent permitted by law, linu is provided without a guarantee of uninterrupted or error-free availability, and we are not liable for loss of content that you could reasonably have kept as an independent copy.",
      law: "Governing law and contact",
      lawBody: `Governing law and venue: laws of the Federal Republic of Germany; place of jurisdiction at the controller’s place of residence to the extent permitted by law. Mandatory consumer protections in your country of residence remain unaffected. Questions: ${contact()}. Support: ${supportMail()}.`,
    },
    imprint: {
      title: "Legal notice",
      intro: "Provider identification and contact details for linu.",
      provider: "Provider",
      providerBody: address(),
      contact: "Contact",
      contactBody: `Email: ${contact()}<br>Privacy: ${privacyMail()}<br>Support: ${supportMail()}`,
      register: "Registration and tax details",
      registerBody:
        "Commercial register: not applicable (natural person).<br>VAT ID: not applicable.",
      responsibility: "Editorial responsibility",
      responsibilityBody: `Responsible for content: ${address()}.`,
      website: "Website storage",
      websiteBody:
        "This site stores your language preference locally in the browser. No advertising cookies are used on these pages at present.",
      dispute: "Consumer dispute resolution",
      disputeBody:
        'The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" rel="noopener noreferrer" target="_blank">https://ec.europa.eu/consumers/odr</a>. We are neither obliged nor willing to participate in dispute-resolution proceedings before a consumer arbitration board.',
    },
  },
  de: {
    common: { back: "← Zurück zu linu", updated: `Stand: ${OPERATOR.lastUpdated}` },
    home: {
      eyebrow: "Ein ruhiger Ort für das, was zählt",
      title: "Erinnerungen, behutsam bewahrt.",
      lead: "linu ist ein privater Ort für Familienfotos, Videos und eine gemeinsame Timeline.",
      privacy: "Datenschutzerklärung →",
      terms: "Nutzungsbedingungen →",
      imprint: "Impressum →",
      footer: "Privat entwickelt.",
    },
    privacy: {
      title: "Datenschutzerklärung",
      intro:
        "linu ist für private Familienmomente gedacht — nicht für öffentliche Feeds oder Werbung. Diese Erklärung beschreibt, wie der Betreiber personenbezogene Daten in der App und auf dieser Website verarbeitet.",
      controller: "Verantwortlicher",
      controllerBody: `Verantwortlich ist ${address()}. Allgemeiner Kontakt: ${contact()}. Datenschutz: ${privacyMail()}.`,
      data: "Verarbeitete Datenkategorien",
      dataBody: `
        <p>Je nach Nutzung können wir verarbeiten:</p>
        <ul>
          <li><strong>Kontodaten</strong> — E-Mail-Adresse, Anzeigename, Profilbild, Authentifizierungs- und Sicherheitsdaten (z. B. vom Auth-Anbieter verwaltete Passwort-Hashes, Reset-Codes, Sitzungsdaten).</li>
          <li><strong>Linu-Profile und Mitgliedschaften</strong> — Profilnamen und -bilder, Rollen (Owner, Admin, Member, Viewer), Einladungscodes und Zugehörigkeit zu Profilen.</li>
          <li><strong>Medien und Erinnerungen</strong> — Fotos, Videos, Audio-Erinnerungen, Texte, Timeline-Einträge, Blog-/Story-Inhalte sowie Metadaten wie Aufnahmedatum, Abmessungen oder technische Dateiattribute, soweit vorhanden.</li>
          <li><strong>Interaktionen</strong> — Likes, Kommentare, Aktivitätsereignisse sowie Push-Token bzw. Benachrichtigungseinstellungen.</li>
          <li><strong>Technische und Sicherheitsdaten</strong> — Diagnosedaten zum Betrieb und zur Absicherung des Dienstes, einschließlich Fehlerberichten, falls Monitoring aktiv ist.</li>
          <li><strong>Speicher- und Plandaten</strong> — ungefährer Speicherverbrauch, Planstatus (z. B. Free oder Linu Plus) und Quota-Informationen. Zahlungsdaten der Karte bzw. des Stores verarbeiten Apple, Google oder andere Zahlungsanbieter — linu speichert keine vollständigen Zahlungsdaten.</li>
          <li><strong>Website-Einstellungen</strong> — Sprachwahl lokal im Browser dieser Seite.</li>
        </ul>`,
      purposes: "Zwecke und Rechtsgrundlagen",
      purposesBody: `
        <p>Wir verarbeiten personenbezogene Daten, um:</p>
        <ul>
          <li>Konten anzulegen und zu authentifizieren, den Dienst bereitzustellen, Inhalte für berechtigte Mitglieder zu speichern und anzuzeigen sowie Einladungen und Rollen zu verwalten — <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> (Vertrag);</li>
          <li>den Dienst zu schützen, Missbrauch zu verhindern, Störungen zu beheben und Sicherheit zu gewährleisten — <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse);</li>
          <li>optionale Push-Benachrichtigungen zu senden, wenn du sie aktivierst — <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> (Einwilligung), widerrufbar in System- oder App-Einstellungen;</li>
          <li>gesetzliche Pflichten zu erfüllen — <strong>Art. 6 Abs. 1 lit. c DSGVO</strong>.</li>
        </ul>
        <p>Wir verkaufen keine personenbezogenen Daten, nutzen Familienmedien nicht für Werbung und analysieren deine Fotos oder Videos nicht, um Marketingmodelle zu trainieren oder öffentliche Empfehlungs-Feeds aufzubauen.</p>`,
      children: "Kinder und Linu-Profile",
      childrenBody:
        "Konten sind für Personen ab <strong>16 Jahren</strong> vorgesehen. Ein Linu-Profil kann ein jüngeres Kind als Motiv der Erinnerungen beschreiben, ist aber kein Login-Konto. Personen unter 16 sollen kein eigenes Konto anlegen. Lade Inhalte nur hoch, wenn du die nötigen Rechte und Einwilligungen hast — besonders bei erkennbaren Kindern und anderen Personen.",
      sharing: "Empfänger",
      sharingBody: `
        <p>Inhalte werden nur mit Mitgliedern geteilt, die du (oder andere berechtigte Rollen) in das jeweilige Linu-Profil einlädst. Für den Betrieb nutzen wir Auftragsverarbeiter, insbesondere:</p>
        <ul>
          <li>Supabase für Datenbank, Authentifizierung und Medienspeicher${supabaseNote};</li>
          <li>E-Mail-/Infrastrukturdienste für Transaktionsmails (z. B. Passwort-Reset-Codes);</li>
          <li>App Stores und deren Abrechnungssysteme beim Kauf von Linu Plus;</li>
          <li>Hosting für diese öffentliche Website.${errorMonitoringSentence("de")}</li>
        </ul>
        <p>Auftragsverarbeiter handeln vertraglich gebunden und nur zu dokumentierten Zwecken. Eine Offenlegung kann bei gesetzlicher Pflicht oder zum Schutz von Nutzern und Dienst erfolgen. Die aktuellen Kern-Dienstleister sind oben genannt; bei Änderungen aktualisieren wir diese Erklärung.</p>`,
      retention: "Speicherung und Löschung",
      retentionBody: `
        <p>Konto- und Familieninhalte speichern wir, solange Konto oder das betreffende Linu-Profil bestehen, vorbehaltlich Backups und gesetzlicher Aufbewahrungspflichten.</p>
        <ul>
          <li>Du kannst dein Konto in der App löschen.</li>
          <li>Besitzt du Linu-Profile ohne weitere Mitglieder, werden diese Profile und ihre Inhalte mit dem Konto entfernt.</li>
          <li>Verlässt du ein Profil oder löschst du dein Konto, während andere Mitglieder bleiben, wirst du als Mitglied entfernt; deine Likes und Kommentare entfallen; Profil und Medien bleiben in der Regel für die verbleibenden Mitglieder (Uploader-Zuordnung wie im Produkt vorgesehen).</li>
          <li>Owner müssen vor der Kontolöschung den Besitz übertragen, wenn ein anderes Mitglied das Profil weiter braucht.</li>
          <li>Support- und Sicherheitsdaten werden nur so lange aufbewahrt, wie erforderlich.</li>
        </ul>
        <p>Bestehende Erinnerungen werden nicht allein deshalb gelöscht, weil ein Speicherlimit erreicht ist oder ein bezahlter Plan endet; neue Uploads können abgelehnt werden, bis wieder Speicher frei ist.</p>`,
      transfers: "Drittlandübermittlung",
      transfersBody:
        "Dienstleister können Daten außerhalb deines Landes oder des EWR verarbeiten. Soweit erforderlich, nutzen wir Angemessenheitsbeschlüsse, EU-Standardvertragsklauseln oder andere zulässige Garantien. Die zentrale Datenhaltung von linu ist in der EU vorgesehen (Supabase eu-central-1, Frankfurt); einzelne Unterauftragsverarbeiter können unter diesen Garantien dennoch begrenzte Übermittlungen beinhalten.",
      rights: "Deine Rechte",
      rightsBody: `Im gesetzlichen Umfang hast du Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch gegen Verarbeitungen auf Basis berechtigter Interessen. Einwilligungen kannst du widerrufen, ohne die Rechtmäßigkeit der vorherigen Verarbeitung zu berühren. Kontakt: ${privacyMail()} oder ${supportMail()} für Auskunfts- bzw. Exportanfragen. Außerdem besteht ein Beschwerderecht bei der Datenschutzaufsicht.`,
      security: "Sicherheit",
      securityBody:
        "linu nutzt authentifizierte Zugriffe, rollenbasierte Rechte, Row-Level Security und — soweit anwendbar — signierte Medien-URLs. Absolute Sicherheit im Internet kann nicht garantiert werden. Missbrauch oder Sicherheitsvorfälle bitte an " +
        supportMail() +
        " melden.",
      cookies: "Cookies und lokale Speicherung",
      cookiesBody:
        "Diese öffentliche Website speichert derzeit deine Sprachwahl im Browser (Local Storage). Es werden keine Werbe- oder Analyse-Cookies gesetzt. Falls später optionale Analyse- oder ähnliche Technologien hinzukommen, aktualisieren wir diesen Abschnitt und holen Einwilligungen ein, soweit erforderlich. Die App kann Sitzungs- und Einstellungsdaten auf dem Gerät speichern, damit du angemeldet bleibst und Präferenzen behalten werden.",
      changes: "Änderungen",
      changesBody:
        "Bei Änderungen des Dienstes, der Dienstleister oder der Rechtslage aktualisieren wir diese Erklärung. Die neue Fassung erscheint mit Datum auf dieser Seite; bei wesentlichen Änderungen informieren wir dich in der App oder per E-Mail, soweit angemessen. Soweit für neue Zwecke eine Einwilligung nach DSGVO nötig ist, holen wir sie ein.",
    },
    terms: {
      title: "Nutzungsbedingungen",
      intro: `Diese Bedingungen gelten zwischen dir und ${OPERATOR.legalName}.`,
      eligibility: "Voraussetzungen und Konto",
      eligibilityBody:
        "Du musst mindestens <strong>16 Jahre</strong> alt sein und richtige Registrierungsangaben machen. Schütze dein Passwort und melde vermuteten unbefugten Zugriff. Du bist für Aktivitäten über dein Konto verantwortlich, einschließlich versendeter Einladungen und vergebener Rollen.",
      service: "Der Dienst",
      serviceBody:
        "linu bietet private Räume (Linu-Profile) zum Speichern und Teilen von Fotos, Videos, Audio-Erinnerungen und Timeline-Einträgen mit berechtigten Mitgliedern. Es gibt keinen öffentlichen Social-Feed und keine Werbung auf Basis deiner Familienmedien. Funktionen, Limits und Verfügbarkeit können sich weiterentwickeln. linu ist kein professionelles Archiv, kein Notfalldienst und keine garantierte Backup-Lösung — sichere wichtige Inhalte zusätzlich selbst.",
      content: "Deine Inhalte und Lizenz",
      contentBody: `
        <p>Du behältst die Rechte an hochgeladenen Inhalten. Für den Betrieb räumst du ${OPERATOR.legalName} eine beschränkte, weltweite, nicht ausschließliche Lizenz ein, Inhalte ausschließlich zur Bereitstellung von linu für dich und von dir berechtigte Personen zu hosten, zu speichern, zu verarbeiten, technisch abzuleiten (z. B. Vorschaubilder), zu sichern, zu übertragen und anzuzeigen. Die Lizenz endet mit Löschung der Inhalte in linu, vorbehaltlich Rest-Backups und gesetzlicher Pflichten.</p>
        <p>Du bestätigst, dass du die erforderlichen Rechte und Einwilligungen besitzt — auch für erkennbare Personen und Kinder.</p>`,
      sharing: "Einladungen und Teilen",
      sharingBody:
        "Wenn du jemanden in ein Linu-Profil einlädst oder eine Rolle zuweist, erhält diese Person Zugriff gemäß ihren Rechten. Du bist für die Auswahl vertrauenswürdiger Eingeladener und angemessener Rollen verantwortlich. Inhalte anderer bleiben in deren Verantwortung; in geteilten Profilen können Medien mehrerer Mitglieder liegen.",
      conduct: "Zulässige Nutzung",
      conductBody: `
        <p>Du verpflichtest dich, nicht:</p>
        <ul>
          <li>rechtswidrige, beleidigende, belästigende, diskriminierende, rechtsverletzende, schädliche oder sexuell ausbeuterische Inhalte hochzuladen;</li>
          <li>Inhalte hochzuladen, die du nicht teilen darfst — insbesondere mit Kindern ohne ausreichende Rechte oder Einwilligungen;</li>
          <li>fremde Konten anzugreifen, Speicher- oder Rollenlimits zu umgehen, den Dienst auszulesen/zu scrapen, Infrastruktur zu stören oder die App über das gesetzlich Zulässige hinaus zurückzuentwickeln;</li>
          <li>linu für Spam, kommerzielle Massenverteilung oder zweckfremde Nutzung einzusetzen.</li>
        </ul>
        <p>Wir dürfen Zugriffe einschränken, Inhalte entfernen oder sperren, wenn dies gesetzlich erforderlich oder zum Schutz von Nutzern bzw. des Dienstes nötig ist.</p>`,
      subscriptions: "Linu Plus, Stores und Speicher",
      subscriptionsBody: `
        <p>Kostenlose und kostenpflichtige Pläne (z. B. Linu Plus) können unterschiedliche Speicher- oder Funktionslimits haben. Käufe über den Apple App Store oder Google Play unterliegen zusätzlich deren Bedingungen, Abrechnung und Erstattungsregeln. Vor dem Kauf zeigen Checkout bzw. Store Preis, Laufzeit, Verlängerung und Kündigung.</p>
        <ul>
          <li>Speicherlimits gelten pro Billing-Konto.</li>
          <li>Bei erreichtem Limit können neue Uploads abgelehnt werden, bis Speicher frei oder ein Upgrade erfolgt ist.</li>
          <li>Bestehende Erinnerungen werden nicht allein wegen Downgrade oder Überquota gelöscht.</li>
          <li>Bei Preisänderungen informieren wir dich vorab, soweit erforderlich; Änderungen gelten für den nächsten Abrechnungszeitraum, und du kannst vor der Verlängerung kündigen.</li>
        </ul>`,
      termination: "Sperrung und Beendigung",
      terminationBody:
        "Du kannst linu jederzeit beenden und dein Konto in der App löschen. Wir dürfen bei Sicherheits-, Rechts-, Missbrauchs-, Zahlungs- oder vergleichbaren Gründen sperren oder kündigen. Bei Kontolöschung gelten die Regeln der Datenschutzerklärung (einschließlich Besitz von Profilen). Teile des Dienstes können wir mit angemessener Ankündigung ändern oder einstellen, soweit zumutbar.",
      liability: "Haftung",
      liabilityBody:
        "Zwingende gesetzliche Haftung bleibt unberührt, insbesondere für Vorsatz, grobe Fahrlässigkeit, Verletzung von Leben, Körper oder Gesundheit, Produkthaftung und zwingende Verbraucherrechte. Soweit gesetzlich zulässig, wird linu ohne Garantie ununterbrochener oder fehlerfreier Verfügbarkeit bereitgestellt; für Inhaltsverluste, die du zumutbar selbst hättest sichern können, haften wir nicht über das gesetzlich Zulässige hinaus.",
      law: "Anwendbares Recht und Kontakt",
      lawBody: `Anwendbares Recht und Gerichtsstand: Recht der Bundesrepublik Deutschland; Gerichtsstand am Wohnsitz des Verantwortlichen, soweit gesetzlich zulässig. Zwingende Verbraucherschutzrechte am Wohnsitz bleiben unberührt. Fragen: ${contact()}. Support: ${supportMail()}.`,
    },
    imprint: {
      title: "Impressum",
      intro: "Anbieterkennzeichnung und Kontaktangaben für linu.",
      provider: "Anbieter",
      providerBody: address(),
      contact: "Kontakt",
      contactBody: `E-Mail: ${contact()}<br>Datenschutz: ${privacyMail()}<br>Support: ${supportMail()}`,
      register: "Register- und Steuerangaben",
      registerBody:
        "Handelsregister: nicht zutreffend (natürliche Person).<br>USt-IdNr.: nicht zutreffend.",
      responsibility: "Verantwortlich für Inhalte",
      responsibilityBody: `Verantwortlich: ${address()}.`,
      website: "Speicherung auf der Website",
      websiteBody:
        "Diese Seite speichert deine Sprachwahl lokal im Browser. Derzeit werden keine Werbe-Cookies eingesetzt.",
      dispute: "Verbraucherstreitbeilegung",
      disputeBody:
        'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" rel="noopener noreferrer" target="_blank">https://ec.europa.eu/consumers/odr</a>. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
    },
  },
  es: {
    common: { back: "← Volver a linu", updated: `Actualizado: ${OPERATOR.lastUpdated}` },
    home: {
      eyebrow: "Un lugar tranquilo para lo que importa",
      title: "Recuerdos, guardados cerca.",
      lead: "linu es un espacio privado para fotos, vídeos y una línea de tiempo familiar.",
      privacy: "Política de privacidad →",
      terms: "Condiciones de uso →",
      imprint: "Aviso legal →",
      footer: "Privacidad desde el diseño.",
    },
    privacy: {
      title: "Política de privacidad",
      intro:
        "linu está pensado para recuerdos familiares privados — no para feeds públicos ni publicidad. Esta política explica cómo el operador trata datos personales en la app y en este sitio.",
      controller: "Responsable",
      controllerBody: `El responsable es ${address()}. Contacto general: ${contact()}. Privacidad: ${privacyMail()}.`,
      data: "Categorías de datos que tratamos",
      dataBody: `
        <p>Según el uso, podemos tratar:</p>
        <ul>
          <li><strong>Datos de cuenta</strong> — correo, nombre visible, avatar, autenticación y seguridad (p. ej. hashes de contraseña gestionados por el proveedor de auth, códigos de restablecimiento, sesión).</li>
          <li><strong>Perfiles Linu y membresías</strong> — nombres y avatares de perfil, roles (owner, admin, member, viewer), códigos de invitación y pertenencia a perfiles.</li>
          <li><strong>Medios y recuerdos</strong> — fotos, vídeos, audios, textos, entradas de la línea de tiempo, contenido tipo blog/story y metadatos como fecha de captura, dimensiones o atributos técnicos cuando existan.</li>
          <li><strong>Interacciones</strong> — Me gusta, comentarios, eventos de actividad y tokens o preferencias de notificaciones push.</li>
          <li><strong>Datos técnicos y de seguridad</strong> — diagnósticos necesarios para operar y proteger el servicio, incluidos informes de error si hay monitorización.</li>
          <li><strong>Almacenamiento y plan</strong> — uso aproximado de almacenamiento, estado del plan (p. ej. gratis o Linu Plus) e información de cuota. Los datos de pago los tratan Apple, Google u otros proveedores — linu no guarda credenciales de pago completas.</li>
          <li><strong>Preferencias del sitio</strong> — idioma guardado localmente en el navegador.</li>
        </ul>`,
      purposes: "Finalidades y bases legales",
      purposesBody: `
        <p>Tratamos datos personales para:</p>
        <ul>
          <li>crear y autenticar cuentas, prestar el servicio, guardar y mostrar contenido a miembros autorizados y gestionar invitaciones y roles — <strong>art. 6.1.b RGPD</strong> (contrato);</li>
          <li>proteger el servicio, prevenir abusos, depurar fallos y mantener la seguridad — <strong>art. 6.1.f RGPD</strong> (interés legítimo);</li>
          <li>enviar notificaciones push opcionales si las activas — <strong>art. 6.1.a RGPD</strong> (consentimiento), revocable en ajustes del sistema o de la app;</li>
          <li>cumplir obligaciones legales — <strong>art. 6.1.c RGPD</strong>.</li>
        </ul>
        <p>No vendemos datos personales, no usamos medios familiares para publicidad y no analizamos tus fotos o vídeos para entrenar modelos de marketing ni crear feeds públicos de recomendación.</p>`,
      children: "Menores y perfiles Linu",
      childrenBody:
        "Las cuentas están destinadas a personas de <strong>16 años o más</strong>. Un perfil Linu puede describir a un menor como sujeto de los recuerdos, pero no es una cuenta con acceso propio. Quienes tengan menos de 16 años no deben crear cuenta propia. Sube contenido solo si tienes los derechos y permisos necesarios, especialmente respecto a menores y otras personas identificables.",
      sharing: "Destinatarios",
      sharingBody: `
        <p>El contenido solo se comparte con miembros invitados al perfil Linu correspondiente. Usamos encargados del tratamiento necesarios para operar linu, entre ellos:</p>
        <ul>
          <li>Supabase para base de datos, autenticación y almacenamiento de medios${supabaseNote};</li>
          <li>proveedores de correo/infraestructura para mensajes transaccionales (p. ej. códigos de restablecimiento);</li>
          <li>tiendas de aplicaciones y sus sistemas de facturación al comprar Linu Plus;</li>
          <li>alojamiento de este sitio público.${errorMonitoringSentence("es")}</li>
        </ul>
        <p>Los encargados actúan con contrato y solo con fines documentados. Podemos comunicar datos si lo exige la ley o para proteger a usuarios y al servicio. Los encargados principales actuales figuran arriba; si cambian, actualizaremos esta política.</p>`,
      retention: "Conservación y borrado",
      retentionBody: `
        <p>Conservamos la cuenta y el contenido familiar mientras exista la cuenta o el perfil Linu correspondiente, sin perjuicio de copias de seguridad y obligaciones legales.</p>
        <ul>
          <li>Puedes borrar tu cuenta en la aplicación.</li>
          <li>Si eres propietario de perfiles Linu sin otros miembros, esos perfiles y su contenido se eliminan con tu cuenta.</li>
          <li>Si abandonas un perfil o borras la cuenta mientras quedan otros miembros, se te retira como miembro; tus Me gusta y comentarios se eliminan; el perfil y los medios suelen permanecer para el resto (la atribución del uploader sigue el diseño del producto).</li>
          <li>Los owners deben transferir la propiedad antes de borrar la cuenta si otro miembro necesita el perfil.</li>
          <li>Los registros de soporte y seguridad se conservan solo el tiempo necesario.</li>
        </ul>
        <p>Los recuerdos existentes no se borran solo por alcanzar un límite de almacenamiento o dejar un plan de pago; las nuevas cargas pueden rechazarse hasta que haya espacio.</p>`,
      transfers: "Transferencias internacionales",
      transfersBody:
        "Algunos proveedores pueden tratar datos fuera de tu país o del EEE. Cuando sea necesario, usamos una decisión de adecuación, cláusulas contractuales tipo de la UE u otra garantía válida. El alojamiento principal de datos de linu está previsto en la UE (Supabase eu-central-1, Frankfurt); algunos subencargados pueden implicar transferencias limitadas bajo esas garantías.",
      rights: "Tus derechos",
      rightsBody: `Dentro de los límites legales puedes solicitar acceso, rectificación, borrado, limitación, portabilidad u oponerte a tratamientos basados en interés legítimo. Puedes retirar el consentimiento sin afectar la licitud del tratamiento anterior. Contacto: ${privacyMail()} o ${supportMail()} para solicitudes de acceso o exportación. También puedes reclamar ante la autoridad de protección de datos.`,
      security: "Seguridad",
      securityBody:
        "linu usa acceso autenticado, permisos por rol, seguridad a nivel de filas y URLs firmadas a medios cuando corresponde. Ningún servicio de internet garantiza seguridad absoluta. Informa de abusos o incidentes a " +
        supportMail() +
        ".",
      cookies: "Cookies y almacenamiento local",
      cookiesBody:
        "Este sitio público guarda actualmente tu preferencia de idioma en el navegador (almacenamiento local). No usa cookies de publicidad ni analítica. Si más adelante añadimos analítica opcional u otras tecnologías similares, actualizaremos esta sección y pediremos consentimiento cuando sea obligatorio. La app puede guardar sesión y preferencias en el dispositivo para mantenerte conectado.",
      changes: "Cambios",
      changesBody:
        "Podemos actualizar esta política cuando cambien el servicio, los proveedores o la ley. Publicaremos la versión actualizada con nueva fecha en esta página y, en cambios materiales, te informaremos en la app o por correo cuando proceda. Si el RGPD exige consentimiento para una nueva finalidad, lo solicitaremos.",
    },
    terms: {
      title: "Condiciones de uso",
      intro: `Estas condiciones regulan el uso de linu entre tú y ${OPERATOR.legalName}.`,
      eligibility: "Requisitos y cuentas",
      eligibilityBody:
        "Debes tener al menos <strong>16 años</strong> y facilitar datos de registro exactos. Protege tu contraseña e informa si sospechas un acceso no autorizado. Eres responsable de la actividad de tu cuenta, incluidas las invitaciones que envías y los roles que asignas.",
      service: "El servicio",
      serviceBody:
        "linu ofrece espacios privados (perfiles Linu) para guardar y compartir fotos, vídeos, audios y entradas de la línea de tiempo con miembros autorizados. No hay feed social público ni publicidad basada en tus medios familiares. Las funciones, límites y disponibilidad pueden evolucionar. linu no es un archivo profesional, un servicio de emergencias ni una copia de seguridad garantizada: conserva copias independientes de lo importante.",
      content: "Tu contenido y licencia",
      contentBody: `
        <p>Conservas la titularidad de lo que subes. Para operar el servicio concedes a ${OPERATOR.legalName} una licencia limitada, mundial y no exclusiva para alojar, almacenar, tratar, crear derivados técnicos (p. ej. miniaturas), respaldar, transmitir y mostrar ese contenido solo para prestarte linu a ti y a las personas que autorices. La licencia termina al borrar el contenido en linu, sin perjuicio de copias residuales y obligaciones legales.</p>
        <p>Confirmas que tienes los derechos y permisos necesarios, incluidos los relativos a personas identificables y menores.</p>`,
      sharing: "Invitaciones y compartir",
      sharingBody:
        "Al invitar a alguien a un perfil Linu o asignar un rol, le das acceso según sus permisos. Eres responsable de elegir invitados de confianza y roles adecuados. El contenido subido por otros sigue siendo su responsabilidad; en perfiles compartidos puede haber medios de varios miembros.",
      conduct: "Uso permitido",
      conductBody: `
        <p>Te comprometes a no:</p>
        <ul>
          <li>subir contenido ilegal, abusivo, acosador, discriminatorio, infractor, malicioso o de explotación sexual;</li>
          <li>subir contenido que no tienes derecho a compartir, especialmente con menores sin derechos o permisos adecuados;</li>
          <li>intentar acceder a otras cuentas, eludir límites de almacenamiento o roles, hacer scraping, interferir con la infraestructura o ingeniería inversa más allá de lo permitido por ley;</li>
          <li>usar linu para spam, distribución comercial masiva o fines ajenos a su diseño.</li>
        </ul>
        <p>Podemos restringir, retirar o suspender el acceso cuando lo exija la ley o sea necesario para proteger a usuarios o al servicio.</p>`,
      subscriptions: "Linu Plus, tiendas y almacenamiento",
      subscriptionsBody: `
        <p>Los planes gratuitos y de pago (p. ej. Linu Plus) pueden tener distintos límites. Si compras en la App Store de Apple o Google Play, también aplican sus condiciones, facturación y reembolsos. Antes de comprar, el checkout o la ficha muestran precio, periodo, renovación y cancelación.</p>
        <ul>
          <li>Los límites de almacenamiento aplican por cuenta de facturación.</li>
          <li>Si se alcanza el límite, pueden rechazarse nuevas cargas hasta liberar espacio o mejorar el plan.</li>
          <li>Los recuerdos existentes no se borran solo por una bajada de plan o exceso de cuota.</li>
          <li>Si cambian los precios de suscripción, te avisaremos con antelación cuando proceda; el cambio aplicará al siguiente periodo y podrás cancelar antes de la renovación.</li>
        </ul>`,
      termination: "Suspensión y terminación",
      terminationBody:
        "Puedes dejar de usar linu y borrar tu cuenta en la app en cualquier momento. Podemos suspender o terminar el acceso por seguridad, ley, abuso, impago o motivos similares. Al borrar la cuenta, los datos se tratan según la política de privacidad (incluidas las reglas de propiedad de perfiles). Podemos modificar o discontinuar partes del servicio con aviso razonable cuando sea practicable.",
      liability: "Responsabilidad",
      liabilityBody:
        "Nada en estas condiciones limita la responsabilidad cuando la ley lo prohíbe, incluida la responsabilidad por dolo, negligencia grave, daños a la vida, integridad física o salud, responsabilidad por productos o derechos imperativos de consumidores. En la medida permitida, linu se ofrece sin garantía de disponibilidad ininterrumpida o libre de errores, y no respondemos por pérdida de contenido que razonablemente podrías haber conservado en una copia independiente.",
      law: "Ley aplicable y contacto",
      lawBody: `Ley y fuero: derecho de la República Federal de Alemania; fuero en el domicilio del responsable en la medida legalmente permitida. Quedan a salvo las protecciones imperativas de consumidores de tu país de residencia. Preguntas: ${contact()}. Soporte: ${supportMail()}.`,
    },
    imprint: {
      title: "Aviso legal",
      intro: "Identificación del proveedor y datos de contacto de linu.",
      provider: "Proveedor",
      providerBody: address(),
      contact: "Contacto",
      contactBody: `Correo: ${contact()}<br>Privacidad: ${privacyMail()}<br>Soporte: ${supportMail()}`,
      register: "Registro e impuestos",
      registerBody:
        "Registro mercantil: no aplicable (persona física).<br>NIF/IVA: no aplicable.",
      responsibility: "Responsable editorial",
      responsibilityBody: `Responsable: ${address()}.`,
      website: "Almacenamiento en el sitio",
      websiteBody:
        "Este sitio guarda tu preferencia de idioma localmente en el navegador. Actualmente no usa cookies publicitarias.",
      dispute: "Resolución de conflictos",
      disputeBody:
        'La Comisión Europea facilita una plataforma de resolución de litigios en línea (ODR): <a href="https://ec.europa.eu/consumers/odr" rel="noopener noreferrer" target="_blank">https://ec.europa.eu/consumers/odr</a>. No estamos obligados ni dispuestos a participar en procedimientos de resolución de conflictos ante una junta arbitral de consumo.',
    },
  },
};

function getLang() {
  const requested = new URLSearchParams(location.search).get("lang");
  const saved = localStorage.getItem("linu-lang");
  return text[requested] ? requested : text[saved] ? saved : "en";
}

function section(title, body) {
  const wrapped = /<[a-z][\s\S]*>/i.test(body) ? body : `<p>${body}</p>`;
  return `<section><h2>${title}</h2><div class="body">${wrapped}</div></section>`;
}

function render() {
  const lang = getLang();
  const page = document.body.dataset.page;
  const data = text[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
    button.addEventListener("click", () => {
      localStorage.setItem("linu-lang", button.dataset.lang);
      location.href = `${location.pathname}?lang=${button.dataset.lang}`;
    });
  });
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = node.dataset.i18n.split(".").reduce((obj, key) => obj?.[key], data);
    if (value) node.innerHTML = value;
  });
  if (page === "home") return;
  const d = data[page];
  const content = document.getElementById("content");
  const keys = Object.keys(d).filter((key) => key !== "title" && key !== "intro");
  content.innerHTML =
    `<h1>${d.title}</h1><p class="notice">${d.intro}</p>` +
    keys
      .filter((key) => !key.endsWith("Body"))
      .map((key) => section(d[key], d[`${key}Body`]))
      .join("");
}
render();
