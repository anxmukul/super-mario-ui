import banner from "./assets/banner.png";
import img1 from "./assets/thumb-1.png";
import img2 from "./assets/thumb-2.png";

import "./App.css";

function App() {
  return (
    <>
      <header className="Header">
        <h1>Mario Club</h1>
      </header>
      <section className="Banner">
        <img src={banner} alt="Mario club banner"></img>
        <div className="Welcome">
          <h2>
            Welcome to <br />
            <span>Marioclub</span>
          </h2>
        </div>
      </section>
      <nav className="Main-nav">
        <ul>
          <li>
            <a href="join.html" className="Join">
              Join the club
            </a>
          </li>
          <li>
            <a href="news.html">Latest news</a>
          </li>
          <li>
            <a href="games.html">Play Games</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
      <main className="Main">
        <article>
          <h2>It's me, Mario</h2>
          <p>
            One day the kingdom of the peaceful mushroom people was invaded by
            the Koopa, a tribe of turtles famous for their black magic. The
            quiet, peace-loving Mushroom People were turned into mere stones,
            bricks and even field horsehair plants, and the Mushroom Kingdom
            fell into ruin. The only one who can undo the magic spell on the
            Mushroom People and return them to their normal selves is the
            Princess Toadstool, the daughter of the Mushroom King.
            Unfortunately, she is presently in the hands of Bowser, the King of
            the Koopa. Mario hears about the Mushroom People's plight and sets
            out on a quest to free the Mushroom Princess from the evil Koopa and
            restore the fallen kingdom of the Mushroom People. You are Mario!
            It's up to you to save the Mushroom People from the black magic of
            the Koopa!
          </p>
          <ul className="Images">
            <li>
              <img src={img1} alt="Thumb 1"></img>
            </li>
            <li>
              <img src={img2} alt="Thumb 2"></img>
            </li>
          </ul>
        </article>
      </main>
      <section className="Join">
        <h2>Join Today!</h2>
        <p>
          Play the Super Mario Bros game online! You can select any level out of
          32 or generate a random map.There are coins scattered throughout the
          game which need to be collected. There are also special bricks with
          question marks that reveal more coins and other special items once
          hit. It's a must to hit other bricks if there's enough time as they
          might contain rare items or coins. Enjoy the game!
        </p>
        <form>
          <input
            type="email"
            name="Email"
            placeholder="Type email and hit enter"
            required
          ></input>
        </form>
      </section>
      <footer>
        <p className="Copyright">
          © 2023 - Mario Club Online. Information about the game and the source
          code are taken from open sources.
        </p>
      </footer>
    </>
  );
}

export default App;
