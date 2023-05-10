import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('https://the-news-dragon-server-ashikuzzamanmoon.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h4>All Category</h4>
            {
                categories.map(category => <p key={category.id}> <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link> </p>)
            }
        </div>
    );
};

export default LeftNav;