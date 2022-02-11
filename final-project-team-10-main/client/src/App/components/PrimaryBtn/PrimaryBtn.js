import React from 'react'
import "./primary-btn.scss";
const PrimaryBtn = ({text}) => {
    return (
        <button className="primary-btn">
            {text}
        </button>
    )
}

export default PrimaryBtn
