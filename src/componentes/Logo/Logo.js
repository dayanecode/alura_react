import logo from '../../imagens/logo.svg'

// Estilo
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`
const LogoImage = styled.img`
  margin-right: 10px;
  display: flex;
`

const Logo = () => {
  return (
        <LogoContainer>
          <LogoImage 
            src = {logo}
            alt='logo alura books'
          />
          <p><strong>Alura Books</strong></p>
        </LogoContainer>
  )
}

export default Logo

