const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Azure App</title>
      <style>
        body {
          background-color: #f0f4f8;
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          text-align: center;
        }
        h1 {
          color: #2c3e50;
        }
        p {
          font-size: 1.2em;
          color: #34495e;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello from Azure! 🚀</h1>
        <p>This is a beautifully styled Node.js app deployed on Azure Web App.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
