'use client'

import { useState } from 'react'
import Cabecario from "./components/Cabecario/page"
import Conta from './components/Conta/page'
import Atalhos from './components/Atalhos/page'
import Cartoes from './components/Cartoes/page'
import FaturaCartao from './components/FaturaCartao/page'

export default function Home() {

    const [olhoAbertoEstado, setOlhoAbertoEstado] = useState(false)

    return (
        <main>
            <Cabecario
                olhoAbertoEstado={olhoAbertoEstado}
                setOlhoAbertoEstado={setOlhoAbertoEstado}
            />

            <Conta
                olhoAbertoEstado={olhoAbertoEstado}
            />

            <Atalhos/>

            <Cartoes/>

            <FaturaCartao/>
        </main>
    )
}
