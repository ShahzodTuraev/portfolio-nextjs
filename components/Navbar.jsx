import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import upIcon from '../public/assets/icons/page-up.svg'
import { Link } from 'react-scroll';
const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if scrollPosition is greater than or equal to 100
  const isScrolled = scrollPosition >= 100;
  const isTopScroll =scrollPosition >= 300;
  return (
    <>
      <div className={isScrolled?'container active': 'container'}>
        <nav className='navbar'>
          <Link to="pageHeader" spy={true} smooth={true} offset={0} duration={500}>
            <p  className={isScrolled?'logo active':'logo'}>SHT's Portfolio</p>
          </Link>
            <div className='navbarNav'>
                <Link to="pageAbout" spy={true} smooth={true} offset={0} duration={500} className={isScrolled?'items active':'items'}>About me</Link>
                <Link  to="pageSkills" spy={true} smooth={true} offset={0} duration={500} className={isScrolled?'items active':'items'}>Skills</Link>
                <Link to="pageProjects" spy={true} smooth={true} offset={0} duration={500} className={isScrolled?'items active':'items'}>Projects</Link>
                <Link to="pageSkills" spy={true} smooth={true} offset={0} duration={500} className={isScrolled?'items active':'items'}>Career</Link>
                <Link className={isScrolled?'items active':'items'}>CV</Link>
            </div>
        </nav>
        {isTopScroll&&<Link to="pageHeader" spy={true} smooth={true} offset={0} duration={500}><Image src={upIcon} alt='pageUp' className='upIcon'/></Link>}
      </div>
    </>
  )
}

export default Navbar
