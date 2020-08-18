import React from 'react'
import PropTypes from 'prop-types'

const Question = (props) => {
    return (
        <div>
            {props.content}
        </div>
    )
}

Question.propTypes = {
    content: PropTypes.string.isRequired
}

export default Question
