import React from "react";

const SearchBar = (props) => {
  const [term,setTerm] = React.useState('');

  const handleChange= (e)=>{
    setTerm(e.target.value);
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    props.onSubmit(term);
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <label htmlFor="searchBar">
          <h1>Seach Images</h1>
          <div className="ui input fluid icon">
            <input type="text" name="searchBar" id="searchBar" value={term} onChange={handleChange}/>
            <i className="search icon"></i>
          </div>
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
