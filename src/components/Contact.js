import {
  useCallback,
  useRef,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { NavContext } from "../context/NavContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Contact = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { offset, setActive } = useContext(NavContext);
  const contactRef = useRef();

  const handleChange = (props) => (e) => {
    setValue({ ...value, [props]: e.target.value });
  };

  const setScrollNav = useCallback(() => {
    let contactTop = contactRef.current.offsetTop;
    let contactHeight = contactRef.current.clientHeight;
    if (offset > contactTop && offset <= contactHeight + contactTop) {
      setActive("contact");
    }
  }, [offset, setActive]);

  useLayoutEffect(() => {
    setScrollNav();
  }, [setScrollNav]);
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
          <a
            href="https://web.facebook.com/derickbenedictt"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </p>
      </div>

      <Box
        component="form"
        action={`https://formspree.io/f/xvodeeql`}
        sx={{
          maxWidth: "90%",
        }}
        autoComplete="off"
        className="contact__second"
        method="POST"
      >
        <TextField
          id="name"
          className="contact__second--name"
          required
          onChange={handleChange("name")}
          label="Name"
          name="name"
          variant="standard"
          fullWidth={true}
          margin="dense"
        />
        <TextField
          id="email"
          className="contact__second--email"
          onChange={handleChange("email")}
          label="Email"
          variant="standard"
          name="_replyto"
          required
        />
        <TextField
          id="subject"
          className="contact__second--subject"
          onChange={handleChange("subject")}
          label="Subject"
          variant="standard"
          name="subject"
          required
        />
        <TextField
          id="message"
          className="contact__second--message"
          onChange={handleChange("message")}
          required
          label="Message"
          variant="outlined"
          name="message"
          fullWidth={true}
          margin="dense"
        />
        <Button
          variant="contained"
          className="contact__second--button"
          id="button"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Contact;
