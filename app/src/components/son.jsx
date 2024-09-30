import React from "react";

// eslint-disable-next-line react/display-name
export const Son = React.memo(({ numero, increment }) => {
  console.log("again reloaded...");

  return (
    <button className="btn btn-primary mr-3" onClick={() => increment(numero)}>
      {numero}
    </button>
  );
});
