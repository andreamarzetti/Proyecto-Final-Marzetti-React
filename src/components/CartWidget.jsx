import { useContext } from "react";
import { Link } from "react-router-dom";

import cart from "../assets/compras.png"
import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce(

    (acumulador, actual) => acumulador + actual.quantity,
    0
  );

  return (
    <Link to="/cart">
      <img src={cart} alt="Carrito" width="40" /> 
      <span>{total}</span>
    </Link>
  );
};