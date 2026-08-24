import "./App.css";
import { useState } from "react";
import Profile from "./img/headshot_white.png";
import CrosswordCrew from "./img/crossword_crew_logo.jpeg";
import SudokuApp from "./img/sudoku_logo.png";
import Pyxie from "./img/pyxie_logo.png";
import Insights from "./img/insights_logo.svg";
import Birdle from "./img/birdle_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faChildReaching } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import DecryptedText from "./DecryptedText.tsx";

const passions = [
  {
    icon: faTree,
    label: "Sustainable forestry",
    title: "Sustainable forestry and tree identification",
    content: `During the COVID pandemic, I picked up a 1923 edition tree ID guide at a book sale and proceeded to spend hours a day IDing trees in my area. Five years later and I've worked on integrated forestry projects in four countries and learned that identifying tree species fosters a connection not just to the environment but also to the culture and community of the people who grew amongst them.`,
  },
  {
    icon: faChildReaching,
    label: "Youth empowerment",
    title: "Youth empowerment",
    content: `The youth are our future. Whether it's teaching them how to play chess to develop their critical thinking skills or encouraging them to have a conversation with every person in their household, youth development work sets us all up for a better future. I have seen the impact first-hand of youth empowerment and will continue to support youth to become the people they have always wanted to be.`,
  },
  {
    icon: faPuzzlePiece,
    label: "Logic puzzles",
    title: "Logic puzzles",
    content: `My interest in puzzles and brain teasers comes from my insatiable desire to learn and challenge myself. I have spent countless hours stuck on a hard Saturday New York Times crossword or a particularly difficult geometric logic puzzle. Engaging with these challenges sharpens my problem-solving skills and keeps my mind active and curious, making it a delightful way to learn and explore new concepts.`,
  },
];

const projects = [
  {
    name: "Crossword Crew",
    tagline: "A social crossword creator",
    href: "https://crossword-crew.onrender.com/",
    image: CrosswordCrew,
    alt: "Crossword Crew logo",
    lightBg: false,
  },
  {
    name: "Pyxie",
    tagline: "Build your family's care manual",
    href: "https://www.mypyxie.com/",
    image: Pyxie,
    alt: "Pyxie logo",
    lightBg: true,
  },
  {
    name: "Sudoku App",
    tagline: "Created entirely offline",
    href: "https://sudoku-for-fun.netlify.app/",
    image: SudokuApp,
    alt: "Sudoku app logo",
    lightBg: false,
  },
  {
    name: "Address Insights",
    tagline: "What a US address is really like",
    href: "https://insights-eight-phi.vercel.app/",
    image: Insights,
    alt: "Address Insights logo",
    lightBg: false,
  },
  {
    name: "Birdle",
    tagline: "A daily bird guessing game",
    href: "https://birdle-rho.vercel.app/",
    image: Birdle,
    alt: "Birdle logo",
    lightBg: false,
  },
];

const contacts = [
  {
    name: "Email",
    href: "mailto:evanjamesaustin@gmail.com",
    icon: faEnvelope,
    external: false,
  },
  {
    name: "Github",
    href: "https://github.com/muuscodes",
    icon: faGithub,
    external: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/evan-james-austin/",
    icon: faLinkedin,
    external: true,
  },
];

function SectionHeading(props: {
  text: string;
  speed?: number;
  mobileClassName?: string;
}) {
  const {
    text,
    speed,
    mobileClassName = "text-3xl sm:text-4xl font-bold",
  } = props;
  return (
    <>
      <div className="hidden md:block">
        <DecryptedText
          text={text}
          animateOn="view"
          speed={speed}
          className="text-6xl font-bold"
          revealDirection="start"
        />
      </div>
      <h2 className={`md:hidden ${mobileClassName}`}>{text}</h2>
    </>
  );
}

function App() {
  const [activePassion, setActivePassion] = useState(0);

  return (
    <main className="container">
      <section className="section" id="top">
        <div className="content-fit">
          <DecryptedText
            text="EVAN AUSTIN"
            animateOn="view"
            className="title"
            revealDirection="start"
          />
        </div>
      </section>
      <section className="section" id="about">
        <div className="font-bolder flex flex-col gap-10 items-center text-center">
          <SectionHeading text="An impact-driven developer" speed={100} />
          <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-evenly items-center">
            <img
              src={`${Profile}`}
              alt="Evan Austin profile photo"
              className="w-[50vw] md:w-[30vw] lg:w-[20vw]"
            />
            <p className="w-full lg:w-3/5 text-xl lg:text-2xl">
              As an impact-first software developer, I approach technology with
              a focus on creating meaningful impact. Over five years of
              experience living in and working for underserved communities in
              West Africa, and Central and South America inspired me to leverage
              my skills in software development to address real-world
              challenges. I believe that technology should empower individuals
              and communities and I'm dedicated to building solutions that solve
              problems <em>and</em> make a difference.
            </p>
          </div>
        </div>
      </section>
      <section className="section" id="passions">
        <div className="font-bolder flex flex-col gap-10 items-center text-center">
          <SectionHeading
            text="Passionate about the world"
            speed={90}
            mobileClassName="text-3xl sm:text-4xl font-bold w-5/6 sm:w-full"
          />
          <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-evenly items-center">
            <div className="flex flex-row w-5/6 lg:w-3/5 items-center justify-evenly">
              {passions.map((passion, index) => (
                <button
                  key={passion.label}
                  type="button"
                  aria-label={passion.label}
                  aria-pressed={activePassion === index}
                  onClick={() => setActivePassion(index)}
                  className={
                    activePassion === index
                      ? "scale-135"
                      : "opacity-50 hover:opacity-80 hover:scale-110 hover:cursor-pointer"
                  }
                >
                  <FontAwesomeIcon
                    icon={passion.icon}
                    className="icon text-6xl md:text-9xl"
                  />
                </button>
              ))}
            </div>
            <p className="w-full lg:w-3/5 text-xl lg:text-2xl">
              <span className="font-bold text-white">
                {passions[activePassion].title}
              </span>{" "}
              <br />
              {passions[activePassion].content}
            </p>
          </div>
        </div>
      </section>
      <section className="section" id="work">
        <div className="flex flex-col gap-10 items-center text-center w-full">
          <SectionHeading text="Dedicated to quality content" speed={110} />
          <div className="flex flex-wrap justify-center gap-8 md:gap-10 w-full max-w-3xl">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-32 sm:w-40 md:w-44 lg:w-48"
              >
                <figure className="flex flex-col items-center gap-3 transition-transform duration-200 hover:scale-110 hover:cursor-pointer">
                  <img
                    src={`${project.image}`}
                    alt={project.alt}
                    className={project.lightBg ? "w-full bg-white" : "w-full"}
                  />
                  <figcaption className="text-center w-full bg-[#191616de] text-white/85 rounded-2xl px-3 py-2">
                    <span className="block text-xl md:text-2xl font-bold text-white">
                      {project.name}
                    </span>
                    <span className="hidden md:block text-base">
                      {project.tagline}
                    </span>
                  </figcaption>
                </figure>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="contact">
        <div className="content-fit">
          <div className="flex flex-col gap-15">
            <SectionHeading
              text="CONTACT"
              speed={160}
              mobileClassName="text-4xl sm:text-5xl font-bold"
            />
            <div className="flex flex-col md:flex-row gap-15 items-center text-3xl md:text-4xl pt-10">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  {...(contact.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="hover:cursor-pointer hover:opacity-70 hover:underline flex items-center gap-4"
                >
                  {contact.name}
                  <FontAwesomeIcon
                    icon={contact.icon}
                    className="text-4xl md:text-6xl"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
