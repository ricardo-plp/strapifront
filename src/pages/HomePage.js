import React from "react";
import axios from "axios";

const url= "http://localhost:1337/api/restaurants?populate=*"

const HomePage = () => {

    const [links, setLinks] = React.useState([]);

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setLinks(response.data.data.attributes.Content);
        });
    }, []);

    return (
        <div>
            {links.map((link) => (
                <li key={link.id}><a className='link' href={link.slug}>{link.Name}</a></li>
            ))}
        </div>
    )

}

export default HomePage