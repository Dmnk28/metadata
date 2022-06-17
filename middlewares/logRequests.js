const logRequests = (req, res, next) => {
  console.log(`method: ${req.method}, path: ${req.path}, body:`, req.body, req.file);
  next();
}

export default logRequests;