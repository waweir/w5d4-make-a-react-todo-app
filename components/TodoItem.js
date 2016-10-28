import React, { Component } from 'react'

const TodoItem = (props) => (
    <div className='row todoItem flex animated fadeInDown'>
        <div className='col-xs-8'>{props.data}</div>
        <div className='col-xs-4 text-right'>
            <div className="complete button"></div>
            <div className="remove button"></div>
        </div>
    </div>
)

export default TodoItem
