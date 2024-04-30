import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";


function AccountContainer() {
  return (
    <div>
      <Search />
      
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;
