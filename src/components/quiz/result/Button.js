import React from 'react'

import ReplayIcon from '@material-ui/icons/Replay';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';

const Button = () => {
    const history = useHistory()

    const onClickButton = () => {
        sessionStorage.clear()
        history.push('/')
    }


    return (
        <div className="mt-4 mb-4 text-center">
            <button className="btn py-3 px-6 text-xs m-6 bg-transparent text-myColor-second border border-myColor-second" onClick={() => window.location.reload(false)} ><ReplayIcon fontSize="small" /> ULANGI</button>
            <button onClick={onClickButton} className="btn py-3 px-6 text-xs m-6 bg-myColor-second text-gray-100"><HomeIcon fontSize="small" /> HOME</button>
        </div>
    )
}

export default Button
