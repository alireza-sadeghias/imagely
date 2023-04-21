import { useEffect, useState } from "react";
import { AuthService } from "../api/services/auth";
import IUser from "../models/user/IUser";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IUser>();
  const [error, setError] = useState<any>();

  const register = (state: IUser) => {
    setIsLoading(true);
    AuthService.register<IUser>(state)
      .then((result) => {
        setData(result.data);
        // router.toLogin()
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Promise.all

  // useEffect(() => {

  //   const interval = setInterval(() => {
  //     register()
  //   }, 5000)

  //   return () => {
  //     clearInterval(interval)
  //   }

  // }, [])

  return { register, isLoading, data, error };
};
