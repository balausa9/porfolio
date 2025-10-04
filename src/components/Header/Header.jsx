import './Header.css'
import moonIcon from '../../assets/moon.png'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        Balausa <span>Portfolio</span>
                    </div>

                    <nav className='links'>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Skills</a>
                        <a href="">Projects</a>
                        <a href="">Contact</a>
                        <img className='moon' src={moonIcon} alt="" />
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header