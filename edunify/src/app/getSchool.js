import { createConnection } from 'mysql2/promise';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const connection = await createConnection({
            host: 'localhost',
            user: 'your_mysql_user',
            password: 'your_mysql_password',
            database: 'school_db'
        });

        const [rows] = await connection.execute(`SELECT name, address, city, image FROM schools`);
        connection.end();

        res.status(200).json(rows);
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
