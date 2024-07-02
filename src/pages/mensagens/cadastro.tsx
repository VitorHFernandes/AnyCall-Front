import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"
import { Textarea } from "@/components/ui/textarea"
import { getBrasiliaTime } from '@/services/getTime';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const Cadastro = () => {

  const [mensagem, setMensagem] = useState("Escreva a mensagem, variáveis devem estar entre chaves. Exemplo: 'Olá, meu nome é {nome}'.")
  const [time, setTime] = useState("")
  const [checked, setChecked] = useState("fill-WhatsAppChecked")

  const viewed = () => {
    setChecked("fill-WhatsAppChecked")
  }

  useEffect(() => {
    setTime(getBrasiliaTime())
    setChecked("")
  }, [mensagem])


  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          <div className="shadow-2xl w-full max-w-2xl p-8 rounded-md bg-white">
            <div className="flex justify-center items-center space-x-2 p-4">
              <FontAwesomeIcon icon={faWhatsapp} style={{ width: '1.5em', height: '1.5em' }} />
              <h2 className="text-xl font-semibold">Cadastro de mensagem</h2>
            </div>
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="sm:text-right">
                  Emissor
                </Label>
                <div className="sm:col-span-3">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o emissor" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel>Selecione o emissor</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Mauricio Troiano</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="sm:text-right">
                  Temperamento
                </Label>
                <div className="sm:col-span-3">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel>Selecione o temperamento</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Agressivo</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="isActive" className="sm:text-right">
                  Mensagem
                </Label>
                <div className="sm:col-span-3">
                  <Textarea
                    placeholder="Escreva a mensagem, variáveis devem estar entre chaves. Exemplo: 'Olá, meu nome é {nome}'."
                    className="resize-none w-full"
                    onChangeCapture={ev => setMensagem(ev.currentTarget.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button type="button"
                className="focus:outline-none text-white bg-botao hover:bg-botaoSelecionado
                 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2
                 dark:bg-botao dark:hover:bg-botaoSelecionado dark:focus:ring-indigo-900"
              >
                Salvar
              </button>
            </div>
          </div>

          <div className="relative border-gray-300 dark:border-gray-800 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div className="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800 relative">
              <Image 
                src="/mockup/whatsapp-mockup.jpg"
                className="absolute rounded-[1rem] w-full h-full w-[272px] h-[567px]"
                alt="AnyCall Logo"
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute top-36 w-full flex justify-end pr-1">
                <div className="flex flex-col w-full max-w-[90%] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-tl-xl rounded-bl-xl rounded-br-xl dark:bg-WhatsApp min-w-[1px]">
                  <p className="text-sm font-[330] text-xs py-2.5 text-gray-900 dark:text-white break-words">
                    { mensagem }
                  </p>
                  <div className="flex flex-row justify-end items-center">
                    <span className="text-xs font-[330] text-gray-500 dark:text-gray-400 flex items-center">
                      { time }
                      <svg viewBox="0 0 16 11" height="11" width="16" className="ml-2" fill="none">
                        <path className={ checked }
                          d="M11.0714 0.652832C10.991 0.585124 10.8894 0.55127 10.7667 0.55127C10.6186 0.55127 10.4916 
                          0.610514 10.3858 0.729004L4.19688 8.36523L1.79112 6.09277C1.7488 6.04622 1.69802 6.01025 
                          1.63877 5.98486C1.57953 5.95947 1.51817 5.94678 1.45469 5.94678C1.32351 5.94678 1.20925 
                          5.99544 1.11192 6.09277L0.800883 6.40381C0.707784 6.49268 0.661235 6.60482 0.661235 
                          6.74023C0.661235 6.87565 0.707784 6.98991 0.800883 7.08301L3.79698 10.0791C3.94509 10.2145 
                          4.11224 10.2822 4.29844 10.2822C4.40424 10.2822 4.5058 10.259 4.60313 10.2124C4.70046 10.1659 
                          4.78086 10.1003 4.84434 10.0156L11.4903 1.59863C11.5623 1.5013 11.5982 1.40186 11.5982 
                          1.30029C11.5982 1.14372 11.5348 1.01888 11.4078 0.925781L11.0714 0.652832ZM8.6212 
                          8.32715C8.43077 8.20866 8.2488 8.09017 8.0753 7.97168C7.99489 7.89128 7.8891 7.85107 
                          7.75791 7.85107C7.6098 7.85107 7.4892 7.90397 7.3961 8.00977L7.10411 8.33984C7.01947 8.43717 
                          6.97715 8.54508 6.97715 8.66357C6.97715 8.79476 7.0237 8.90902 7.1168 9.00635L8.1959 
                          10.0791C8.33132 10.2145 8.49636 10.2822 8.69102 10.2822C8.79681 10.2822 8.89838 10.259 
                          8.99571 10.2124C9.09304 10.1659 9.17556 10.1003 9.24327 10.0156L15.8639 1.62402C15.9358 
                          1.53939 15.9718 1.43994 15.9718 1.32568C15.9718 1.1818 15.9125 1.05697 15.794 0.951172L15.4386 
                          0.678223C15.3582 0.610514 15.2587 0.57666 15.1402 0.57666C14.9964 0.57666 14.8715 0.635905 
                          14.7657 0.754395L8.6212 8.32715Z" 
                          fill="currentColor">
                        </path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cadastro