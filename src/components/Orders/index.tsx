import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "637580537eb77e1b40684dfe",
    table: "123",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Pizza Quatro Queijos",
          imagePath: "1668642019791-quatro-queijos.png",
          price: 40,
        },
        quantity: 3,
        _id: "637580f1e2e9ce908822544d",
      },
      {
        product: {
          name: "Coca Cola",
          imagePath: "1668642887334-coca-cola.png",
          price: 7,
        },
        quantity: 2,
        _id: "637580f1e2e9ce908822544e",
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕒" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👩🏻‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto" orders={[]} />
    </Container>
  );
}
