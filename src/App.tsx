import { useState } from "react";
import CreateTransitionModal from "./components/CreateTransitionModal/CreateTransitionModal";
import Dashdoard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <Header handleOpenModal={handleOpenModal}/>
      <Dashdoard />
      <CreateTransitionModal isOpen={isOpen} onRequestClose={handleCloseModal} />
    </div>
  );
}