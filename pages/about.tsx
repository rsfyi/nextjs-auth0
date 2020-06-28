import { Layout } from '../components/Layout';
import { useGetUser } from '../actions/user';

const about = () => {
  const { data, loading } = useGetUser();
  return (
    <Layout data={data} loading={loading}>
      <h1>Hello from About Page</h1>
      {/* {loading && <p>Loading...</p>}
      {data && <h1>Hello from about {data.email}</h1>} */}
    </Layout>
  );
};

export default about;

// const { data, loading } = useGetUserById();
//   return (
//     <Layout data={data} loading={loading}>
//       {loading && <p>Loading...</p>}
//       {data && <h1>Hello from about {data.email}</h1>}

//       {error && <div>found error api- {error.message}</div>}
//     </div>
