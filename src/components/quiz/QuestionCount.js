import React from 'react'
import PropTypes from 'prop-types'

const QuestionCount = props => {
    return (
        <div>
            <em>Pertanyaan {props.counter} dari {props.total}</em>
        </div>
    )
}

QuestionCount.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}

export default QuestionCount
