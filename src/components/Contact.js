import { useEffect, useRef, useContext, useLayoutEffect } from "react";
import { NavContext } from "../context/NavContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Contact = () => {
  const { offset, setActive } = useContext(NavContext);
  const contactRef = useRef();

  const setScrollNav = () => {
    let sectionTop = contactRef.current.offsetTop;
    let sectionHeight = contactRef.current.clientHeight;
    if (offset > sectionTop && offset <= sectionHeight + sectionTop) {
      setActive("contact");
    }
  };

  useLayoutEffect(() => {
    setScrollNav();
  });
  return (
    <div className="contact" id="contact" ref={contactRef}>
      <div className="contact__first">
        <span className="line">Contact</span>
        <h1>Let's discuss your project</h1>
        <p>
          <span className="contact__span">
            <i className="fas fa-phone-slash "></i>
          </span>{" "}
          +2348134209999
        </p>
        <p>
          <span className="contact__span">
            <i className="fas fa-envelope "></i>
          </span>{" "}
          benedictuyioghosa@gmail.com
        </p>
        <p className="contact__socials">
          <a href="">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </p>
      </div>

      <Box
        component="form"
        sx={{
          maxWidth: "90%",
        }}
        noValidate
        autoComplete="off"
        className="contact__second"
      >
        <TextField
          id="name"
          className="contact__second--name"
          required
          label="Name"
          variant="standard"
          fullWidth={true}
          margin="dense"
        />
        <TextField
          id="email"
          className="contact__second--email"
          label="Email"
          variant="standard"
          required
        />
        <TextField
          id="subject"
          className="contact__second--subject"
          label="Subject"
          variant="standard"
          required
        />
        <TextField
          id="message"
          className="contact__second--message"
          required
          label="Message"
          variant="outlined"
          fullWidth={true}
          margin="dense"
        />
        <Button variant="contained" className="contact__second--button">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Contact;
