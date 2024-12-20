import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ShowSchools() {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/getSchools');
                setSchools(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Schools List</h1>
            <div className="schools-grid">
                {schools.map((school, index) => (
                    <div key={index} className="school-card">
                        <img src={`/schoolImages/${school.image}`} alt={school.name} />
                        <h3>{school.name}</h3>
                        <p>{school.address}</p>
                        <p>{school.city}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
