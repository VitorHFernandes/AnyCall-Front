'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';


const Emissores = () => {
  const [emissor, setEmissor] = useState("")

  return (
    <div >
      <Header />
        <div className="flex items-center justify-center h-screen relative">
        <div className="shadow-2xl p-6">
          <div className="flex justify-center items-center mb-4">
          <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-botao hover:bg-botaoSelecionado text-white">Cadastrar Emissor</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                  <DialogTitle>Cadastro de Emissor</DialogTitle>
                  <DialogDescription>
                    Cadastre um novo emissor para seu mailing.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid ">
                  <div className="items-center ">
                    <Label htmlFor="name" className="text-right">
                      Nome
                    </Label>
                    <Input className="w-full" onChangeCapture={ev => setEmissor(ev.currentTarget.value)} />  
                  </div>
                </div>
                  
                <DialogFooter>
                  <Button type="submit" className="bg-botao hover:bg-botaoSelecionado text-white">Salvar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-white dark:bg-gray-900 shadow rounded border border-gray-200 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">ID</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Nome</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Status</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Ação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">4</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">Anycall 1 - AAA</td>
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

export default Emissores