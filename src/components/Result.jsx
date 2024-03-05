import React from "react";
import PropTypes from 'prop-types';

const Result = ({value}) => {
    console.log('Result', value)
    return(
       <div className="result">
            {value}
       </div>
    )
}

Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    values: '0'
}

export default Result