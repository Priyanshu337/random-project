import React, { useState } from 'react'

function TodoList() {

    // const [todo, setTodo] = useState([])
    return (
        <>
            <div className='heading-containers'>
                <h2>Todo-List by Priyanshu</h2>
            </div>
            <div className='main-container'>
                <input type='text' />
                <button>Add</button>
            </div>
        </>

    )
}

export default TodoList