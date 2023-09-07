import styles from "./techCard.module.css"

export const TechCard =({img, name})=>{
    return(
        <li className={styles.card}>
            <img className={styles.tech__img} src={img} alt={name} />
            <h3 className={styles.name}>{name}</h3>
        </li>
    )
}