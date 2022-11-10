import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Profile } from "src/models/profile/profile";
import { getProfile } from "src/services/auth";
import JwtProvider from "src/utils/jwt";

interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  checkAuth: VoidFunction;
  onLogout: VoidFunction;
  profile: Profile;
  setProfile: Dispatch<SetStateAction<Profile>>;
}

export const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  checkAuth: () => {},
  onLogout: () => {},
  profile: {} as Profile,
  setProfile: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState<Profile>({} as Profile);

  const checkAuth = useCallback(async () => {
    const token = JwtProvider.getToken();

    if (token) {
      setIsAuthenticated(true);
    } else {
      const success = await JwtProvider.getRefreshToken();
      if (success) {
        setIsAuthenticated(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      getProfile()
        .then((result) => {
          const { status, data } = result;
          if (status === 200) {
            setProfile(data.user);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isAuthenticated]);

  const onLogout = () => {
    JwtProvider.deleteToken();
    setIsAuthenticated(false);
  };

  const authContextData = {
    isAuthenticated,
    setIsAuthenticated,
    checkAuth,
    onLogout,
    profile,
    setProfile,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
