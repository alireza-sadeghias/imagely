import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface IProps {
  icon: IconDefinition;
  className?: string;
  onClick: () => void;
}

const Icon = (props: IProps) => {
  const { icon, className, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={icon}
      className={className}
      onClick={() => onClick()}
    />
  );
};

export default Icon;
