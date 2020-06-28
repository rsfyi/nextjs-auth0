import { Layout } from '../components/Layout';
import { useGetUser } from '../actions/user';

const Home = () => {
  const { data, loading } = useGetUser();
  return (
    <Layout data={data} loading={loading}>
      <h1>Welcome to Next js App with authentication using auth0</h1>
    </Layout>
  );
};

export default Home;
