// src/app/page.tsx
import Image from 'next/image';


export default function HomePage() {
  return (
    <main className="min-h-screen bg-sky-50 text-gray-800 p-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 flex flex-col items-center">
          <Image
            src="/paulina.jpg"
            alt="Paulina Glantschnig"
            width={150}
            height={150}
            className="rounded-full mb-4 shadow-md"
          />
          <h1 className="text-4xl font-bold text-sky-700 mb-2">Digitalhilfe</h1>
          <p className="text-xl text-center">Die neue Welt ist digital. Arzttermine, Behördenwege, Fahrkarten, Bank, Fotos – dazu zig Passwörter, ständige Updates, Betrugversuche und überall neue KI-Funktionen. 

Viele ältere Menschen fühlen sich verständlich überfordert: „Welche App brauche ich? Ist diese Nachricht echt? Wo war noch gleich mein Passwort?“ 

Genau hier helfen wir – ruhig, geduldig, ohne Fachchinesisch – damit Sie sich wieder sicher fühlen und Dinge selbst erledigen können.</p>
          
        </header>


        <section className="mb-10">
  <h2 className="text-2xl font-semibold mb-3 text-sky-600">Wobei wir Sie konkret stärken</h2>

  <div className="space-y-4 text-lg">
    <h3 className="font-semibold text-sky-700">1) Geräte & Konten – die Basis</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Smartphone/Tablet/Laptop, E-Mail, Apps einrichten</li>
      <li>Passwörter sicher & merkbar (Passwortmanager, Notfallkarte)</li>
      <li>Updates, Backups, Cloud & Fotos ordentlich sichern</li>
    </ul>

    <h3 className="font-semibold text-sky-700">2) Abläufe, die den Alltag erleichtern</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Online-Arzttermin, ELGA/Behördenwege, Öffi-Routen & Ticket-Apps</li>
      <li>Online-Einkaufen & Rücksenden Schritt für Schritt</li>
      <li>Familien-Kalender & gemeinsame Fotoalben</li>
    </ul>

    <h3 className="font-semibold text-sky-700">3) Fallen erkennen & vermeiden (digitale Sicherheit)</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Betrugsmaschen: WhatsApp-Trick, falsche Paket-SMS, Phishing-Mails</li>
      <li>Seriöse Shops prüfen, sichere Bezahlwege</li>
      <li>Abo-Fallen stoppen, App-Berechtigungen ordnen</li>
    </ul>

    <h3 className="font-semibold text-sky-700">4) Medienkompetenz</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Falschmeldungen erkennen, Quellen prüfen</li>
      <li>Privatsphäre in WhatsApp/Facebook/Instagram einstellen</li>
      <li>Kettenbriefe & Sensationsmeldungen einordnen</li>
    </ul>

    <h3 className="font-semibold text-sky-700">5) Künstliche Intelligenz (KI)</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>KI als Helfer nutzen: Texte zusammenfassen, Formulare/Briefe vorbereiten, Reiseideen</li>
      <li>KI-Bilder/Videos erkennen: „echt oder generiert?“</li>
      <li>Kleine Alltags-Workflows (z. B. Einkaufslisten) aufsetzen</li>
    </ul>
  </div>
</section>

<section className="mb-10">
  <h2 className="text-2xl font-semibold mb-3 text-sky-600">So gehen wir vor</h2>
  <ul className="list-disc list-inside space-y-2 text-lg">
    <li><strong>Ihr Anliegen klären:</strong> Was soll leichter werden?</li>
    <li><strong>Einrichten & Erklären:</strong> Schritt für Schritt, in Ihrem Tempo.</li>
    <li><strong>Merkkarte</strong> Mit den wichtigsten Handgriffen.</li>
    <li><strong>Kurz-Check</strong> Nach ein paar Tagen: Passt alles? Offene Fragen?</li>
  </ul>
</section>




        <section className="mb-12">
  <h2 className="text-2xl font-semibold mb-3 text-sky-600">Preis</h2>
    
      <h3 className="text-xl font-semibold text-sky-600 mb-2">Flexible Hilfe</h3>
      <p className="text-lg text-gray-700 mb-3">
      </p>
      <p className="text-lg font-semibold text-gray-700 mb-3">38 € pro Stunde</p>
   
</section>

     <section className="mb-12">
  <h2 className="text-2xl font-semibold mb-3 text-sky-600">Über mich</h2>
    
      <h3 className="text-xl font-semibold text-sky-600 mb-2">Ich bin Paulina, 18, HTL Spengergasse (IT-Zweig), aus Bisamberg. Ich unterstütze seit Jahren meine Großeltern bei digitalen Fragen – vom Handy über Passwörter bis „Ist das echt?“.
Was mich ausmacht: Geduld, Klarheit, Verlässlichkeit. 
Ziel: nicht nur „Knopf drücken“, sondern verstehen & selbst können.

Ich freue mich, wenn digitale Dinge für Sie leicht werden.</h3>
   
</section>



        <section id="kontakt" className="mb-10">
  <h2 className="text-2xl font-semibold mb-3 text-sky-600">Kontakt</h2>
  <p className="text-lg mb-2">
    Schicken Sie mir eine Nachricht oder rufen Sie mich an. Ich freue mich, helfen zu dürfen!
  </p>
  <p className="text-lg font-medium mb-4">
    Telefon: <a href="tel:+4367762940769" className="text-sky-700 hover:underline">+43 677 62940769</a>
    Email: <a href="mailto:paulinaglantschnig@icloud.com" className="text-sky-700 hover:underline">paulinaglantschnig@icloud.com</a>
    Wir melden uns verlässlich zurück.
  </p>

  <form
    action="https://formspree.io/f/xkgrdzrl" // hier eigene ID einsetzen!
    method="POST"
    className="bg-white p-4 rounded shadow-md space-y-3"
  >
    <input
      type="text"
      name="name"
      placeholder="Ihr Name"
      required
      className="w-full p-3 border border-gray-300 rounded"
    />
    <input
      type="email"
      name="email"
      placeholder="Ihre E-Mail-Adresse"
      required
      className="w-full p-3 border border-gray-300 rounded"
    />
    <textarea
      name="message"
      placeholder="Ihre Nachricht"
      required
      className="w-full p-3 border border-gray-300 rounded h-32"
    />
    <button
      type="submit"
      className="bg-sky-600 text-white px-5 py-2 rounded hover:bg-sky-700 transition"
    >
      Nachricht senden
    </button>
  </form>
</section>


       
      </div>
    </main>
  );
}
