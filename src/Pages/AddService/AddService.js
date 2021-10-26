import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post(`https://enigmatic-fjord-71291.herokuapp.com/services`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added successfully");
                    reset();
                }
            })
    };
    return (
        <div className="add-service">
            <h2>Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder="description" {...register("description")} />
                <input placeholder="price" type="number" {...register("price")} />
                <input placeholder="image" {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;