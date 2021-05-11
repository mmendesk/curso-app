import Modal from "react-modal";
import { Container } from "./index.style";
import closedModal from "../../assets/fechar.svg";

interface NewTransaction {
  isOpen: boolean;
  onRequestClose: () => void;
}

function ModalCourse({ isOpen, onRequestClose }: NewTransaction) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="submit"
        onClick={onRequestClose}
        className="react-modal-closed"
      >
        <img src={closedModal} alt=""></img>
      </button>
      <Container>
        <h2>Cadastrar Curso</h2>

        <input placeholder="Título" />

        <input placeholder="Descrição" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

export { ModalCourse };
