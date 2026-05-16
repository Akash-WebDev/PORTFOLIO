import { useState } from "react";
import { FaEye } from "react-icons/fa";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Signup and Login",
      category: "Web Development",
      image: "./images/login.png",
      images: [
        "./images/SignUp.png",
        "./images/l.png",
      ]
    },
    {
      id: 2,
      title: "SalesSync Pro",
      category: "FullStack Development(React + SpringBoot + MySql)",
      image: "./images/Sales Sync/SalesSync.png",
      images: [
        "./images/Sales Sync/sales-signup.png",
        "./images/Sales Sync/sales-log.png",
        "./images/Sales Sync/Main.png",
        "./images/Sales Sync/sales-Dashboard.png",
        "./images/Sales Sync/sales-records.png",
        "./images/Sales Sync/revenue.png",
        "./images/Sales Sync/product.png",
        "./images/Sales Sync/service-add.png",
        "./images/Sales Sync/service-report.png",
        "./images/Sales Sync/installation-add.png",
        "./images/Sales Sync/installation-report.png",
      ]
    },
    {
      id: 3,
      title: "Stock Management",
      category: "FullStack Development(React + Supabase)",
      image: "./images/MainStock/stock-mangement.png",
      images: [
        "./images/MainStock/Dashboard.png",
        "./images/MainStock/inward.png",
        "./images/MainStock/stock.png",
        "./images/MainStock/Barecode.png",
        "./images/MainStock/production.png",
        "./images/MainStock/bmr.png",
        "./images/MainStock/Sales.png"
      ]
    },
    {
      id: 4,
      title: "BOM(Bill of Material)",
      category: "FullStack Development(React + Supabase)",
      image: "./images/BOM/BOM thumb.png",
      images: [
        "./images/BOM/additem.png",
        "./images/BOM/BOM.png",
        "./images/BOM/vendor.png",
        "./images/BOM/generate intent.png",
        "./images/BOM/po.png"
      ]
    },
    {
      id: 5,
      title: "Stock Inventory",
      category: "FullStack Development(React + Supabase)",
      image: "./images/Stock Management/stock-thumbnail.png",
      images: [
         "./images/Stock Management/stock-signup.png",
          "./images/Stock Management/stock-log.png",
         "./images/Stock Management/dashboard.png",
         "./images/Stock Management/product.png",
         "./images/Stock Management/profile.png",
      ]
    },
    
    

  ];

  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item active">
            <a onClick={() => setSelectedProject(project)}>
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaEye />
                </div>
                <img src={project.image} alt={project.title} />
              </figure>

              <h3 className="project-title">
                {project.title}
              </h3>

              <p className="project-category">
                {project.category}
              </p>
            </a>
          </li>
        ))}
      </ul>
      {selectedProject && (
        <div style={styles.overlay}>
          <div style={styles.modal} className="border border-cyan-400/40 backdrop-blur-xs bg-cyan-900/10">
            <button
              style={styles.closeBtn}
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>

            <h2 style={{ marginBottom: "20px" }}>
              {selectedProject.title}
            </h2>

            <div style={styles.gallery}>
              {selectedProject.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="project"
                  style={styles.galleryImage}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );

}
const styles = {

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    color: "white",

  },


  modal: {
    width: "80%",
    maxWidth: "900px",
    borderRadius: "20px",
    padding: "30px",
    position: "relative",
    animation: "popup 0.4s ease",
    maxHeight: "90vh",
    overflowY: "auto",

    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },

  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "15px",
    border: "none",
    color: "#fff",
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "16px",
  },

  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "20px",
  },

  galleryImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "15px",
  },
};