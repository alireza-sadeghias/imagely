import Button from "../../atoms/button";
import Card from "../../atoms/card";
import FormRow from "../../atoms/form-row";
import { AuthService } from "../../../api/services/auth";
import { useRouter } from "../../../hooks/use-navigate";
import { useEffect, useReducer } from "react";
import { appReducer, initialData } from "./reducer";
import { useRegister } from "../../../hooks/user-register";

export default function Register() {
  const router = useRouter();

  const [state, dispatch] = useReducer(appReducer, initialData);

  const {register: registerRequest, isLoading, error, data} = useRegister();

  useEffect(() => {
    if(error) {
      router.toLogin();
    }
  }, [error])

  const register = () => {
    registerRequest(state);
  };

  return (
    <div className="flex h-screen justify-center py-8 font-face">
      <Card className="w-full max-w-sm p-4 bg-blue-50 border border-blue-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-blue-400 dark:border-blue-400">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-blue-900 dark:text-white text-right">
            ورود به ایمیجلی
          </h5> 
          -{JSON.stringify(state)}-

          -{JSON.stringify(isLoading)}-
          -{JSON.stringify(data?.street)}-
          
          <FormRow
            htmlFor="email"
            id="email"
            type="email"
            name="email"
            labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right"
            inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-400 dark:placeholder-gray-600 dark:text-gray-800"
            required={true}
            placeHolder="name@company.com"
            value="ایمیل (نام کاربری)"
            onChange={email => dispatch({ type: "username", payload: email })}
          />

          <FormRow
            htmlFor="password"
            id="password"
            type="password"
            name="password"
            labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right"
            inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800"
            required={true}
            placeHolder="••••••••"
            value="رمز عبور"
          />

          <FormRow
            htmlFor="fullName"
            id="fullName"
            type="text"
            name="fullName"
            labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right"
            inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-400 dark:placeholder-gray-600 dark:text-gray-800"
            required={true}
            placeHolder="نام و نام خانوادگی"
            value="نام و نام خانوادگی"
          />

          <FormRow
            htmlFor="state"
            id="state"
            type="text"
            name="state"
            labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right"
            inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-400 dark:placeholder-gray-600 dark:text-gray-800"
            required={true}
            placeHolder="تهران"
            value="استان"
          />

          <FormRow
            htmlFor="city"
            id="city"
            type="text"
            name="city"
            labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right"
            inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800"
            required={true}
            placeHolder="تهران"
            value="شهر"
          />

          <FormRow
            htmlFor="tell"
            id="tell"
            type="tell"
            name="tell"
            labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right"
            inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800"
            required={false}
            placeHolder="02112345678"
            value="شماره ثابت"
          />

          <FormRow
            htmlFor="phoneNumber"
            id="phoneNumber"
            type="tell"
            name="phoneNumber"
            labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right"
            inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800"
            required={true}
            placeHolder="09121234567"
            value="شماره همراه"
          />

          <Button
            type="submit"
            value="ثبت نام"
            className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={register}
          />

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            ثبت نام کرده اید؟
            <a
              onClick={() => router.toLogin()}
              className="text-red-700 hover:cursor-pointer hover:underline dark:text-cyan-50 mr-2 underline"
            >
              ورود به حساب کاربری
            </a>
          </div>
        </form>
      </Card>
    </div>
  );
}
