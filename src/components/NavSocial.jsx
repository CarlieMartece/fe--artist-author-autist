import { ExternalLink } from "react-external-link";

export default function NavSocial() {
  const socialArray = [
    ["https://www.patreon.com/CarlieMartece", "patreon", "pt"],
    ["https://www.linkedin.com/in/carlie-martece/", "linked-in", "li"],
    ["https://github.com/CarlieMartece", "github", "gh"],
  ];

  return (
    <nav className="nav-section" id="NavSocial">
      {socialArray.map((platform) => {
        return (
          <ExternalLink href={platform[0]}>
            <div className="hexagon">
              <img
                alt={`${platform[1]}-link`}
                src={require(`../images/layout/logo-${platform[2]}-100.png`)}
              />
            </div>
          </ExternalLink>
        );
      })}
    </nav>
  );
}
