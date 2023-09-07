import gitIcon from "../../../assets/git-icon.png"
import styles from "./projectCard.module.css"

export const ProjectCard =({name, description })=>{
    return (
        <li className={styles.card}>
            <div className={styles.info__div}>
                <h4 className={styles.name}>{name}</h4>
                <p className={styles.description}>{description}</p>
                <button className={styles.button}>Saiba mais</button>
            </div>
            <div className={styles.image__div}>
                <img className={styles.gitHub__img} src={gitIcon} alt="GitHub" />
            </div>
        </li>
    )
}