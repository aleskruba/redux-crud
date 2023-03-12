import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from './counterSlice'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch() 

  const [newValue,setNewValue] = useState(0)

  const addValue = Number(newValue) || 0

function resetFunction() {
    setNewValue(0)
    dispatch(reset())
  }

  function addFunction(){
    dispatch(incrementByAmount(addValue))
    setNewValue(0)
  }
   return (
    <div>
      <button onClick={()=>dispatch(increment())}>
        increment
      </button>
        {count}
      <button onClick={()=>dispatch(decrement())}>
        decrement
      </button>
      
      <br/>
      <input  value={addValue} onChange={e=>setNewValue(e.target.value)}/>
      <button onClick={addFunction}>
        add
      </button>
    <br/>
    <button onClick={resetFunction}>
      resetAll
    </button>
    </div>
   ) 
}