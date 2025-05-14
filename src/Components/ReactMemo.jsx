import React, { memo, useState } from 'react'

const ChildComponent=memo(({count})=>{
  console.log("childrendered");
  return(
  <div>
    <p>child count is {count}</p>
  </div>
  );
});


const ReactMemo = () => {
   const[parentcount,setParentcount]=useState(0);
    const[count,Setcount]=useState(0);
  return (
   

    <div>
      <button className='border-2' onClick={()=>{setParentcount(parentcount+1)}}>parent</button>
      <br/>
            <button  className='border-2' onClick={()=>{Setcount(count+1)}}>child</button>
            <br/>
            <ChildComponent count={count}></ChildComponent>
       
    </div>
  )
}

export default ReactMemo