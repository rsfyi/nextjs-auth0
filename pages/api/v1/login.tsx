import auth0 from '../../../utils/auth0';

const login = async (req, res) => {
  try {
    await auth0.handleLogin(req, res);
  } catch (err) {
    res.status(err.status || 400).end(err.message);
  }
};

export default login;
