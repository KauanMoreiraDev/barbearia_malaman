import Image from "next/image";

export default function Serviços() {
    
    const icons_barber = [
        {
          nome: 'Cabelo e barba',
          descrição: 'Corte de cabelo com barba',
          local: '/images/Cabelo-Barba.png',
        },
        {
          nome: 'Química capilar',
          descrição: 'Descolorir, tintura, selagem',
          local: '/images/Quimica.png',
        },
        {
          nome: 'Dia do noivo',
          descrição: 'Pacote completo com cabelo, barba e sombrancelho pro abençoado',
          local: '/images/Dia-do-noivo.png',
        },
        {
          nome: 'Sinuca',
          descrição: 'Temos sinuca para entreenimento',
          local: '/images/Sinuca.png',
        },
      ]

    return (
        <div className="grid grid-cols-2 gap-4">
            {icons_barber.map((icofn, index) => (
                <div key={index}>
                <Image key={index} src={icofn.local} alt={icofn.nome} width={70} height={70} />
                {icofn.descrição}
                </div>
            ))}
        </div>
    )
}