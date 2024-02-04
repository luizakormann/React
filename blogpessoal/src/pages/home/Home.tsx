
function Home() {

    return (
        <>
            <div style={{ /* primeira div ocupa a tela toda */
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <div style={{ /* Tipo um sub container. Esse sub container vai ter 2 divs, uma dos textos e outra das imagens */
                        width: "80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <h2>Passeios gratuitos em Essepê</h2>
                        <p>Turiste a selva de pedra, mesmo se estiver sem grana ☺ Se liga nas dicas - e compartilha as suas com nóis</p>
                    </div>
                    <div style={{
                        width: "80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <img
                            src="https://imgur.com/k1jbDV0.png"
                            alt="Imagem da Página Home"
                            className="w-2/3"></img>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home