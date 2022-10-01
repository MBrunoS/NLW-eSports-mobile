import React, { createContext, ReactNode, useState } from "react";

export type UserType = {
  avatar: string;
  id: string;
  discriminator: string;
  username: string;
};

interface UserContextProps {
  user: UserType;
  setUser: (user: UserType) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState({} as UserType);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
