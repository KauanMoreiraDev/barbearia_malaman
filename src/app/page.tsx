import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="w-screen h-screen bg-[url('/images/banner1.jpg')] bg-no-repeat bg-right">
        <div className="z-50 relative">
          <header className="w-screen-lg max-h-32 text-xl text-black bg-white flex justify-around items-center">
            <Link href="#"><Image src={'/images/logo2.png'} alt="logo" width={120} height={120} className="rounded-full" /></Link>
            <nav className="flex justify-end">
              <Link href="#" className="mx-8">Serviços</Link>
              <Link href="#" className="mx-8">Galeria</Link>
              <Link href="#" className="mx-8">Institucional</Link>
            </nav>
          </header>
        </div>
        <div>
          <div className="w-2/5 h-screen bg-black flex justify-center items-center rotate-12 absolute top-14 -left-14">
            <div className="-rotate-[18deg]">
              <Image src={'/images/logo2.png'} alt="logo" width={270} height={270} className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
