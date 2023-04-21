import { useNavigate } from "react-router-dom";
import Button from "../../atoms/button";
import Card from "../../atoms/card";
import FormRow from "../../atoms/form-row";
import API from "../../../api/API";
import IUser from "../../../data-models/user/IUser";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="grid h-screen place-items-center font-face">
      <Card className="w-full max-w-sm p-4 bg-blue-50 border border-blue-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-blue-400 dark:border-blue-400">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-blue-900 dark:text-white text-right">
            ورود به ایمیجلی
          </h5>

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
            onClick={
              ()=>{
                console.log('web service call')
                API.post('users/register',{
                  username:'alireza', 
                  fullName:'alireza sadeghi',
                  password:'a',
                  city:'tehran',
                  street: 'tehran',
                  state: 'tehran',
                  zip: 'tehran',
                  phone: 'tehran',

                } as IUser, {
                  headers: { "Content-Type": "application/json; charset=UTF-8" },
                  // params: { mail: 'xyx@example.col' }, //Add mail as a param
                })
                // await fetch('')
                .then(result=>{
                  console.log('result',result);
                  navigate("/login");
                }).catch(res=>{
                  console.log('result',res)
                })
              //   const fetchDatas = async () => {
              //     const response = await fetch(
              //       `http://localhost:8080/api/users/save`,{
              //         method:'POST',
              //         headers: {
              //           "Content-Type": "application/json",
              //           // 'Content-Type': 'application/x-www-form-urlencoded',
              //         },body: JSON.stringify({
              //           // your expected POST request payload goes here
              //           username:'alireza', 
              //           fullName:'alireza sadeghi',
              //           password:'a',
              //           city:'tehran',
              //           street: 'tehran',
              //           state: 'tehran',
              //           zip: 'tehran',
              //           phone: 'tehran',
              //                  })
              //       }
              //     );
              //     if (response.status != 200 || !response.ok) {
              //       throw new Error(
              //         `this is an http error: the status is ${response.status}`
              //       );
              //     }
              //     const res = (await response.json()) as Promise<IUser>;
              //     console.log("res", res);
              //     return (await res);
              //   };
            
              //   fetchDatas()
              //     .then((actualData) => {
              //       console.log(actualData)
              //     })
              //     .catch((error) => {
              //    console.log(error)
              //     });
              }
            }
              
          />

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            ثبت نام کرده اید؟
            <a
            onClick={()=>navigate("/login")}
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
