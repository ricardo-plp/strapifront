import axios from 'axios';
import React from 'react';
import './Navbar.css'


const url= "http://localhost:1337/api/navbar?populate=*"

const Navbar = () => {
    const [links, setLinks] = React.useState([]);

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setLinks(response.data.data.attributes.Content);
        });
    }, []);

    return (
        <div className='nav_container'>
            <div className='nav_container_left'>
                <div className='restaurant_logo'>
                    <img  src='' alt='Logo du restaurant' />
                </div>
            </div>
            <div className='nav_container_right'>
                    <ul className="nav_box">
                        {links.map((link) => (
                            <li key={link.id}><a className='link' href={link.slug}>{link.Name}</a></li>
                        ))}
                    </ul>
            </div>
        </div>
    );
};

export default Navbar