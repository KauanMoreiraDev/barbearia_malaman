import Image from "next/image";
import Galeria from "./components/galeria de fotos/page";
import Serviços from "./components/serviços/page";
import Prices from "./components/tabela preços/page";

export default function Home() {

  return (
    <main className="w-screen h-full bg-slate-200">
      <div className="font-Inter font-light italic">
        <div className="bg-black">
          <div className="inicio/apresentação mx-auto max-w-screen-lg">
            <div className="mx-auto">
              <Image src={'/images/banner final.jpg'} alt="banner" width={2000} height={2000} className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="serviços bg-yellow-100">
          <div className="mx-auto max-w-screen-lg h-full bg-yellow-100">
            <div className="flex items-end">
              <div className="w-2/5 h-5/6">
                <Image src={'/images/detalhe.jpg'} alt="imagem" width={200} height={400} className="w-full h-full pr-4" />
              </div>
              <div className="w-3/5 h-full bg-red-200">
                <div className="flex flex-col h-full">
                  <div className="font-semibold text-center text-3xl">Somos referência na Cidade</div>
                  <Serviços />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabela de preços bg-[url('/images/barber-tool.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="mx-auto max-w-screen-lg h-full">
          <div className="p-4 flex justify-center items-center">
            <div className="">
              <div className="w-full h-full">
                <Image src={'/images/barber-pole.png'} alt="pole-barber" width={1000} height={1000} className="w-full h-full -rotate-12" />
              </div>
            </div>
            <div className="w-full h-full ">
              <div className="flex justify-center">
                <Prices />
              </div>
            </div>
            <div className="">
              <div className="w-full h-full">
                <Image src={'/images/barber-pole.png'} alt="pole-barber" width={1000} height={1000} className="w-full h-full rotate-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="galeria bg-yellow-100">
          <div className="mx-auto max-w-screen-lg h-screen">
            <Galeria />
          </div>
        </div>
        <div className="sobre nós bg-yellow-100">
          <div className="mx-auto max-w-screen-lg h-full">
            <div className="flex justify-center">
              <div className="w-full h-full">
                <div className="flex justify-start">
                  <Image src={'/images/logo.png'} alt="logo" width={1000} height={1000} className="w-full h-full" />
                </div>
              </div>
              <div className="w-full h-[450px]">
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
