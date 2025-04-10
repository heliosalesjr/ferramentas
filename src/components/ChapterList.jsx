import React, { useState } from "react";
import ChapterCard from "./ChapterCard";

const chapters = [
  { id: 1, title: "Ter ou Ser? Eis a Questão...", teacherPdf: "/assets/pdfs/Capitulo_01_ALD_8o_ano_Educador.pdf", studentPdf: "/assets/pdfs/Capitulo 01_ALD_8o_ano_Estudante.pdf" },
  { id: 2, title: "Jura que posso gastar mais? Juros!", teacherPdf: "/assets/pdfs/Capitulo_02_ALD_8o_ano_Educador.pdf", studentPdf: "/assets/pdfs/Capitulo_02_ALD_8o_ano_Estudante.pdf" },
  // ... mais capítulos
];

const ChapterList = () => {
  const [openPdf, setOpenPdf] = useState({ id: null, type: null });

  const togglePdf = (id, type) => {
    if (openPdf.id === id && openPdf.type === type) {
      setOpenPdf({ id: null, type: null });
    } else {
      setOpenPdf({ id, type });
    }
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
    <div className="w-full max-w-5xl mx-auto p-6" id="chapter-list">
      <h1 className="text-4xl font-semibold text-center mb-4 bg-gradient-to-br from-green-700 to-green-500 text-transparent bg-clip-text">
        Biblioteca de Capítulos
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto pb-4">
        Explore os capítulos abaixo e visualize / baixe os conteúdos do Livro do Professor ou do Caderno do Estudante.
      </p>

      {chapters.map((chapter) => (
        <ChapterCard
          key={chapter.id}
          chapter={chapter}
          openPdf={openPdf}
          togglePdf={togglePdf}
          downloadPdf={downloadPdf}
        />
      ))}
    </div>
  );
};

export default ChapterList;
