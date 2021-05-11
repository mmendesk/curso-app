import { Container } from "./index.styles";

function Table() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Nascimento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matheus Mendes</td>
            <td>mmendesk@teste.com</td>
            <td>12/02/1991</td>
          </tr>
          <tr>
            <td>John Deer</td>
            <td>john@email.com</td>
            <td>22/03/1994</td>
          </tr>
          <tr>
            <td>João José</td>
            <td>joao@test@.com</td>
            <td>31/03/1990</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export { Table };
