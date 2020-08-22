import React from 'react'
import { Link } from 'react-router-dom'

const MateriComp = (props) => {
    return (
        <div className="w-full rounded p-6 shadow-md">
            <div className="bg-myColor-second text-gray-100 text-lg font-medium p-3 mb-6 rounded-md" >
                {props.title}
            </div>
            <div className="w-full flex justify-center mb-6">
                <div className="max-w-lg">
                    <img src={props.image} alt="" />
                </div>
            </div>
            {props.content}
            <div className="flex mt-6 justify-center">
                <div>
                    <Link to={props.prevLink}>
                        <button className="btn-prev-next rounded-l">
                            Prev
                    </button>
                    </Link>
                </div>
                <div>
                    <Link to={props.nextLink}>
                        <button className="btn-prev-next rounded-r">
                            Next
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MateriComp
