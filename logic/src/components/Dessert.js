// import React from 'react'

// function Dessert(props) {
//   const item = props.data.map((e) => {
//     const item2 = `${e.name}-${e.calories}`
//     return <li key={e.id}>{item2}</li>
//   })
//   console.log(props.data)
//   return (
//     <div>
//       <ul>{item}</ul>
//     </div>
//   )
// }

// export default Dessert
const desserts = [
  {
    title: 'Chocolate Cake',
    description: 'Chocolate cake is a cake flavored with melted chocolate',
    calories: 500,
  }
];
const newDesserts = desserts.map((dessert) => {
  return {
    title: dessert.title.toUpperCase(),
    ...dessert,
    kCal: dessert.calories / 1000,
  };
});
export default  newDesserts