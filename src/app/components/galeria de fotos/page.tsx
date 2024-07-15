export default function Galeria() {

    const fotos = [{
        nome: "/images/corte01.png"
    },
    {
        nome: "/images/corte01.png"
    },
    {
        nome: "/images/corte01.png"
    },
    {
        nome: "/images/corte01.png"
    },
    {
        nome: "/images/corte01.png"
    },
    {
        nome: "/images/corte01.png"
    },
    ]

    return (
        <div className="grid grid-cols-1 gap-3 place-items-center w-full h-full bg-yellow-100 p-4">
            <div className="sm:grid sm:grid-cols-3 sm:gap-6 ">
            {fotos.map((ftfn, index) => (
                <div key={index} className="w-full h-auto">
                    <img src={ftfn.nome} alt={ftfn.nome} width={500} height={500} className="mb-4" />
                </div>
                ))}
            </div>
        </div>
    )
}