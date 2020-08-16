import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <div>
            <Link to={props.link}>
                <button className="btn-list hover:text-red-700">
                    {props.listName}
                </button>
            </Link>

        </div>
    )
}

export default Button
