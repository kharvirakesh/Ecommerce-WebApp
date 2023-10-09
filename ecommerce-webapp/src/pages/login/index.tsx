import { User } from '@/interfaces/user.interface';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface LoginProps {
  user: User | null;
}

const LoginPage: React.FC<LoginProps> = ({ user }) => {
  return (
    <div>
      <h1>Login Page</h1>
      {user ? (
        <p>Welcome, {user.username}!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<LoginProps> = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  // Implement your authentication logic here
  // For example, check the user's session or fetch data from an API
  const user: User | null = null /* Your authentication logic here */;

  return {
    props: { user },
  };
};

export default LoginPage;
