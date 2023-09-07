import gitHubIcon from "../../assets/github-icon.png"
import linkedin from "../../assets/linkedin-icon.png"
import whatsapp from "../../assets/whatsapp-icon.png"
import { user } from "../../data/user.js"
import styles from "./footer.module.css"

export const Footer = ()=>{
    return (
        <footer>
            <div className={styles.contact__div}>
                <h1 className={styles.contact__title}>Contato</h1>
                <span className={styles.img__span}>
                    <img src={gitHubIcon} alt="Link GitHub" />
                    <img src={linkedin} alt="Link LinkedIn" />
                    <img src={whatsapp} alt="Link WhatsApp" />
                </span>
            </div>
            <p>Todos os direitos reservados - {user}
            </p>
        </footer>
    )
}