import CircleAndLine from "../components/CircleAndLine"

const Skills = () => {
  return (
    <section id="skills">
        <div data-aos="fade-right" className="floating-points">
            <CircleAndLine isActive={true} includeLine={true}/>
            <CircleAndLine isActive={false} includeLine={true}/>
            <CircleAndLine isActive={false} includeLine={false}/>
        </div>
        <div className="tech-skills">
        <div data-aos="fade-down">
            <h2>Skills</h2>
        </div>
            <article className="skills-short">

            </article>
            <div className="tecs">

            </div>       
        </div>
        <div className="skills">
            <div className="skills-container">
                <div></div>
            </div>
        </div>   
    </section>
  )
}

export default Skills