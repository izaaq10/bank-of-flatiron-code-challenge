import React, { useState } from "react";

function AddTransactionForm() {
  const [error, setError] = useState(null);

  const handleFormData = async (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.target);
    const data = {
      date: dataForm.get("date"),
      description: dataForm.get("description"),
      category: dataForm.get("category"),
      amount: dataForm.get("amount"),
    };
    try {
      const response = await fetch("http://localhost:8001/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to add transaction");
      }
      // Reset form after successful submission if needed
      event.target.reset();
    } catch (error) {
      setError("Error adding transaction");
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <div className="ui segment">
      {error && <div className="error">{error}</div>}
      <form className="ui form" onSubmit={handleFormData}>
        <div className="inline fields">
          <input type="date" name="date" required />
          <input type="text" name="description" placeholder="Description" required />
          <input type="text" name="category" placeholder="Category" required />
          <input type="number" name="amount" placeholder="Amount" step="0.01" required />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
