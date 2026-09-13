

export default function FaturaCartao() {
    return (
        <div className="w-full flex  border-y border-gray-300 justify-center mt-4">
            <div className=" w-[90%] h-[28dvh] gap-4 mt-6 flex flex-col items-start lg:h-[100%]">
                <h1 className="text-xl font-bold lg:text-[3em]">Cartão de crédito</h1>
                
                <h2 className="text-lg font-semibold lg:text-[2em]">Fatura fechada</h2>
                <h3 className="text-lg lg:text-[1.5em]">*******</h3>
                <p className="text-gray-600">Vencimento dia 10</p>
                <div className="flex gap-4 ">
                    <button className="bg-laranja text-white px-4 py-2 rounded-3xl">Pagar</button>
                    <button className="bg-roxo text-white px-4 py-2 rounded-3xl">Parcelar</button>
                </div>
            </div>
        </div>
    )
}