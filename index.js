const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const middleware = require('./middleware');
const api = require('./api');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());

// Routes
app.use('/api/v1/', api);

// Middleware
app.use(middleware.notFound);
app.use(middleware.errorHandler);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
