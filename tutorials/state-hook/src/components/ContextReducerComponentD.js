import React, { useContext } from "react";
import { CountContext } from "../App";

function ContextReducerComponentD() {
  let countContext = useContext(CountContext);
  return (
    <div>
      Component D : {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>
        Re-set
      </button>
    </div>
  );
}

export default ContextReducerComponentD;
