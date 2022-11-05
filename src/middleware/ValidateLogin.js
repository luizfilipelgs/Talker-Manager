const validateEmail = (req, res, next) => {
  const { email } = req.body;
 
  const valid = email.match(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/);

  if (!email) {
    return res.status(404).json({
      message: 'Email é obrigatorio',
    });
  }
  if (!valid) {
    return res.status(404).json({
      message: 'Email Invalido',
    });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  
  if (!password) {
    return res.status(404).json({
      message: 'Password é obrigatorio',
    });
  }
  
  if (password.length < 6) {
    return res.status(404).json({
      message: 'password Invalido',
    });
  }
  next();
};

module.exports = {
  validateEmail,
  validatePassword,
};
