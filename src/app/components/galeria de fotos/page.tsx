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
        <div className="grid grid-cols-1 gap-2 place-items-center w-full h-full bg-fuchsia-800">
            <div className="grid sm:grid-cols-3 sm:gap-3">
            {fotos.map((ftfn, index) => (
                <div key={index} className="bg-slate-950 border-orange-500 border w-40 h-40">
                    <div className="text-white">
                        {ftfn.nome}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}