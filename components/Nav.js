// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  { name: 'Offerings', path: '/testimonials', icon: <HiChatBubbleBottomCenterText /> },
  { name: 'contact', path: '/contact', icon: <HiEnvelope /> },
];
//next link
import Link from 'next/link'

// next router
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()
  const pathname = router.pathname
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 
    fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {/* {inner} */}
      <div className='flex w-full xl:flex-col items-center justify-between
       xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-white/10 
       xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
        {
          navData.map((link, index) => {
            return (
              <Link className={`${link.path === pathname && 'text-accent'} relative flex items-center 
              group hover:text-[#FF073A]/90 transition-all duration-300`}
                href={link.path} key={index}>
                {/* tooltip */}
                <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                  <div className='bg-[#0f0f0f] rounded-[3px] relative flex text-white items-center p-[6px] '>
                    <div className='text-[12px] leading-none font-semibold capitalize'>
                      {link.name}
                    </div>
                    {/* triangle */}
                    <div className='border-solid border-l-[#0f0f0f] border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'>
                    </div>
                  </div>
                </div>
                {/* icon */}
                <div>{link.icon}</div>
              </Link>
            );
          })}
      </div>
    </nav>);
};

export default Nav;
