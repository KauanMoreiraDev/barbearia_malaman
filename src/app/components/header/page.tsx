import Image from "next/image";
import Link from "next/link";

export default function Mheader() {
    return (
        <header className="w-screen h-32 bg-white">
            <div className="mx-auto max-w-screen-lg">
                <div className="flex justify-between items-center">
                    <Link href="#"><Image src={'/images/logo2.png'} alt="logo" width={120} height={120} className="rounded-full" /></Link>
                    <div className="text-xl font-medium text-black">
                        <nav className="">
                            <Link href="#" className="mx-2 hover:text-yellow-400 sm:mx-8">Serviços</Link>
                            <Link href="#" className="mx-2 hover:text-yellow-400 sm:mx-8">Galeria</Link>
                            <Link href="#" className="mx-2 hover:text-yellow-400 sm:mx-8">Institucional</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}