import { NavLink } from "react-router-dom"


const Header = () => {

    return (

        <>
        <header className='header'>
            <img src="https://brandmark.io/logo-rank/random/bp.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
            <nav>
                <ul className='nav-links'>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/register'>Registration</NavLink></li>
                </ul>
            </nav>
        </header>

        </>
    )
}

export default Header