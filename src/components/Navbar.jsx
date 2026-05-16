export default function Navbar({ activePage, setActivePage }) {
  const pages = ["about", "resume", "projects"];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {pages.map((page) => (
          <li key={page} className="navbar-item">
            <button
              className={`navbar-link ${
                activePage === page ? "active" : ""
              }`}
              onClick={() => setActivePage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}