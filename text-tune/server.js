import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Create __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback for SPA routing: serve index.html for all unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
