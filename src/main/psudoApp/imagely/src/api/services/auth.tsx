import IUser from "../../models/user/IUser"
import API from "../api"
import { Urls } from "../urls"


export namespace AuthService {

  export const register =<T,> (user: IUser) => {
    return API.post<T>(Urls.register, user, {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    })
  }

  export const login = () => {
    return fetch("")
  }

}