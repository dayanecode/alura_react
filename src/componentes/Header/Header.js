// Componentes
import Logo from '../Logo/Logo'
import IconesMenu from '../Menu/IconesMenu';
import OpcoesMenu from '../Menu/OpcoesMenu';

const Header = () => {
  return (
    <div>
        <header className='App-header'>
        <Logo />
        <OpcoesMenu />
        <IconesMenu />

      </header>
    </div>
  )
}

export default Header