import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './database.js'; // Import the database module

const app = express();
app.use(express.json()); // For handling JSON data

// Create __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// Example route to store a user's preference
app.post('/save-preference', (req, res) => {
  const { username, preference } = req.body;
  db.run(
    'INSERT INTO preferences (username, preference) VALUES (?, ?)',
    [username, preference],
    (err) => {
      if (err) {
        console.error('Error saving preference:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(200).json({ message: 'Preference saved successfully' });
    }
  );
});

// Example route to retrieve user preferences
app.get('/get-preferences', (req, res) => {
  db.all('SELECT * FROM preferences', [], (err, rows) => {
    if (err) {
      console.error('Error fetching preferences:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json(rows);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
