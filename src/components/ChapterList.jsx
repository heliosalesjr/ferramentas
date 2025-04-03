import React, { useState } from "react";
import { FaDownload, FaFilePdf } from "react-icons/fa";

const chapters = [
  { id: 1, title: "O Começo da Jornada", pdfPath: "/assets/pdfs/cap_1_1a_serie.pdf" },
  { id: 2, title: "O Despertar da Força", pdfPath: "/assets/pdfs/cap_1_1a_serie.pdf" },
  { id: 3, title: "A Revolução dos Gatos", pdfPath: "/assets/pdfs/cap_1_1a_serie.pdf" },
  { id: 4, title: "Mistérios do Espaço", pdfPath: "/assets/pdfs/cap_1_1a_serie.pdf" },
  { id: 5, title: "Mistérios do Espaço", pdfPath: "/assets/pdfs/cap_1_1a_serie.pdf" },
  { id: 6, title: "Mistérios do Espaço", pdfPath: "/assets/pdfs/cap_1_1a_serie.pdf" },
  { id: 7, title: "Mistérios do Espaço", pdfPath: "/assets/pdfs/cap_1_1a_serie.pdf" },
  { id: 8, title: "Mistérios do Espaço", pdfPath: "/assets/pdfs/cap_1_1a_serie.pdf" },
  { id: 9, title: "Mistérios do Espaço", pdfPath: "/assets/pdfs/cap_1_1a_serie.pdf" },
  { id: 10, title: "Mistérios do Espaço", pdfPath: "/assets/pdfs/cap_1_1a_serie.pdf" },
  { id: 11, title: "Mistérios do Espaço", pdfPath: "/assets/pdfs/cap_1_1a_serie.pdf" },
  { id: 12, title: "Mistérios do Espaço", pdfPath: "/assets/pdfs/cap_1_1a_serie.pdf" },
  { id: 13, title: "Mistérios do Espaço", pdfPath: "/assets/pdfs/cap_1_1a_serie.pdf" },
  
];

const ChapterList = () => {
    const [openPdf, setOpenPdf] = useState(null);
  
    const togglePdf = (id) => {
      setOpenPdf(openPdf === id ? null : id);
    };
  
    const downloadPdf = (path) => {
      const link = document.createElement("a");
      link.href = path;
      link.download = path.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <div id="chapter-list" className="w-full max-w-5xl mx-auto p-6">
        {/* Título e introdução */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Biblioteca de Capítulos
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Explore os capítulos abaixo e clique para visualizar ou baixar o conteúdo. 
          Cada história traz um novo universo para você descobrir!
        </p>
  
        {/* Lista de capítulos */}
        {chapters.map((chapter) => (
          <div key={chapter.id} className="mb-8">
            {/* ITEM DA LISTA */}
            <div
              className={`flex items-center justify-between p-6 border border-slate-300 rounded-lg shadow-xl 
                transition-all cursor-pointer ${
                  openPdf === chapter.id ? "bg-green-500 text-white" : "bg-white hover:bg-gray-50"
                }`}
              onClick={() => togglePdf(chapter.id)}
            >
              <h2 className="text-lg font-semibold">
                Capítulo {chapter.id}: {chapter.title}
              </h2>
              <div className="flex gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    downloadPdf(chapter.pdfPath);
                  }}
                  className={`transition-all ${
                    openPdf === chapter.id ? "text-white" : "text-blue-400 hover:text-blue-800"
                  }`}
                >
                  <FaDownload size={30} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePdf(chapter.id);
                  }}
                  className={`transition-all ${
                    openPdf === chapter.id ? "text-white" : "text-red-400 hover:text-red-800"
                  }`}
                >
                  <FaFilePdf size={30} />
                </button>
              </div>
            </div>
  
            {/* CONTAINER DO PDF */}
            {openPdf === chapter.id && (
              <div className="mt-4 border p-4 rounded-lg bg-green-500 h-[80vh] flex justify-center">
                <embed
                  src={chapter.pdfPath}
                  type="application/pdf"
                  width="100%"
                  height="100%"
                  className="border rounded-lg"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

export default ChapterList;
