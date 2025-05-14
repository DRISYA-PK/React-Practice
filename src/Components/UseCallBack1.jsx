import React, { useCallback, useContext, useState } from 'react'


const Child=({updateCount})=>{
  console.log("child rendering")
  return<>
  <div>
    <button onClick={updateCount}> child button</button>
  </div>
  </>;
}


const useCallback1 = () => {
  const [count,setCount]=useState(0);
  const updateCount=useCallback(()=>{
      console.log(count);
    //  return count;
  },[])
  return (



    <div>
      <button onClick={()=>{setCount(count+1)}}>Parent button</button>
      <p>count is {count}</p>
      <Child updateCount={updateCount}></Child>
    </div>
  )
}

export default useCallback1