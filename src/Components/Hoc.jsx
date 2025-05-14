import React from 'react'

const ResutHoc=(Component)=>{
  let value=11;
  return function()
  {
    if(value===10)
    {
    return  <p className='bg-amber-700'> your age is below 19</p>
    }
    else
    {
    return <Component></Component>
    }
  }

}
const Success=()=>{
  return (
  <>
  <div className='bg-amber-300'>
    <p> your page is ready</p>
  </div>
  </>
  );
};


const Hoc =ResutHoc(Success) 

export default Hoc