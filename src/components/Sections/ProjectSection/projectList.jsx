import { ProjectCard } from "./projectCard"
import { projects } from "../../../data/projects.js"
import styles from "./projectList.module.css"

export const ProjectList =()=>{
    return(
        <ul className={styles.project__ul}>
            <ProjectCard name={projects[0].name} description={projects[0].descricao}/>
            <ProjectCard name={projects[1].name} description={projects[1].descricao}/>
            <ProjectCard name={projects[2].name} description={projects[2].descricao}/>
            <ProjectCard name={projects[3].name} description={projects[3].descricao}/>
        </ul>
    )
}