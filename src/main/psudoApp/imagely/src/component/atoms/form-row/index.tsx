import Input from "../input";
import Label from "../label";

interface IProps{
    type?:string,
    placeHolder?:string,
}

export default function FormRow(props:IProps){
    
    return (
        <div>
        <Label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right"
        >
          ایمیل
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-400 dark:placeholder-gray-600 dark:text-gray-800"
          placeholder="name@company.com"
          required={true}
        />
      </div>
    );
}