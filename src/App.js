
import { useState } from 'react';
import './App.css';

function App() {
  var d = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [removed, setRemoved] = useState([])
  return (
    <div className="app">
      <div className='cols'>
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's {days[d.getDay()]} 🌝☕ </h2>
        </div>
        <div className='input'>
          <input value={todo} onChange={(e) => setTodo(e.target.value)} type='text' placeholder='🖊️ Add item...' />
          <i onClick={() => setTodos([...todos, { id: Date.now(), text: todo, status: false }])} className="fas fa-plus"></i>
        </div>
        {todos.map((obj) => {
          return (
            <div className='todos'>
              <div className='todo'>
                <div className='left'>
                  {/* <input onChange={(e) => {
                  console.log(e.target.checked)
                  console.log(obj)
                  // setTodos(todos.filter(obj2 => {
                  //   if (obj2.id === obj.id) {
                  //     obj2.status = e.target.checked
                  //   }
                  //   return obj2
                  // }))
                }}
                  value={obj.status} type='checkbox' name='' id='' /> */}
                  <p> {obj.text}</p>

                </div>
                <div className='right'>
                  <i onClick={() => {
                  
                    setRemoved((removed) => [...removed, obj]);
                    setTodos(todos.filter(obj2 => {
                      if (obj2.id !== obj.id) {
                        return obj2;
                      }
                      return null; 
                    }))
                  }



                  } className="fas fa-times"></i>
                </div>
              </div>
            </div>
          )
        })
        }
        {/* {
          todos.map((obj)=>{
            if(obj.status){
              return (<h1>{obj.text}</h1>)
            }
            return null
          })
        } */}

      </div>

      <div className='cols'>
        <div className="mainHeading">
          <h1>Cancled ToDos</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2> Can't Do Right now </h2>
        </div>

        {removed.map((obj) => {
          return (
            <div className='todos'>
              <div className='todo'>
                <div className='left'>
                  <p> {obj.text}</p>
                </div>
                <div className='right'>
                  
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  );
}

export default App;
