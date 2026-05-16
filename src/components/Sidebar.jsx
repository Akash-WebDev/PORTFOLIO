import { MdOutlineMail } from "react-icons/md";
import { IoPhonePortraitOutline , IoLocationOutline } from "react-icons/io5";
import { FaLinkedin,FaGithub,FaFileAlt,FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import img from "../assets/dev.png"
import pdf from "../assets/AKASHRES.pdf"

export default function Sidebar() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <aside className={`sidebar ${showInfo ? "active" : ""}`}>
      <div className="sidebar-info">

        <figure className="avatar-box ">
          <img
            src={img}
            alt="avatar"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name font-sans ">AKASH G</h1>
          <p className="title bg-cyan-800/40 border border-cyan-400/40">Full Stack Developer</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setShowInfo(!showInfo)}
        >
            <div className="md hydrated"><FaAngleDown/></div>
          <span>Show Details</span>
        
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MdOutlineMail/>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:ganeshsudha1224@gmail.com"
                className="contact-link"
                >
                ganeshsudha1224@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
            <IoPhonePortraitOutline/>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a
                href="tel:+917448962708"
                className="contact-link"
              >
                +917448962708
              </a>
            </div>
          </li>
               <li className="contact-item">

            <div className="icon-box">
              < IoLocationOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>India , Chennai </address>
            </div>

          </li>
          
        </ul>

        <div className="separator"></div>

        <ul class="social-list">

          <li class="social-item">
            <a href={pdf} class="social-link">
             <FaFileAlt/>
            </a>
          </li>

          <li class="social-item">
            <a href="https://github.com/Akash-WebDev" class="social-link">
              <FaGithub/>
            </a>
          </li>

          <li class="social-item">
            <a href="https://www.linkedin.com/in/akash-g-500234297" class="social-link">
               <FaLinkedin/>
            </a>
          </li>

        </ul>
      </div>
    </aside>
  );
}