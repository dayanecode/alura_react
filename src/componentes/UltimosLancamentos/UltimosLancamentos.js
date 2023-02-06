// Estilos
import styled from 'styled-components'
import { Titulo } from '../Titulo/Titulo'

// Dados
import {livros} from './dadosUltimosLançamentos'

// Componentes
import CardRecomenda from '../CardRecomenda/CardRecomenda';

// Imagens
import imagemLivroRecomendado from '../../imagens/livro2.png';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos () {

return (
    <UltimosLancamentosContainer>  
        <Titulo 
            cor="#EB9B00" 
            tamanhoFonte="36px"
        >
            ÚLTIMOS LANÇAMENTOS
        </Titulo>
        <NovosLivrosContainer>
            {livros.map(livro => (
                <img src={livro.src} alt='Livro' />
            ))}
        </NovosLivrosContainer>
        <CardRecomenda 
            titulo='Talvez você se interesse por....'
            subtitulo='Angular 11'
            descricao='Construindo uma aplicação com a plataforma Google'
            imagem={imagemLivroRecomendado}
        /> 
         <CardRecomenda 
            titulo='Talvez você se interesse por felicidade na Alura'
            subtitulo='Angular 12'
            descricao='Construindo'
            imagem={imagemLivroRecomendado}
        /> 

    </UltimosLancamentosContainer>
)


}

export default UltimosLancamentos