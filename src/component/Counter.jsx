import React, {useState} from 'react'
// let counter = 0;
const Counter = () => {
    
    const [counter,setCount] = useState(0)

   const inputcount = () => {
      //  SharedWorker()
    setCount(counter*2)
       
   }
  return (
    <>
     <div>
    <text style={{color:counter%2 === 0 ? "green" : "red"}}>{counter}</text>
    </div>

    <button onClick={() => {setCount(counter+1)}}>Increament</button>
    <button onClick={() => {setCount(counter-1)}}>Decreament</button>
    <button onClick={inputcount}>Double</button>
    </>
  )
}

export default Counter