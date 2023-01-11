import "../styles/navigation.css";

export default function NavSite() {
  const siteArray = [["Code"], ["Books"], ["Art"]];

  return (
    <div id="NavSite">
      <div id="title">
        <h1>Welcome to Our Portfolio</h1>
      </div>

      <nav id="nav-portfolio">
        {siteArray.map((screen) => {
          return <p className="nav-site-link">{screen[0]}</p>;
        })}
      </nav>
    </div>
  );
}
