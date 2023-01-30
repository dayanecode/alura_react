// Estilo
import './Menu.css'

// Imagens
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const iconesMenu = [perfil, sacola]

const IconesMenu = () => {

    return (

        <>
        <ul className='icones'>
          {iconesMenu.map(icone => (
            <li className='icone'>
              <img src={icone} alt='icone' />
            </li>
          ))}
        </ul>

        </>
    )
}

export default IconesMenu