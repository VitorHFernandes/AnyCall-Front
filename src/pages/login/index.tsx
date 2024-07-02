import { ControllerLogin } from '@/pages/login/controllerLogin'
import { AlertCustomStyles } from '@/components/Alerts' 
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useState } from 'react'
import 'tailwindcss/tailwind.css';
import Router from 'next/router'


const AuthLogin: React.FC = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState(null)



  const handleClick = async () => {
    try {
      const token = await ControllerLogin(email, password)
      setStatus(token)

      if(token){
        Router.push('/home')
      }
    } catch(err) {
      Router.push('/login')
    }
  } 

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <Avatar>
          <AvatarImage src="logo/logo.png" alt="@shadcn" />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar> 
         AnyCall Messageria    
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Entre com sua conta
            </h1>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Endereço de e-mail</label>
                  <input type="email" name="email" value={email} onChange={ handleEmailChange }  id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@email.com" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                <input type="password" name="password" value={password} onChange={ handlePasswordChange } id="password" placeholder="••••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <button onClick={ handleClick } className="w-full text-white bg-botao hover:bg-botaoSelecionado focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Entrar</button>
            {!status && (
              <AlertCustomStyles text="Falha na autenticação!" />
            )}     
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthLogin