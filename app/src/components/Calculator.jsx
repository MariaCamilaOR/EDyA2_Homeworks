import { useState } from "react";
import Button from "./Button";
import "./Calculator.Style.css"; // Estilos ctrl + Click
import { evaluate } from "mathjs"; //npm install mathjs ejecutar eso en consola 

const Calculator = () => {
  const [input, setInput] = useState(""); 
  const [result, setResult] = useState("");

  const ClickBotoncitos = (valor) => { // Los botoncitos
    setInput(input + valor);
    setResult("");
  };

  const Limpiar = () => {// este es el c
    setInput("");
    setResult("");
  };

  const Calcular = () => {// este es el = 
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" readOnly value={input} />
        <div className="result">{result}</div>
      </div>
      <div className="botoncitos">
        <Button onClick={() => ClickBotoncitos("/")}>/</Button>
        <Button onClick={() => ClickBotoncitos("7")}>7</Button>
        <Button onClick={() => ClickBotoncitos("8")}>8</Button>
        <Button onClick={() => ClickBotoncitos("9")}>9</Button>
        <Button onClick={() => ClickBotoncitos("*")}>x</Button>
        <Button onClick={() => ClickBotoncitos("4")}>4</Button>
        <Button onClick={() => ClickBotoncitos("5")}>5</Button>
        <Button onClick={() => ClickBotoncitos("6")}>6</Button>
        <Button onClick={() => ClickBotoncitos("-")}>-</Button>
        <Button onClick={() => ClickBotoncitos("1")}>1</Button>
        <Button onClick={() => ClickBotoncitos("2")}>2</Button>
        <Button onClick={() => ClickBotoncitos("3")}>3</Button>
        <Button onClick={() => ClickBotoncitos("+")}>+</Button>
        <Button onClick={() => ClickBotoncitos("0")}>0</Button>
        <Button onClick={() => ClickBotoncitos(".")}>.</Button>
        <Button onClick={Calcular}>=</Button>
        <Button onClick={Limpiar}>C</Button>
      </div>
    </div>
  );
};

export default Calculator;
