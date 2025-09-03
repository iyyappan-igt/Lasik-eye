import Image from "next/image";
import styles from "./styles.module.css";
import Button from "../Button";

const SubBanner = ({
  title,
  spantitle,
  content,
  img,
  imgwidth,
  imgheight,
  bgcolor,
  spancolor,
  bordercolor,
  btn_name,
  btn_bgcolor,
  btn_txtcolor,
  icon_name,
  icon_color,
  isicons,
  isimg,
  btn_img,
}) => {
  return (
    <section className="my-4">
      <div className={`${styles.container} container-lg`}>
        <div
          className={`${styles.subbanner} commonshadow`}
          style={{
            backgroundColor: bgcolor,
            border: ` 1px solid ${bordercolor}`,
          }}
        >
          <div className={`row-lg ${styles.row}`}>
            <div className="col-lg-7">
              <div className={styles.subcontent}>
                <h4>
                  {title}
                  <span style={{ color: spancolor }}>{` ${spantitle}`}</span>
                </h4>
                <p>{content}</p>

                <Button
                  name={btn_name}
                  bgcolor={btn_bgcolor}
                  txtcolor={btn_txtcolor}
                  icon={icon_name}
                  iconcolor={icon_color}
                  isicon={isicons}
                  isimg={isimg}
                  imgicon={btn_img}
                />
              </div>
            </div>
           {img && <div className="col-lg-5">
              <div className={styles.subimg}>
                <Image
                  src={img ? img : ""}
                  width={imgwidth}
                  height={imgheight}
                  alt="sub-banner-img"
                />
              </div>
            </div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubBanner;