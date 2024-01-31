import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {

  let data = new Date().getFullYear()

  return (
    <>
      <div className="flex justify-center bg-sky-800 text-amber-100">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-semibold">
            [ Performance Goal #3 - Bootcamp Java FullStack @ Generation Brasil ] | Copyright: {data}
          </p>
          <p className="font-semibold">Desenvolvido por Luiza Kormann. Acesse minhas redes: </p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/luizakormann/" target="_blank" >
              <LinkedinLogo size={36} weight="bold" />
            </a>
            <a href="https://github.com/luizakormann" target="_blank">
              <GithubLogo size={36} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer