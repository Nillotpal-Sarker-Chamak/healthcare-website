import React from 'react';
import notFound from '../../images/404.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notFound} alt="" />
            <Link to="/"><button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;