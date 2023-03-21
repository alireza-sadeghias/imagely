interface IProps {
    title: string,
    action: Function
}

const Item = (props: IProps) => {
    const {title,action} = props
    return (
         /**TODO - how we should add onhover*/
        <li className="mx-2 cursor-pointer hover:decoration-solid hover:decoration-sky-500" >
            <a onClick={action()}>{title}</a>
        </li>
    )
}

export default Item;