"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Mheader() {

    const [open, setOpen] = useState(true)

    return (
        <header className="w-screen h-full bg-white sticky top-0 z-50">
            <div className="mx-auto max-w-screen-lg">

                <div className="flex justify-between items-center">
                    <Link href="#"><Image src={'/images/mr roots.png'} alt="logo" width={300} height={300} className="rounded-full w-1/4 h-1/4" /></Link>


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