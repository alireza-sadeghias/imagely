interface IProps {
  className: string;
}

export default function SearchBox(props: IProps) {
  const { className } = props;
  return (
    <input
      className={`${className} w-96 rounded-xl text-end py-2 px-4 text-sm focus-visible:outline-none`}
      placeholder="تصویر خود را جست و جو کنید"
      type={"text"}
    />
  );
}
