import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-sky-50 text-gray-800 p-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-sky-700 mb-2">Über mich</h1>
          <Image
          src="/paulina.jpg"
          alt="Paulina Glantschnig"
          width={200}
          height={200}
          className="rounded-full mb-6 shadow-md"
        />
          <p className="text-lg mb-4">
          ✨ Über mich
          </p>
        </header>

        

        <section className="space-y-3 text-lg">
          <p>
          Hallo! Ich bin Paulina, 18 Jahre alt, Schülerin an der HTL Spengergasse im IT-Zweig und wohne seit ich sechs bin in Bisamberg. Ich mache viel Sport – am liebsten klettern, radfahren und wandern – und verbringe auch gern Zeit mit meinen zwei kleinen Brüdern.
          </p>
          <p>
          Schon seit einer Weile helfe ich meinen Großeltern immer wieder bei digitalen Problemen: das Handy einrichten, Passwörter organisieren, am Computer etwas erklären, Online - Bestellungen oder sicher im Internet sein. Ich merke dabei immer wieder, wie wichtig Geduld ist – und wie schön es ist, wenn jemand sich am Ende freut, weil etwas endlich funktioniert.
          </p>
          <p>
          Deshalb biete ich jetzt auch anderen älteren Menschen meine Unterstützung an. Ich erkläre Technik ohne Stress, ohne komplizierte Begriffe, und so, dass man es wirklich versteht. Ich freue mich, wenn ich helfen kann!


          </p>
        </section>
        
         <footer className="max-w-3xl mx-auto mt-12 border-t border-gray-300 pt-6 text-center space-y-2 text-gray-700">
        <p className="font-semibold">Kontakt</p>
        <p>
          📧 <a href="mailto:paulinag0809@gmail.com" className="text-sky-600 hover:underline">paulinag0809@gmail.com</a>
        </p>
        <p>
          📱 <a href="tel:+4367762940769" className="text-sky-600 hover:underline">+43 677 62940769</a>
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/paulina-glantschnig-b99855328"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/paulinaglantschnig/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 hover:underline"
          >
            Instagram
          </a>
        </div>
      </footer>

        
      </div>
    </main>
  );
}
