import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTwitch, FaWhatsapp, FaDiscord, } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BandCarousal from '../BrandCarousal/BandCarousal';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../AuthProvider/AuthProvider';



const RightNav = () => {
    const googleProvider = new GoogleAuthProvider();
    const { providerLogin } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('error', error);
            })
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleLogin} className='mb-3 rounded-1' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
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