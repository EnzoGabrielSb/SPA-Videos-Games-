const validate = (userData) => {
  let errors = {};

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,35}$/.test(userData.username)) {
    errors.username = "Email invalido";
  }
  if (userData.username.length > 35) {
    errors.username = "El email no puede superar los 35 caracteres.";
  }

  if (!userData.password.match(/\d/)) {
    errors.password = "La contraseña debe contener al menos un numero";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Debe contener entre 6 y 10 caracteres.";
  }

  return errors;
};

export default validate;
