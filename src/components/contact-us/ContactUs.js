import styles from './ContactUs.module.css'

const ContactUs = () => {
    return (
        <div className="wrapper">
            <div className={styles.content}>
                <div className={styles.text__content}>
                    <div className={styles.title}>
                    Контакты
                </div>
                <div className={styles.text}>
                    <ul>
                        <li>lab11@mail.ru</li>
                        <li>telegram: @lab11 </li>
                        <li>+375 29 234 32 23</li>
                    </ul>
                </div>
                </div>

            </div>
        </div>
    )
}

export default ContactUs;