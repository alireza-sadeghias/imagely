import DropDownMenu, { IDropDownItem } from "../../moleculs/drop-down";
import Menu, { IMenuItem } from "../../moleculs/menu";
import SearchBox from "../../moleculs/seachbox";

const Header = () => {
  const home: IMenuItem = {
    name: "خانه",
    action: (name: IMenuItem["name"]) => {
      console.log(name);
    },
  };
  const galeries: IMenuItem = {
    name: "گالری",
    action: (name: IMenuItem) => {
      console.log(name);
    },
  };
  const aboutUs: IMenuItem = {
    name: "درباره ما",
    action: () => {
      console.log("about us");
    },
  };
  const items = [home, galeries, aboutUs];

  const history: IDropDownItem = {
    text: "تاریخچه",
    href: "#",
  };
  const cart: IDropDownItem = {
    text: "سبد خرید",
    href: "#",
  };
  const exit: IDropDownItem = {
    text: "خروج",
    href: "#",
  };
  const dropDownItems = [history, cart, exit];

  return (
    <div className="p-2 text-lg flex list-none justify-between border-b border-slate-400 bg-gray-500 drop-shadow content-center items-baseline text-slate-50">
      <DropDownMenu className="text-blue-500" items={dropDownItems} />
      <SearchBox className="text-gray-900"></SearchBox>
      <Menu className="text-slate" items={items} />
    </div>
  );
};

export default Header;
