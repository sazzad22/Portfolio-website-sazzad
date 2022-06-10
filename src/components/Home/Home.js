import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import LogoTitle from "../../assets/images/logo-s.png";
import Logo from "./Logo/Logo";
import "./Home.scss";
import img1 from '../../assets/screenshot/smart manufacturer.jpg'
import Projects from "../Project/Project";
import Project from "../Project/Project";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [projects, setProjects] = useState([]);

  const nameArray = [
    "a",
    "zz",
    "a",
    "d",
    
    "u",
    "r",
    " ",
    "R",
    "a",
    "h",
    "m",
    "a",
    "n",
  ];
  const jobArray = [
    "f",
    "u",
    "l",
    "l",
    "-",
    "s",
    "t",
    "a",
    "c",
    "k",
    "  ",

    "W",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];
  const hoverAnimation = () => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  };
  useEffect(() => {
    hoverAnimation();
  }, []);

  // Projects
  useEffect(() => {
    fetch('http://localhost:5000/project').then(res => res.json()).then(data =>setProjects(data) )
    

  },[])

  return (
    <>
      <div className="">
        <div className=" home-page grid lg:grid-cols-2 grid-cols-1  gap-2">
          <div className="mt-48 lg:ml-64">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img
                className="inline"
                src={LogoTitle}
                alt="JavaScript Developer Name, Web Developer Name"
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={10}
              />
            </h1>
            <button className=" flat-button ">
              Contact me
            </button>
            {/* dowload resum */}
            <a href="https://drive.google.com/file/d/1IX4g28jSS2qEIgIdnsjnG5gVzRdb22_L/view?usp=sharing" target="_blank" className=" flat-button"  >Download resume</a>
          </div>
          <div ><Logo /></div>
          
        </div>
        <div>

          {/* Projects */}
          <div className="project"><h1 className="text-white text-center text-6xl font-bold my-20 ">Check out My work</h1></div>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:px-0 px-10 gap-20 lg:mx-20 py-20 project">
            
            {
              projects.map(project=><Project key={project._id} project={project} img={img1} ></Project>)
            }
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
