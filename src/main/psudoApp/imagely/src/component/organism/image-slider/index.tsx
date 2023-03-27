import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Icon from "../../atoms/icon";
import Image from "../../atoms/image";

interface IProps {
  className?: string;
}

export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const ImageSlider = (props: IProps) => {
  const [data, setData] = useState<IPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPhoto, setCurrentPhoto] = useState<IPhoto>({
    title: "",
  } as IPhoto);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchDatas = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=5`
      );
      if (response.status != 200 || !response.ok) {
        throw new Error(
          `this is an http error: the status is ${response.status}`
        );
      }

      return (await response.json()) as Promise<IPhoto[]>;
    };

    fetchDatas()
      .then((actualData) => {
        setData(actualData);
        setError(null);
        setIsLoading(false);
        setIndex(0);
        setCurrentPhoto(actualData[index]);
      })
      .catch((error) => {
        setData([]);
        setError(error);
      });
  }, []);

  const { className } = props;

  return (
    <section className={`${className} mx-4 `}>
      <div className="relative grid grid-cols-5 gap-4 w-full h-64 grid-rows-1">
        {data.map((photo) => {
          return (
            <Image
              className="h-60 w-60 "
              isLoading={!isLoading}
              url={photo.url}
            />
          );
        })}
        <div
          className="absolute flex inset-y-[6.75rem] left-[0.25rem] hover:cursor-pointer w-6 h-6 bg-slate-200 rounded-full align-baseline content-between "
          onClick={(e) => {
            if (index === 0) {
              setIndex(data.length - 1);
            } else {
              setIndex(index - 1);
            }
            setCurrentPhoto(data[index]);
          }}
        >
          <Icon className="w-6 h-6" icon={faArrowLeft} />
        </div>
        <div
          className="absolute flex inset-y-[6.75rem] right-[0.25rem] hover:cursor-pointer  w-6 h-6 bg-slate-200 rounded-full align-middle content-between"
          onClick={(e) => {
            if (index === data.length - 1) {
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
            setCurrentPhoto(data[index]);
          }}
        >
          <Icon className="w-6 h-6" icon={faArrowRight} />
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
