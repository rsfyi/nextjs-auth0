import { Navbar } from './Navbar';

export const Layout = ({ children, data, loading }) => {
  return (
    <>
      <Navbar user={data} loading={loading} />
      <div className='container'>{children}</div>
    </>
  );
};
