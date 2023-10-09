import { Footer } from "@/component/Footer/Footer";
import { Header } from "@/component/Header/Header";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div>
      <Header property1={undefined} property2={undefined} />
      <main>{children}</main>
      <Footer property1={undefined} property2={undefined} />
    </div>
  );
};

export default Layout;
