import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <Link to='/'>Home</Link>
                <NavLink to='/users' >Users</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <Link to ='/albums'>Album</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;