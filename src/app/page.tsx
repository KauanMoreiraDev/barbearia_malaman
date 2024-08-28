"use client";

import Image from "next/image";
import Link from "next/link";
import Galeria from "./components/galeria de fotos/page";
import Serviços from "./components/serviços/page";
import Prices from "./components/tabela preços/page";

import PoleBarber from "./components/pole barber/page";

export default function Home() {

  return (
    <main className="w-screen h-full">
      <div className="font-Inter font-light italic">
        
        {/* Banner inicial */}
        <div className="w-screen h-full">
          <div className="bg-[url('/images/bannerFinal.jpg')] bg-cover bg-top-left overflow-hidden h-[85vh] relative">
            <div className="bg-black w-1/2 h-[160%] -rotate-[15deg] relative -top-20 -left-36">
              <Image src={"/images/mr roots.png"} alt="" width={300} height={300} className="w-1/2 h-1/2 absolute top-36 left-64 rotate-[16deg]" />
            </div>
          </div>
        </div>

        {/* Image detalhe */}
        <div className="mx-auto max-w-screen-lg h-full">
          <div className="flex items-end justify-center">
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

        <div id="tabela de preços">
          <div className="w-screen min-h-[85vh]">
            <div className="bg-[url('/images/barber-tool.jpg')] bg-cover bg-center">
              <div className="mx-auto max-w-screen-lg h-screen flex items-center justify-center">
                <div className="w-full">
                  <Prices />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="galeria">
          <div className="mx-auto max-w-screen-lg py-16">
            <Galeria />
          </div>
        </div>

        <div id="institucional">
          <div className="mx-auto max-w-screen-lg py-16">
            <div className="flex flex-row">
              <Image src={"/images/mr roots.png"} alt="logo barbearia Mr. Roots" width={600} height={600} className="w-1/3 h-1/3" />
              <div className="flex flex-col items-center justify-center">
                <div className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium sed fuga accusantium sapiente aperiam ea, omnis ex minima sit expedita, fugit cumque consequuntur quo? Ducimus perspiciatis numquam fuga inventore.
                </div>
                <div className="flex flex-row justify-center py-2">
                  <Link id="whatsapp" href="https://instagram/kauannmoreira_" className="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>
                  </Link>
                  <Link id="instagram" href="https://instagram/kauannmoreira_" className="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>
                  </Link>
                  <Link id="App" href="https://instagram/kauannmoreira_" className="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="black" d="M28 10h-6v14h2v-4h4a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m-4 8v-6h4v6zm-6-8h-6v14h2v-4h4a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m-4 8v-6h4v6zm-6-8H3v2h5v2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v-8a2 2 0 0 0-2-2m0 8H4v-2h4z" /></svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1683.084549478097!2d-47.37494191710955!3d-22.167323660260696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c80b4ff8a56bbb%3A0xa8ceb05c1cb471e2!2sBarbearia%20MR.%20Roots!5e1!3m2!1spt-BR!2sbr!4v1724857953833!5m2!1spt-BR!2sbr" width="1024" height="350" loading="lazy" className="mx-auto" />
            </div>
          </div>


        </div>
      </div>
    </main >
  );
}
