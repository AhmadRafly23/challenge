import React from "react";

const CounterFunc = ({ max, step, min }) => {
  const [count, setCount] = React.useState(0);
  // const [count, setCount] = useState(0)

  const increment = () => {
    if (count >= max) return alert("item sudah habis");
    return setCount(count + step);
  };

  //Side effect, adalah proses lain yang di jalankan selain proses utama
  React.useEffect(() => {
    //componentDidMount -> untuk update title, sesuai dengan state count
    document.title = `Item ke ${count}`;
  }, [count]); //dependencies, merupaka sesuatu pengubah

  const decrement = () => {
    if (count <= min) return alert("item tidak boleh kurang dari 0");
    return setCount(count - step);
  };
  const reset = () => {
    return setCount(0);
  };

  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default CounterFunc;
