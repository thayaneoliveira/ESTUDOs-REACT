import React from 'react'

const NumberList = ({number}) => {
  //estrutura de loop - for, while
  //metodos de array - filter, map, reduce...
  return <ul>
    {NumberList.map((number) => (
      <li>{number}</li>
    ))}
  </ul>
}

export default NumberList