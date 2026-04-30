import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <div className="searchBar"
    style={{display:'flex', backgroundColor: '#F5F5F5'}}>
        <input type="text" placeholder="Search" 
        style={{border: '0 none',backgroundColor: '#F5F5F5', padding: '5px'}}></input>
        <button
        style={{border: '0 none', backgroundColor: '#F5F5F5', cursor: 'pointer'}}><SearchIcon /></button>
    </div>
  )
}

export default SearchBar