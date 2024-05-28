import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 5500;

app.use(cors());
app.use(bodyParser.json());

// Ensure the submissions directory exists
const submissionsDir = path.join(__dirname, 'submissions');
if (!fs.existsSync(submissionsDir)) {
  fs.mkdirSync(submissionsDir);
}

app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // Create a file path with a timestamp to avoid collisions
  const filePath = path.join(submissionsDir, `${Date.now()}.json`);
  
  // Write the form data to a file
  fs.writeFile(filePath, JSON.stringify(formData, null, 2), (err) => {
    if (err) {
      console.error('Failed to save submission:', err);
      return res.status(500).json({ message: 'Failed to save submission', error: err });
    }
    res.status(200).json({ message: 'Submission successful' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
