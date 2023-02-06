import { useState } from 'react'

const [brownies, setBrownies] = useState([])

    const aoMudarInput = event => {
        const novaLista = brownies  // criando cópia do estado para poder modificar o valor
        novaLista.push(event.target.value)
        setBrownies(novaLista)
    }

return (

    <>
        <Input placeholder="Adicione o brownie que você deseja" onBlur={aoMudarInput} />
    
        {brownies.map( brownie => (
                <p>{brownie}</p>
            ))
        }
    </>

)
