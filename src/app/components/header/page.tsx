"use client";

import Image from "next/image";
import Link from "next/link";
import {useState } from "react";

export default function Mheader() {

    const [open, setOpen] = useState(true)

    return (
        <header className="w-screen h-32 bg-white">
            <div className="mx-auto max-w-screen-lg">
                <div className="flex justify-between items-center">
                    <Link href="#"><Image src={'/images/logo2.png'} alt="logo" width={120} height={120} className="rounded-full" /></Link>
                    <div className="block sm:hidden">
                    <button onClick={() => setOpen(!open)} className="bg-lime-500 w-full h-full">{open ? <Image src={'/images/x.png'} alt="menu fechado" width={30} height={30} /> : <div><Image src={'/images/cardapio.png'} alt="menu aberto" width={30} height={30}></Image><div className="bg-lime-300 w-full h-full"> teste de menu</div></div>}</button>
                    </div>
                    <div className="hidden sm:block">
                        <div className="text-xl font-medium text-black">
                            <nav className="">
                                <Link href="#" className="mx-2 hover:text-yellow-400 sm:mx-8">Serviços</Link>
                                <Link href="#" className="mx-2 hover:text-yellow-400 sm:mx-8">Galeria</Link>
                                <Link href="#" className="mx-2 hover:text-yellow-400 sm:mx-8">Institucional</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}