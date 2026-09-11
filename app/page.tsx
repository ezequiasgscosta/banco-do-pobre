'use client'

import { useState } from 'react'
import "./globals.css"
import Cabecario from "./components/Cabecario/page"
import Conta from './components/Conta/page'

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
        </main>
    )
}
