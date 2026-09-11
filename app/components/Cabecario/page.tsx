'use client'

import { useState } from 'react'

export default function Cabecario () {
   const  sexualidade : number= 1
   const homem = 'https://img.icons8.com/?size=100&id=11178&format=png&color=fffecb'
   const mulher = 'https://img.icons8.com/?size=100&id=11165&format=png&color=fffecb'
   const setarImagem = sexualidade === 1 ? homem :mulher ;

   const olhoFechado = 'https://img.icons8.com/?size=100&id=118858&format=png&color=fffecb'
   const olhoAberto = 'https://img.icons8.com/?size=100&id=122974&format=png&color=000000'
 
     const [olhoAbertoEstado, setOlhoAbertoEstado] = useState<boolean>(false)
  const AbrirFecharOlho = () => {
        setOlhoAbertoEstado((estadoAtual) => !estadoAtual)
  }
  const olho = olhoAbertoEstado ? olhoAberto : olhoFechado;

  const duvida ='https://img.icons8.com/?size=100&id=VWVewCgkztXM&format=png&color=fffecb'

  const mensagem = 'https://img.icons8.com/?size=100&id=2FxDGcmY6mE9&format=png&color=fffecb'
  
   
   return (
        <div className="bg-laranja w-full h-[16dvh] relative stick ">
           
            <div className="w-[100dvw] h-1/2 flex">

                <div  className=" w-1/2 ">
                    <div className="h-[60%] aspect-square border border-branco rounded-full
                        flex justify-center items-center ml-6 mt-5
                    ">

                        <img
                        src={setarImagem}
                        alt="icone de perfil"
                         className="h-[70%]   "

                        />
                    </div>
                </div>

                <div className="w-1/2 h-[80%] flex justify-around items-center flex-row">
                <div> <img
                        src={olho}
                        alt="icone de perfil"
                         className="h-[50%] w-[50%] cursor-pointer mt-4 "
                         onClick={AbrirFecharOlho}

                        /></div>
                <div> <img
                        src={duvida}
                        alt="icone de perfil"
                         className="h-[40%] w-[40%]  cursor-pointer"

                        /></div>
                <div> <img
                        src={mensagem}
                        alt="icone de perfil"
                         className="h-[50%]  w-[35%] cursor-pointer"

                        /></div>

                </div>
               
            </div>

            <div className="w-full h-1/2 flex  items-center" >
                <h1 className='ml-5 text-branco'>Olá, Antonio</h1>
            </div>
        </div>
    )
}