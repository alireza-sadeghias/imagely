interface IProps {
  value: string;
  className?: string;
  onClick?: () => void;
  tooltip?: string;
}
export default function Button(props: IProps) {
  const { value, className, onClick, tooltip } = props;
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}
