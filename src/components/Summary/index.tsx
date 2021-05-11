import { Container } from "./index.styles";

function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Novos Alunos</p>
        </header>
        <strong>3</strong>
      </div>
      <div>
        <header>
          <p>Saídas de Alunos</p>
        </header>
        <strong> - 1</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
        </header>
        <strong>347</strong>
      </div>
    </Container>
  );
}

export { Summary };
