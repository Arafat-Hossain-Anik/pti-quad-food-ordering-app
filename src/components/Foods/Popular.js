import React, { useEffect, useState } from 'react';
import SingleData from './SingleData';
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import DataForm from '../AddData/DataForm';
import useProductsContext from '../../hooks/useProductsContext';

const Popular = () => {
    const { error, foods } = useProductsContext();
    const allFoods = foods?.Items?.filter((food) => food.IsPopular === true);
    const [currentPage, setCurrentPage] = useState(1);
    const [windowWidth, setWindowWidth] = useState([window.innerWidth]);
    const [cardsPerPage, setCardsPerPage] = useState(5);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth([window.innerWidth]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    useEffect(() => {
        if (windowWidth[0] <= 375) {
            setCardsPerPage(2);
        }
        else if (windowWidth[0] <= 640) {
            setCardsPerPage(3);
        }
        else {
            setCardsPerPage(5);
        }
    }, [windowWidth]);
    console.log(windowWidth[0]);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = allFoods?.slice(indexOfFirstCard, indexOfLastCard);
    console.log(indexOfFirstCard, indexOfLastCard);
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
                <h2 className="mt-5 text-2xl font-semibold mb-3">Popular</h2>
                <div className='text-lg font-medium d-flex align-items-center'>
                    <button
                        className='primary-color' data-bs-toggle="modal" data-bs-target="#dataModal"
                    >Add More
                    </button>
                    <button onClick={() => handlePageChange('backward')} disabled={currentPage === 1} ><IoChevronBackOutline /></button>
                    <button onClick={() => handlePageChange('forward')} disabled={indexOfLastCard >= allFoods?.length}><IoChevronForwardOutline /></button>
                </div>
            </div>
            <div className="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-md-start g-2">
                {
                    error ? <h1>Fetching Failed Due to an internel error</h1> :
                        currentCards?.map((food, Id) => <SingleData key={Id} food={food} section={"popular"}></SingleData>)
                }
            </div>


            {/* modal form is here */}
            <DataForm />
        </div>
    );
};

export default Popular;