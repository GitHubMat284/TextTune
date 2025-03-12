import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

// Create __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up SQLite database connection
const db = new sqlite3.Database(path.join(__dirname, 'user_preferences.db'), (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Database connected!');
  }
});

// Create table if it doesn't exist
db.run(
  'CREATE TABLE IF NOT EXISTS preferences (id INTEGER PRIMARY KEY, username TEXT, preference TEXT)',
  (err) => {
    if (err) {
      console.error('Error creating table:', err);
    }
  }
);

export default db;
