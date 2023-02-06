// Esilos
import styled from 'styled-components';

// Componentes
import Logo from '../Logo/Logo'
import IconesMenu from '../Menu/IconesMenu';
import OpcoesMenu from '../Menu/OpcoesMenu';

// Constainer de estilização
const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

const Header = () => {
  return (
        <HeaderContainer>
          <Logo />
          <OpcoesMenu />
          <IconesMenu />
      </HeaderContainer>
  )
}

export default Header