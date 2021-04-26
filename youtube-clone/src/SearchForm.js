import React, { Component, useState, useEffect } from 'react';
import useForm from './form';

const SearchForm = () => {
    const { value, handleChange, handleSubmit } = useForm(search);

    function search(){
        console.log(value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Search:
                    <input
                    type='text'
                    name='video_query'
                    onChange={handleChange}
                    required={true}
                    />
                </label>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchForm;