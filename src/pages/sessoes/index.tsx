import Buttons from "@/components/Buttons";
import Header from "@/components/Header";
import { useEffect } from "react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import Footer from "@/components/Footer";

type tGetSessions = {
  id: number,
  perfil: string,
  cliente: string,
  nome: string,
  numero: number,
  randomico: boolean,
  envios: number,
  pausa: number,
  tempoPausa: number,
  contador: number,
  soneca: boolean,
  status: boolean
}




const Sessoes = () => {
  
  const getSessions = async () => {
    const token = sessionStorage.getItem("accessToken")
    const response = await fetch('https://anycall-messageria.vmbrain.tech/api/sessions/list-session ', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` }
    })
    .then(res => res.json())
  
    return response.data
  }
  
  useEffect(() => {
    getSessions()
  }, [])
  
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen relative">
        <div className="shadow-2xl p-6">
          <div className="flex justify-center items-center mb-4">
            <Buttons buttonName="Cadastrar sessão" link="/sessoes/cadastro" />
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-white dark:bg-gray-900 shadow rounded border border-gray-200 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">ID</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Perfil</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Cliente</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Nome</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Número</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Randômica</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Envios Pausa</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Tempo Pausa</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Contador</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Soneca</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Status</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Ação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">21</td>
                  <td className="px-4 py-2">
                  <Avatar>
                    <AvatarImage src="logo/logo.png" alt="@shadcn" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar> 
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">Anycall B12</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">TESTE</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">47997694781</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">Não</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">50</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">999999</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">37</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">😴</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">Authenticated</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">delete</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sessoes;