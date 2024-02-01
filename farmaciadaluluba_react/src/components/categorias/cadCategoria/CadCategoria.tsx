import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"

interface CadCategoriaProps{
    Categoria: Categoria
}

function CadCategoria({ Categoria }: CadCategoriaProps) {
  return (
    <>
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between bg-amber-100 '>
      <header className='py-2 px-6 bg-sky-950 text-amber-100 font-semibold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{Categoria.nome}</p>
      <div className="flex">
        <Link to={`/categorias/atCategoria/${Categoria.id}`} className='w-full text-slate-100 bg-sky-800 hover:bg-indigo-800 flex items-center justify-center py-2 font-medium'>
          <button>Atualizar</button>
        </Link>
        <Link to={`/categorias/delCategoria/${Categoria.id}`} className='text-sky-950 bg-amber-300 hover:bg-amber-500 w-full flex items-center justify-center font-medium'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default CadCategoria