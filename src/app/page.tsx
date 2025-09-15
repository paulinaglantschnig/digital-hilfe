// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

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
            <li>Einrichtung von Handys und Laptops</li>
            <li>Passwortmanager sicher nutzen</li>
            <li>WhatsApp, Fotos & Videotelefonie verstehen</li>
            <li>Hilfe bei Online-Banking & E-Mails</li>
            <li>Ich beantworte jede technische Frage – in Ruhe und ohne Fachchinesisch.</li>
          </ul>
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
