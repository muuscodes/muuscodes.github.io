import "./App.css";
import { useState, useRef, useEffect } from "react";

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
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      });
    });

    if (treeIconRef.current) {
      observer.observe(treeIconRef.current);
    }

    return () => {
      if (treeIconRef.current) {
        observer.unobserve(treeIconRef.current); // Clean up observer on unmount
      }
    };
  }, []);
  return (
    <>
      <header className="header">
        <nav className="content-fit">
          <ul className="content-fit">
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
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="section" id="banner">
        <div className="content-fit">
          <div
            className="title animateBanner scroll-mt-40"
            data-before="EVAN AUSTIN"
            id="top"
          >
            EVAN AUSTIN
          </div>
        </div>
      </div>
      <div className="section" id="intro">
        <div className="content-fit">
          <img src="../src/img/profile.jpeg" alt="Evan Austin profile photo" />
          <div className="des scroll-mt-20" id="about">
            <div className="title">An impact-driven developer</div>
            <p>
              As a passionate software developer, I approach technology with a
              focus on creating meaningful impact. My journey began with three
              transformative years in the Peace Corps, where I engaged in
              community development projects that emphasized sustainable
              solutions and collaboration. This experience deepened my
              understanding of the social implications of technology and
              inspired me to leverage my skills in software development to
              address real-world challenges. I believe that technology should
              empower individuals and communities, and I am dedicated to
              building applications that not only solve problems but also foster
              positive change. I am excited to bring this unique perspective to
              the tech industry.
            </p>
          </div>
        </div>
      </div>
      <div className="section" id="intro">
        <div className="content-fit">
          <div className="flex flex-row w-500px">
            <i
              ref={treeIconRef}
              className={`fa-solid icon fa-tree passion-opening ${
                activePassion === "tree" ? "scale-135" : "opacity-50"
              } ${isTreeVisible ? "animatePassion" : ""}`}
              onClick={() => handlePassions(0)}
            ></i>
            <i
              className={`fa-solid icon fa-child ${
                activePassion === "child" ? "scale-135" : "opacity-50"
              }`}
              onClick={() => handlePassions(1)}
            ></i>
            <i
              className={`fa-solid icon fa-puzzle-piece ${
                activePassion === "puzzle" ? "scale-135" : "opacity-50"
              }`}
              onClick={() => handlePassions(2)}
            ></i>
          </div>
          <div className="des scroll-mt-20" id="passions">
            <div className="title">Passions</div>
            <p>
              {activePassion === "tree"
                ? passionContent[0]
                : activePassion === "child"
                ? passionContent[1]
                : passionContent[2]}
            </p>
          </div>
        </div>
      </div>
      <div className="section" id="intro">
        <div className="content-fit">
          <div className="number">02</div>
          <div className="des scroll-mt-20" id="work">
            <div className="title">Dedicated to quality content</div>
            <p>
              As a developer, I focus on creating accessible apps and websites
              that cater to diverse needs and solve real-world problems. My
              passion for the environment inspires me to build tools that
              promote sustainability, while my commitment to youth development
              drives me to create platforms that foster community engagement.
              One of my projects is a crossword puzzle-sharing website, allowing
              users to create custom crosswords and share them with friends,
              making learning fun and interactive. Additionally, I have
              developed a fully functional API for Sudoku puzzles, providing
              users with a seamless experience to generate and solve puzzles,
              enhancing their problem-solving skills.
            </p>
          </div>
        </div>
      </div>
      <div className="section" id="contact">
        <div className="content-fit">
          <div className="des">
            <div className="title">CONTACT</div>
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
      </div>
      <footer id="footer">
        <a className="text-2xl" href="#top">
          {/* &nbsp;^&nbsp; */}
          Back to top ^
        </a>
      </footer>
    </>
  );
}

export default App;
