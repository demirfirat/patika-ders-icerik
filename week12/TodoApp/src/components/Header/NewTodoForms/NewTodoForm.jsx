import React from "react";
import {Formik, Field, Form} from "formik";
import { useTodo } from "../../../contexts/TodoContext";

function NewTodoForm() {
    const {addTodo} = useTodo();

    return (
        <Formik
        initialValues={{text: ''}}
        onSubmit={(values, bag) =>{
            addTodo(values.text);
            bag.resetForm();
        }}>
            <Form>
                <Field className="new-todo"
                    placeholder="what needs to be done?"
                    autoFocus
                    id="text"
                    name="text" />
            </Form>

        </Formik>
    )
}

export default NewTodoForm;