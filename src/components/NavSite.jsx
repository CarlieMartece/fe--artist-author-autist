export default function NavSite() {
  const siteArray = [["Code"], ["Books"], ["Art"]];

  return (
    <div id="title">
      <div id="welcome">
        <h1>Welcome to Our Portfolio</h1>
      </div>

      <nav id="NavSite">
        {siteArray.map((screen) => {
          return <p className="nav-site-link">{screen[0]}</p>;
        })}
      </nav>
    </div>
  );
}
