import React,{useState} from "react";


function Search({onSearch}) {
  const[search, setSearch]= useState("")
  function handleChange(e){
    const searchText = e.target.value;
    setSearch(searchText);
    onSearch(searchText);
  }
  return (
    <div className="ui large fluid icon input">
      <input value={search}
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(handleChange) => console.log("Searching...")}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
