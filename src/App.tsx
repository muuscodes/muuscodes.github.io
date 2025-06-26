import "./App.css";
import { useState, useRef, useEffect } from "react";
import Profile from "./img/profile.jpeg";

function App() {
  const passions = ["tree", "child", "puzzle"];
  const passionContent = [
    `Sustainable forestry. A passion for sustainable forestry and tree identification drives a deep appreciation for nature's ecosystems. Exploring forests and learning to identify various tree species fosters a connection to the environment and highlights the importance of conservation. This interest not only promotes responsible forest management but also encourages others to recognize the value of trees in maintaining biodiversity and supporting wildlife habitats.`,
    `Youth development. A passion for youth development and community resilience fuels a commitment to empowering young people and fostering strong, supportive environments. By engaging with local initiatives and mentoring programs, the goal is to equip youth with essential skills and resources. This focus on building resilience not only strengthens individuals but also enhances the overall well-being of communities, creating a brighter future for all.`,
    `Puzzles. A passion for puzzles and brain teasers, such as crosswords, Sudoku, and geography quizzes, provides endless hours of mental stimulation and enjoyment. Engaging with these challenges sharpens problem-solving skills and enhances cognitive abilities. Each completed puzzle brings a sense of accomplishment, while the variety keeps the mind active and curious, making it a delightful way to learn and explore new concepts.`,
  ];
  const [activePassion, setActivePassion] = useState(passions[0]);
  const treeIconRef = useRef(null);
  const [isTreeVisible, setIsTreeVisible] = useState(false);

  const handlePassions = (index: number) => {
    setActivePassion(passions[index]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsTreeVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (treeIconRef.current) {
      observer.observe(treeIconRef.current);
    }

    return () => {
      if (treeIconRef.current) {
        observer.unobserve(treeIconRef.current);
      }
    };
  }, []);
  return (
    <>
      <header className="header">
        <nav>
          <ul className="items-center flex justify-end">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#passions">Interests</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container">
        <section className="section" id="banner">
          <div className="content-fit">
            <h1
              className="title animateBanner"
              data-before="EVAN AUSTIN"
              id="top"
            >
              EVAN AUSTIN
            </h1>
          </div>
        </section>
        <section className="section">
          <div className="font-bolder flex flex-row gap-10 justify-between items-center">
            <img src={`${Profile}`} alt="Evan Austin profile photo" />
            <div className="flex flex-col gap-4" id="about">
              <h2 className="text-6xl font-bold">An impact-driven developer</h2>
              <p>
                As a impact-first software developer, I approach technology with
                a focus on creating meaningful impact. Three years serving in
                the Peace Corps in rural communities in both Senegal and El
                Salvador inspired me to leverage my skills in software
                development to address real-world challenges. I believe that
                technology should empower individuals and communities, and I am
                dedicated to building applications that not only solve problems
                but also foster positive change.
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="content-fit">
            <div className="flex flex-row w-500px">
              <i
                ref={treeIconRef}
                className={`fa-solid icon fa-tree passion-opening ${
                  activePassion === "tree"
                    ? "scale-135"
                    : "opacity-50 hover:opacity-80 hover:scale-110"
                } ${isTreeVisible ? "animatePassion" : ""}`}
                onClick={() => handlePassions(0)}
              ></i>
              <i
                className={`fa-solid icon fa-child ${
                  activePassion === "child"
                    ? "scale-135"
                    : "opacity-50 hover:opacity-80 hover:scale-110"
                }`}
                onClick={() => handlePassions(1)}
              ></i>
              <i
                className={`fa-solid icon fa-puzzle-piece ${
                  activePassion === "puzzle"
                    ? "scale-135"
                    : "opacity-50 hover:opacity-80 hover:scale-110"
                }`}
                onClick={() => handlePassions(2)}
              ></i>
            </div>
            <div className="flex flex-col gap-4" id="passions">
              <h2 className="text-6xl font-bold">Passions</h2>
              <p>
                {activePassion === "tree"
                  ? passionContent[0]
                  : activePassion === "child"
                  ? passionContent[1]
                  : passionContent[2]}
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="content-fit">
            <div
              className="flex flex-col gap-7 items-center w-[90vw]"
              id="work"
            >
              <h2 className="text-6xl font-bold">
                Dedicated to quality content
              </h2>
              <div className="flex flex-row justify-between w-5/6">
                <figure>
                  <img src={`${Profile}`} alt="Evan Austin profile photo" />
                  <figcaption className="text-center text-xl text-bold">
                    Social crossword creator app
                  </figcaption>
                </figure>
                <figure>
                  <img src={`${Profile}`} alt="Evan Austin profile photo" />
                  <figcaption className="text-center text-xl text-bold">
                    Backend API
                  </figcaption>
                </figure>
                <figure>
                  <img src={`${Profile}`} alt="Evan Austin profile photo" />
                  <figcaption className="text-center text-xl text-bold">
                    Sukodu app created offline
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="contact">
          <div className="content-fit min-h-screen">
            <div>
              <h2 className="text-6xl font-bold">CONTACT</h2>
              <table>
                <tr>
                  <td>
                    <i className="fa-solid fa-envelope"></i> Email
                  </td>
                  <td>muuscodes@gmail.com</td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-solid fa-square-phone"></i> Phone
                  </td>
                  <td>+1 (720) 347-9325</td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-brands fa-github"></i> Github
                  </td>
                  <td>https://github.com/muuscodes</td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-brands fa-linkedin"></i> LinkedIn
                  </td>
                  <td>linkedin.com/evanaustin4</td>
                </tr>
              </table>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer">
        <a className="text-2xl" href="#top">
          Back to top ^
        </a>
      </footer>
    </>
  );
}

export default App;
