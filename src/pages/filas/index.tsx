'use client'
import { Label } from "@/components/ui/label"
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const Filas = () => {
  const [isChecked, setChecked] = useState(true)

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
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Agente
                    </Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Selecione o agente" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectGroup >
                          <SelectLabel>Selecione o agente</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Mauricio Troiano</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Fila
                    </Label>
                    <Select>
                      <SelectTrigger className="w-[180px] ">
                        <SelectValue placeholder="Selecione a fila" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectGroup>
                          <SelectLabel>Selecione a fila</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">AnyCall B12</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="isActive" className="text-right">
                    Ativo
                  </Label>
                  <Switch id="isActive" className="data-[state=checked]:bg-botao data-[state=unchecked]:bg-neutral-400 outline outline-offset-2 outline-[1.5px] outline-botaoSelecionado" checked={isChecked} onCheckedChange={setChecked} />
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
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Fila</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Usuário</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Status</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Número</th>
                  <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Ação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">4</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">Anycall 1 - AAA</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">Mauricio Troiano</td>
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