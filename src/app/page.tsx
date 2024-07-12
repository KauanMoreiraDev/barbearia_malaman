import Image from "next/image";
import Galeria from "./components/galeria de fotos/page";
import Serviços from "./components/serviços/page";
import Prices from "./components/tabela preços/page";

export default function Home() {

  return (
    <main className="w-screen h-full bg-slate-200">
      <div className="bg-black">
        <div className="inicio/apresentação mx-auto max-w-screen-lg">
          <div className="mx-auto">
            <Image src={'/images/banner final.jpg'} alt="banner" width={2000} height={2000} className="w-full h-full" />
            {/* <div className="w-full h-full bg-[url('/images/banner final.jpg')] bg-cover">
            w-full h-full bg-[url('/images/banner final.jpg')] bg-cover
            </div>
            <div className="bg-blue-400 w-full h-[400px]">
            w-full h-full bg-[url('/images/banner final.jpg')] bg-cover
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-yellow-200">
        <div className="serviços mx-auto max-w-screen-lg h-full bg-yellow-200">
          <div className="flex items-end">
            <div className="w-2/5 h-5/6">
              <Image src={'/images/detalhe.jpg'} alt="imagem" width={200} height={400} className="w-full h-full pr-4" />
            </div>
            <div className="w-3/5 h-5/6 bg-yellow-200">
              <div className="flex flex-wrap content-between">
                <div>Somos referência na Cidade</div>
                <Serviços />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tabela de preços mx-auto max-w-screen-lg h-[500px] bg-slate-200">
        <div className="p-4 flex items-center">
          <div className="w-1/5 bg-red-400">
            <div className="h-5/6">
              <Image src={'/images/barber-pole.png'} alt="pole-barber" width={450} height={450} className="w-full h-full" />
            </div>
          </div>
          <div className="w-3/5 h-[400px] bg-slate-300">
            <div className="flex justify-center items-center">
              <Prices/>
            </div>
          </div>
          <div className="w-1/5 h-full">
            <Image src={'/images/barber-pole.png'} alt="pole-barber" width={450} height={450} />
          </div>
        </div>
      </div>
      <div className="bg-yellow-200">
        <div className="galeria mx-auto max-w-screen-lg h-[500px]">
          <Galeria />
        </div>
      </div>
      <div className="sobre nós mx-auto max-w-screen-lg h-[500px] bg-slate-200">
        <div className="flex">
          <div className="w-1/2 h-full">
            <div className="flex justify-center items-center">
              <Image src={'/images/logo2.png'} alt="logo" width={200} height={200} className="w-5/6 h-5/6"/>
            </div>
          </div>
          <div className="w-1/2 h-[450px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta, praesentium neque minima quaerat ab ratione eum? Rem fugiat aspernatur qui, maiores alias omnis repellendus laboriosam consequuntur ipsum, incidunt voluptatibus.
            Praesentium optio dolore ipsa, voluptatum error iure adipisci incidunt quo alias voluptates, dolores odit corrupti nesciunt provident, aperiam sapiente. Nesciunt mollitia iure eos iste magnam pariatur libero dolores? Nam, unde!
            <div className="bg-lime-500 h-2/5">
              <Image src={'/images/maps.jpg'} alt="maps" width={450} height={450} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
