import { useNavigate } from "react-router-dom";
import { Urls } from "../api/urls";

export const useRouter = () => {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  };

  const to = (path: "/login" | "/register") => {
    navigate(path)
  }

  return { toLogin, to };
};
