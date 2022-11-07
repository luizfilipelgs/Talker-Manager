const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.status(401).json({
      message: 'Token não encontrado',
    });
  }
  if (token.length !== 16 || typeof (token) !== 'string') {
    return res.status(401).json({
      message: 'Token inválido',
    });
  }
  next();
};

module.exports = {
  validateToken,
};