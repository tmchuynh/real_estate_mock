import { useEffect, useState } from 'react';
import connection from '../database/db';

export default function Users() {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    connection.query('SELECT * FROM properties', (error, results) => {
      if (error) {
        console.error('Error fetching users:', error);
      } else {
        setProperty(results);
      }
    });
  }, []);

  // WOULD BE THE TABLE RENDERING WITH ALL THE INFO FROM THE DATABASE
  return (
    <div>
      <h1>Properties</h1>
      <ul>
        {property.map((item) => (
          <li key={item.id}>{item.address}</li>
        ))}
      </ul>
    </div>
  );
}
