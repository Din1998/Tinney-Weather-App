


export default function SearchBar({query,setQuery,search}){

  return(
    <div className="input__comp">
        <input
        className="input"
        type="text" 
        placeholder="Inter Your City Name"
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        />
    </div>
  )
}