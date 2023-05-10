import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, est. Est perferendis debitis vel. Cupiditate accusantium perspiciatis nam praesentium. Qui, sint perferendis. Cum soluta impedit similique laborum voluptas ad tenetur.</p>
            <p>Go back to <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Terms;