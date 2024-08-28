import Image from "next/image"

export default function PoleBarber() {
    return (

        <div className="w-screen">
            <div className="bg-[url('/images/banner1 grande.jpg')] bg-cover">
                <div className="bg-black rotate-45 relative">
                    <Image src={"/images/mr roots.png"} alt="" width={300} height={300} className="absolute inset-0" />
                </div>
            </div>
        </div>
    )
}