import React from "react";
<<<<<<< HEAD
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {Array.isArray(navLinks) &&
              navLinks?.map((nav, index) => {
                const { title, routePath } = nav;
                return (
                  <div key={index} style={{ padding: "0px 20px" }}>
                    {title !== "Sign Up" && title !== "Login" ? (
                      <>
                        <span onClick={() => handleRoute(routePath)}>
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
=======

interface IHeaderProps {
  property1: any; // replace any with profer datatype
  property2: any; // replace any with profer datatype
}

export const Header = ({ property1, property2 }: IHeaderProps) => {
  return <div>Header</div>;
>>>>>>> fb469fdae1964ad3cd8e7e192c2c53b85f85ad2d
};
