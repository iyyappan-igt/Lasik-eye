import Image from "next/image";
import styles from "./styles.module.css"

const HomeBanner = ({ data,statsData }) => {
    return (
        <div className="container-fluid" style={{ backgroundColor: '#f0fcff' }}>
            <div className={`${styles.container} d-flex justify-content-center align-items-center w-100 py-lg-2 py-lg-5`}>
                <div className="w-100 d-flex py-2 gap-5 align-items-start flex-column flex-lg-row">
                    <div className="d-flex w-100 justify-content-start flex-column mb-4 mb-md-0">
                        <h1 className={`fw-bold fs-1 ${styles.title}`}>
                            {data?.title}
                        </h1>
                        <ul className="list-unstyled fs-5 mt-4">
                            {
                                data?.highlights?.map((item, index) => (
                                    <li key={index} className="d-flex align-items-center mb-3 gap-3">
                                        <div className={styles.tickIcon}>✓</div> {item}
                                    </li>
                                ))
                            }
                        </ul>
                        <hr style={{ borderColor: "#CADCFC", opacity: 0.1 }} />
                        <div className={`border-0 mx-auto p-1 pt-2`}>
                            <div className="d-flex flex-column gap-4 gap-md-3 pt-2 pt-lg-0 flex-md-row text-center w-100">
                                {statsData?.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${index == data.length - 1 ? "mb-0" : "mb-4"} d-flex flex-column gap-0 my-lg-1  flex-fill ${styles.statItem}`}
                                    >
                                        <h2 className="fw-bold fs-2" style={{ color: item.color }}>
                                            {item?.value}
                                        </h2>
                                        <p className="fw-semibold">
                                            {item?.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-0 w-100 d-flex justify-content-center">
                        <div className={styles.imgContainer}
                            style={{
                                borderRadius: '25px',
                                overflow: 'hidden', 
                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.12)',
                                position: 'relative',
                            }}
                        >
                            <img
                                src="/assets/bannerImage1.JPG"
                                alt="Banner"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    transform:"scale(1.1)",
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HomeBanner;