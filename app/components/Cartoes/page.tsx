import Image from "next/image"
export default function Cartoes() {
    return (
        <div className="w-full flex justify-center">
             <div className="flex flex-row border w-[90%] h-[7dvh]
              items-center  gap-6 rounded-lg
              bg-quase-cinza">
            <Image
            src="./celular.svg"
            alt="Icone de celular"
            width={24}             
            height={24}            
            priority 
            className="ml-4"
            />
            
            <h1>Meus Cartões</h1>
        </div>
        </div>
       
    )
}