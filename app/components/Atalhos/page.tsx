import Image from 'next/image'
export default function Atalhos() {
    
    return (
        <div className="flex  justify-around w-full h-[20dvh]">

            <div  className="AtalhosPai">
   
                    <div className="AtalhosFilho">
                      <Image 
                        src="/pix.svg"         // O Next.js busca automaticamente dentro da pasta public
                        alt="Ícone do Pix"
                        width={24}             // Defina a largura
                        height={24}            // Defina a altura
                        priority />
                   </div>     
                    <h1>
                         Área Pix
                    </h1>              
            </div>

             <div  className="AtalhosPai">
   
                    <div className="AtalhosFilho">
                       <Image 
                        src="/boleto.svg"         // O Next.js busca automaticamente dentro da pasta public
                        alt="Ícone do Boleto"
                        width={24}             // Defina a largura
                        height={24}            // Defina a altura
                        priority />
                   </div>     
                    <h1>
                         Pagar
                    </h1>              
            </div>

             <div  className="AtalhosPai">
   
                    <div className="AtalhosFilho">
                       <Image 
                        src="/emprestimo.svg"         // O Next.js busca automaticamente dentro da pasta public
                        alt="emprestimo"
                        width={24}             // Defina a largura
                        height={24}            // Defina a altura
                        priority />
                   </div>     
                    <h1>
                         Pegar emprestado
                    </h1>              
            </div>

             <div  className="AtalhosPai">
   
                    <div className="AtalhosFilho">
                       <Image 
                        src="/dinheiro.svg"         // O Next.js busca automaticamente dentro da pasta public
                        alt="icone de transferir"
                        width={24}             // Defina a largura
                        height={24}            // Defina a altura
                        priority />
                   </div>     
                    <h1>
                         Transferir 
                    </h1>              
            </div>

             <div  className="AtalhosPai">
   
                    <div className="AtalhosFilho">
                        <Image 
                        src="/celular.svg"         // O Next.js busca automaticamente dentro da pasta public
                        alt="Ícone do celular"
                        width={24}             // Defina a largura
                        height={24}            // Defina a altura
                        priority />
                   </div>     
                   
                    <h1>
                         Recargar de celular
                    </h1>              
            </div>

            


    </div>

    )
}

