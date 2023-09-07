import { TechCard } from "./techCard.jsx"
import { technologies } from "../../../data/technologies.js"
import styles from "./techList.module.css"

export const TechList =()=>{
    return(
        <ul className={styles.tech__ul}>
            <TechCard img={technologies[0].img} name={technologies[0].name}/>
            <TechCard img={technologies[1].img} name={technologies[1].name}/>
            <TechCard img={technologies[2].img} name={technologies[2].name}/>
            <TechCard img={technologies[3].img} name={technologies[3].name}/>            
        </ul>
    )
}