import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummuryCart from '../Shared/NewsSumuryCart/NewsSummuryCart';

const Home = () => {
    const AllNews = useLoaderData()
    return (
        <div>
            <h4>Dragon news Home page length{AllNews.length}</h4>
            {
                AllNews.map(news => <NewsSummuryCart
                    key={news._id}
                    news={news}
                ></NewsSummuryCart>
                )
            }
        </div>
    );
};

export default Home;