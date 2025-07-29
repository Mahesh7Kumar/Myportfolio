import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiMongodb,
          SiNodedotjs,
          SiExpress,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'InterCollege Hackthon - 2nd Place',
        stage: '2025',
      },
      {
        title: 'ArunaiFest poster Designer Awards - 3rd Place',
        stage: '2024',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer -  AEC College Club',
        stage: '2024 - 2025',
      },
      {
        title: 'Freelancer  - E-commerce For Mobile Store',
        stage: 'Apr 2025',
      },
      {
        title: 'Web Developer Project - CyporChat App',
        stage: 'Jun 2025',
      },
    ],
  },
  {
    title: 'Qualifications',
    info: [
      {
        title: 'MERN Stack Web Development - FITA Academy, Chennai',
        stage: '2025',
      },
      {
        title: 'Certified Graphic Designer - Great Learning',
        stage: '2024',
      },
      {
        title: 'B.E - Arunai Engineering College, Tiruvannamalai',
        stage: '2022 - 2025',
      },
      {
        title: 'Computer Science Diploma - Kumaran College',
        stage: '2019 - 2022',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles.js';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center '>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'>
            Great <span className='text-accent'>Stories</span> inspire great <span className='text-accent'>Designs.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            Web developer and designer who&#39;s spent the last 3 months freelancing
            with agencies, startups, and companies—some even tried to hire me full-time. I build
            clean, responsive websites and design user-friendly interfaces with tools like React
            and Figma.
          </motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-3xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={3} duration={6} /> + <span className='text-white/60 text-[20px]'>Months</span>
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[250px]'>
                  FREELANCING EXPERIENCE
                  <p className='text-white/60 text-[9px] mt-1'>With agencies, startups & companies who wanted to hire me full-time.</p>
                </div>
              </div>
              {/* Projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-3xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={15} duration={6} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[250px]'>
                  Web Development Projects
                  <p className='text-white/60 text-[9px] mt-1'>Built with React, Node, and pixel-perfect precision.</p>
                </div>
              </div>
              {/* UI/UX */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-3xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={6} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[170px]'>
                  UI/UX Design Projects
                  <p className='text-white/60 text-[9px] mt-1'>Crafted clean user-friendly designs in Figma &amp; XD.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item) => {
              return (
                <div
                  key={item.title}
                  className={`cursor-pointer capitalize xl:text-lg relative after:h-[2px] after:absolute after:-bottom-1 after:left-0 
                  ${index === aboutData.indexOf(item)
                      ? 'text-accent after:w-full after:bg-accent after:transition-all after:duration-300'
                      : 'after:w-8 after:bg-white'}
                  `}
                  onClick={() => setIndex(aboutData.indexOf(item))}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item) => {
              return (
                <div key={item.title} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  {item.stage && <div>{item.stage}</div>}
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((IconComponent, iconIndex) => {
                      return (
                        <IconComponent className='text-2xl text-white' key={`icon-${iconIndex}`} />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
