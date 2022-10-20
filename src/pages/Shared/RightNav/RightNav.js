import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTwitch, FaWhatsapp, FaDiscord, } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BandCarousal from '../BrandCarousal/BandCarousal';



const RightNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-3 rounded-1' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button className='mb-4 rounded-1' variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3 border rounded-1'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3 border rounded-1'><FaInstagram></FaInstagram> Instragram</ListGroup.Item>
                    <ListGroup.Item className='mb-3 border rounded-1'><FaYoutube></FaYoutube>Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-3 border rounded-1'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3 border rounded-1'><FaTwitch></FaTwitch>Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3 border rounded-1'><FaWhatsapp></FaWhatsapp>Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-3 border rounded-1'><FaDiscord></FaDiscord>Discord</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BandCarousal></BandCarousal>
            </div>
        </div>

    );
};

export default RightNav;