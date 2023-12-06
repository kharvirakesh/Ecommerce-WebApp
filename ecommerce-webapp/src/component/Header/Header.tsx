import React, { useEffect, useState } from "react";
import { navLinks } from "@/constants";
import { Button, Divider } from "antd";
import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import styles from "../../styles/layout.module.css";
import { useRouter } from "next/router";
import { Url } from "next/dist/shared/lib/router/router";
import { slide as Menu } from "react-burger-menu";

interface IHeaderProps {}

export const Header = ({ onSignupClick }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleRoute = (routePath: Url) => {
    router.push(routePath);
  };

  var style = {
    bmBurgerButton: {
      position: "sticky",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      top: "0px",
    },
    bmMenu: {
      background: "#ffff",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmOverlay: {
      background: "transparent",
    },
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <nav>
        {/* mobile header */}
        <header>
          {isMobile && (
            <div className={styles.mobileContainer}>
              <div>
                <Menu
                  styles={style}
                  pageWrapId="stack"
                  outerContainerId="outer-container"
                  right
                  isOpen={menuOpen}
                  onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
                >
                  {Array.isArray(navLinks) &&
                    navLinks.map((cval, index) => {
                      const { title, routePath } = cval;
                      return (
                        <a
                          id="home"
                          key={index}
                          href={routePath}
                          onClick={closeMenu} // Close the menu when a link is clicked
                        >
                          {title}
                        </a>
                      );
                    })}
                </Menu>
              </div>
              <div>
                <Image src={Logo} alt="logo" />
              </div>
            </div>
          )}
        </header>

        {/* desktop header */}
        {!isMobile && (
          <div className={`desktopHeader ${styles.navbar}`}>
            <div>
              <Image src={Logo} alt="logo" />
            </div>
            <div className={styles.navbarLink}>
              {Array.isArray(navLinks) &&
                navLinks?.map((nav, index) => {
                  const { title, routePath } = nav;
                  return (
                    <div key={index} style={{ padding: "0px 20px" }}>
                      {title !== "Sign Up" && title !== "Login" ? (
                        <>
                          <span
                            onClick={() => handleRoute(routePath)}
                            className={styles.navLinkStyle}
                          >
                            {title}
                          </span>
                        </>
                      ) : (
                        <>
                          <Button
                            type="primary"
                            className={styles.headerButton}
                            onClick={onSignupClick}
                          >
                            {title}
                          </Button>
                        </>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
