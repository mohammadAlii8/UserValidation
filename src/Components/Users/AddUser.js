import React, { useState } from 'react';


import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';


const AddUser = () => {

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");


    const addUserHandler = (e) => {
        e.preventDefault()
        console.log(enteredUsername, enteredAge)
    };
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)


    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (years)</label>
                <input type="number" id='age' onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;