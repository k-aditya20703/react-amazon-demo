// import React, { useState } from 'react'

// const Test = () => {
//     const [cartData,setCartData] = useState(
//         [
//             {
//                id: 1002,
//                name : 'iQOO 12 5G',
//                discription : '(Legend, 12GB RAM, 256GB Storage)',
//                img : '/photo/iqoo.jpg',
//                price : 52998,
//                quantity : 1
//             },
//             {
//                 id : 1003,
//                 name : 'ASUS ROG 5s',
//                 discription : '(Phantom Black, 256 GB) (12 GB RAM',
//                 img : '/photo/rog.jpg',
//                 price : 30990,
//                 quantity : 1
//             },
//             {
//                 id : 1004,
//                 name : 'OnePlus 12 ',
//                 discription : '(Silky Black, 12GB RAM, 256GB Storage)',
//                 img : '/photo/oneplus.jpg', 
//                 price: 58999,
//                 quantity : 1
//             },
//             {
//                 id : 1005,
//                 name : 'ASUS ROG 5s',
//                 discription : '(Phantom Black, 256 GB) (12 GB RAM',
//                 img : '/photo/rog.jpg',
//                 price : 30990,
//                 quantity : 1
//             },
//             {
//                 id : 1006,
//                 name : 'OnePlus 12 ',
//                 discription : '(Silky Black, 12GB RAM, 256GB Storage)',
//                 img : '/photo/oneplus.jpg', 
//                 price : 58999,
//                 quantity : 1
//             }
//         ]
//     )
//     const handleTest = ()=>{
//         // setCartData([...cartData, {
//         //     "id": 1002,
//         //     "name" : 'i-phone',
//         //     "discription" : '(Legend, 12GB RAM, 256GB Storage)',
//         //     "img" : '/photo/iqoo.jpg',
//         //     "price" : 101010,
//         //     "quantity" : 1
//         // }])
//         setCartData(
//             cartData.map((cart)=>{
//                 return(
//                     cart.id === 1002 ? { ...cart,
//                             name : 'i-phone',
//                             price : 101010
//                         }:cart
//                 )
//             })
//         )
        
//         // setTodos((prevState) => {
//         //     let result = [...prevState, newItem ] ;
//         //     return result;
//         //    });

//   return (
//     <div>
//       <h1>test</h1>
//       <button onClick={handleTest}>test</button>
//       {cartData.map((cart)=>{
//         return(
//             <>
//             <p>{cart.id}</p>
//             <p>{cart.name}</p>
//             <p>{cart.discription}</p>
//             <p>{cart.img}</p>
//             <p>{cart.price}</p>
//             </>
//         )
//       })}
      
//     </div>
//   )
// }

// export default Test
