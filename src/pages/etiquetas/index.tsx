'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Switch } from "@/components/ui/switch"
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

const Filas = () => {
  const [isChecked, setChecked] = useState(true)
  const [color, setColor] = useState("#1f94b8")
  const [etiqueta, setEtiqueta] = useState("")

  useEffect(() => {
    console.log(`A cor é: ${color}`)
  }, [color])

  let testeColor = "#26a269"
  let bgColor = `text-black-500 bg-[${testeColor}] hover:text-white rounded-xl px-3 py-2 text-sm font-medium`

  return (
    <div >
      <Header />
        <div className="flex items-center justify-center h-screen relative">
        <div className="shadow-2xl p-6">
          <div className="flex justify-center items-center mb-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-botao hover:bg-botaoSelecionado text-white">Cadastrar fila</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                  <DialogTitle>Cadastro de Filas</DialogTitle>
                  <DialogDescription>
                    Nova fila de atendimento.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3 py-3">
                  <div className="grid grid-cols-3 items-center gap-3">
                    <Label htmlFor="name" className="text-right">
                      Nome
                    </Label>
                    <Input className="col-span-2 w-full sm:w-3/4" onChangeCapture={ ev => setEtiqueta(ev.currentTarget.value) } />  
                  </div>
                  <div className="grid grid-cols-3 items-center gap-3">
                    <Label htmlFor="name" className="text-right">
                      Cor
                    </Label>
                    <Input type="color" defaultValue={ color } className="col-span-2 w-full sm:w-3/4" onChangeCapture={ ev => setColor(ev.currentTarget.value) } />  
                  </div>
                  <div className="grid grid-cols-3 items-center gap-3">
                  <Label htmlFor="isActive" className="text-right">
                    Ativo
                  </Label>
                  <Switch id="isActive" className="data-[state=checked]:bg-botao data-[state=unchecked]:bg-neutral-400 outline outline-offset-2 outline-[1.5px] outline-botaoSelecionado" checked={ isChecked } onCheckedChange={ setChecked } />
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
                <tr className="text-center">
                  <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">ID</th>
                  <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Etiqueta</th>
                  <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Cor</th>
                  <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Status</th>
                  <th className="px-4 py-2 text-center text-gray-600 dark:text-gray-300">Ação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b text-center border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">4</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">Alto</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                  <div className={ bgColor }>
                      { testeColor }
                    </div>
                  </td>
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

export default Filas