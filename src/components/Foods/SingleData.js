import React from 'react';
import './SingleData.css'

const SingleData = (props) => {
    let { Name, ImageUrl } = props.food;
    // if ImageUrl contains https do nothing
    if (ImageUrl.includes('https://')) {

    }
    else {
        //if https not present change the link
        const fileName = ImageUrl.split("\\").pop();
        const newUrl = `https://pti-quad-technical.netlify.app/Resources/Image\\${fileName}`
        ImageUrl = newUrl;
    }
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