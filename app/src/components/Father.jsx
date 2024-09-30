import { useState, useCallback } from 'react';
import { Son } from './son';

export const Father = () => {
    const list = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    const increment = useCallback((num) => {
        setValor(valor => valor + num);
    }, []); 

    return (
        <div>
            <h1>Father-Prueba</h1>
            <p>Total: {valor}</p>
            <hr />

            {list.map((n, idx) => (
                <Son key={idx} numero={n} increment={increment} />
            ))}
        </div>
    );
};
