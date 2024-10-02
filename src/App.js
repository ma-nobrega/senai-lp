import React from "react";
import "./index.css";
import Logo from "./assets/logo.jpg";

function App() {
  const sites = [
    {
      title: "A carteira",
      link: "https://anamarques0213.github.io/a-carteira/index.html",
    },
    {
      title: "A causa secreta",
      link: "https://estevaosantos7.github.io/Causa-Secreta/",
    },
    {
      title: "Adão e Eva",
      link: "https://julianadelfino.github.io/adao-e-eva",
    },
    {
      title: "Filosofia de um par de botas",
      link: "https://dudasousafreitas.github.io/Filosofia-de-um-par-de-Botas",
    },
    {
      title: "Missa do Galo",
      link: "https://b4d211.github.io/MissaDoGalo/index.html",
    },
    {
      title: "Os três tesouros perdidos",
      link: "https://duh-jsantos.github.io/tres-tesouros/",
    },
    {
      title: "O Enfermeiro",
      link: "https://diogo12195.github.io/O-Enfermeiro/index.html",
    },

    {
      title: "O Espelho",
      link: "https://lor3na92.github.io/projeto-L-gia/",
    },
    {
      title: "O caso da vara",
      link: "https://kaualima678.github.io/Atividade-Resenha/",
    },

    {
      title: "Ideias do canario",
      link: "https://otaviopalese.github.io/Ideias-de-Canario/",
    },
    {
      title: "Um Apólogo",
      link: "https://dstruemansworld.github.io/p-gina-liter-ria/",
    },

    {
      title: "Um homem célebre",
      link: "https://2779bytes.github.io/senailp",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      <header className="max-w-7xl mx-auto text-center py-6">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className=" h-24" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 my-3">
          RESENHA DE LIVRO
        </h1>
        <p>Trabalho SESI/SENAI</p>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sites.map((site, index) => (
          <div
            key={index}
            onClick={() => window.open(site.link, "_blank")}
            className={`p-6 border-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer text-gray-800 bg-white ${
              index % 2 === 0 ? "border-red-600" : "border-gray-700"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4">{site.title}</h2>
          </div>
        ))}
      </main>

      <footer className="w-full mx-auto text-center mt-12">
        <p className="inline-block w-full bg-red-600  text-white font-bold py-3 px-6 shadow-lg hover:bg-red-700 transition-colors duration-300">
          Trabalhos feito pelos alunos do segundo ano.
        </p>
      </footer>
    </div>
  );
}

export default App;
