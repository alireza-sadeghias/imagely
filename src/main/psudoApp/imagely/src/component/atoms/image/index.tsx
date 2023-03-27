interface IProps {
  image?: string;
  url?: string;
  data?: string;
  alt?: string;
  width?: string;
  height?: string;
  className?: string;
  isLoading?: boolean;
}
export default function Image(props: IProps) {
  const {
    url,
    alt,
    width = "w-32",
    height = "h-32",
    isLoading = false,
    className,
  } = props;
  return (
    <>
      {isLoading ? (
        <img
          src={url}
          alt={alt}
          className={`${height} ${width} ${className}`}
        />
      ) : (
        <div
          className={`animate-spin ${height} ${width} flext content-center rounded-full border-2 border-t-orange-600 border-b-slate-500`}
        ></div>
      )}
    </>
  );
}
