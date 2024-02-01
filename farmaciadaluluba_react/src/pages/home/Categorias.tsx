import { Link } from "react-router-dom"

function Categorias() {
    return (
        <>
            <div
                id="container"
                className="bg-amber-300 flex flex-col justify-center relative">
                <div id="cats">
                    <h2 className="text-3xl text-sky-950 font-bold text-center py-8">Selecione a opção desejada: </h2>
                </div>
                <div
                    id="subcontainer"
                    className="container flex justify-center">

                    <div id="opcoes" className="flex gap-4 items-center justify-center py-6  text-sky-950">
                        <div className="flex justify-around gap-4 text-center font-semibold py-4">
                            <Link to="/categorias/cadCategoria"
                            className="rounded border-sky-950 bg-amber-100 border-solid border-2 px-6 py-6 flex-1">
                                Cadastrar Categoria
                            </Link>
                            <Link to="/categorias/listaCategoria"
                                className="rounded border-sky-950 bg-amber-100 border-solid border-2 px-6 py-6 flex-1">
                                Editar Categorias
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Categorias