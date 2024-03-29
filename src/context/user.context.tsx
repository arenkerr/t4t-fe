import { ReactNode, createContext, useEffect } from 'react';
import { ApolloError, useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { useNavigate } from 'react-router-dom';

import { User } from '../types/user.types';

const findLoggedInUser = loader('../gql/user/findLoggedInUser.gql');

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<
  | {
      user: User;
      loading: boolean;
      error: ApolloError | undefined;
    }
  | Record<string, never>
>({});

export const UserProvider = ({ children }: UserProviderProps) => {
  const { data, loading, error } = useQuery(findLoggedInUser);
  const navigate = useNavigate();
  const user = data?.findLoggedInUser;

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    }
  }, [data]);

  // TODO
  if (error) return <>oops</>;
  if (loading) return <>loading</>;

  return (
    <UserContext.Provider value={{ user, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
