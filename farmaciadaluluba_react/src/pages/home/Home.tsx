import img from "../../assets/home_farm_da_luluba.svg"

function Home() {
    return (
        <>
            <div
                id="container"
                className="bg-amber-300 flex flex-col justify-center relative">
                <div id="boas-vindas">
                    <h2 className="text-3xl text-sky-950 font-bold text-center py-8">Boas vindas! Esperamos poder te ajudar ☺ </h2>
                </div>
                <div
                    id="subcontainer"
                    className="container grid grid-cols-2 text-amber-100">

                    <div id="imagem" className="flex justify-center">
                        <img
                            className="w-2/3 "
                            src={img}
                            alt="Ilustração de cientista no laboratório desenvolvendo medicamentos" />
                    </div>
                    <div
                        id="texto"
                        className="flex flex-col gap-4 items-center justify-center py-6  text-sky-950">
                        <p className="text-xl font-bold">
                            Todos os nossos produtos são desenvolvidos em respeito às melhores práticas ESG, utilizando tecnologias de ponta e saberes tradicionais para o melhor para sua saúde. Conheça nossas soluções:
                        </p>
                        <div
                            id="containterButton"
                            className="flex justify-around gap-4 w-1/2 text-center font-semibold py-4">
                            <div className="rounded border-sky-950 bg-amber-100 border-solid border-2 px-4 py-2 flex-1">
                                Criar Produtos
                            </div>
                            <div className="rounded border-sky-950 bg-amber-100 border-solid border-2 px-4 py-2 flex-1">
                                Ver Produtos
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home