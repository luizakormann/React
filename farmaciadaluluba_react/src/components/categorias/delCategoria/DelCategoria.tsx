import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";

function DelCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria);
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function retornar() {
        navigate("/categorias");
    }

    async function deletarCategoria() {
        await deletar(`/categorias/${id}`);

        alert("Categoria apagado com sucesso");

        retornar();
    }

    return (
        <div className="bg-amber-100">
            <div className='container w-1/3 mx-auto'>
                <h1 className='text-4xl text-center font-semibold text-sky-950 my-4'>Deletar Categoria</h1>

                <p className='text-center font-semibold mb-4 text-sky-950'>Você tem certeza de que deseja apagar o categoria a seguir?</p>

                <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                    <header className='py-2 px-6 bg-sky-950 text-amber-100 font-semibold text-2xl'>Categoria</header>
                    <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
                    <div className="flex">
                        <button className='text-slate-100 bg-sky-800 hover:bg-indigo-800 w-full py-2 font-medium' onClick={retornar}>Cancelar</button>
                        <button className='w-full text-sky-950 bg-amber-300 hover:bg-amber-500 flex items-center justify-center font-medium' onClick={deletarCategoria}>
                            Sim, quero deletar
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DelCategoria;