"use client";

import React from 'react';
import { Smartphone, Shield, Brain, BookOpen, Clock, Euro, Mail, Phone } from 'lucide-react';

export default function DigitalhilfeWebsite() {
  const problems = [
    "Ich vergesse ständig meine Passwörter.",
    "Ich hab Angst, was falsches zu drücken.",
    "Ist diese SMS echt oder Betrug?",
    "Wozu brauche ich KI überhaupt?",
    "Ich weiß gar nicht, wo ich anfangen soll.",
    "Ich schäme mich, das schon wieder zu fragen.",
    "ID Austria versteh ich nicht.",
    "Vor kurzem ging alles noch, warum jetzt nicht?",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      
      {/* Hero Section mit Sprechblasen */}
      <section className="relative bg-white px-4 md:px-6 pt-8 md:pt-12 pb-12 md:pb-16">
        {/* Hintergrund Dekoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        </div>

        {/* Sprechblasen - versetzt angeordnet */}
        <div className="relative z-10 w-full max-w-6xl mx-auto mb-12 md:mb-16">
          {/* Desktop Version - versetzt */}
          <div className="hidden lg:block relative" style={{ height: '500px' }}>
            {problems.map((problem, idx) => {
              const positions = [
                { top: '0px', left: '5%', width: '280px' },
                { top: '0px', left: '30%', width: '260px' },
                { top: '0px', left: '55%', width: '270px' },
                { top: '0px', right: '5%', width: '250px' },
                { top: '140px', left: '8%', width: '270px' },
                { top: '140px', left: '33%', width: '280px' },
                { top: '140px', left: '58%', width: '260px' },
                { top: '140px', right: '8%', width: '265px' },
              ];
              
              return (
                <div
                  key={idx}
                  className="absolute bg-gradient-to-br from-sky-50 to-blue-100 border border-sky-200 p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{ 
                    animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                    width: positions[idx].width,
                    top: positions[idx].top,
                    left: positions[idx].left,
                    right: positions[idx].right
                  }}
                >
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {problem}
                  </p>
                  <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-sky-50"></div>
                </div>
              );
            })}
          </div>

          {/* Tablet Version - versetzt */}
          <div className="hidden md:block lg:hidden relative" style={{ height: '550px' }}>
            {problems.map((problem, idx) => {
              const positionsTablet = [
                { top: '0px', left: '5%', width: '270px' },
                { top: '0px', right: '5%', width: '260px' },
                { top: '130px', left: '8%', width: '280px' },
                { top: '130px', right: '8%', width: '265px' },
                { top: '260px', left: '5%', width: '275px' },
                { top: '260px', right: '5%', width: '270px' },
                { top: '390px', left: '8%', width: '260px' },
                { top: '390px', right: '8%', width: '255px' },
              ];
              
              return (
                <div
                  key={idx}
                  className="absolute bg-gradient-to-br from-sky-50 to-blue-100 border border-sky-200 p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                  style={{ 
                    animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                    width: positionsTablet[idx].width,
                    top: positionsTablet[idx].top,
                    left: positionsTablet[idx].left,
                    right: positionsTablet[idx].right
                  }}
                >
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {problem}
                  </p>
                  <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-sky-50"></div>
                </div>
              );
            })}
          </div>

          {/* Mobile Version - Grid */}
          <div className="md:hidden grid grid-cols-1 gap-4">
            {problems.map((problem, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-sky-50 to-blue-100 border border-sky-200 p-5 rounded-2xl shadow-md"
                style={{ 
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.08}s both`,
                }}
              >
                <p className="text-gray-800 text-sm leading-relaxed">
                  {problem}
                </p>
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-sky-50"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Trennlinie */}
        <div className="relative z-10 max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
        </div>

        {/* Titel und Text unter den Sprechblasen */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-4 md:mb-6 font-light">
            Für alle die in der digitalen Welt überfordert sind
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-sky-600 mb-3 md:mb-4">
            Digitalhilfe Paulina
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium">
            in Bisamberg & Umgebung
          </p>
        </div>
      </section>

      {/* Wobei wir helfen */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-800 px-4">
            Wobei wir Sie <span className="text-sky-600">konkret stärken</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Karte 1 */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-sky-100">
              <Smartphone className="w-10 h-10 md:w-12 md:h-12 text-sky-600 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Geräte & Konten</h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>Smartphone/Tablet/Laptop einrichten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>Passwörter sicher & merkbar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>Updates, Backups, Cloud</span>
                </li>
              </ul>
            </div>

            {/* Karte 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100">
              <Clock className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Alltag erleichtern</h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Online-Arzttermin & Behörden</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Online-Einkaufen & Rücksenden</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Familien-Kalender & Fotos</span>
                </li>
              </ul>
            </div>

            {/* Karte 3 */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-red-100">
              <Shield className="w-10 h-10 md:w-12 md:h-12 text-red-600 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Digitale Sicherheit</h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Betrugsmaschen erkennen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Seriöse Shops prüfen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Abo-Fallen stoppen</span>
                </li>
              </ul>
            </div>

            {/* Karte 4 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-purple-100">
              <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-purple-600 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Medienkompetenz</h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Falschmeldungen erkennen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Privatsphäre einstellen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Kettenbriefe einordnen</span>
                </li>
              </ul>
            </div>

            {/* Karte 5 */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-emerald-100 md:col-span-2 lg:col-span-1">
              <Brain className="w-10 h-10 md:w-12 md:h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Künstliche Intelligenz</h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>KI als Helfer nutzen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>KI-Bilder erkennen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Alltags-Workflows aufsetzen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* So gehen wir vor */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-sky-100 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-800 px-4">
            So gehen wir <span className="text-sky-600">vor</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { num: "1", title: "Anliegen klären", desc: "Was soll leichter werden?" },
              { num: "2", title: "Einrichten & Erklären", desc: "Schritt für Schritt, in Ihrem Tempo" },
              { num: "3", title: "Merkkarte", desc: "Mit den wichtigsten Handgriffen" },
              { num: "4", title: "Kurz-Check", desc: "Nach ein paar Tagen: Passt alles?" }
            ].map((step) => (
              <div key={step.num} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preis */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Preis</h2>
          <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white p-8 md:p-12 rounded-3xl shadow-2xl inline-block">
            <Euro className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
            <p className="text-5xl md:text-6xl font-bold mb-2">38 €</p>
            <p className="text-xl md:text-2xl opacity-90">pro Stunde</p>
          </div>
        </div>
      </section>

      {/* Über mich */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800">Über mich</h2>
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center mb-6">
              {/* Profilbild */}
              <div className="flex justify-center md:col-span-1">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    {/* Hier kannst du später dein Bild einfügen mit: <img src="/paulina.jpg" alt="Paulina" className="w-full h-full object-cover" /> */}
                    <div className="text-7xl md:text-8xl font-bold text-sky-600">P</div>
                  </div>
                </div>
              </div>
              
              {/* Text */}
              <div className="md:col-span-2 space-y-4 md:space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Ich bin <span className="font-bold text-sky-600">Paulina, 18</span>, HTL Spengergasse (IT-Zweig), aus <span className="font-bold">Bisamberg</span>. 
                  Ich unterstütze seit Jahren meine Großeltern bei digitalen Fragen – vom Handy über Passwörter bis „Ist das echt?".
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Was mich ausmacht: <span className="font-bold text-sky-600">Geduld, Klarheit, Verlässlichkeit</span>.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  <span className="font-bold text-blue-600">Ziel:</span> nicht nur „Knopf drücken", sondern <span className="font-bold">verstehen & selbst können</span>. 
                  Ich freue mich, wenn digitale Dinge für Sie <span className="font-bold text-sky-600">leicht</span> werden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Kontakt aufnehmen</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Kontaktinfos */}
            <div className="space-y-6 md:space-y-8">
              <p className="text-xl md:text-2xl">
                Schicken Sie mir eine Nachricht oder rufen Sie mich an. Ich freue mich, helfen zu dürfen!
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-4 text-lg md:text-xl">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
                  <a href="tel:+4367762940769" className="hover:underline break-all">
                    +43 677 62940769
                  </a>
                </div>
                <div className="flex items-center space-x-4 text-lg md:text-xl">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
                  <a href="mailto:paulinaglantschnig@icloud.com" className="hover:underline break-all">
                    paulinaglantschnig@icloud.com
                  </a>
                </div>
              </div>
              
              <p className="text-base md:text-lg opacity-90">
                Wir melden uns verlässlich zurück.
              </p>
            </div>

            <form
            action="https://formspree.io/f/xkgrdzrl"
            method="POST"
            className="bg-sky-50 p-6 rounded-xl shadow-inner space-y-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Ihr Name"
              required
              className="w-full p-3 border border-gray-300 rounded placeholder-gray-400 text-gray-800"
            />
            <input
              type="email"
              name="email"
              placeholder="Ihre E-Mail-Adresse"
              required
              className="w-full p-3 border border-gray-300 rounded placeholder-gray-400 text-gray-800"
            />
            <textarea
              name="message"
              placeholder="Ihre Nachricht"
              required
              className="w-full p-3 border border-gray-300 rounded h-32 resize-none placeholder-gray-400 text-gray-800"
            />
            <button
              type="submit"
              className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition"
            >
              Nachricht senden
            </button>
          </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-6 bg-gray-900 text-white text-center">
        <p className="text-base md:text-lg">© 2024 Digitalhilfe Paulina Glantschnig • Bisamberg</p>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}