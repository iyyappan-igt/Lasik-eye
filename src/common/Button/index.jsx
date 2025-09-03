import Image from "next/image";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const Button = ({
  name,
  bgcolor,
  txtcolor,
  icon,
  iconcolor,
  isicon,
  isimg,
  imgicon,
  handleTogglecontactForm
}) => {
  return (
    <button
      className={` btn text-center d-flex align-items-center justify-content-center gap-2 ${styles.button}`}
      style={{ backgroundColor: bgcolor, color: txtcolor }}
      onClick={handleTogglecontactForm}
    >
      {isicon ? (
        <DynamicIcon name={icon} color={iconcolor} />
      ) : isimg ? (
        <Image src={imgicon} width={20} height={20} alt="img-icon" />
      ) : (
        ""
      )}
      <h6 className="m-0">{name}</h6>
    </button>
  );
};

export default Button;
