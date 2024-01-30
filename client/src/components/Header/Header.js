import 'src/components/Header/Header.css';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
    return (
        <div className='Header-wrapper'>
            <h1>Projectr</h1>
            <nav>
                <RouterLink to='/' className='Header-Link'>
                    Board
                </RouterLink>
                <RouterLink to='/alltasks' className='Header-Link'>
                    All Tasks
                </RouterLink>
            </nav>
        </div>
    )
}

export default Header;