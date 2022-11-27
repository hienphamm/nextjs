import jwtDecode, { JwtPayload } from 'jwt-decode';
import { logout, refreshToken } from 'src/services/auth';

const JwtProvider = () => {
  let token: string | null = null;
  let refreshTokenTimeoutId: number | null = null;

  const LOGOUT_EVENT = 'jwt-logout';

  const getToken = () => token;

  const setToken = (accessToken: string) => {
    token = accessToken;

    const decoded = jwtDecode<JwtPayload & { userId: string }>(accessToken);

    setRefreshTokenTimeout(
      Number(decoded.exp as number) - Number(decoded.iat as number)
    );
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('storage', (event) => {
      if (event.key === LOGOUT_EVENT) token = null;
    });
  }

  const abortRefreshToken = () => {
    if (refreshTokenTimeoutId) {
      window.clearTimeout(refreshTokenTimeoutId);
    }
  };

  const deleteToken = () => {
    logout()
      .then((result) => {
        const { status } = result;
        if (status === 200) {
          token = null;
          abortRefreshToken();
          window.location.href = '/';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRefreshToken = async () => {
    let success = false;
    await refreshToken()
      .then((result) => {
        const { status, data } = result;
        if (status === 200) {
          setToken(data.accessToken);
          success = true;
        }
      })
      .catch((err) => {
        console.log(err);
        token = null;
        abortRefreshToken();
      });
    return success;
  };

  const setRefreshTokenTimeout = (delay: number) =>
    (refreshTokenTimeoutId = window.setTimeout(() => {
      void getRefreshToken();
    }, delay * 1000 - 10000));

  return { getToken, setToken, getRefreshToken, deleteToken };
};

export default JwtProvider();
