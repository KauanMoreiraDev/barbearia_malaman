import Image from "next/image";
import Link from "next/link";

export default function Mheader() {
    return (
        <>
            <div className="z-50 relative">
                <header className="w-screen h-32 text-xl text-black bg-white flex justify-around items-center">
                    <Link href="#"><Image src={'/images/logo2.png'} alt="logo" width={120} height={120} className="rounded-full" /></Link>
                    <nav className="flex justify-end">
                        <Link href="#" className="mx-2 sm:mx-8">Serviços</Link>
                        <Link href="#" className="mx-2 sm:mx-8">Galeria</Link>
                        <Link href="#" className="mx-2 sm:mx-8">Institucional</Link>
                    </nav>
                </header>
            </div>
        </>
    )
}