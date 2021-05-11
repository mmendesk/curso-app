import { Summary } from "../Summary";
import { Table } from "../Table";
import { Container } from "./index.styles";

function Dashboard() {
  return (
    <Container>
      <Summary />
      <Table />
    </Container>
  );
}

export { Dashboard };
