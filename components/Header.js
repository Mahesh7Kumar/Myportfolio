// next image
import Image from 'next/image'

// next link
import Link from 'next/link'

// components
import Socials from '../components/Socials.js';


const Header = () => {
  return (
    <header className="absolute z-30 w-full flex item-center px-16 xl:px-0 xl:h-[90px] mt-4">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/* logo */}
          <Link href="/">
            <Image
              src={'/logoM.svg'}
              alt=""
              width={220}
              height={48}
              priority={true}
            />
          </Link>
          {/* socials */}
          
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
