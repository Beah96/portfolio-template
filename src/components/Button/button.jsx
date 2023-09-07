import styles from "./button.module.css"

export const Button = ({placeholder}) =>{
    return(
        <button className={styles.general__button}>{placeholder}</button>
    )
}