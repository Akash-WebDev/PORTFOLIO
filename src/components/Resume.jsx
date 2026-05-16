import { FaBookOpen } from "react-icons/fa";
export default function Resume() {
  return (
    <article className="resume active">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
             <FaBookOpen/>
            </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title font-bold ">
              BACHELOR OF COMPUTER APPLICATION
            </h4>

            <span>2022 — 2025</span>

            <p className="timeline-text">
              (BCA) graduate from New Prince Shri Bhavani Arts & Science College 
              with a CGPA of 8.1. During my academic journey, I built a strong foundation in web development, programming, database management, and software development concepts. I actively worked on frontend and full-stack projects, which helped me improve my problem-solving abilities,
               technical skills, and understanding of modern web technologies.
            </p>
            
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title font-bold">
              HIGHER SECONDARY EDUCATION
            </h4>

            <span>2020 — 2022</span>

            <p className="timeline-text">
              Completed Higher Secondary Education (HSC) at Government Boys Higher Secondary School
            </p>
            
          </li>
        </ol>
      </section>
      <section className="skill" >

          <h3 class="h3 skills-title">My skills</h3>

          <ul className="skills-list content-card bg-cyan-800/20 border  border-cyan-300/30">

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Web design</h5>
                <data value="99%">99%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style={{width: "99%"}}></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Front-End Developer </h5>
                <data value="90">90%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style={{width: "90%"}}></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">SQL Developer</h5>
                <data value="80">80%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style={{width: "80%"}}></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Full-Stack Developer</h5>
                <data value="70">70%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style={{width: "70%"}}></div>
              </div>

            </li>

          </ul>

        </section>

    </article>
  );
}