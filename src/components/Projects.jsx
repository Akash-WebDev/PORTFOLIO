import { useState } from "react";
import { FaEye } from "react-icons/fa";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Signup and Login",
      category: "Web Development",
      image: "./src/images/login.png",
      images: [
        "./src/images/SignUp.png",
        "./src/images/l.png",
      ]
    },
    {
      id: 2,
      title: "SalesSync Pro",
      category: "FullStack Development(React + SpringBoot + MySql)",
      image: "./src/images/Sales Sync/SalesSync.png",
      images: [
        "./src/images/Sales Sync/sales-signup.png",
        "./src/images/Sales Sync/sales-log.png",
        "./src/images/Sales Sync/Main.png",
        "./src/images/Sales Sync/sales-Dashboard.png",
        "./src/images/Sales Sync/sales-records.png",
        "./src/images/Sales Sync/revenue.png",
        "./src/images/Sales Sync/product.png",
        "./src/images/Sales Sync/service-add.png",
        "./src/images/Sales Sync/service-report.png",
        "./src/images/Sales Sync/installation-add.png",
        "./src/images/Sales Sync/installation-report.png",
      ]
    },
    {
      id: 3,
      title: "Stock Management",
      category: "FullStack Development(React + Supabase)",
      image: "./src/images/MainStock/stock-mangement.png",
      images: [
        "./src/images/MainStock/Dashboard.png",
        "./src/images/MainStock/inward.png",
        "./src/images/MainStock/stock.png",
        "./src/images/MainStock/Barecode.png",
        "./src/images/MainStock/production.png",
        "./src/images/MainStock/bmr.png",
        "./src/images/MainStock/Sales.png"
      ]
    },
    {
      id: 4,
      title: "BOM(Bill of Material)",
      category: "FullStack Development(React + Supabase)",
      image: "./src/images/BOM/BOM thumb.png",
      images: [
        "./src/images/BOM/additem.png",
        "./src/images/BOM/BOM.png",
        "./src/images/BOM/vendor.png",
        "./src/images/BOM/generate intent.png",
        "./src/images/BOM/po.png"
      ]
    },
    {
      id: 5,
      title: "Stock Inventory",
      category: "FullStack Development(React + Supabase)",
      image: "./src/images/Stock Management/stock-thumbnail.png",
      images: [
         "./src/images/Stock Management/stock-signup.png",
          "./src/images/Stock Management/stock-log.png",
         "./src/images/Stock Management/dashboard.png",
         "./src/images/Stock Management/product.png",
         "./src/images/Stock Management/profile.png",
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