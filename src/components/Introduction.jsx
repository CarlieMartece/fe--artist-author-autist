import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <main id="Introduction">
      <div id="short_intro">
        <h2>Introduction</h2>
        <p>
          The Carlie Nooka Martece collective is a gender-fluid, autistic,
          dissociative system working as a visual artist, alternative model, and
          independently published writer. Since April 2022, their primary
          autistic hyperfocus has been coding. This site is the first addition
          to their <Link to={"/code"}>coding portfolio</Link>.
        </p>
      </div>

      <figure id="cnmc-photo">
        <img
          alt="Carlie Martece with art and code"
          src={require("../images/layout/190509-pi-800-code.jpg")}
        />
        <figcaption>Artist, Author, Autist</figcaption>
      </figure>

      <div id="bio">
        <h3>Their Story</h3>
        <p>
          In 1998, due to difficulties with verbal communication, they made
          drawing and painting their main form of expression. Their eclectic
          artwork was self-therapy while navigating this world as a disabled
          human. Although most days they were convinced they were an alien.
        </p>
        <p>
          In 2013, they replaced autobiographical artwork with literary
          autobiography, before segueing into science fiction. A paracosm
          amplified by hyperphantasia became a strangely convincing fictional
          universe. Their books now explore social issues and mental illness
          using rapid-paced storytelling and brutally dark comedy. They have
          obliterated the former challenge of verbal communication and now
          deliver entertaining spoken word performances.
        </p>
        <p>
          In 2019, a long-overdue autism diagnosis explained their former social
          barriers, and they started investigating careers suitable for an
          academically bright neurodivergent person. This led to their present <Link to={"/code"}>coding</Link> obsession, with several works in progress beyond this site. Their next goals are to learn another coding language, find suitable employment in a disability-friendly workplace, finish book five, create a new writers' app, and beat their present record of reciting two thousand digits of pi.
        </p>
      </div>
    </main>
  );
}
