'use client'
export default function Conta({
    olhoAbertoEstado
}: {
    olhoAbertoEstado: boolean
}) {
    const saldo ='1234.35'

    const saldoFormatado = olhoAbertoEstado ? saldo : '****'

    return (
        <div className="w-full h-[15dvh]  flex flex-col justify-around 
                 text-[2dvh] font-bold 
            ">
            <h1 className="ml-5 ">Conta</h1>

            <h1 className="ml-5">R$ {saldoFormatado}</h1>
        </div>
    )
}