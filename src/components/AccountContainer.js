import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


function AccountContainer() {
  const[search, setSearch]=useState("")
  const searchText = e.target.value;
  setSearch(searchText);
  

  return (
    <div>
      <Search mySearch={handleSearch}/>
      <AddTransactionForm/>
      <TransactionsList search={search} />
    </div>
  );
}

export default AccountContainer;
