import { useContext, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../contexts/CartContext";

const clearBuyer = { name: "", phone: "", email: "" };

export const Cart = () => {
    const [buyer, setBuyer] = useState(clearBuyer);
    const { clear, items, removeItem } = useContext(CartContext);
    const db = getFirestore(); // Aquí se cambió la posición de la inicialización de 'db'

    const handleSendOrder = () => {
        const order = { buyer, items, total: calculateTotal(items) };
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order)
            .then(({ id }) => {
                alert("Su orden: " + id + " ha sido completada!");
            })
            .finally(() => {
                setBuyer(clearBuyer);
                clear();
            });
    };

    const calculateTotal = (items) => {
        return items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    };

    const handleChange = (ev) => {
        const { name, value } = ev.target;

        setBuyer((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    if (!items.length) return <div>Aun no realizaste ninguna compra</div>;

    return (
        <Container>
            <button onClick={clear}>Vaciar carrito</button>
            <mark>Total de la compra: {calculateTotal(items)}</mark>
            <div className="d-flex">
                {items.map((item) => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <h2>Precio: {item.price}</h2>
                        <h3>Stock: {item.stock}</h3>
                        <h4>Cantidad: {item.quantity}</h4>
                        <p>{item.description}</p>
                        <img src={item.pictureUrl} width="300" />
                        <div onClick={() => removeItem(item.id)}>X</div>
                    </div>
                ))}
            </div>
            <form>
                <div className="input-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        value={buyer.name}
                        onChange={handleChange}
                        required
                        name="name"
                    />
                </div>
                <div className="input-group">
                    <label>Telefono</label>
                    <input
                        type="text"
                        value={buyer.phone}
                        onChange={handleChange}
                        required
                        name="phone"
                    />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={buyer.email}
                        onChange={handleChange}
                        required
                        name="email"
                    />
                </div>
                <button type="button" onClick={handleSendOrder}>
                    Comprar
                </button>
            </form>
        </Container>
    );
};
