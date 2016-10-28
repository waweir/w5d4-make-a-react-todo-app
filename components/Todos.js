import React, { Component } from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    const items = props.data.map((item, i) => {
        return <TodoItem data={item} key={i} />
    })
    return <div>
        {items}
    </div>
}

export default Todos
