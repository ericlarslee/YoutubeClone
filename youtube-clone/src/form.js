import { useState } from 'react';

const useForm = (callback) => {
    const [value, setValue] = useState({});
    
    const handleChange = (event) => {
        event.persist();

        setValue(value => ({...value, [event.target.name]: event.target.value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        callback();
    };
    return { value, handleChange, handleSubmit }
};

export default useForm;