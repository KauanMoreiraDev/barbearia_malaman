export default function Prices() {
    
    const prices = [{
        item:"Corte..............................................R$ 20,00"
    },
{
    item: "Navalhado.................................R$ 35,00"
},
{
    item: "Barba...........................................R$ 10,00"
},
{
    item: "Sombrancelha............................R$ 5,00"
},
{
    item: "Tintura.......................................R$ 30,00"
},
{
    item: "Dia de Noivo..........................R$ 50,00"
}]

    return (
        <div className="w-1/2 h-full">
            <div className="text-center">
                {prices.map((prcfn, index) => (
                    <div key={index}>{prcfn.item}</div>
                ))}
            </div>
        </div>
    )
}