import Image from "next/image";
import Link from "next/link";
import Mheader from "./components/header/page";
import Galeria from "./components/galeria de fotos/page";

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
    <main className="w-screen h-full bg-slate-600">
      <div className="inicio/apresentação mx-auto max-w-screen-lg bg-red-500">
        <div className="p-4 flex mx-auto">
          <div className="bg-lime-400 w-1/3 h-[400px]">
            logo
          </div>
          <div className="bg-blue-400 w-full h-[400px]">
            background
          </div>
        </div>
      </div>
      <div className="serviços mx-auto max-w-screen-lg h-[500px] bg-yellow-300">
        <div className="p-4 flex items-end">
          <div className="w-full h-[470px] bg-amber-600">
            alguma foto
          </div>
          <div className="w-1/2 h-64 bg-pink-400">
            icons e descrição
          </div>
        </div>
      </div>
      <div className="tabela de preços mx-auto max-w-screen-lg h-[500px] bg-emerald-500">
        <div className="p-4 flex items-center">
          <div className="w-1/5 h-[470px] bg-red-600">
            efeito paralax, pole barber
          </div>
          <div className="w-3/5 h-[400px] bg-fuchsia-600">
            tabela de preços
          </div>
          <div className="w-1/5 h-[450px] bg-red-600">
            efeito paralax, pole barber
          </div>
        </div>
      </div>
      <div className="galeria mx-auto max-w-screen-lg h-[500px]">
        <Galeria />
      </div>
      <div className="sobre nós mx-auto max-w-screen-lg h-[500px] bg-sky-400">
        <div className="flex">
          <div className="bg-yellow-950 w-1/2 h-[450px]">
            logo
          </div>
          <div className="bg-zinc-400 w-1/2 h-[450px]">
            sobre
            <div className="bg-lime-500 h-2/5">
              maps
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
