import React from "react";

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem("counterStorage");
  console.log(storage);
  if (storage) return JSON.parse(storage).count;
  return { count: 0 };
};

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: getStateFromLocalStorage(),
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

    //using props
    this.incrementUsingProps = this.incrementUsingProps.bind(this);
    this.decrementUsingProps = this.decrementUsingProps.bind(this);

    this.incrementFromLocalStorage = this.incrementFromLocalStorage.bind(this);
    this.decrementFromLocalStorage = this.decrementFromLocalStorage.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrementUsingProps() {
    const { min, step } = this.props;
    this.setState((s) => {
      if (s.count <= min) return;
      return { count: s.count - step };
    });
  }

  incrementUsingProps() {
    const { max, step } = this.props;
    this.setState((c) => {
      if (c.count >= max) return;
      return { count: c.count + step };
    });
  }

  decrement() {
    //Tambahkan batasan count === min, menggunakan props
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({ count: 0 });
  }

  incrementFromLocalStorage() {
    this.setState(
      (state, props) => {
        const { max, step } = props;
        if (state.count >= max) return;
        return { count: state.count + step };
      },
      //Fungsi callback -> componentDidMount
      () => {
        localStorage.setItem("counterStorage", JSON.stringify(this.state));
        console.log("After", localStorage);
      }
    );
  }

  decrementFromLocalStorage() {
    this.setState(
      (state, props) => {
        const { min, step } = props;
        if (state.count <= min) return;
        return { count: state.count - step };
      },
      //Fungsi callback -> componentDidMount
      () => {
        localStorage.setItem("counterStorage", JSON.stringify(this.state));
        console.log("After", localStorage);
      }
    );
  }
  render() {
    return (
      <div className="Counter">
        <p className="count">{this.state.count}</p>
        <section className="controls">
          <button onClick={this.incrementFromLocalStorage}>Increment</button>
          <button onClick={this.decrementFromLocalStorage}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default CounterClass;
