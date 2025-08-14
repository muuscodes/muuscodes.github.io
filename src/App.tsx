import "./App.css";
import { useState, useRef, useEffect } from "react";
import Profile from "./img/profile.jpeg";
import CrosswordCrew from "./img/crossword_crew_logo.jpeg";
import SudokuApp from "./img/sudoku_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faChildReaching } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import DecryptedText from "./DecryptedText.tsx";

function App() {
  const passions = ["tree", "child", "puzzle"];
  const passionTitle = [
    "Sustainable forestry and tree identification",
    "Youth empowerment",
    "Logic puzzles",
  ];
  const passionContent = [
    `During the COVID pandemic, I picked up an 1923 edition tree ID guide at a book sale and proceeded to spend hours a day IDing trees in my area. Five years later and I've worked on integrated forestry projects in four countries and learned that identifying tree species fosters a connection not just to the environment and but also to the culture and community of the people who grew amongst them.`,
    `The youth are our future. Whether it's teaching them how to play chess to develop their critical thinking skills or encouraging them to have a conversation with every person in their household, youth development work sets us all up for a better future. I have seen the impact first-hand of youth empowerment and will continue to support youth to become the people they have always wanted to be.`,
    `My interest for puzzles and brain teasers comes from my insatiable desire to learn and challenge myself. I have spent countless hours stuck on a hard Saturday New York Times crossword or a particularly difficult geometric logic puzzle. Engaging with these challenges sharpens my problem-solving skills and keeps my mind active and curious, making it a delightful way to learn and explore new concepts.`,
  ];
  const [activePassion, setActivePassion] = useState(passions[0]);
  const treeIconRef = useRef(null);
  const [isTreeVisible, setIsTreeVisible] = useState(false);
  const sectionsRef = useRef<(HTMLElement | null)[]>([
    null,
    null,
    null,
    null,
    null,
  ]);
  const currentIndex = useRef<number>(0);
  const width = useRef<number>(window.innerWidth);

  const handlePassions = (index: number) => {
    setActivePassion(passions[index]);
  };

  useEffect(() => {
    width.current = window.innerWidth;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsTreeVisible(true);
          const index = sectionsRef.current.findIndex(
            (section) => section === entry.target
          );
          currentIndex.current = index;
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

  const updateGridDimensions = () => {
    width.current = window.innerWidth;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("resize", updateGridDimensions);
    updateGridDimensions();
    const handleKeyDown = (event: any) => {
      if (
        event.key === "ArrowDown" ||
        event.key === " " ||
        event.key === "ArrowUp"
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", updateGridDimensions);
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
                className="title"
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
          <div className="font-bolder flex flex-col gap-10 items-center text-center">
            {width.current > 768 ? (
              <DecryptedText
                text="An impact-driven developer"
                animateOn="view"
                speed={100}
                className="text-6xl font-bold"
                revealDirection="start"
              />
            ) : (
              <h2 className="text-3xl sm:text-4xl font-bold">
                An impact-driven developer
              </h2>
            )}
            <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-evenly items-center">
              <img
                src={`${Profile}`}
                alt="Evan Austin profile photo"
                className="w-[50vw] md:w-[30vw] lg:w-[20vw]"
              />
              <p className="w-full lg:w-3/5 text-xl lg:text-2xl">
                As a impact-first software developer, I approach technology with
                a focus on creating meaningful impact. Over five years of
                experience living in and working for underserved communities in
                West Africa, and Central and South America inspired me to
                leverage my skills in software development to address real-world
                challenges. I believe that technology should empower individuals
                and communities and I'm dedicated to building solutions that
                solve problems <em>and</em> make a difference.
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
          <div className="font-bolder flex flex-col gap-10 items-center text-center">
            {width.current > 768 ? (
              <>
                <DecryptedText
                  text="Passionate about the world"
                  animateOn="view"
                  speed={90}
                  className="text-6xl font-bold"
                  revealDirection="start"
                />
                <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-evenly items-center">
                  <div className="flex flex-row w-5/6 lg:w-3/5 items-center justify-evenly">
                    <FontAwesomeIcon
                      ref={treeIconRef}
                      icon={faTree}
                      className={`icon text-9xl ${
                        activePassion === "tree"
                          ? "scale-135"
                          : "opacity-50 hover:opacity-80 hover:scale-110 hover:cursor-pointer"
                      } ${isTreeVisible ? "animatePassion" : ""}`}
                      onClick={() => handlePassions(0)}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faChildReaching}
                      className={`icon text-9xl ${
                        activePassion === "child"
                          ? "scale-135"
                          : "opacity-50 hover:opacity-80 hover:scale-110 hover:cursor-pointer"
                      }`}
                      onClick={() => handlePassions(1)}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faPuzzlePiece}
                      className={`icon text-9xl ${
                        activePassion === "puzzle"
                          ? "scale-135"
                          : "opacity-50 hover:opacity-80 hover:scale-110 hover:cursor-pointer"
                      }`}
                      onClick={() => handlePassions(2)}
                    ></FontAwesomeIcon>
                  </div>
                  <p className="w-full lg:w-3/5 text-xl lg:text-2xl">
                    <span className="font-bold text-white">
                      {activePassion === "tree"
                        ? passionTitle[0]
                        : activePassion === "child"
                        ? passionTitle[1]
                        : passionTitle[2]}
                    </span>{" "}
                    <br />
                    {activePassion === "tree"
                      ? passionContent[0]
                      : activePassion === "child"
                      ? passionContent[1]
                      : passionContent[2]}
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-3xl sm:text-4xl font-bold w-5/6 sm:w-full">
                  Passionate about the world
                </h2>
                <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-evenly items-center">
                  <div className="flex flex-row w-5/6 lg:w-3/5 items-center ">
                    <FontAwesomeIcon
                      ref={treeIconRef}
                      icon={faTree}
                      className={`icon text-6xl ${
                        activePassion === "tree"
                          ? "scale-135"
                          : "opacity-50 hover:opacity-80 hover:scale-110 hover:cursor-pointer"
                      } ${isTreeVisible ? "animatePassion" : ""}`}
                      onClick={() => handlePassions(0)}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faChildReaching}
                      className={`icon text-6xl ${
                        activePassion === "child"
                          ? "scale-135"
                          : "opacity-50 hover:opacity-80 hover:scale-110 hover:cursor-pointer"
                      }`}
                      onClick={() => handlePassions(1)}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faPuzzlePiece}
                      className={`icon text-6xl ${
                        activePassion === "puzzle"
                          ? "scale-135"
                          : "opacity-50 hover:opacity-80 hover:scale-110 hover:cursor-pointer"
                      }`}
                      onClick={() => handlePassions(2)}
                    ></FontAwesomeIcon>
                  </div>
                  <p className="w-full lg:w-3/5 text-xl lg:text-2xl">
                    <span className="font-bold text-white">
                      {activePassion === "tree"
                        ? passionTitle[0]
                        : activePassion === "child"
                        ? passionTitle[1]
                        : passionTitle[2]}
                    </span>{" "}
                    <br />
                    {activePassion === "tree"
                      ? passionContent[0]
                      : activePassion === "child"
                      ? passionContent[1]
                      : passionContent[2]}
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
        <section
          className="section"
          id="work"
          ref={(el) => {
            if (el) sectionsRef.current[3] = el;
          }}
        >
          <div className="flex flex-col gap-10 items-center text-center w-full">
            {width.current > 768 ? (
              <>
                <DecryptedText
                  text="Dedicated to quality content"
                  animateOn="view"
                  speed={110}
                  className="text-6xl font-bold"
                  revealDirection="start"
                />
                <div className="flex flex-row w-4/6 justify-between gap-5 items-center">
                  <a href="https://www.crosswordcrew.com/" target="_blank">
                    <figure className="hover:scale-110 hover:cursor-pointer">
                      <figcaption className="text-center text-2xl text-bolder">
                        Crossword Crew: <br />A social crossword creator
                      </figcaption>
                      <br />
                      <img
                        src={`${CrosswordCrew}`}
                        alt="Crossword Crew logo"
                        className="w-[50vw] md:w-[30vw] lg:w-[20vw]"
                      />
                    </figure>
                  </a>
                  <a href="https://sudoku-for-fun.netlify.app/" target="_blank">
                    <figure className="hover:scale-110 hover:cursor-pointer">
                      <figcaption className="text-center text-2xl text-bolder">
                        Sukodu app: <br />
                        Created entirely offline
                      </figcaption>
                      <br />
                      <img
                        src={`${SudokuApp}`}
                        alt="Sudoku app logo"
                        className="w-[50vw] md:w-[30vw] lg:w-[20vw]"
                      />
                    </figure>
                  </a>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Dedicated to quality content
                </h2>
                <div className="flex flex-col gap-10 items-center">
                  <a href="https://www.crosswordcrew.com/" target="_blank">
                    <figure className="hover:scale-110 hover:cursor-pointer">
                      <figcaption className="text-center text-2xl text-bolder">
                        Crossword Crew
                      </figcaption>
                      <br />
                      <img
                        src={`${CrosswordCrew}`}
                        alt="Crossword Crew logo"
                        className="w-[50vw] md:w-[30vw] lg:w-[20vw]"
                      />
                    </figure>
                  </a>
                  <a href="https://sudoku-for-fun.netlify.app/" target="_blank">
                    <figure className="hover:scale-110 hover:cursor-pointer">
                      <figcaption className="text-center text-2xl text-bolder">
                        Sukodu app
                      </figcaption>
                      <br />
                      <img
                        src={`${SudokuApp}`}
                        alt="Sudoku app logo"
                        className="w-[50vw] md:w-[30vw] lg:w-[20vw]"
                      />
                    </figure>
                  </a>
                </div>
              </>
            )}
          </div>
        </section>
        <section
          className="section"
          id="contact"
          ref={(el) => {
            if (el) sectionsRef.current[4] = el;
          }}
        >
          <div className="content-fit">
            <div>
              {width.current > 768 ? (
                <>
                  <DecryptedText
                    text="CONTACT"
                    animateOn="view"
                    speed={160}
                    className="text-6xl font-bold"
                    revealDirection="start"
                  />
                  <table className="w-[70vw]">
                    <tbody>
                      <tr>
                        <td>
                          <a
                            href="mailto:muuscodes@gmail.com"
                            className="hover:cursor-pointer hover:opacity-70 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faEnvelope}
                            ></FontAwesomeIcon>{" "}
                            Email
                          </a>
                        </td>
                        <td>muuscodes@gmail.com</td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://github.com/muuscodes"
                            target="_blank"
                            className="hover:cursor-pointer hover:opacity-70 hover:underline"
                          >
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>{" "}
                            Github
                          </a>
                        </td>
                        <td>https://github.com/muuscodes</td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.linkedin.com/in/evan-james-austin/"
                            target="_blank"
                            className="hover:cursor-pointer hover:opacity-70 hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faLinkedin}
                            ></FontAwesomeIcon>{" "}
                            LinkedIn
                          </a>
                        </td>
                        <td>https://www.linkedin.com/in/evan-james-austin/</td>
                      </tr>
                    </tbody>
                  </table>
                </>
              ) : (
                <div className="flex flex-col gap-15">
                  <h2 className="text-4xl sm:text-5xl font-bold">CONTACT</h2>
                  <div className="flex flex-col gap-10 items-center text-3xl">
                    Email{" "}
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-6xl"
                    ></FontAwesomeIcon>{" "}
                    Github
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-6xl"
                    ></FontAwesomeIcon>{" "}
                    LinkedIn
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-6xl"
                    ></FontAwesomeIcon>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
