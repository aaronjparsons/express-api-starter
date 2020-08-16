function notFound(req, res, next) {
  res.status(404);
  res.json({
    error: `Not Found - ${req.originalUrl}`
  });
}

function errorHandler(err, req, res, next) {
  res.status(500);
  const response = {
    error: err.message
  }
  if (process.env.NODE_ENV !== 'production') {
    response.stack = err.stack
  }
  res.json(response);
}

module.exports = {
  notFound,
  errorHandler
};