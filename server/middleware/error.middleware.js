const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "An unexpected error occurred" });
};

export default errorHandler;
