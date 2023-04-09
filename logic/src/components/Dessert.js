import React from 'react'

function Dessert(props) {
  const item = props.data.map((e) => {
    const item2 = `${e.name}-${e.calories}`
    return <li key={e.id}>{item2}</li>
  })
  console.log(props.data)
  return (
    <div>
      <ul>{item}</ul>
    </div>
  )
}

export default Dessert
