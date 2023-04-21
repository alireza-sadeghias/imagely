
import { useState } from "react";

interface IProps {
  className?: string;
  type?: string;
  name?: string;
  id?: string;
  value?:string
  placeholder?: string;
  required?: boolean;
  onChange?:(text: string)=> void;
}
export default function Input(props: IProps) {
  const { className, type, name, id, placeholder, required,value ,onChange = () => {}} = props;
  const [val,setValue] = useState('');
  return (
    <input
      type={type}
      className={className}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={(event)=>{onChange(event.target.value)}}
    ></input>
  );
}
