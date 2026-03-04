"use client";

import React, { useState } from 'react';
import { 
  Smartphone, Shield, Brain, Clock, 
  Mail, Phone, CheckCircle2, ChevronDown, 
  Smile, Heart, ShieldCheck 
} from 'lucide-react';

export default function DigitalhilfeWebsite() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const problems = [
    "Passwörter vergessen?", "Angst, etwas falsch zu machen?", 
    "SMS-Betrug erkennen?", "KI verstehen?", 
    "Überfordert vom Start?", "Scham beim Fragen?",
    "ID Austria Probleme?", "Plötzlich geht nichts mehr?"
  ];

  const cards = [
    { title: "Geräte & Konten", icon: Smartphone, items: ["Smartphone & Laptop Setup", "E-Mail & Apps einrichten", "Sichere Passwort-Systeme", "Backups & Cloud-Ordnung"] },
    { title: "Alltag & Behörden", icon: Clock, items: ["ID Austria & ELGA Hilfe", "Öffi-Apps & Tickets", "Sicher Online-Shoppen"] },
    { title: "Digitale Sicherheit", icon: Shield, items: ["Betrugsmaschen erkennen", "Sichere Bezahlwege", "Abo-Fallen & Privatsphäre"] },
    { title: "Medien & KI", icon: Brain, items: ["KI als Alltagshelfer", "Fake-News erkennen", "WhatsApp richtig nutzen"] },
  ];

  /* REVIEWS DATEN AUSKOMMENTIERT (damit Vercel nicht wegen 'unused-vars' abbricht)
  const reviews = [
    {
      name: "Hannelore M.",
      location: "Bisamberg",
      text: "Paulina hat mir mit einer Engelsgeduld erklärt, wie ich Fotos per WhatsApp verschicke. Jetzt kann ich endlich Bilder von meinen Enkeln sehen!",
      stars: 5
    },
    {
      name: "Dr. Gerhard W.",
      location: "Korneuburg",
      text: "Die Einrichtung der ID Austria war für mich ein Buch mit sieben Siegeln. Dank der Hilfe von Paulina hat alles innerhalb einer Stunde geklappt.",
      stars: 5
    },
    {
      name: "Marianne & Josef",
      location: "Langenzersdorf",
      text: "Wir hatten Angst, etwas falsch zu machen. Paulina hat uns die Scheu vor dem Tablet genommen. Sehr kompetent und freundlich!",
      stars: 5
    }
  ];
  */

  const faqs = [
    { 
      q: "Muss ich ein Profi-Gerät haben?", 
      a: "Nein, überhaupt nicht. Ich helfe Ihnen genau bei den Geräten, die Sie bereits zu Hause haben und im Alltag nutzen möchten." 
    },
    { 
      q: "Kommen Sie direkt zu mir nach Hause?", 
      a: "Ja, ich besuche Sie gerne in Ihrer gewohnten Umgebung in Bisamberg und der näheren Umgebung (Korneuburg, Langenzersdorf, etc.)." 
    },
    { 
      q: "Was ist, wenn ich danach wieder etwas vergesse?", 
      a: "Keine Sorge! Wir erstellen gemeinsam eine individuelle Merkkarte mit den wichtigsten Handgriffen, damit Sie alles in Ruhe nachlesen können." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900 font-sans selection:bg-sky-100">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-bold text-2xl tracking-tight text-sky-600">Digitalhilfe Paulina</span>
          <a href="#kontakt" className="hidden sm:block bg-sky-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-sky-700 transition shadow-md shadow-sky-100">
            Jetzt anfragen
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-sky-50 text-sky-700 text-sm font-bold mb-8 tracking-wider uppercase border border-sky-100">
            Geduldig • Kompetent • In Bisamberg
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
            Digitales verstehen, <br/>
            <span className="text-sky-600 underline decoration-sky-100 decoration-8 underline-offset-8">ganz ohne Stress.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            Ich helfe Senioren und Einsteigern dabei, die Technik sicher und mit Freude zu bedienen.
          </p>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {problems.map((p, i) => (
              <span key={i} className="bg-white border border-slate-200 px-5 py-3 rounded-2xl shadow-sm text-slate-700 font-medium hover:border-sky-300 transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mein Versprechen */}
      <section className="py-20 bg-sky-50/50 border-y border-sky-100 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { icon: Smile, title: "Kein Fach-Chinesisch", text: "Ich erkläre alles in einfachen Worten, ganz ohne komplizierte IT-Begriffe." },
            { icon: Heart, title: "Geduld-Garantie", text: "Wir wiederholen jeden Schritt so oft, bis Sie sich wirklich sicher fühlen." },
            { icon: ShieldCheck, title: "Sicherheit zuerst", text: "Gemeinsam sorgen wir dafür, dass Ihre Daten und Ihre Privatsphäre geschützt sind." }
          ].map((v, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-sky-600">
                <v.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-28 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 italic">Wie ich Sie stärke</h2>
            <div className="w-24 h-2 bg-sky-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, idx) => (
              <div key={idx} className="group p-10 rounded-[2.5rem] bg-[#f8fafc] border border-slate-100 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500">
                <div className="w-14 h-14 bg-sky-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                  <card.icon size={28} />
                </div>
                <h3 className="text-2xl font-extrabold mb-6 tracking-tight">{card.title}</h3>
                <ul className="space-y-4">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-600 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS VISUELL AUSKOMMENTIERT
      <section className="py-24 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">Was Kunden sagen</h2>
            <p className="text-lg text-slate-500 font-medium">Erfahrungen aus der Nachbarschaft</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 relative shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex mb-4 text-yellow-400">
                  {[...Array(rev.stars)].map((_, s) => (
                    <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20 text-yellow-400">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed text-lg">&quot;{rev.text}&quot;</p>
                <div>
                  <p className="font-bold text-slate-900 text-lg">{rev.name}</p>
                  <p className="text-sm text-sky-600 font-bold uppercase tracking-wider">{rev.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Über mich */}
      <section className="py-28 px-6 bg-[#0f172a] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-slate-800">
              <img src="/paulina.jpg" alt="Paulina" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-sky-600 p-8 rounded-[2rem] shadow-xl z-20 hidden md:block max-w-xs">
              <p className="font-bold text-2xl">&quot;Geduld ist meine größte Stärke.&quot;</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-black tracking-tight leading-tight text-white">Hallo, ich bin Paulina.</h2>
            <div className="space-y-6 text-xl text-slate-300 leading-relaxed font-light">
              <p>
                Als IT-Schülerin an der <span className="text-white font-semibold underline decoration-sky-500 underline-offset-4">HTL Spengergasse</span> erlebe ich täglich, wie schnell sich die digitale Welt dreht.
              </p>
              <p>
                Ich sehe aber oft, dass Technik Menschen eher trennt als verbindet, wenn die Bedienung zur Hürde wird. <b>Das möchte ich ändern.</b>
              </p>
            </div>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["18 Jahre, Bisamberg", "IT-Expertise", "Senioren-Erfahrung", "Absolut verlässlich"].map((t, i) => (
                <div key={i} className="flex items-center space-x-3 bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                  <CheckCircle2 className="text-sky-400" size={20} />
                  <span className="font-semibold text-slate-200">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preis */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-12 tracking-tight">Fair & Transparent</h2>
          <div className="bg-sky-50 p-12 rounded-[3rem] border-2 border-sky-100">
            <div className="flex flex-col items-center">
              <span className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-4 italic">Persönliche Hilfe vor Ort</span>
              <div className="text-7xl font-black text-slate-900 mb-6 flex items-start text-slate-900">
                38€<span className="text-2xl text-slate-400 mt-4 ml-2 font-medium">/ Std.</span>
              </div>
              <p className="text-lg text-slate-600 max-w-md font-medium">
                Keine versteckten Kosten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center tracking-tight">Häufige Fragen</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors outline-none"
                >
                  <span className="font-bold text-lg text-slate-800">{faq.q}</span>
                  <ChevronDown className={`text-sky-600 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-slate-600 text-lg leading-relaxed border-t border-slate-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden grid lg:grid-cols-2 border border-slate-100">
          <div className="p-16 bg-sky-600 text-white">
            <h2 className="text-4xl font-black mb-8 leading-tight tracking-tight text-white">Fragen kostet nichts.</h2>
            <p className="text-xl text-sky-50 mb-12 leading-relaxed opacity-90 font-medium">
              Schreiben Sie mir einfach – wir finden gemeinsam heraus, wie ich Ihnen am besten helfen kann.
            </p>
            
            <div className="space-y-8">
              <a href="tel:+4367762940769" className="flex items-center p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition backdrop-blur-sm border border-white/20 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-6 text-sky-600 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-sky-100 opacity-80 mb-1">Anrufen oder SMS</p>
                  <span className="text-2xl font-bold text-white">+43 677 62940769</span>
                </div>
              </a>
              <a href="mailto:paulinaglantschnig@icloud.com" className="flex items-center p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition backdrop-blur-sm border border-white/20 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-6 text-sky-600 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-sky-100 opacity-80 mb-1">E-Mail schicken</p>
                  <span className="text-xl font-bold break-all text-white">paulinaglantschnig@icloud.com</span>
                </div>
              </a>
            </div>
          </div>
          <div className="p-16">
            <form action="https://formspree.io/f/xkgrdzrl" method="POST" className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide italic">Ihr Name</label>
                <input type="text" name="name" placeholder="Vor- und Nachname" required className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-sky-600 focus:bg-white outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide italic">E-Mail Adresse</label>
                <input type="email" name="email" placeholder="beispiel@mail.at" required className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-sky-600 focus:bg-white outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide italic">Ihre Nachricht</label>
                <textarea name="message" placeholder="Wie kann ich Ihnen helfen?" required className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl h-40 focus:border-sky-600 focus:bg-white outline-none transition-all resize-none" />
              </div>
              <button type="submit" className="w-full bg-sky-600 text-white font-black py-5 rounded-2xl hover:bg-sky-700 transition shadow-xl shadow-sky-200 text-lg uppercase tracking-widest">
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center">
        <div className="w-20 h-1 bg-slate-200 mx-auto mb-8 rounded-full"></div>
        <p className="text-slate-400 font-bold tracking-widest text-xs uppercase">
          © {new Date().getFullYear()} Digitalhilfe Paulina • Bisamberg & Umgebung
        </p>
      </footer>
    </div>
  );
}