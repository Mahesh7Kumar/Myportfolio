// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'CyporChatApp',
          path: '/thumb1.jpg',
          Link: 'https://github.com/Mahesh7Kumar/CyporChatApp.git',
          Live: 'https://cyporchatapp.netlify.app'
        },
        {
          title: 'only Movies',
          path: '/thumb2.jpg',
          Link: 'https://github.com/Mahesh7Kumar/only-Movies.git',
          Live: 'https://search-only-movies.netlify.app'
        },
        {
          title: 'Trillion Games',
          path: '/thumb3.jpg',
          Link: 'https://github.com/Mahesh7Kumar/Trillion-Games-website.git',
          Live: 'https://mahesh7kumar.github.io/Trillion-Games-website/'
        },
        {
          title: '3D-gaming',
          path: '/thumb4.jpg',
          Link: 'https://github.com/Mahesh7Kumar/3D-gaming.git',
          Live: 'https://3d-gaming.netlify.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'DevGPT',
          path: '/thumb4.jpg',
          Link: 'https://github.com/Mahesh7Kumar/DevGPT.git',
          Live: 'https://developergpt.netlify.app/'
        },
        {
          title: 'Portfolio',
          path: '/thumb1.jpg',
          Link: 'https://github.com/Mahesh7Kumar/Developer-profile.git',
          Live: 'https://mahesh7kumar.github.io/Developer-profile/'
        },
        {
          title: 'Online Mobile Store',
          path: '/thumb2.jpg',
          Link: 'https://github.com/Mahesh7Kumar/Developer-profile.git',
          Live: 'https://mahesh7kumar.github.io/Developer-profile/'
        },
        {
          title: 'Job Market Analyzer',
          path: '/thumb3.jpg',
          Link: 'https://github.com/Mahesh7Kumar/Job-Market-Analysis-System-.git',
          Live: 'https://jobmarketfinder.netlify.app/'
        },
      ],
    },
  ],
};

// import swiper react
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight, BsCode } from 'react-icons/bs';
// next image
import Image from 'next/image';
import Link from 'next/link';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {
        workSlides.slides.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {
                  item.images.map((image, index) => {
                    return (
                      <div className='relative rounded-lg overflow-hidden flex items-center 
                      justify-center group' key={index}>
                        <div className='flex items-center justify-center relative overflow-hidden group'>
                          {/* image */}
                          <Image src={image.path} width={500} height={300} alt='' />
                          {/* overflow gradient */}
                          <div className='absolute inset-0 bg-gradient-to-l 
                          from-transparent via-[#e71e86] to-[#4a22bd] opacity-0 
                          group-hover:opacity-80 transition-all duration-700'></div>
                          {/* title */}
                          <div className='absolute bottom-0 translate-y-full
                            group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                            transition-all duration-300'>
                            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                              {/* title part 1*/}
                              <div className='delay-100'>{image.title}</div>
                              {/* title part 2*/}
                              <div className='translate-y-[500%] group-hover:translate-y-0
                              transition-all duration-300 delay-150 text-xl bg-[#3a393a] rounded-full p-2 '>
                                {image.Link && (
                                  <Link href={image.Link}>
                                    <BsCode />
                                  </Link>
                                )}
                              </div>
                              {/* icon*/}
                              <div className='text-xl translate-y-[500%] 
                              group-hover:translate-y-0 transition-all duration-300
                              delay-200 bg-[#3a393a] rounded-full p-2'>
                                {image.Live && (
                                  <Link href={image.Live}>
                                    <BsArrowRight />
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default WorkSlider;

