import React, { useState } from "react";
import useInView from "../hooks/useInView";
import { FaDownload, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";

const chapters = [
  { id: 1, title: "Ter ou Ser? Eis a Questão...", teacherPdf: "/assets/pdfs/Capitulo_01_ALD_8o_ano_Educador.pdf", studentPdf: "/assets/pdfs/Capitulo 01_ALD_8o_ano_Estudante.pdf" },
  { id: 2, title: "Jura que posso gastar mais? Juros!", teacherPdf: "/assets/pdfs/Capitulo_02_ALD_8o_ano_Educador.pdf", studentPdf: "/assets/pdfs/Capitulo_02_ALD_8o_ano_Estudante.pdf" },
  // ... outros capítulos
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

      {chapters.map((chapter) => {
        const [ref, isVisible] = useInView({ threshold: 0.1 });

        return (
          <div
            key={chapter.id}
            ref={ref}
            className={`mb-10 transition-all duration-1000 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex flex-col gap-4 p-8 border border-slate-300 rounded-lg shadow-xl bg-white hover:bg-gray-50 transition-all">
              <h2 className="text-lg font-semibold uppercase text-gray-800">
                Capítulo {chapter.id}: {chapter.title}
              </h2>

              <div className="flex flex-wrap gap-4 mt-2 w-full">
                {/* Botões do PROFESSOR */}
                <button
                  onClick={() => togglePdf(chapter.id, "teacher")}
                  className={`flex-1 min-w-[200px] flex items-center gap-2 px-4 py-2 rounded-lg justify-center border font-medium transition-all ${
                    openPdf.id === chapter.id && openPdf.type === "teacher"
                      ? "bg-green-600 text-white"
                      : "bg-green-100 text-green-700 hover:bg-green-200"
                  }`}
                >
                  <FaChalkboardTeacher />
                  Material do Professor
                </button>

                <button
                  onClick={() => downloadPdf(chapter.teacherPdf)}
                  className="flex-1 min-w-[200px] flex items-center gap-2 px-4 py-2 rounded-lg border justify-center border-green-600 text-green-700 bg-white hover:bg-green-50 font-medium transition-all"
                >
                  <FaDownload />
                  Baixar PDF
                </button>

                {/* Botões do ESTUDANTE */}
                <button
                  onClick={() => togglePdf(chapter.id, "student")}
                  className={`flex-1 min-w-[200px] flex items-center gap-2 px-4 py-2 justify-center rounded-lg border font-medium transition-all ${
                    openPdf.id === chapter.id && openPdf.type === "student"
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
                >
                  <FaUserGraduate />
                  Material do Estudante
                </button>

                <button
                  onClick={() => downloadPdf(chapter.studentPdf)}
                  className="flex-1 min-w-[200px] flex items-center gap-2 px-4 py-2 justify-center rounded-lg border border-blue-600 text-blue-700 bg-white hover:bg-blue-50 font-medium transition-all"
                >
                  <FaDownload />
                  Baixar PDF
                </button>
              </div>
            </div>

            {openPdf.id === chapter.id && (
              <div className="mt-4 border p-4 rounded-lg bg-green-50 h-[80vh] flex justify-center">
                <embed
                  src={
                    openPdf.type === "teacher"
                      ? chapter.teacherPdf
                      : chapter.studentPdf
                  }
                  type="application/pdf"
                  width="100%"
                  height="100%"
                  className="border rounded-lg"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ChapterList;
