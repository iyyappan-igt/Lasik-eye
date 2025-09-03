import styles from "./styles.module.css"

const HomeBanner = ({ data }) => {
    return (
        <div className="container-fluid" style={{ backgroundColor: '#f0fcff' }}>
            <div className={`${styles.container} container d-flex justify-content-center align-items-center w-100 py-5`}>
                <div className="row w-100 align-items-center">
                    <div className="col-lg-7 col-md-12 d-flex justify-content-start flex-column mb-4 mb-md-0">
                        <h1 className="fw-bold fs-1">
                            {data?.title}
                        </h1>
                        <ul className="list-unstyled fs-5 mt-4">
                            {
                                data?.highlights?.map((item,index) => (
                                    <li key={index} className="d-flex align-items-center mb-3 gap-3">
                                        <div className={styles.tickIcon}>✓</div> {item}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-lg-5 col-md-12 text-center">
                        <img
                            src="/elderly-man.png"
                            alt="Elderly man"
                            className="img-fluid rounded"
                            style={{ maxHeight: '320px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HomeBanner;