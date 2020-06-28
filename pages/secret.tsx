import { Layout } from '../components/Layout';
import { useGetUser } from '../actions/user';
import { Redirect } from '../components/Redirect';

const secret = () => {
  const { data, loading } = useGetUser();

  if (loading) {
    return <p>Loading ....</p>;
  }

  // if user not found
  if (!data) {
    return <Redirect to='/api/v1/login' />;
  } else {
    return (
      <Layout data={data} loading={loading}>
        <h1>Hello from secret page</h1>
      </Layout>
    );
  }
};

export default secret;
