"use client";

import React from 'react';
import { Smartphone, Shield, Brain, BookOpen, Clock, Euro, Mail, Phone } from 'lucide-react';
import { title } from 'process';

export default function DigitalhilfeWebsite() {
  const problems = [
    "Ich vergesse ständig meine Passwörter.",
    "Ich hab Angst, was Falsches zu drücken.",
    "Ist diese SMS echt oder Betrug?",
    "Wozu brauche ich KI überhaupt?",
    "Ich weiß gar nicht, wo ich anfangen soll.",
    "Ich schäme mich, das schon wieder zu fragen.",
    "ID Austria versteh ich nicht.",
    "Vor kurzem ging alles noch, warum jetzt nicht?",
  ];

  const cards = [
    { title: "Geräte & Konten", icon: Smartphone, items: ["Smartphone/Tablet/Laptop einrichten", "Email, Apps einrichten", "Passwörter sicher & merkbar (Passwortmanager)", "Updates, Backups, Cloud & Fotos ordentlich sichern"] },
    { title: "Alltag erleichtern", icon: Clock, items: ["ELGA, ID Austria", "Öffi-Apps & Ticketing", "Online-Einkäufe & Rücksendung Schritt für Schritt"] },
    { title: "Digitale Sicherheit", icon: Shield, items: ["Betrugsmaschen erkennen", "Sichere Bezahlwege, Seriöse Shops prüfen", "Abo-Fallen stoppen, App-Berechtigungen ordnen"] },
    { title: "Medienkompetenz", icon: BookOpen, items: ["Falschmeldungen erkennen, Quellen prüfen", "Privatsphäre einstellen (zB WhatsApp)"] },
    { title: "Künstliche Intelligenz (KI)", icon: Brain, items: ["KI als Helfer nutzen", "KI-Bilder/Videos erkennen"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">

      {/* Hero Section mit Sprechblasen */}
      <section className="relative bg-white px-4 md:px-8 lg:px-16 xl:px-24 pt-8 md:pt-12 pb-12 md:pb-16">
        {/* Hintergrund Dekoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        </div>

        {/* Sprechblasen - versetzt angeordnet */}
        <div className="relative z-10 w-full mx-auto mb-12 md:mb-16">
          {/* Desktop Version - 4 Spalten, 2 Reihen */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-x-6 gap-y-8">
            {problems.map((problem, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-sky-50 to-blue-100 border border-sky-200 p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                  marginTop: idx % 2 === 0 ? '0px' : '40px'
                }}
              >
                <p className="text-gray-800 text-lg leading-relaxed">
                  {problem}
                </p>
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-sky-50"></div>
              </div>
            ))}
          </div>

          {/* Tablet Version - 2 Spalten */}
          <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-sky-50 to-blue-100 border border-sky-200 p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <p className="text-gray-800 text-lg leading-relaxed">
                  {problem}
                </p>
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-sky-50"></div>
              </div>
            ))}
          </div>

         
        </div>

        {/* Trennlinie */}
        <div className="relative z-10 max-w-4xl mx-auto mb-8 md:mb-10">
          <div className="h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
        </div>

        {/* Titel und Text unter den Sprechblasen */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
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


<section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 xl:px-32 bg-white">
  <div className="w-full">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-800 px-4">
      Wobei wir Sie <span className="text-sky-600">konkret stärken</span>
    </h2>

    {/* ---------------- Tablet Version (2 Spalten) ---------------- */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:hidden">
  {cards.map((card, idx) => (
    <div key={idx} className="flex">
      <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-3xl shadow-lg border-2 border-sky-100 flex-1">
        <card.icon className="w-10 h-10 text-sky-600 mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-4">{card.title}</h3>
        <ul className="space-y-3 text-gray-700 text-base">
          {card.items.map((item, i) => (
            <li key={i} className="flex items-start"><span className="text-sky-600 mr-2">•</span>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

{/* ---------------- Desktop Version (3 oben, 2 unten zentriert) ---------------- */}
<div className="hidden lg:grid grid-cols-3 gap-10">
  {cards.slice(0,3).map((card, idx) => (
    <div key={idx} className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-3xl shadow-lg border-2 border-sky-100 flex flex-col h-full">
      <card.icon className="w-10 h-10 text-sky-600 mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-4">{card.title}</h3>
      <ul className="space-y-3 text-gray-700 text-base">
        {card.items.map((item, i) => (
          <li key={i} className="flex items-start"><span className="text-sky-600 mr-2">•</span>{item}</li>
        ))}
      </ul>
    </div>
  ))}

  {/* 2 Karten zentriert */}
  <div className="col-span-3 flex justify-center gap-10">
    {cards.slice(3).map((card, idx) => (
      <div key={idx} className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-3xl shadow-lg border-2 border-sky-100 flex flex-col h-full">
        <card.icon className="w-10 h-10 text-sky-600 mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-4">{card.title}</h3>
        <ul className="space-y-3 text-gray-700 text-base">
          {card.items.map((item, i) => (
            <li key={i} className="flex items-start"><span className="text-sky-600 mr-2">•</span>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
  </div>
</section>


      {/* So gehen wir vor */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-sky-100 to-blue-100">
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-800 px-4">
            So gehen wir <span className="text-sky-600">vor</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { num: "1", title: "Anliegen klären", desc: "Was soll leichter werden?" },
              { num: "2", title: "Einrichten & Erklären", desc: "Schritt für Schritt, in Ihrem Tempo" },
              { num: "3", title: "Merkkarte", desc: "Mit den wichtigsten Handgriffen" },
              { num: "4", title: "Kurz-Check", desc: "Nach ein paar Tagen: Passt alles? Offene Fragen?" }
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
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-white">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Preis</h2>
          <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white p-8 md:p-12 rounded-3xl shadow-2xl inline-block">
            <Euro className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
            <p className="text-5xl md:text-6xl font-bold mb-2">38 €</p>
            <p className="text-xl md:text-2xl opacity-90">pro Stunde</p>
          </div>
        </div>
      </section>

      {/* Über mich */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800">Über mich</h2>
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center mb-6">
              {/* Profilbild */}
              <div className="flex justify-center lg:col-span-1">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img src="/paulina.jpg" alt="Paulina" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-2 space-y-4 md:space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Ich bin <span className="font-bold text-sky-600">Paulina, 18</span>, HTL Spengergasse (IT-Zweig), aus <span className="font-bold">Bisamberg</span>.
                  Ich unterstütze seit Jahren meine Großeltern bei digitalen Fragen – vom Handy über Passwörter bis &quot;Ist das echt?&quot;.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Was mich ausmacht: <span className="font-bold text-sky-600">Geduld, Klarheit, Verlässlichkeit</span>.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  <span className="font-bold text-blue-600">Ziel:</span> nicht nur &quot;Knopf drücken&quot;, sondern <span className="font-bold">verstehen & selbst können</span>.
                  Ich freue mich, wenn digitale Dinge für Sie <span className="font-bold text-sky-600">leicht</span> werden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
        <div className="w-full ">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Kontakt aufnehmen</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Kontaktinfos */}
            <div className="space-y-6 md:space-y-8">
              <p className="text-xl md:text-2xl">
                Schicken Sie mir eine Nachricht per SMS/WhatsApp/Email oder rufen Sie mich an. Ich freue mich, helfen zu dürfen!
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
                Ich melde mich verlässlich zurück.
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