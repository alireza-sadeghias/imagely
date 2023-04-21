import IUser from "../../../models/user/IUser";

export const initialData: IUser = {
  username: "",
  password: "",
  fullName: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  phone: ""
};

type AppActions = {
  type: "username" | "password";
  payload: string; // ? means "not required"
};

export function appReducer(state: IUser, action: AppActions) {
  switch (action.type) {
    case "username":
      return { ...state, username: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
}
