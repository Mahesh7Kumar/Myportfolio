// import swiper react
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/pagination';


// icons
import {
  RxCrop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxCode,

} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Debugging',
    description: 'I keep your website running smoothly, and  bug fixes, and regular updates.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'I create visually stunning designs that captivate your audience and elevate your brand.',
  },
  {
    icon: <RxCode />,
    title: 'Development',
    description: 'I build fast, responsive, and modern websites for your brand using clean, scalable code.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'I craft compelling copy that engages your audience and drives conversions.',
  },
  {
    icon: <RxRocket />,
    title: 'Landing Pages',
    description: 'I create high-converting landing pages that capture leads and drive sales.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8
              flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] 
              transition-all duration-300'>
                {/* icon */}
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                {/* title & desc */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg '>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>{item.description}</p>
                </div>
                {/* arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 transition-all duration-300 group-hover:text-accent' />
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
