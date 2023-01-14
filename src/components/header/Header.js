import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className={styles.content}>
                    <NavLink to='/'>Главная</NavLink>
                    <NavLink to='/aboutus'>О нас</NavLink>
                    <NavLink to='/contactus'>Контакты</NavLink>
                    <NavLink to='/tools'>Инструменты</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;