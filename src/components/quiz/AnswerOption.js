import React from 'react'
import PropTypes from 'prop-types'

const AnswerOption = props => {
    return (
        <li className="mb-2">
            <input
                type="radio"
                className="radioCustomButton"
                name="radioGroup"
                checked={props.answerType === props.answer}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
            />
            <label className="ml-2 p-2 mb-2 border border-myColor-first bg-myColor-fourth rounded-md text-myColor-first font-medium hover:bg-myColor-first hover:text-gray-100 cursor-pointer inline-block w-1/2 lg:w-1/4" htmlFor={props.answerType}>
                {props.answerContent}
            </label>
        </li>
    )
}

AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
}

export default AnswerOption
