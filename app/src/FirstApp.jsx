import  {useCounter}  from './hooks';

const FirstApp = ({ value }) => {
  const { counter, increment, decrement, reset } = useCounter(value);

  return (
    <>
      <h1>Contador</h1>
      <span>{counter}</span>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default FirstApp;
