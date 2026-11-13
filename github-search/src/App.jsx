import { useState } from "react";
import "./App.css";
import UserCard from "./UserCard";
function App(){
  const [user,setUser] =useState("");
  const [data,setData] =useState(null);
  const [loading,setLoading] =useState(false);
  const [error,setError] = useState("");
  const [history,setHistory] =useState([]);
  async function handleSearch(){
    if(user.trim()===""){
      setError("Enter  valid user name");
      return;
    }
    try{
    setLoading(true);
    setError("");
    setData(null);
    const responseData = await fetch(`https://api.github.com/users/${user}`);
    // console.log(responseData);
    if(!responseData.ok){
      setError("User not found");
      return;
    }
    const dataSearch = await responseData.json();
    setData(dataSearch);
    setHistory((oldHistory)=>[...oldHistory,user])
    setLoading(false);
    }catch(error){
      setError("Error is found");
    }finally{
       setLoading(false);
    }
  }
  return(
    <div className="app">
      <h1> GitHub User Search</h1>
      <input value={user} placeholder="Enter user name" onChange={(e)=>setUser(e.target.value)}
      onKeyDown={(e)=>{
        if(e.key==="Enter"){
          handleSearch();
        }
      }}/>
      <button disabled={loading} onClick={handleSearch}>{loading ? "Searching...":"Search"}</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data&& <UserCard data={data}/>}
      {history.length>0 && (
        <div className="history">
        <h2> Recent Searches </h2>
        {history.map((name,index)=>(
          <p key={index}>{name}</p>
        ))}
        </div>
      )}
    </div>
  )
}
export default App;