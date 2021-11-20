import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import { NavContext } from "../context/NavContext";

const Navbar = () => {
  const { offset, active } = useContext(NavContext);

  let scrolled = offset > 50 ? "scrolled" : "";

  return (
    <div className="navbar">
      <AppBar position="fixed" className={`navbar__${scrolled}`}>
        <Toolbar className="space">
          <Link
            href="#"
            variant="h4"
            underline="none"
            color="inherit"
            sx={{ mr: "auto" }}
            className="hide"
          >
            <span style={{ color: "hsl(24, 43%, 86%)" }}>Derick</span>
            Ben
          </Link>
          <Link
            className={`${active === "home" ? "navbar__active" : ""}`}
            href="#"
            variant="h5"
            underline="none"
            color="inherit"
            sx={{ mr: 3 }}
          >
            <span className="hide">Home</span>
            <span className="show">
              <i class="fas fa-home fa-2x"></i>
            </span>
          </Link>
          <Link
            className={`${active === "skills" ? "navbar__active" : ""}`}
            href="#skills"
            variant="h5"
            underline="none"
            color="inherit"
            sx={{ mr: 3 }}
          >
            <span className="hide">Skills</span>
            <span className="show">
              <i class="fas fa-cog fa-2x"></i>
            </span>
          </Link>

          <Link
            className={`${active === "portfolio" ? "navbar__active" : ""}`}
            href="#portfolio"
            variant="h5"
            underline="none"
            color="inherit"
            sx={{ mr: 3 }}
          >
            <span className="hide">Portfolio</span>
            <span className="show">
              <i class="fas fa-th-large fa-2x"></i>
            </span>
          </Link>
          <Link
            className={`${active === "contact" ? "navbar__active" : ""}`}
            href="#contact"
            variant="h5"
            underline="none"
            color="inherit"
            sx={{ mr: 3 }}
          >
            <span className="hide">Contact</span>
            <span className="show">
              <i class="fas fa-phone-slash fa-2x"></i>
            </span>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
