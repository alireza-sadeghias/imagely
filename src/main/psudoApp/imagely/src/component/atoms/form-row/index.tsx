import Input from "../input";
import Label from "../label";

interface IProps{
    type?:string,
    id?:string,
    name?:string,
    value?:string,
    placeHolder?:string,
    labelClassName?:string,
    inputClassName?:string,
    required?:boolean,
    htmlFor?: string,
}

export default function FormRow(props:IProps){
    const {type,value,placeHolder,name,id,labelClassName,inputClassName,required,htmlFor} = props;
    return (
        <div>
        <Label
          htmlFor={htmlFor}
          className={labelClassName}
        >
          {value}
        </Label>
        <Input
          type={type}
          name={name}
          id={id}
          className={inputClassName}
          placeholder={placeHolder}
          required={required}
          
        />
      </div>
    );
}