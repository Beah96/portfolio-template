import Banner from "../../../assets/banner-img.png"
import { username } from "../../../data/user.js"
import { Button } from "../../Button/button.jsx"
import styles from "./bannerSection.module.css"

export const BannerSection = ()=>{
    return(
        <>
            <section className={styles.banner__section}>
                <div className={styles.bannerInfo__div}>
                    <p className={styles.userName}>{username}</p>
                    <h1 className={styles.portfolio__title}>Bem-vindo ao meu portifólio</h1>
                    <p className={styles.description}>Lusco-fusco</p>
                    <Button placeholder="Saiba mais"></Button>
                </div>
                <div className={styles.banner__div}>
                    <img className={styles.banner__img} src={Banner} alt="banner" />
                </div>
            </section>
           
        </>
    )
}