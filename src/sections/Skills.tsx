import CircleAndLine from "../components/CircleAndLine"
import Tecnologies from "../components/Tecnologies";
import SkillsComponent from "../components/SkillsComponent";

const Skills = () => {
  
 


    return (
    <section id="skills">
        <div data-aos="fade-right" className="floating-points">
            <CircleAndLine isActive={true} includeLine={true} />
            <CircleAndLine isActive={false} includeLine={true} />
            <CircleAndLine isActive={false} includeLine={false} />
        </div>
        <Tecnologies />
        <SkillsComponent />

    </section>
  )
}

export default Skills