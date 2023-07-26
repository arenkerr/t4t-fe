import { ReactNode, createContext } from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

import { User } from '../types/user.types';

const findLoggedInUser = loader('../gql/user/findLoggedInUser.gql');

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<User | null>(null);

export const UserProvider = ({ children }: UserProviderProps) => {
  const { data, error, loading } = useQuery(findLoggedInUser);

  if (loading) return <>loading</>; // TODO: loader and error page
  if (error) return <>oops</>;

  return (
    <UserContext.Provider value={data.findLoggedInUser}>
      {children}
    </UserContext.Provider>
  );
};
