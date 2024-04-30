import React from "react";
import Transaction from "./Transaction";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import TransactionsList from "./TransactionsList";
function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <Search/>
      <AddTransactionForm/>
      <TransactionsList/>
      <Transaction/>
    </div>
  );
}

export default App;
