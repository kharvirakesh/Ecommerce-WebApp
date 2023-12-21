import { Header } from "@/component/Header/Header";
import { Modal } from "@/component/Modal/Modal";
import { ReactNode, useState } from "react";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header onSignupClick={openModal} />
      <main>
        {children}
      </main>
      {showModal && <Modal onClose={closeModal} />}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
