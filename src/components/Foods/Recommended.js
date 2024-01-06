import React, { useState } from 'react';
import SingleData from './SingleData';
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import DataForm from '../AddData/DataForm';
import useProductsContext from '../../hooks/useProductsContext';

const Recommended = () => {
    const { error, foods } = useProductsContext();
    const allFoods = foods?.Items?.filter((food) => food.IsRecommended === true);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 5;
    // Calculate the indexes of the cards to be displayed on the current page
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = allFoods?.slice(indexOfFirstCard, indexOfLastCard);
    console.log(indexOfFirstCard, indexOfLastCard);
    // Change page
    const handlePageChange = (direction) => {
        if (direction === 'forward') {
            setCurrentPage((prevPage) => prevPage + 1);
        } else if (direction === 'backward' && currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };
    return (
        <div>
            <div className='d-flex justify-content-between align-items-baseline'>
                <h2 className="mt-5 text-2xl font-semibold mb-3">Recommended</h2>
                <div className='text-lg font-medium d-flex align-items-center'>
                    <button className='primary-color' data-bs-toggle="modal" data-bs-target="#dataModal">Add More</button>
                    <button onClick={() => handlePageChange('backward')} disabled={currentPage === 1} ><IoChevronBackOutline /></button>
                    <button onClick={() => handlePageChange('forward')} disabled={indexOfLastCard >= allFoods?.length}><IoChevronForwardOutline /></button>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                {
                    error ? <h1>Fetching Failed Due to an internel error</h1> :
                        currentCards?.map((food, Id) => <SingleData key={Id} food={food} section={"recommended"}></SingleData>)
                }
            </div>
            {/* modal form is here */}
            <DataForm />
        </div>
    );
};

export default Recommended;