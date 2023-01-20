import { ExternalLink } from "react-external-link";

export default function NavSocial() {
  const socialArray = [
    [1, "https://www.linkedin.com/in/carlie-martece/", "linked-in", "li"],
    [2, "https://github.com/CarlieMartece", "github", "gh"],
    [3, "https://www.patreon.com/CarlieMartece", "patreon", "pt"],
  ];
  const socialArrayTwo = [
    [4, "", "facebook", "fb"],
    [5, "", "tiktok", "tt"],
    [6, "", "youtube", "yt"],
  ];

  return (
    <nav id="NavSocial">
      <div className="nav-section">
        {socialArray.map((platform) => {
          return (
            <ExternalLink key={platform[0]} href={platform[1]}>
              <div className="hexagon">
                <img
                  alt={platform[2]}
                  src={require(`../images/layout/logo-${platform[3]}-100.png`)}
                />
              </div>
            </ExternalLink>
          );
        })}
      </div>
      <div className="nav-section" id="nav-social-two">
        {socialArrayTwo.map((platform) => {
          return (
            <div className="hexagon" key={platform[0]}>
              <img
                alt={platform[2]}
                src={require(`../images/layout/placeholder-hex-100.png`)}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
}
