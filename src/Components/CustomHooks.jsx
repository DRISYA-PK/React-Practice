import React from 'react'
import useFetch from './useFetch'

const CustomHooks = () => {
  const data=useFetch('https://json-generator.com/')
  return (
    <div>{data.length}</div>
  )
}

export default CustomHooks