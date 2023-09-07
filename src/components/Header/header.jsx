import { Button } from "../Button/button.jsx";
import portfolio from "../../assets/portfolio.png"
import styles from "./header.module.css"

export const Header = ()=>{
    return(
        <header>
          <img className={styles.logo__img} src={portfolio}  alt="logo" />  
          <div className={styles.menu__div}>
            <button className={styles.menu__button}>Sobre</button>
            <button className={styles.menu__button}>Stack</button>
            <button className={styles.menu__button}>Projetos</button>
          </div>
          <Button placeholder="Contato"/>
        </header>
    )
}