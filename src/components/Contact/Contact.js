import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import AnimatedLetters from '../AnimatedLetters'
import "./Contact.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_axc7gzf", "template_5jqbb8e", form.current, "jlaX9ygpspbVxcfu-")
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="min-h-screen project">
        <div className="text-zone">
          <h1 className="lg:text-6xl text-3xl font-bold text-secondary text-center my-20">Contact Me</h1>
          <p className="lg:text-4xl text-2xl text-white lg:px-64 py-20 text-center lg:w-3/4 mx-auto">
            I am interested in Dev job opportunities - especially MERN stack projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <p className="lg:text-5xl text-center text-yellow-300 my-10">Send an Email to me Via this form</p>
          <div className="contact-form text-center">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    className="border my-4 border-yellow-400 w-1/2 lg:w-1/3 rounded-lg lg:text-3xl text-2xl px-2 lg:py-5 py-4"
                    placeholder="Name"
                    type="text"
                    name="name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    className="border my-4 border-yellow-400 w-1/2 lg:w-1/3 rounded-lg lg:text-3xl text-2xl px-2 lg:py-5 py-4"
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    className="border my-4 border-yellow-400 w-1/2 lg:w-1/3 rounded-lg lg:text-3xl text-2xl px-2 lg:py-5 py-4"
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    className="border my-4 border-yellow-400 w-1/2 lg:w-1/3 rounded-lg lg:text-3xl text-2xl px-2 lg:py-5 py-4"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="btn  sm:btn-sm md:btn-md lg:btn-lg w-1/3 px-24  btn-outline btn-accent " value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className="info-map">
          Slobodan Gajić,
          <br />
          Serbia,
          <br />
          Branka RadiČevića 19, 22000 <br />
          Sremska Mitrovica <br />
          <br />
          <span>freelancerslobodan@gmail.com</span>
        </div> */}
        <div className="map-wrap">
          {/* <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer> */}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
