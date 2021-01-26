import React from 'react';
import PropTypes from 'prop-types';

export const Gif = ({ url, id }) => {
    return (
        <img
            key={id}
            src={url}
            alt=''
        />
    )
}

Gif.propTypes = {
    url: PropTypes.string,
    id: PropTypes.string,
}
