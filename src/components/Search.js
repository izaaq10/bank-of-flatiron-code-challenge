import React,{useState} from "react";


function Search() {
  const[search, setSearch]= useState("")
  function handleChange(e){
    setSearch(e.target.value)

  }
  return (
    <div className="ui large fluid icon input">
      <input value={search}
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleChange }
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
