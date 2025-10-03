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
          <h1 className="text-4xl font-bold text-sky-700 mb-2">Digitalhelferin</h1>
          <p className="text-xl text-center">Ich komme zu Ihnen nach Hause und helfe Ihnen, digitale Technik stressfrei zu verstehen und zu nutzen.</p>
          
        </header>


        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-sky-600">Was ich anbiete</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Neue Geräte einrichten</li>
            <li>Passwortmanager sicher nutzen</li>
            <li>Updates & Sicherheitseinstellungen vornehmen</li>
            <li>Social-Media verstehen und nutzen</li>
            <li>Digitale Kalender verwalten</li>
            <li>Spam & Phishing erkennen und vermeiden</li>
            <li>Falschinformationen und KI-generierte Inhalte erkennen</li>
            <li>Künstliche Intelligenz verstehen und nutzen</li>
            <li>jegliche Probleme mit Technik lösen und erklären</li>
          </ul>
        </section> 

        <section className="mb-12">
  <h2 className="text-3xl font-bold text-center text-sky-700 mb-8">Preise & Modelle</h2>

  <div className="space-y-8">
    {/* Stundenmodell */}
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-2xl font-semibold text-sky-600 mb-2">1. Flexible Hilfe – pro Stunde</h3>
      <p className="text-gray-700 mb-3">
        Perfekt, wenn Sie nur manchmal Unterstützung brauchen.
      </p>
      <p className="text-xl font-bold text-sky-700 mb-4">25 € pro Stunde</p>
    </div>

    {/* Monatsabo */}
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-2xl font-semibold text-sky-600 mb-2">2. Rundum-Sorglos – Monatsabo</h3>
      <p className="text-gray-700 mb-3">
        Ideal, wenn Sie regelmäßig Fragen haben oder jederzeit Hilfe möchten.
      </p>
      <p className="text-xl font-bold text-sky-700 mb-4">75 € pro Monat</p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Unbegrenzte Unterstützung per Telefon, E-Mail oder Videocall</li>
        <li>Hausbesuche nach Absprache</li>
        <li>Priorisierte Hilfe bei akuten Problemen</li>
      </ul>
    </div>
  </div>
</section>



        <section id="kontakt" className="mb-10">
  <h2 className="text-2xl font-semibold mb-3 text-sky-600">Kontakt</h2>
  <p className="text-lg mb-2">
    Schicken Sie mir eine Nachricht oder rufen Sie mich an. Ich freue mich, helfen zu dürfen!
  </p>
  <p className="text-lg font-medium mb-4">
    Telefon: <a href="tel:+4367762940769" className="text-sky-700 hover:underline">+43 677 62940769</a>
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
