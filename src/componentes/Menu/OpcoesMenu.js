// Estilo
import styled from 'styled-components'

// Containers de opções
const Opcao = styled.li `
    font-size: 16px;
    display: flex;
    justify-content:center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    min-width: 120px;
    cursor: pointer;
`
const Opcoes = styled.ul `
  display: flex;
  `

const textosMenu = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']


const OpcoesMenu = () => {
    return (
            <Opcoes>
                {textosMenu.map((texto) => (
                    <Opcao><p>{texto}</p></Opcao>
                )   
            )}
            </Opcoes>
    )
}

export default OpcoesMenu