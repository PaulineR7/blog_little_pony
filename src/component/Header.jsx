import { Link } from 'react-router-dom';
import logo from './logo-pony.png'

function Header () {
    return(
        <header>
            <nav>
                <ul className="flex">
                    <li><img className='img' src={logo} alt="" /></li>   
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/poneys">Poneys</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/apropos">à propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;