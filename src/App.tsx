import "./App.css";
import { useState, useRef, useEffect } from "react";
import Profile from "./img/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faChildReaching } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import DecryptedText from "./DecryptedText.tsx";

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
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePassions = (index: number) => {
    setActivePassion(passions[index]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsTreeVisible(true);
          const index = sectionsRef.current.findIndex(
            (section) => section === entry.target
          );
          setCurrentIndex(index);
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

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "ArrowDown" || event.key === " ") {
        event.preventDefault();
        let nextIndex = 0;
        if (currentIndex < 4) {
          nextIndex = currentIndex + 1;
        } else {
          nextIndex = currentIndex;
        }
        sectionsRef.current[nextIndex]?.scrollIntoView({ behavior: "smooth" });
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        sectionsRef.current[prevIndex]?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <header className="header"></header>
      <main className="container">
        <section
          className="section"
          id="top"
          ref={(el) => {
            if (el) sectionsRef.current[0] = el;
          }}
        >
          <div className="content-fit">
            {
              <DecryptedText
                text="EVAN AUSTIN"
                animateOn="view"
                revealDirection="start"
              />
            }
          </div>
        </section>
        <section
          className="section"
          id="about"
          ref={(el) => {
            if (el) sectionsRef.current[1] = el;
          }}
        >
          <div className="font-bolder flex flex-row gap-10 justify-between items-center">
            <img src={`${Profile}`} alt="Evan Austin profile photo" />
            <div className="flex flex-col gap-4">
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
        <section
          className="section"
          id="passions"
          ref={(el) => {
            if (el) sectionsRef.current[2] = el;
          }}
        >
          <div className="font-bolder flex flex-row gap-10 justify-between items-center">
            <div className="flex flex-row w-500px">
              <FontAwesomeIcon
                ref={treeIconRef}
                icon={faTree}
                className={`icon passion-opening ${
                  activePassion === "tree"
                    ? "scale-135"
                    : "opacity-50 hover:opacity-80 hover:scale-110"
                } ${isTreeVisible ? "animatePassion" : ""}`}
                onClick={() => handlePassions(0)}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faChildReaching}
                className={`icon ${
                  activePassion === "child"
                    ? "scale-135"
                    : "opacity-50 hover:opacity-80 hover:scale-110"
                }`}
                onClick={() => handlePassions(1)}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faPuzzlePiece}
                className={`icon fa-puzzle-piece ${
                  activePassion === "puzzle"
                    ? "scale-135"
                    : "opacity-50 hover:opacity-80 hover:scale-110"
                }`}
                onClick={() => handlePassions(2)}
              ></FontAwesomeIcon>
            </div>
            <div className="flex flex-col gap-4">
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
        <section
          className="section"
          id="work"
          ref={(el) => {
            if (el) sectionsRef.current[3] = el;
          }}
        >
          <div className="font-bolder flex flex-row gap-10 justify-between">
            <div className="flex flex-col gap-7 items-center">
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
        <section
          className="section"
          id="contact"
          ref={(el) => {
            if (el) sectionsRef.current[4] = el;
          }}
        >
          <div className="content-fit min-h-screen">
            <div>
              <h2 className="text-6xl font-bold">CONTACT</h2>
              <table>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Email
                  </td>
                  <td>muuscodes@gmail.com</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faSquarePhone}></FontAwesomeIcon>{" "}
                    Phone
                  </td>
                  <td>+1 (720) 347-9325</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Github
                  </td>
                  <td>https://github.com/muuscodes</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>{" "}
                    LinkedIn
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
