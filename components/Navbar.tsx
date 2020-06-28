import Link from 'next/link';

export const Navbar = ({ user, loading }) => {
  return (
    <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>
      <Link href='/'>
        <a className='my-0 mr-md-auto font-weight-normal'>Next-Auth0</a>
      </Link>
      <nav className='my-2 my-md-0 mr-md-3'>
        <Link href='/'>
          <a className='p-2 text-dark'>Home</a>
        </Link>
        <Link href='/about'>
          <a className='p-2 text-dark'>About</a>
        </Link>

        {!loading && (
          <>
            {user && (
              <>
                <Link href='/secret'>
                  <a className='p-2 text-dark'>Secret</a>
                </Link>
                <Link href='/api/v1/logout'>
                  <a className='p-2 text-dark'>Logout</a>
                </Link>
              </>
            )}
            {!user && (
              <Link href='/api/v1/login'>
                <a className='p-2 text-dark'>Login</a>
              </Link>
            )}
          </>
        )}
      </nav>
    </div>
  );
};
