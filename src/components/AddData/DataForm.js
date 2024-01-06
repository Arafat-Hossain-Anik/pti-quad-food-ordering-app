import React from 'react';
import './DataForm.css'
import { useForm } from 'react-hook-form';
import useProductsContext from '../../hooks/useProductsContext';
import $ from 'jquery';
window.jQuery = $;
const DataForm = () => {
    const { setFoods, foods } = useProductsContext();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const Items = [...foods.Items, data];
        const TotalCount = Items.length;
        setFoods({ Items, TotalCount })
        reset()
        alert('Data Added Successfully')
        $('#dataModal').modal('hide');
    };
    return (
        <div>
            <div className="modal fade" id="dataModal" tabIndex="-1" aria-labelledby="dataModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-center" id="dataModalLabel">Add More Food</h1>
                            <button type="button" className="primary-color font-semibold" data-bs-dismiss="modal" aria-label="Close" style={{ height: "20px", width: "20px" }}>X</button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="Name" className="col-form-label">Food Name:</label>
                                    <input type="text" className="form-control" id="Name" {...register("Name", { required: true })} />
                                    {errors.Name && <span>This field is required</span>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Price" className="col-form-label">Price:</label>
                                    <input type="number" className="form-control" id="Price" {...register("Price", { required: true })} />
                                    {errors.Price && <span>This field is required</span>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ImageUrl" className="col-form-label">Image Url:</label>
                                    <input type="text" className="form-control" id="ImageUrl" {...register("ImageUrl")} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="IsPopular" className="col-form-label">Is Popular:</label>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        style={{ marginTop: "0.8rem", marginLeft: "10px" }}
                                        id="IsPopular"
                                        {...register("IsPopular")}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="IsRecommended" className="col-form-label">Is Recommended:</label>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        style={{ marginTop: "0.8rem", marginLeft: "10px" }}
                                        id="IsRecommended"
                                        {...register("IsRecommended")}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button
                                        className='btn btn-warning' data-bs-dismiss="modal"
                                    >Close
                                    </button>
                                    <input className='form-submit' type="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataForm;