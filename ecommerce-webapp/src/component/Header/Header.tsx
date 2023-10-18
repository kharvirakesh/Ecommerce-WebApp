import React from "react";
import { navLinks } from "@/constants";
import { Button } from "antd";
import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import styles from "../../styles/Layout.module.css";
import { useRouter } from "next/router";
import { Url } from "next/dist/shared/lib/router/router";

interface IHeaderProps {}

export const Header = ({}: IHeaderProps) => {
  const router = useRouter();

  const handleRoute = (routePath: Url) => {
    router.push(routePath);
  };

  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.navbar}>
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
                        <span onClick={() => handleRoute(routePath)} className={styles.navLinkStyle}>
                          {title}
                        </span>
                      </>
                    ) : (
                      <>
                        <Button type="primary" className={styles.headerButton}>
                          {title}
                        </Button>
                      </>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </nav>
    </div>
  );
};
