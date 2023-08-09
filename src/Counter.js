import React, { useReducer } from "react";
import "./App.css";

const Counter = () => {
  // the reducer function is responsible for updating the state based on the type of action received,
  // it takes 2 arguments - current state and an action object
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-app">
      <h1>Counter app using reducer</h1>
      <p>Count: {state.count}</p>
      <div className="">
        {/* dispatch function is used to send action to the reducer function, takes an object as an argument.
        this object has a type as key that indicates the type of action to be performed */}
        <button
          className="increment-button"
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          Increment
        </button>
        <button
          className="decrement-button"
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;

// how dispatch triggers state update ==
// when we call a dispatch function with an action, react internally calls the reducer function (reducer - in this case) and passes the current
// state and the action object as an argument. the reducer function then evaluates the function type and updates the state accordingly
// For instance, when the "Increment" button is clicked, the action object { type: 'INCREMENT' } is dispatched.
// The reducer function recognizes the action type and returns a new state object with an incremented count.
