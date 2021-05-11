import logoImg from "../../assets/logo.png";
import { Container, Content } from "./index.styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Novo Aluno
        </button>
      </Content>
    </Container>
  );
}

export { Header };
