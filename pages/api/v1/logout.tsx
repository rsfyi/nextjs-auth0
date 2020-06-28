import auth0 from '../../../utils/auth0';

const Logout = async (req, res) => {
  try {
    await auth0.handleLogout(req, res);
  } catch (err) {
    res.status(err.status || 400).end(err.message);
  }
};

export default Logout;
