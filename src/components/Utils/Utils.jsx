import { useInView } from "framer-motion";
import { useRef } from "react";

export function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
            {children}
        </section>
    );
}

// For DragAndSlide Utils

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function DragAndSlide({ children }) {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            setWrapperSize={true}
            grabCursor={true}
            breakpoints={{
                470: {
                    slidesPerView: 2,
                },
                680: {
                    slidesPerView: 3,
                },
                847: {
                    slidesPerView: 1,
                },
                940: {
                    slidesPerView: 2,
                },
                1390: {
                    slidesPerView: 3,
                },
                1720: {
                    slidesPerView: 4,
                }

            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            className="custom-swiper"
        >
            {
                children.map((c, index) =>
                    <SwiperSlide key={index} className="!flex justify-around">{c}</SwiperSlide>
                )
            }
        </Swiper >
    );
}
