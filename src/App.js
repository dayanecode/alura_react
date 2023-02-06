import Header from './componentes/Header/Header';
import Pesquisa from './componentes/Pesquisa/Pesquisa'

// Estilo
import styled from 'styled-components';



// Conainer que guarda estilos:
const AppContainer = styled.div`
 
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(90deg, #002F52, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
    </AppContainer>
    
  );
}

export default App;
