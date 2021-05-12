import { Container } from "./styles";

export function TransactionsTable() {
    return(
        <Container>
            <table>
                <thead>
                  <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categorias</th>
                    <th>Data</th>
                  </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Salário</td>
                        <td className="deposit">R$ 1.000,00</td>
                        <td>Entrada</td>
                        <td>11/05/2021</td>
                    </tr>

                    <tr>
                        <td>Conta de Luz</td>
                        <td className="withdraw">- R$ 100,00</td>
                        <td>Casa</td>
                        <td>11/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
};