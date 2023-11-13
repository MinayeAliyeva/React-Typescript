import React, { useReducer } from "react";

const initialValue = { count: 0 };
//iki type belirlememize sebeb odur ki case resetde payload hatasi verecek ki iki argument gondermelisiz dispatchde bunu payload:0 ile de coze biliriz ama bu iyi bir yol deyil cunki resetleme isleminde deyload kullanmiyoruz bunun icin dayload optional yapdigimizda ? qoyduqda peyloadin olmadigi hallarda undefined + olur bu ise NaN ona gore iki type belirliyoruz payloadin oldugu durum ve payloadsiz durum
type CounterType = {
  count: number;
};
type ActionType = {
  payload: number;
  type: string;
};
type ResetType={
    type:'reset'
}
type CounterAction=ActionType | ResetType
const reducer = (state: CounterType, action: CounterAction) => {
  switch (action.type) {
    case "incriment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialValue;
    default:
      return state;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      sayi: {state.count}
      <button onClick={() => dispatch({ type: "incriment", payload: 15 })}>
        15 artdir
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 15 })}>
        15 azalt
      </button>
      <button onClick={() => dispatch({ type: "reset" ,})}>sifirla</button>
    </div>
  );
};

export default UseReducer;
