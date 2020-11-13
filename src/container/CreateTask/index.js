import React from 'react'
import { Formik, Form, Field } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { taskSchema } from './schema'

const CreateTask = ({ history }) => {
    const handleTask = (values) => {
        const id = uuidv4();
        const { name } = values;

        const taskObj = {
            id,
            name
        };
        const taskArray = JSON.parse(localStorage.getItem("tasks") || "[]");
        if(taskArray.length === 0 ){
            taskArray.push(taskObj);
            localStorage.setItem("tasks", JSON.stringify(taskArray));
            history.push('/list-tasks');
        }else{
            taskArray.push(taskObj);
            localStorage.setItem("tasks", JSON.stringify(taskArray));
            history.push('/list-tasks');
        }
    }
    return (
        <>
            <h1>Ceate Task</h1>
            <Formik
                initialValues={{
                  name: '',
                }}
                validationSchema={taskSchema}
                onSubmit={values => {
                  // same shape as initial values
                  handleTask(values);
                }}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form disabled={isSubmitting}>
                    <div>
                      <div>
                        <Field className="input" type="text" name="name" placeholder="Enter Task" />
                      </div>
                      {errors.name && touched.name ? (
                        <div style={{color: 'red'}}>{errors.name}</div>
                      ) : null}
                    </div>
                    <div>
                      <button type="submit">Save</button>
                    </div>
                  
                  </Form>
                )}
              </Formik>
        </>
    )
}

export default CreateTask;