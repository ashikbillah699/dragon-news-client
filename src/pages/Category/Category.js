import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummuryCart from '../Shared/NewsSumuryCart/NewsSummuryCart';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h4>Categorys News total : {categoryNews.length}</h4>
            {
                categoryNews.map(news => <NewsSummuryCart
                    key={news._id}
                    news={news}
                ></NewsSummuryCart>)
            }
        </div>
    );
};

export default Category;