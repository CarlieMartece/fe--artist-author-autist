import { ExternalLink } from "react-external-link";

export default function NavSocial() {
  const socialArray = [
    ["https://www.linkedin.com/in/carlie-martece/", "linked-in", "li"],
    ["https://github.com/CarlieMartece", "github", "gh"],
    ["https://www.patreon.com/CarlieMartece", "patreon", "pt"],
  ];

  return (
    <nav id="NavSocial">
      <div className="nav-section">
        {socialArray.map((platform) => {
          return (
            <ExternalLink href={platform[0]}>
              <div className="hexagon">
                <img
                  alt={`${platform[1]}-link`}
                  key={platform[1]}
                  src={require(`../images/layout/logo-${platform[2]}-100.png`)}
                />
              </div>
            </ExternalLink>
          );
        })}
      </div>
      <div className="nav-section" id="nav-social-two">
        {socialArray.map((platform) => {
          return (
            <div className="hexagon">
              <img
                alt={`${platform[2]}-placeholder`}
                key={platform[1]}
                src={require(`../images/layout/placeholder-hex-100.png`)}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
}
