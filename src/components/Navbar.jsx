import Cookies from "js-cookie";
import React, { useState } from "react";
import Logo from "./Logo";

export default function Navbar({ active }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevValue) => !prevValue);
  };
  return (
    <div className="navbar" style={{ backgroundColor: "#001529" }}>
      <Logo />
      {Cookies.get("loggedin") && (
        <>
          <nav>
            <ul class={menuVisible ? "menu-visible" : "menu-hidden"}>
              <li>
                <a href="/" className={active === "home" ? "active-menu" : ""}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/reservation"
                  className={active === "reservation" ? "active-menu" : ""}
                >
                  Reservation
                </a>
              </li>
              <li>
                <a
                  href="/profile"
                  className={active === "profile" ? "active-menu" : ""}
                >
                  Profile
                </a>
              </li>
            </ul>
          </nav>

          <div class={`menu-icon`} onClick={toggleMenu}>
            <i
              class="fa fa-bars"
              style={{ color: "white", fontSize: "23px" }}
            ></i>
          </div>
        </>
      )}
    </div>
  );
}
