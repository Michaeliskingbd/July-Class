import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userProfileImage, setUserProfileImage] = useState(null); //Usestate

  return (
    <AuthContext.Provider value={{ userProfileImage, setUserProfileImage }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useProfileImage = () => useContext(AuthContext);
