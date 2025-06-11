import { useReducer } from 'react'
import './App.css'

//deefibne the counter functio
function counterReducer(state:number,action:{type:string}){
  switch(action.type){
    case 'increment':
      return state + 1
      case 'decrement':
        return state -1
        case 'reset':
          return 0
          default:
            return state
  }
}



function App() {
const [count, dispatch] = useReducer(counterReducer, 0)
  

  return (
    <>

    <div>
      <h2>Counter With UserReducer Hook</h2>
      <p>Count: {count}</p>

      <button 
      onClick={()=>dispatch({type: 'decrement'})}
    
      >Decrement -</button>

      <button style={{marginLeft: 8}}
      onClick={()=>dispatch({type: 'increment'})}
      >Increment +</button>

      
      <button style={{marginLeft: 8}}
      onClick={()=>dispatch({type: 'reset'})}
      
      >Reset</button>
    </div>
   
   
    </>
  );
}

export default App;
