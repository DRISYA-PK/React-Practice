import react, { useState } from 'react'
import { useMemo } from 'react'

const ChildComponent=({count})=>{
const multiplication=useMemo(()=>{
 console.log("child renered");
 return count*count
},[count])

return <div>
  <p> the multiplication is {multiplication}</p>
</div>
}





const Usememo1=()=>{
  const [parentCliccked,setParentClicked]=useState(0);
  const [count,setCount]=useState(0);
  return <div>
<button className='border-4' onClick={()=>{setParentClicked(parentCliccked+1)}}>parent Button</button>
<p>parent clicked {parentCliccked}</p>
<button className='border-4' onClick={()=>{setCount(count+1)}}>count clicked</button>
<p>the count is {count}</p>
<ChildComponent count={count}></ChildComponent>

  </div>
}
export default Usememo1