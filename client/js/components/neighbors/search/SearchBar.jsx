import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({
    value,
    onChange,
}) {
    return <div className='control has-icons-left'>
        <input
            className='input is-large search-bar'
            type='text'
            value={value}
            placeholder='Search by name'
            onChange={onChange}
            autoComplete='off'
        />
        <span className='icon is-left'>
            <i className='fa fa-search' />
        </span>
    </div>;
}

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
