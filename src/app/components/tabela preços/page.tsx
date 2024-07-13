export default function Prices() {
    const prices = [
        { service: "Corte", price: "R$ 20,00" },
        { service: "Navalhado", price: "R$ 35,00" },
        { service: "Barba", price: "R$ 10,00" },
        { service: "Sombrancelha", price: "R$ 5,00" },
        { service: "Tintura", price: "R$ 30,00" },
        { service: "Dia de Noivo", price: "R$ 50,00" }
    ];

    return (
        <div className="w-full h-full relative">
            <div className="bg-black blur-[2px] bg-opacity-50 absolute inset-0 rounded-lg">
            </div>
            <div className="z-10 relative flex justify-center p-1">
                <div className="w-4/5 text-left text-white">
                    {prices.map((price, index) => (
                        <div key={index} className="flex justify-between py-1 border-b">
                            <span>{price.service}</span>
                            <span>{price.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}