import Item from "../../atoms/menu-item";

export interface IMenuItem {
  name: string;
  action: Function;
}
export interface IProps {
  items: IMenuItem[];
  className?: string;
}
/**
 * How we should add props as array?
 * @param props
 * @returns
 */
// const Menu = (props: { items: IMenuItem[] }) => {
const Menu = (props: IProps) => {
  const { items, className } = props;
  return (
    <ol className={`${className} flex flex-row-reverse`}>
      {items.map((x) => {
        const { name, action } = x;
        return <Item title={name} action={action}></Item>;
      })}
    </ol>
  );
};

export default Menu;
