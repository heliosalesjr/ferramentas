import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full py-10">
      <div className="flex h-[80vh] w-full max-w-9xl flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
        {/* Diagonal split with image section */}
        <div className="relative w-full md:w-1/2 bg-white">
          {/* Logo */}
         

          {/* Main image with diagonal cut */}
          <div className="relative h-full w-full">
            {/* Imagem com formato trapezoidal */}
            <div
              className="h-full w-full overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
              }}
            >
              <img
                src="/assets/images/1.png"
                alt="Homem sorrindo"
                className="h-full w-full object-cover"
                style={{
                  filter: "brightness(0.8)", // Escurece levemente a imagem para manter o efeito visual
                }}
              />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="flex w-full flex-col justify-center bg-white p-8 md:w-1/2 md:p-16">
          <div className="max-w-lg">
            {/* Close button */}
            <div className="absolute right-8 top-8">
              
            </div>

            {/* Content */}
            <h1 className="mb-6 text-5xl font-bold bg-gradient-to-br from-green-700 to-green-500 text-transparent bg-clip-text">
            Exercícios Extras
            </h1>

            <p className="mb-6 text-lg text-gray-700">
              Aqui você consegue acessar nossos exercícios extras de matemática.
            </p>

            <p className="mb-2 text-lg text-gray-700">
              Você pode acessar os PDFs por capítulo, podendo baixar ou abrir pelo próprio site.
            </p>

            <p className="mb-6 text-lg text-gray-700">As atividades extras podem potencializar suas aulas com conteúdos que vão além do que já temos nos livros.</p>

            

            {/* Button */}
            <button
                onClick={() => {
                    document.getElementById("chapter-list")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative flex items-center rounded-full bg-[#0F172A] px-6 py-3 text-white 
                    transition-all duration-300 ease-out hover:bg-[#1E293B] hover:scale-105 shadow-lg hover:shadow-xl"
                >
                <span className="mr-4 font-medium uppercase">Acesse o Conteúdo</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00E676] 
                    transition-all duration-300 ease-out group-hover:bg-[#00C764]">
                    <ArrowDown size={20} className="text-[#0F172A] transition-all duration-300 ease-out group-hover:rotate-360" />
                </span>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

