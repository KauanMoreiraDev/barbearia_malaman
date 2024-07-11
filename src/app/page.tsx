import Image from "next/image";
import Link from "next/link";
import Mheader from "./components/header/page";

export default function Home() {

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
    <main className="max-w-screen-lg h-screen relative">
      <div className="w-full h-full bg-[url('/images/banner1.jpg')] bg-no-repeat bg-center bg-cover sm:bg-center">
        <Mheader />
      </div>
      <div>
        <div className="w-2/5 h-screen bg-black flex justify-end items-center absolute top-14 -left-14 m-1 p-2 sm:justify-center sm:p-0 sm:m-0">
          <div className="-rotate-[18deg]">
            <Image src={'/images/logo2.png'} alt="logo" width={270} height={270} className="rounded-full w-36 h-36 sm:w-52 sm:h-52" />
          </div>
        </div>
      </div>
      {/* <div className="bg-lime-400 h-4/5" /> */}
      <div className="z-20 relative bg-white">
        <div className="flex items-end justify-center z-20 pt-2 pb-2">
          <div className="grid grid-cols-2 w-1/2">
            {icons_barber.map((icofn, index) => (
              <div key={index}>
                <Image src={icofn.local} alt={icofn.nome} width={100} height={100} />
              </div>
            ))}
          </div >
          <div className="bg-lime-400 w-72 h-[32rem]" />
        </div>
      </div>
    </main >
  );
}
