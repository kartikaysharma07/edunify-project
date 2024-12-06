import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ShowSchools() {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        const fetchSchools = async () => {
            const response = await axios.get('/api/getSchools');
            setSchools(response.data);
        };

        fetchSchools();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schools.map(school => (
                <div key={school.id} className="p-4 border">
                    <img src={school.image} alt={school.name} className="w-full h-48 object-cover" />
                    <h3>{school.name}</h3>
                    <p>{school.address}</p>
                    <p>{school.city}</p>
                </div>
            ))}
        </div>
    );
}
