import React, { useState, useEffect } from "react";

import GetPassword from "./hooks/GetPassword";

const App = () => {
  const [password, setPassword] = useState("hello");
  const [number, setNumber] = useState(10);
  useEffect(() => {
    generatePassword();
  }, []);
  function generatePassword() {
    let pass;
    pass = GetPassword(number);
    setPassword(pass);
  }

  return (
    <div className="app">
      <main>
        <h1>GENERATE RANDOM PASSWORD</h1>
        <p>{password}</p>
        <div>
          <a onClick={() => generatePassword()}>Generate password</a>
          <input
            type="range"
            min="5"
            max="20"
            onChange={(e) => setNumber(e.target.value)}
          ></input>
        </div>
      </main>
    </div>
  );
};

export default App;
