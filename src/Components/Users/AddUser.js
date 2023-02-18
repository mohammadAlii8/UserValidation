import React from 'react';

const AddUser = () => {
    const addUserHandler = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' />
            <label htmlFor="age">Age (years)</label>
            <input type="number" id='age' />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;