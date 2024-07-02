import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Buttons from "@/components/Buttons"

const Mailing = () => {
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
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Credor</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Fila</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Sessão</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Disparo</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Total</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">%</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Entregues</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Falhas</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Start</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Pause</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Stop</th>
                    <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b text-center border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">2</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">Anycall B12</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">TESTE</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">25</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">37</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">89%</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">33</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">0</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">▶</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">⏸</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">⏹</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-100">EDIT</td>
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

export default Mailing