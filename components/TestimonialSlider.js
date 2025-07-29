// testimonial data
const testimonialData = [
  {
    image: '/endtoend.png',
    name: 'End-to-End Web Development',
    position: 'Skill Application',
    message:
    'From wireframes to deployment, I offer full-stack development using MERN stack, ensuring your business gets a modern, scalable web presence.',
  },
  {
    image: '/web-design.png',
    name: 'Design + Development = Results',
    position: 'Unique Value',
    message:
    'I combine UI/UX design skills with full-stack development to build user-friendly, functional websites that drive real business results.',
  },
  {
    image: '/boost.png',
    name: 'Boost Online Presence',
    position: 'Value I Deliver',
    message:
    'I create responsive, SEO-friendly websites using React and Next.js to help your business reach more customers and stand out online.',
  },
  {
    image: '/fastload.png',
    name: 'Faster Load Times = More Conversions',
    position: 'Business Benefit',
    message:
    'Using performance-optimized code and tools like Next.js and Tailwind CSS, I build lightning-fast websites that improve user experience and increase conversion rates.',
  },
  {
    image: '/custom.png',
    name: 'Custom Web Solutions',
    position: 'My Service',
    message:
    'I build tailored websites for startups and small businesses, integrating design, frontend, and backend to meet specific goals like online sales or lead generation.',
  },
];


// import swiper react
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';
// next image
import Image from 'next/image';
import Link from 'next/link';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {
        testimonialData.map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col items-center md:flex-row gap-x-8 h-full
              px-16'>
                {/* avatar,name,position */}
                <div className='w-full max-w-[300px] flex flex-col xl:justify-center 
                items-center relative mx-auto xl:mx-0'>
                  <div className='flex flex-col items-center justify-center'>
                    {/* avatar */}
                    <div className='mb-2 mx-auto'>
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={100}
                        height={100}
                        className='rounded-full'
                      />
                    </div>
                    {/* name */}
                    <div className='text-lg'>{person.name}</div>
                    {/* position */}
                    <div className='text-[12px] uppercase font-extralight 
                    tracking-widest'>{person.position}</div>
                  </div>
                </div>
                {/* quote & message */}
                <div className='flex-1 flex flex-col justify-center
                before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
                xl:before:h-[200px] relative xl:pl-20'>
                  {/* quote icon */}
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 
                    mx-auto md:mx-0'/>
                  </div>
                  {/* message */}
                  <div className='xl:text-lg text-center md:text-left'>
                    {person.message}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default TestimonialSlider;


