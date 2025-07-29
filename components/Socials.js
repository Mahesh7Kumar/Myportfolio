// links
import Link from "next/link";

// icons
import { RiMailLine, RiInstagramLine, RiCodeBoxFill, RiLinkedinLine, RiGithubLine, } from 'react-icons/ri';


const Socials = () => {
  return (
    <div className="flex items-center gap-x-6 text-2xl">
      <Link href={'mailto:mr.maheshkumar.i07@gmail.com'} className="hover:text-accent transition-all duration-300">
        <RiMailLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/mahesh-i-dev/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/Mahesh7Kumar'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={'https://leetcode.com/u/Mr_MaheshKumar_I/'} className="hover:text-accent transition-all duration-300">
        <RiCodeBoxFill />
      </Link>
      <Link href={'https://www.instagram.com/aec_meme_ghost/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
