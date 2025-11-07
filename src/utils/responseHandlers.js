const handleSuccess = (res, message, statusCode, data = null) => {
  return res.json({
    status: true,
    message: message,
    statusCode: statusCode,
    data: data,
  });
};
const handleError = (res, message, statusCode = 500, data = null, error) => {
  console.log("error==", error);
  return res.json({
    status: false,
    message: message,
    statusCode: statusCode,
    data: data,
    error: error,
  });
};

export { handleError, handleSuccess };
