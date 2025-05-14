import React, { useMemo } from 'react'
import { useState } from 'react'

export const Search = () => {
  const [searchValue,setSearchValue]=useState('')
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
   { id: 4, name: "ALarlie" },
    { id: 5, name: "ALLarlie" }
  ];
  const [searchResult,getSearchResult]=useState([])
  // ... imagine 1000 more users

const getValue=()=>{
  const user=users.filter((value)=>value.name.toLowerCase().startsWith(searchValue.toLowerCase()));
 getSearchResult(user)
  console.log("searchResult")
  //return user;
}
  return (
    <>
    <div className='flex space-x-7 m-8' >
      <p className=''>enter search value </p>
      <input placeholder='search here' type='text' 
      className='border p-1 rounded-2xl ' onChange={(e)=>{setSearchValue(e.target.value)}} />
      <button className='bg-amber-200 rounded-2xl w-15' onClick={getValue}>search</button>
      </div>
      <p className='space-x-7 m-8'> you entered value is ..... {searchValue}</p>
      {searchResult.map((value)=>(<p key={value.id}>{value.name}</p>))
      }
      </>
  )
}
