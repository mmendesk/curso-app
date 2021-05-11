import { Container, Content } from "./index.style";

interface HeaderProps {
  onOpenNewCourse: () => void;
}

function HeaderCourse({ onOpenNewCourse }: HeaderProps) {
  return (
    <Container>
      <Content>
        <button type="button" onClick={onOpenNewCourse}>
          Novo Curso
        </button>
      </Content>
    </Container>
  );
}

export { HeaderCourse };
