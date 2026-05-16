import web from "/images/ui.svg"
import web1 from "/images/web.svg"
import backend from "/images/backend.svg"
export default function About() {
  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="about-text">
        <p>
     I’m a passionate Front-End Developer with a strong interest in building modern,
      responsive, and user-friendly web applications. I have hands-on experience in 
      technologies such as HTML, CSS, JavaScript, React.js, SQL, and Spring Boot, which helps me create 
      both interactive user interfaces and scalable web solutions.
        </p>

        <p>
          I also have experience using Git for version control 
          and enjoy designing attractive, responsive layouts with Bootstrap and Tailwind CSS. 
          Along with development, I’m interested in UI/UX design and use 
          tools like Figma and Adobe Photoshop to create clean and modern user interface designs.
        </p>

        <p>
          I enjoy solving problems, learning new technologies, 
          and adapting quickly to different environments and challenges. As a BCA graduate, 
          I am currently seeking an opportunity where I can improve my skills, 
          contribute to real-world projects, and grow as a professional developer.
        </p>
      </section>
      <section class="service">

          <h3 className="h3 service-title font-sans font
          -bold">What I'm Doing</h3>

          <ul class="service-list">

            <li class="service-item">
              <div class="service-icon-box">
                <img src={web} alt="Web development icon" width="60"/>
                 </div>
              <div class="service-content-box">
               <h4 class="h4 service-item-title">Web Design</h4>
               <p className="service-item-text">
                  Creating modern, responsive, and visually stunning website designs with professional quality.
                </p>
              </div>

            </li>

            <li class="service-item">

               <div class="service-icon-box">
                <img src={web1} alt="Web development icon" width="60"/>
              </div>
              

              <div class="service-content-box">
                
                <h4 class="h4 service-item-title">Fornt-End Development</h4>
                <p className="service-item-text">
                  Building interactive, fast, and user-friendly interfaces using modern front-end technologies.
                </p>
               
              </div>

            </li>

            <li class="service-item">

             <div class="service-icon-box">
                <img src={backend} alt="mobile app icon" width="60"/>
              </div>
              <div class="service-content-box">
                <h4 class="h4 service-item-title">Back-End Development</h4>
                <p className="service-item-text">
                  Developing secure, scalable, and high-performance server-side applications and APIs.
                </p>
              </div>

            </li>

          </ul>

        </section>
    </article>
  );
}