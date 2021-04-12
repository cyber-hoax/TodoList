import React, { useEffect } from 'react'
import {Card ,Typography,Checkbox} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { db } from '../Firebease';
import FirebaseLooper from '../tools';






const Cards = ({  todo ,todoId , check}) => {

     const [checked, setChecked] = React.useState(check);
      const toolists = db.collection('tasks').doc(todoId);
        console.log(checked);
    


//     useEffect (() =>{
//              toolists.onSnapshot((snapshot) => {
//              } );
// },[checked])
             
      
    
    

     const handleChange = (event) => {
          console.log(todo);
        
       setChecked(event.target.checked);
  
                 toolists.update({ checked: !checked });

      };
    
     const DeleteSubmitHandler = () => {
        console.log(todoId)
        db.collection('tasks')
        .doc(todoId).delete()
       
         
     };


    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          raised='false'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
            width: '800px',
            height: '50px',
            borderRadius: '7px',
          }}
        >
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'uncontrolled' }}
          />
          <Typography
            style={{ textDecorationLine: check ? 'line-through' : 'none' }}
          >
            {todo}
          </Typography>
          <DeleteIcon onClick={DeleteSubmitHandler} color='primary' />
        </Card>
      </div>
    );
}

export default Cards
