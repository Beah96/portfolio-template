import { TechList } from "./techList.jsx"
import styles from "./techSection.module.css"

export const TechSection =()=>{
    return(
        <section className={styles.tech__section}>
            <h2 className={styles.tech__title}>Tecnologias</h2>
            <TechList/>
        </section>
    )
}