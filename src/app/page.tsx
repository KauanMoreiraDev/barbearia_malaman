"use client";

import Image from "next/image";
import Galeria from "./components/galeria de fotos/page";
import Serviços from "./components/serviços/page";
import Prices from "./components/tabela preços/page";

export default function Home() {

  return (
    <main className="w-screen h-full">
      <div className="font-Inter font-light italic">
        <div className="bg-black">
          <div className="inicio/apresentação mx-auto max-w-screen-lg">
            <div className="mx-auto">
              <Image src={'/images/banner final.jpg'} alt="banner inicio" width={2000} height={2000} className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="serviços bg-yellow-100 relative">
          <div className="bg-[url('/images/bg-total.png')] bg-cover opacity-15 absolute inset-0 z-0"></div>
          <div className="mx-auto max-w-screen-lg h-full">
            <div className="flex items-end justify-center relative ">
              <div className="hidden sm:block">
                <div className="w-5/6 h-5/6">
                  <Image src={'/images/detalhe.jpg'} alt="imagem" width={200} height={400} className="w-full h-full pr-4" />
                </div>
              </div>
              <div className="w-3/5 h-full p-4">
                <div className="sm:w-3/5 sm:h-full">
                  <div className="flex flex-col h-full">
                    <div className="font-semibold text-center text-xl mb-10">
                      <div className="sm:text-3xl">
                        Somos referência na Cidade
                      </div>
                    </div>
                    <Serviços />
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
        <div className="acertar alinhamento tabela de preços bg-[url('/images/barber-tool.jpg')] bg-cover bg-no-repeat bg-center">
          <div className="mx-auto max-w-screen-lg h-screen flex items-center justify-center">
            <div className="w-full">
              <Prices />
            </div>
          </div>
        </div>
        <div className="galeria bg-yellow-100 relative">
        <div className="bg-[url('/images/bg-total.png')] bg-cover opacity-15 absolute inset-0 z-0"></div>
          <div className="mx-auto max-w-screen-lg min-h-full">
            <div className="w-full min-h-full relative">
              <Galeria />
            </div>
          </div>
        </div>
        <div className="sobre nós bg-yellow-100 relative">
        <div className="bg-[url('/images/bg-total.png')] bg-cover opacity-15 absolute inset-0 z-0"></div>
          <div className="mx-auto max-w-screen-lg h-full relative">
            <div className="sm:flex sm:justify-center">
              <div className="w-full h-full">
                <div className="sm:flex sm:justify-start">
                  <Image src={'/images/logo.png'} alt="logo" width={1000} height={1000} className="w-full h-full" />
                </div>
              </div>
              <div className="w-full min-h-full p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta, praesentium neque minima quaerat ab ratione eum? Rem fugiat aspernatur qui, maiores alias omnis repellendus laboriosam consequuntur ipsum, incidunt voluptatibus.
                Praesentium optio dolore ipsa, voluptatum error iure adipisci incidunt quo alias voluptates, dolores odit corrupti nesciunt provident, aperiam sapiente. Nesciunt mollitia iure eos iste magnam pariatur libero dolores? Nam, unde!
                <div className="bg-lime-500 h-2/5">
                  <Image src={'/images/maps.jpg'} alt="maps" width={700} height={700} className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main >
  );
}
