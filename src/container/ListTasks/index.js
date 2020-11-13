import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 15px;
  font-size: 1em;
  margin: 10px 50%;
  background-color: ${props => props.color};
`;
const ListTasks = () => {
    const [tasks, setTasks] = useState(()=> JSON.parse(localStorage.getItem("tasks") || "[]"));
    const [ ids, setIds ] = useState([]);

    const deleteTask = () => {
        // filter ids with orignal array to delete
        const filterArray = tasks.filter( task => !ids.includes(task.id));
        // set the localStorage
        localStorage.setItem("tasks", JSON.stringify(filterArray));
        // set the orignal array as well
        setTasks(filterArray);
    }
    const taskIds = (id) => {
        // Grab the checkbox that was clicked.
    let checker = document.getElementById(id);
    if (checker.checked) {
      // Add the id to ids-list.
      ids.push(id);
    }
    else {
      // Remove the id from ids-list.
      let index = ids.indexOf(id);
      ids.splice(index, 1);
    }
    }
    return (
        <>
            <h1>List Tasks</h1>
            <Link to="/create-task">Click Here To Create Task</Link> <br/>  <br/>

            <button onClick={deleteTask}>Delete Task</button>
            {
                tasks && tasks.length > 0 ?
                tasks.map((task) => {
                    return (
                        <Card color='brown' key={task.id}>
                            <input onClick={()=> taskIds(task.id)} id={task.id} type="checkbox"/> Name: {task.name}
                        </Card>
                    )
                }) : <p>No Tasks Found!</p>
            }
        </>
    )
}

export default ListTasks;
