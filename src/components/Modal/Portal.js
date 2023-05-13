import { createPortal } from "react-dom";
import Modal from "./Modal.js";
import { TopButtonStyle } from "../../styles/TopButtonStyle.js";
import { useState } from "react";

export default function Portal({ restart, setPause }) {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
    setPause(true);
  }

  return (
    <>
      <TopButtonStyle onClick={openModal}>MENU</TopButtonStyle>
      {showModal &&
        createPortal(
            <Modal setPause={setPause} restart={restart} close={() => setShowModal(false)} />,
            document.body)
      }
    </>
  );
}
