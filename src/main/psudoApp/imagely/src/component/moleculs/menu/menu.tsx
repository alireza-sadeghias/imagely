import Item from "../../atoms/menu-item";

export interface IMenuItem {
  name: string;
  action: Function;
}
/**
 * How we should add props as array?
 * @param props
 * @returns
 */
const Menu = (props: { items: IMenuItem[] }) => {
  const { items } = props;
  return (
    <ol className="flex">
      {items.map((x) => {
        const { name, action } = x;
        return <Item title={name} action={action}></Item>;
      })}
    </ol>
  );
};

export default Menu;
