import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdatComponent = () => {
    const [adatok, setAdatok] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/adatok');
                setAdatok(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {adatok.map((adat) => (
                <div key={adat.id}>{adat.name} -- {adat.email}</div>
            ))}
        </div>
    );
};

export default AdatComponent;

if (document.getElementById('example')) {
    ReactDOM.render(<Example/>, document.getElementById('example'));
}
