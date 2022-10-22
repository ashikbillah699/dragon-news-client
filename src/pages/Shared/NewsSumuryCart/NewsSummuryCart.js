import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummuryCart = ({ news }) => {
    const { details, title, image_url, author, rating, total_view } = news;
    console.log(news);
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between'>
                <div className='d-flex'>
                    <Image
                        src={author.img}
                        style={{ height: '60px' }}
                        roundedCircle
                    ></Image>
                    <div className='ms-2'>
                        <p className='mb-1'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaBookmark className='me-2'></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length > 250 ?
                        <p>{details.slice(0, 250) + '...'}<Link to={`/news/${news._id}`}>Read more</Link></p>
                        :
                        <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div>
                    <FaStar className='me-2 mb-1'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2 mb-1'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummuryCart;