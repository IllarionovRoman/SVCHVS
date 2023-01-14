import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css'


const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className={styles.content}>
                    Лаб10
                </div>
            </div>

        </footer>
    )
}

export default Footer;