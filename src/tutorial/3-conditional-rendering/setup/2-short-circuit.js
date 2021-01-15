import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setisError] = useState(false);

  return (
    <>
      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => setisError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>ther is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
