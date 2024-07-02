import Link from "next/link"

type tButton = {
  buttonName: string,
  link: string
}

const Buttons = (props: tButton) => {
  return (
    <Link href={props.link}>
      <button className="w-full text-white bg-botao hover:bg-botaoSelecionado 
        focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium
        rounded-lg text-sm px-5 py-2.5 text-center dark:bg-botao
        dark:hover:bg-botaoSelecionado dark:focus:ring-primary-800">
          { props.buttonName }
        </button>
      </Link>
  )
}

export default Buttons