import React, { useEffect, useState } from 'react';

import './App.css';


function App() {
  //------------------------------------------------------------
  const [item, setitem] = useState([])
  //------------------------------------------------------------

  const [filterChange, setfilterChange] = useState("")
  //------------------------------------------------------------

  const callingapi = async () => {
    let getVar = await fetch("https://jsonplaceholder.typicode.com/posts")
    let respond = await getVar.json();
    setitem(respond);
  }

  //-----------------------------------------------------------
    function handleClicked() {
      let eachItem = item.filter((val, ind) => {
        return val.title.includes(filterChange)
      })
      setitem(eachItem)
  
    }

  //------------------------------------------------------------

  function filChange(event) {
    setfilterChange(event.target.value)
  }
  //------------------------------------------------------------

  useEffect(() => {

    callingapi()
  }, [filterChange])

  //------------------------------------------------------------


  return (
    <div className="app">

      <h2>API Call (Fetch Method , Async Await) with React JS</h2>

      <div className="input-get">

        <input type="text"
          value={filterChange}
          onChange={(e) => { filChange(e) }} />
        <button
          onClick={() => {
            handleClicked()
          }}>
          Get</button>

      </div>
      { handleClicked ?  item.map((str, ind) => {
        return (
          <div className="nested" key={ind}>
            <h1>{str.title}</h1>
            <p>{str.body}</p>
          </div>
        )
      }) : ""
    }


    </div>
  );
}

export default App;
