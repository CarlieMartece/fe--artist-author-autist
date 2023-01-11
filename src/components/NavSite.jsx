import { Link, useLocation } from "react-router-dom";
import "../styles/navigation.css";

export default function NavSite() {
  const siteArray = [
    ["/code", "Code,"],
    ["/", "Books,"],
    ["/", "Art"]
  ];

  const titles = {
    "/": "Welcome to Our Portfolio",
    "/code": "Coder Portfolio",
    "/books": "Writer Portfolio",
    "/art": "Artist Portfolio"
  }
  const location = useLocation();


  return (
    <div id="NavSite">
      <div id="welcome">
        <h1>{titles[location.pathname]}</h1>
      </div>

      <nav id="nav-portfolio">
        [
        {siteArray.map((screen) => {
          return (
            <Link class="nav-site-link" to={screen[0]} key={screen[1]}>
              {screen[1]}
            </Link>
          )
        })}
        ]
      </nav>
    </div>
  );
}
