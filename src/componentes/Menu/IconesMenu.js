// Imagens
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'


// Estilo
import styled from 'styled-components'

// Containers de ícones
const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
  cursor: pointer;
`
const Icones = styled.ul`
  display: flex;
  align-items: center;
`

const iconesMenu = [perfil, sacola]

const IconesMenu = () => {

    return (
        <Icones>
          {iconesMenu.map(icone => (
            <Icone><img src={icone} alt='icone'/> </Icone>
          ))}
       </Icones>
    )
}

export default IconesMenu