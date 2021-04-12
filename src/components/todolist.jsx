import React, { useState, useEffect } from 'react';
import { db } from '../Firebease';
import FirebaseLooper from '../tools';
import Card from '../components/Card'




const Todolist = () => {
  const [todolist, setTodoList] = useState([]);

  const toolists = db.collection('tasks')
    
  const GetTodo = () => {
    toolists.onSnapshot((snapshot) => {
      const data = FirebaseLooper(snapshot);
      setTodoList(data);
      console.log(data);
    });
  };

  useEffect(() => {
    GetTodo();
  }, []);


  
  return (
    <div>
      <ul>
        {todolist.map((item, i) => (
          // <li key={i} style={{border:"2px solid red" , listStyle:"none"}}>{item.tasks}</li>
          <Card key={i} todo={item.tasks} todoId={item.id} check={item.checked} />
        ))}
      </ul>
      
    </div>

  );
};

export default Todolist;
