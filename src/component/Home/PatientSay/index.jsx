import Title from "@/common/Title";
import styles from "./styles.module.css";
import Image from "next/image";
import { Star } from "lucide-react";
import Button from "@/common/Button";
import Slider from "react-slick";
import TestimonialCard from "@/common/TestimonialCard";
import { useState } from "react";
import { Popup } from "@/common/Popup";

const PatientSay = ({ handleTogglecontactForm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };
  const testimonialData = [
    {
      imgUrl: "/assets/testimonialimg1.png",
      videoUrl:
        "https://res.cloudinary.com/dnttl4dnz/video/upload/v1763036075/lasik1_bskskl.mp4 ",
    },
    {
      imgUrl: "/assets/testimonialimg2.png",
      videoUrl:
        "https://res.cloudinary.com/dnttl4dnz/video/upload/v1763036074/lasik2_owehwl.mp4",
    },
    {
      imgUrl: "/assets/testimonialimg3.png",
      videoUrl:
        "https://res.cloudinary.com/dnttl4dnz/video/upload/v1763040179/lasik3_e50rle.mp4",
    },
  ];

  var settings = {
    
    dots: false,
    infinite: true,
    arrows: true,
    loop: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    centerMode: testimonialData.length === 1,
    centerPadding: "0px",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: testimonialData.length === 1,
          centerPadding: "0px",
          infinite: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
          centerMode: testimonialData.length === 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: testimonialData.length === 1,
          centerPadding: "0px",
          infinite: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: "0px",
          infinite: false,
        },
      },
    ],
  };

  return (
    <section className={styles.patientsaysec}>
      <div>
        <Title title={"What our Patients Say"} />
          <div className={` ${styles.testimonalsec}`}>
            <div className={styles.testimonialContainer}>
              <Slider
                // key={slidesToShow + (centerMode ? "c" : "")}
                {...settings}
                className={styles.sliderWrapper}
              >
                {testimonialData?.map((item, index) => (
                  <div key={index} className={styles.slideWrapperItem}>
                    <TestimonialCard
                      imageSrc={item?.imgUrl}
                      openModal={() => openModal(item.videoUrl)}
                      name={item?.name}
                      testimonial={item?.description}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        <div className={`${styles.patientcard} commonshadow mt-4`}>
          <div className="d-flex gap-2 align-items-center">
            <Image
              src={"/assets/google.png"}
              alt="google-logo"
              width={100}
              height={35}
              objectFit="cover"
            />
            <h5 className="m-0">Reviews</h5>
          </div>

          <div className="d-flex align-items-center gap-2 my-3">
            <h6 className="m-0">4.8</h6>
            <div>
              <Star width={22} color="#fdbf01" fill="#fdbf01" />
              <Star width={22} color="#fdbf01" fill="#fdbf01" />
              <Star width={22} color="#fdbf01" fill="#fdbf01" />
              <Star width={22} color="#fdbf01" fill="#fdbf01" />
              <Star width={22} color="#fdbf01" fill="#fdbf01" />
            </div>
            <p className="m-0">{`(3,222 Reviews)`}</p>
          </div>

          <Button
            name={"Book Appoinment"}
            isicon={true}
            txtcolor={"#fff"}
            icon={"calendar"}
            iconcolor={"#fff"}
            bgcolor={"#21a179"}
            handleTogglecontactForm={() => handleTogglecontactForm("Book Appoinment")}
          />
        </div>
      </div>
      <Popup open={isModalOpen} onClose={closeModal} variant="video">
        <button
          className={styles.closeButton}
          onClick={closeModal}
          style={{ float: "right", marginBottom: "10px" }}
        >
          ✖
        </button>

        {selectedVideo && (
          <video width="100%" height="500px" controls autoPlay>
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </Popup>
    </section>
  );
};

export default PatientSay;
