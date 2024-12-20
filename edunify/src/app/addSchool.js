import { createConnection } from 'mysql2/promise';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, address, city, state, contact, image, email_id } = req.body;

        const connection = await createConnection({
            host: 'localhost',
            user: 'your_mysql_user',
            password: 'your_mysql_password',
            database: 'school_db'
        });

        const [result] = await connection.execute(
            `INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [name, address, city, state, contact, image, email_id]
        );

        connection.end();
        
        res.status(200).json({ message: 'School added successfully!', id: result.insertId });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
