import React, { useState, useEffect } from 'react';

function App() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        // Fetch patients data from Django API
        fetch('/api/patients/')
            .then(response => response.json())
            .then(data => setPatients(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Emergency App</h1>
            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>{patient.name} - {patient.sickness_status}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
