const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running' });
});

//Login endpoint (stubbing)
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ 
      success: false, 
      message: 'Username and password are required' 
    });
  }
  
  res.json({
    success: true,
    message: 'Login successful (stubbed)',
    user: {
      id: '1',
      username: username,
      email: 'user@example.com',
      displayName: 'Test User'
    },
    token: 'dummy-jwt-token-for-testing'
  });
});

//Signup endpoint (stubbing)
app.post('/api/auth/signup', (req, res) => {
  const { username, email, password, displayName } = req.body;
  
  if (!username || !email || !password) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    });
  }
  
  if (!email.includes('@')) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format'
    });
  }
  
  res.json({
    success: true,
    message: 'Signup successful (stubbed)',
    user: {
      id: '2',
      username: username,
      email: email,
      displayName: displayName || username
    },
    token: 'dummy-jwt-token-for-testing'
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});