import Icon from "../../atoms/icon";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export interface IDropDownItem {
  href?: string;
  text?: string;
}

interface IProps {
  items: IDropDownItem[];
  className?:string
}

export default function DropDownMenu(props: IProps) {
  const { items,className } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    // onblur = (w: Window, ev: FocusEvent) => {};
  }, []);

  setShow;

  return (
    <div className={`${className}`}>
      <a className="border-none cursor-pointer" />
      <Icon
        onClick={() => {
          setShow(!show);
        }}
        className="relative inline-block text-indigo-50"
        icon={faUserCircle}
      />
      <div
        className={
          show ? "block absolute bg-slate-100 w-32" : "hidden absolute"
        }
      >
        {items.map((x) => {
          const { href, text } = x;
          return (
            <a
              className="p-1 no-underline block border-b border-sky-500 hover:bg-slate-400"
              href={href}
            >
              {text}
            </a>
          );
        })}
      </div>
    </div>
  );
}
