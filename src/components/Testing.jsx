import React, { useState } from 'react';
import { db } from '../Firebease';
import  {TextField, Button, Container ,Typography }from '@material-ui/core'

import '../App.css'

const Testing = () => {
  const [task, setTask] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    db.collection('tasks')
      .add({
        tasks: task,
        checked:false
      })
      .then(() => {
        setTask('');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Typography variant="h3" align="center">To-Do List</Typography>
      <form style={{ display: 'flex', alignItems:"center" ,height:"400px", justifyContent:"center"}}>
        <TextField
          required
          id='outlined-basic'
          label='write the task '
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button
          variant='contained'
          coloe='primary'
          type='submit'
          onClick={submitHandler}
        >
          submit
        </Button>
      </form>
    </Container>
  );
};

export default Testing;
