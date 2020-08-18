import React from 'react'
import PropTypes from 'prop-types'
import QuestionCount from './QuestionCount';
import Question from './Question';
import AnswerOption from './AnswerOption';

const Quiz = props => {

    function renderAnswerOptions(key) {
        return (
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }

    return (
        <div className="w-full rounded p-4 shadow-lg bg-white">
            <div>
                <QuestionCount
                    counter={props.questionId}
                    total={props.questionTotal}
                />
            </div>
            <div className="bg-myColor-first text-gray-100 font-medium mt-4 p-4 rounded-md text-xl text-center">
                <Question content={props.question} />
            </div>
            <div className="mt-4">
                <ul>
                    {props.answerOptions.map(renderAnswerOptions)}
                </ul>
            </div>

        </div>
    )
}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
}

export default Quiz
