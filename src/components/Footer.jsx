import logo from '/assets/images/logo_white.png'; // Importação direta da imagem

function Footer() {
  return (
    <footer className="animated-gradient p-6 bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-between min-h-[240px] mt-auto">
      {/* Logo - lado esquerdo */}
      <div className="flex items-center">
        <a href="http://www.beieducacao.com.br" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo BEĨ" width={60} height={60} />
        </a>
      </div>

      {/* Texto centralizado, alinhado ao bottom */}
      <div className="flex flex-col text-center mt-auto">
        <p className="text-white font-bold uppercase tracking-[0.5em] mb-4">Conteúdo com propósito</p>
        <p className="text-slate-200 text-sm">2025 © Todos os direitos reservados</p>
        </div>

      {/* Ícones sociais - lado direito */}
      <div className="flex gap-6">
        <a
          href="https://www.youtube.com/channel/UCRk-HV6uJQoZ3RFY9rcyFXw"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-yellow-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current text-white"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/beieducacao"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-yellow-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current text-white"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
