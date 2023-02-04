import { Link, useLocation } from "react-router-dom";
import "../styles/navigation.css";

export default function NavSite() {
  const siteArray = [
    ["/code", "Code,"],
    ["/books", "Books,"],
    ["/art", "Art"]
  ];

  const titles = {
    "/": "Welcome to Our Portfolio",
    "/cod": "Code Portfolio",
    "/boo": "Book Portfolio",
    "/art": "Art Portfolio"
  }
  const location = useLocation();
  const locationCrop = location.pathname.slice(0,4);
  // let navClass = "nav_codebook"
  // if (locationCrop === "/art") navClass = "nav_art"

  return (
    <div id="NavSite">
      <div id="welcome">
        <h1>{titles[locationCrop]}</h1>
      </div>

      <nav id="nav-portfolio">
        [
        {siteArray.map((screen) => {
          return (
            <Link className="nav-site-link" to={screen[0]} key={screen[1]}>
              {screen[1]}
            </Link>
          )
        })}
        ]
      </nav>

      {/* {locationCrop === "/art" ? (
        <ArtSearchBar />
      ) : (
        <></>
      )} */}
    </div>
  );
}
