import React, { useRef, useState , useEffect} from "react";



function ToDo(){
    const [Task, setTask] = useState([])
    const inputRef = useRef(null);
    const [newtask, setnewTask] = useState("")


    useEffect(() => {
        inputRef.current.focus()
    }, [])


    function handleNewTask() {
                
        setnewTask(() => event.target.value)
  }
  
  function handleSetTask() {
    if (newtask.trim()) {
      const newtask2 = {name:newtask , id:crypto.randomUUID()}
      setTask(T => [...T, newtask2])
      inputRef.current.focus();
      setnewTask("")
  }             
  }

  function handleDeleteTask(index) {
    const updatedList = Task.filter((_, i) => i !== index)
    setTask(updatedList)
  }
  function moveTaskup(index) {
    if (index === 0) return;
    
      let tempArr = [...Task];

       [tempArr[index], tempArr[index - 1]] = [
          tempArr[index - 1],
          tempArr[index]
        ];
   
      setTask(tempArr);
  }
  function moveTaskdown(index) {
    let tempArr = [...Task];
    if (index === tempArr.length-1 ) return;

    

    [tempArr[index], tempArr[index +1]] = [
      tempArr[index +1],
      tempArr[index]
    ];

    setTask(tempArr);
  }

  return (   
    <div className="container">
      <h1 className="heading">To Do List</h1>      
      <input        
        id="input-box"       
        type="text"       
        className="input-task"       
        placeholder="Enter task..."      
        value={newtask}    
        onChange={handleNewTask}   
        ref={inputRef}   
      /> 
      <button className="Add-task-button" onClick={handleSetTask}>       
        Add Task       
      </button>
      <div className="tasks-list">        
        <ol>                  
          {Task.map((T, index) => {                       
            return (
              <span key={T.id}>
                <li>
                  <p className="task-text"> {T.name}</p>
                  <button onClick={() => handleDeleteTask(index)}>
                    🗑️ Delete
                  </button>
                  <button
                    onClick={() => moveTaskup(index)}
                    disabled={index === 0}
                  >
                    🔼 UP
                  </button>
                  <button
                    onClick={() => moveTaskdown(index)}
                    disabled={index === Task.length - 1}
                  >
                    🔽 Down
                  </button>
                </li>
              </span>
            );                          
          })}                   
                  </ol>{" "}
                </div>
              </div>
            );
        }

export default ToDo