const { connectdb } = require('./connect');
const express = require('express');
const app = express();
const signup_controller = require('./controller');
const admin_controller = require('./controller');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Connect to the database
connectdb()
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((err) => {
    console.log(err);
  });

// Signup routes
app.post('/api/signup', signup_controller.insertstd);
app.get('/api/signup/:rollno', signup_controller.getstudent);

// Admin routes
app.post('/api/admins', admin_controller.insertadmin);
app.get('/api/admins/:name', admin_controller.getadmin);

const port = 9900;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
