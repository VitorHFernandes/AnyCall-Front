import Buttons from "@/components/Buttons"
import Footer from "@/components/Footer"
import Header from "@/components/Header"


const Mensagens = () => {
  return (
    <div>
      <Header />
        <div className="flex items-center justify-center h-screen relative">
          <div className="shadow-2xl p-6">
            <div className="flex justify-center items-center mb-4">
              <Buttons buttonName="Cadastrar mensagem" link="/mensagens/cadastro" />
            </div>
            <div className="overflow-x-auto">
              <table className="table-auto w-full bg-white dark:bg-gray-900 shadow rounded border border-gray-200 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">ID</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Credor</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Tipo Mensagem</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Mensagem</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Total</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Status</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b text-center border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">2</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">Anycall B12</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">Agressiva</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">Paga seu velhaco!</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">✅</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">Editar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Mensagens