import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { HeaderCourse } from "./components/HeaderCourse";
import { GlobalStyle } from "./styles/global";
import { NewModal } from "./components/Modal";
import { ModalCourse } from "./components/ModalCourse";

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  const [course, setCourse] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNEwTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  function handleCourse() {
    setCourse(true);
  }

  function handleCloseCourse() {
    setCourse(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <HeaderCourse onOpenNewCourse={handleCourse} />
      <GlobalStyle />
      <NewModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNEwTransactionModal}
      />
      <ModalCourse isOpen={course} onRequestClose={handleCloseCourse} />
      <Dashboard />
    </>
  );
}

export { App };
