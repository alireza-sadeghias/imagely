import Menu, { IMenuItem } from "../../moleculs/menu";
import DropDownMenu, { IDropDownItem } from "../../moleculs/drop-down";
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
    <div className="p-2 text-lg flex list-none justify-between bg-orange-200 content-center items-baseline">
      <DropDownMenu items={dropDownItems} />
      <SearchBox></SearchBox>
      <Menu items={items} />
    </div>
  );
};

export default Header;
