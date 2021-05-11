import Modal from "react-modal";
import { Container } from "./index.style";
import closedModal from "../../assets/fechar.svg";
import { useState } from "react";
import { request } from "../../services/request";

interface NewTransaction {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewModal({ isOpen, onRequestClose }: NewTransaction) {
  const [student, setStudent] = useState<string>("");
  const [mail, setMail] = useState<string>("");

  const register = async () => {
    let studentss: any = {
      name: student,
      mail: mail,
    };

    let response = await request({
      method: "POST",
      path: "student",
      data: studentss,
    });

    console.log(response);
  };

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
        <h2>Cadastrar Aluno</h2>

        <input
          type="text"
          placeholder="Aluno"
          onChange={(e: any) => {
            setStudent(e.target.value);
          }}
        />

        <input
          type="email"
          placeholder="E-mail"
          onChange={(e: any) => {
            setMail(e.target.value);
          }}
        />

        <input placeholder="Nascimento" />

        <button type="submit" onClick={register}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}

export { NewModal };
