export default function Galeria() {
    
    const fotos = [{
        nome: "fotos,insta"
    },
    {
        nome: "fotos,insta"
    },
    {
        nome: "fotos,insta"
    },
    {
        nome: "fotos,insta"
    },
    {
        nome: "fotos,insta"
    },
    {
        nome: "fotos,insta"
    },
]

    return (
        <div>
            <div className="grid grid-cols-3 gap-3">
                <div >
                    {fotos.map((ftfn, index)) = (<></>
                        <div key={index} className="bg-slate-300 w-1/4 h-1/4">
                            ftfn.nome
                            </div>
                            </>
                    )}
                </div>
            </div>
        </div>
    )
}