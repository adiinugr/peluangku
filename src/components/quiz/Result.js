import React from 'react';
import PropTypes from 'prop-types';

import Sad from '../quiz/result/Sad'
import Happy from '../quiz/result/Happy'

function Result(props) {
    return (
        <div
            className="container result"
            component="div"
        >
            {props.quizResult < 2 ? <Sad benar={props.quizResult} /> : <Happy benar={props.quizResult} />}
        </div>
    );
}

Result.propTypes = {
    quizResult: PropTypes.number.isRequired
};

export default Result;