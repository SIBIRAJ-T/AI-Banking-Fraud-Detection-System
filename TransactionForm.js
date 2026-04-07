import React, { useState } from "react";
import axios from "axios";

function TransactionForm() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:5000/predict", {
      amount: amount,
      location: 1,
      time: 12
    });

    setResult(res.data.fraud ? "Fraud" : "Safe");
  };

  return (
    <div>
      <h2>Check Transaction</h2>
      <input onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleSubmit}>Check</button>
      <h3>{result}</h3>
    </div>
  );
}

export default TransactionForm;