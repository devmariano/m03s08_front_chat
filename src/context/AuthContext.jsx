import  { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [nickname, setNickname] = useState(null);
  const [selectedContact, setSelectedContact] = useState("Todos"); 

  return (
    <AuthContext.Provider value={{ nickname, setNickname, selectedContact, setSelectedContact }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};