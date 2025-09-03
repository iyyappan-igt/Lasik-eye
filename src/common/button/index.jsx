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
  isbtn2,
  href,
}) => {
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-decoration-none`}
    >
      <button
        className={`btn text-center d-flex align-items-center justify-content-center gap-2 ${name ? styles.button :  "rounded-circle"}`}
        style={{ backgroundColor: bgcolor, color: txtcolor,padding:!name&& "13.5px 15px" }}
      >
        {isicon && <DynamicIcon name={icon} color={iconcolor} />}
        {isimg && imgicon && (
          <Image src={imgicon} width={20} height={20} alt={`${name}-icon`} />
        )}
       {name && <h6 className="m-0">{name}</h6>}
      </button>
    </a>
  ) : isbtn2 ? (
    <button
      className={`btn ${styles.button2} gap-2 d-flex flex-row align-items-center justify-content-center  fw-bold`}
      style={{
        borderRadius: "50px",
        border: "2px solid #ff6b5c",
        color: "#ff6b5c",
        background: "transparent",
      }}
    >
      {isicon && <DynamicIcon name={icon} color={iconcolor} />}
      {isimg && imgicon && (
        <Image src={imgicon} width={20} height={20} alt={`${name}-icon`} />
      )}{name && <h6 style={{marginBottom:"0"}}>{name}</h6>}
    </button>
  ) : (
    <button
      className={`btn text-center d-flex align-items-center justify-content-center gap-2 ${styles.button}`}
      style={{ backgroundColor: bgcolor, color: txtcolor }}
    >
      {isicon && <DynamicIcon name={icon} color={iconcolor} />}
      {isimg && imgicon && (
        <Image src={imgicon} width={20} height={20} alt={`${name}-icon`} />
      )}
     {name && <h6 className="m-0">{name}</h6>}
    </button>
  );
};


export default Button;