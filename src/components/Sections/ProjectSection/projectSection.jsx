import { ProjectList } from "./projectList.jsx"
import styles from "./projectSection.module.css"

export const ProjectSection = ()=>{
    return(
        <section className={styles.project__section}>
            <h2 className={styles.project__title}>Projetos</h2>
            <ProjectList/>
        </section>
    )
}