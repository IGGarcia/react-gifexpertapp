import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const newInputValue = e.target.value;
        setInputValue(newInputValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setCategories(categories => [inputValue, ...categories]);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}