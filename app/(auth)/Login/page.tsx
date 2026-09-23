"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
    const router = useRouter()
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

    const entrar = () => {
        if (email === "biel@gmail.com" && senha === "123") {
             router.push("/") 
        }else if (email === "" || senha === "") {
                alert("preencha todos os dados")
        }
    }   
  

    return (
        <div className="w-full h-screen text-center flex flex-col items-center gap-6">
            <h1>Login</h1>
            <h2>Banco do pobre</h2>
            <input type="email" name="email" id="email"
             placeholder="Digite seu email" onChange={(e)=>setEmail(e.target.value)} />

            <input type="password" name="senha" id="senha"
             placeholder="Digite sua senha" onChange={(e)=>setSenha(e.target.value)}/>

            <button onClick={entrar}>Entrar</button>
        </div>
    )
}