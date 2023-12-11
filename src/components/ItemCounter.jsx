import { useState } from "react";

export const ItemCounter = ({ initial, onAdd, stock }) => {
    const [count, setCount] = useState(initial);

    const handleDecreaseCount = () => {
        if (count > 1) setCount((c) => c - 1);
    };

    const handleIncreaseCount = () => {
        if (stock > count) setCount((c) => c + 1);
    };

    const handleAdd =() => {
        onAdd(count);
        setCount(initial);
    };

    return (
        <>
            <br />
            <br />
            <div style={{ display: "flex" }}>
                <div style={{ fontSize: 30 }} onClick={handleDecreaseCount}>
                    -
                </div>
                <mark> {count} </mark>
                <div style={{ fontSize: 30 }} onClick={handleIncreaseCount}>
                    +
                </div>
            </div>
            <br />
            <button onClick={handleAdd}>Agregar al carrito</button>
        </>
    );
};
