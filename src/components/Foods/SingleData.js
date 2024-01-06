import React from 'react';
import './SingleData.css'

const SingleData = (props) => {
    const { Name, ImageUrl } = props.food;
    return (
        <div className="card-container">
            <div className="card-data-container" style={{ background: "None", border: "None" }}>
                <img src={ImageUrl} className="card-img-top card-image" alt={Name} />
                <div className="text-center mt-1">
                    <h5 className='font-semibold'>{Name}</h5>
                </div>
            </div>
        </div>
    );
};

export default SingleData;