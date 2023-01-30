// Estilo
import './Menu.css'

const textosMenu = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const OpcoesMenu = () => {
    return (

        <>
            <ul className='opcoes'>
                {textosMenu.map((texto) => (
                    <li className='opcao'><p>{texto}</p></li>
            ) )}
            </ul>
        </>

    )
}

export default OpcoesMenu