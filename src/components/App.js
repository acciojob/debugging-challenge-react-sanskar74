import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  const [count, setCount] = useState(1)

  return (
    <div class="ball">
      <h1 class="count" ondoubleclick={() => alert("cant edit it") }>{count}</h1>
      <button class='increment-button' onclick={() =>  setCount(count + 1) }>Increment</button>
    </div>
  )
}


export default App;