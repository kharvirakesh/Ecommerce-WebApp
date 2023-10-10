import { Footer } from "@/component/Footer/Footer";
import { Header } from "@/component/Header/Header";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
<<<<<<< HEAD
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
=======
    <div>
      <Header property1={undefined} property2={undefined} />
      <main>{children}</main>
      <Footer property1={undefined} property2={undefined} />
    </div>
>>>>>>> fb469fdae1964ad3cd8e7e192c2c53b85f85ad2d
  );
};

export default Layout;
