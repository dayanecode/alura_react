import logo from '../../imagens/logo.svg'
import './Logo.css'

const Logo = () => {
  return (
    <div>
        <div className='logo'>
          <img src={logo} alt='logo alura books'></img>
          <p><strong>Alura Books</strong></p>
        </div>
    </div>
  )
}

export default Logo