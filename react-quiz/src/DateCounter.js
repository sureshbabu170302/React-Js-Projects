import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "inc") return state + 1;
  if (action.type === "dec") return state - 1;
  if (action.type === "setCount") return action.payload;
}

function DateCounter() {
  const initailState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initailState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - step);
    dispatch({ type: "dec" });
  };

  const inc = function () {
    // setCount((count) => count + step);
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
    dispatch(0);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
