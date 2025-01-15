import server from 'express';
import userReg from './auth/register_manual.js';
import conn from './DB/db_config.js';
const app = server();
const PORT = 3000;

// This ensures the middleware is invoked correctly
app.use(server.json()); // Make sure body parser middleware is applied

app.post('/auth/register_manual', userReg()); // Call the function here

app.get('/', (req, res) => {
    conn;
    res.send("Database connection.");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
