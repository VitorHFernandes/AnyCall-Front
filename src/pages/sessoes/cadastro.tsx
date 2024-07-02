import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Header from '@/components/Header';
import Phone from '@/components/Phone';
import Footer from '@/components/Footer';

const CadastroSessao = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="shadow-2xl w-full max-w-md p-6 rounded-md">
          <div className="flex justify-center items-center space-x-2 p-4">
            <FontAwesomeIcon icon={faWhatsapp} style={{ width: '1.5em', height: '1.5em' }} />
            <h2>Cadastro de sessão</h2>
          </div>
          <div className="flex justify-center mb-4">
            <div className="mx-auto">
              <Phone />
            </div>
          </div>
          <div className="flex justify-center">
            <button type="button" 
              className="focus:outline-none text-white bg-botao hover:bg-botaoSelecionado
               focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 
               dark:bg-botao dark:hover:bg-botaoSelecionado dark:focus:ring-indigo-900"
            >
              Gerar QR Code
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CadastroSessao;