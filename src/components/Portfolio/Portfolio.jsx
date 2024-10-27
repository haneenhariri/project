import Slider from "react-slick";
import img_12 from './../../assets/bagdad.png'
import img_13 from './../../assets/maldive.png'
import img_14 from './../../assets/Ellipse23.png'
import img_15 from './../../assets/mobile.svg'
import img_16 from './../../assets/Ellipse6.png'
import img_17 from './../../assets/mobile2.webp'
import img_18 from './../../assets/face1.svg'
import img_21 from './../../assets/google1.svg'
import img_22 from './../../assets/aws1.svg'
import img_20 from './../../assets/gis1.svg'
import img_19 from './../../assets/kwuit1.webp'
import img_25 from './../../assets/Elaf.svg'
import img_26 from './../../assets/المركز الاكاديمي.svg'
import img_27 from './../../assets/البيت الانيق.svg'
import img_28 from './../../assets/ساث.svg'
import img_29 from './../../assets/Lets.svg'
import img_30 from './../../assets/umber.svg'
import img_31 from './../../assets/lemex.svg'
import img_32 from './../../assets/Rfeeca.svg'
import img_33 from './../../assets/ys.svg'
import img_34 from './../../assets/kids.svg'
import img_35 from './../../assets/kcrd.svg'
import img_36 from './../../assets/oct.svg'
import img_40 from './../../assets/1.svg'
import img_41 from './../../assets/2.svg'
import img_42 from './../../assets/3.svg'
import img_43 from './../../assets/4.svg'
import img_44 from './../../assets/5.svg'
import img_45 from './../../assets/6.svg'
import img_46 from './../../assets/8.svg'
import img_47 from './../../assets/Group.png'
import img_48 from './../../assets/orangback.png'
import img_49 from './../../assets/cup-min.png'
import Line from './../../assets/Line7.png'
import img_50 from './../../assets/Group234444427.webp'
import img_51 from './../../assets/reffasdxxxxxxx1.webp'
import img_52 from './../../assets/Ellipse55555555555.png'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Portfolio.css'
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
const Portfolio = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/DOC-20221219-WA0000._';
    link.download = 'profile company';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "black" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div id="Profile">
      {/* section one */}
      <Element name="section33" className="element"><section className='mt-[2.81rem] flex flex-col justify-center items-center'>
        <h3 style={{ lineHeight: 'normal' }} className='text-my-black font-my-font text-3xl not-italic font-bold'>Portfolio</h3>
        <p style={{ lineHeight: 'normal' }} className="text-my-black font-my-font text-2xl not-italic font-normal">99 reason to choose us</p>
      </section>
      </Element>

      {/* section two */}
      <section className="Cup-fq">
        <div className="left">
          <img src={img_48} alt="" />
          <img src={img_49} alt="" />
          <div className="Descrip-fqq">
            <img src={Line} alt="" />
            <h2>Umber Project<br /></h2>
            <p>Full Branding<br />
              Identity Design<br />
              Packaging <br />
              <Link target="blank" to={'https://www.behance.net/focal-x-agency'}>Click to View</Link>
            </p>
          </div>
        </div>
        <div className="right">
          <img src={img_47} alt="" />
        </div>
      </section>
      {/* sectiom three */}
      <section className="Cup-fq asdasdasd">
        <div className="left">
          <img src={img_52} alt="" />
          <img src={img_51} alt="" />
          <div className="Descrip-fqq">
            <img src={Line} alt="" />
           <h2>R'ffeca Project<br /></h2>
            <p>Full Branding<br />
              Identity Design<br />
              Packaging <br />
              <Link target="blank" to={'https://www.behance.net/focal-x-agency'}>Click to View</Link>
            </p>
          </div>
        </div>
        <div className="right">
          <img src={img_50} alt="" />
        </div>
      </section>
      {/* section four */}
      <div className='pt-[2.86rem] w-[90%] mx-auto text-center '>
        <p className='text-my-black font-my-font text-xl not-italic font-medium leading-normal'>Check more Branding project on our Behance portfolio from <span className='font-bold underline'>HERE</span></p>
        <p className='text-my-black font-my-font text-xl not-italic font-medium leading-normal'>OR you can download Our Profile Company to Know more about Our Services</p>
        <div className='text-center'>
          <button onClick={handleDownload} style={{ border: '0.923px solid #FF8500' }} className='text-my-orange font-my-font text-[0.84575rem] not-italic font-medium leading-normal rounded-[0.346rem] pt-[0.62rem] pl-[0.62rem] pr-[0.56rem] pb-[0.34rem] sm:mr-[0.875rem] mr-[0.3rem] mt-[0.94rem]'>AR profile company</button>
          <button style={{ border: '0.923px solid #FF8500' }} className='text-my-orange font-my-font text-[0.84575rem] not-italic font-medium leading-normal rounded-[0.346rem] pt-[0.62rem] pl-[0.62rem] pr-[0.56rem] pb-[0.34rem] sm:ml-[0.875rem] ml-[0.3rem]'>EN profile company</button>
        </div>
      </div>
      {/* section five */}
      <section className='mt-[2.35rem] md:flex bg-my-black'>
        <div className='md:w-[47.43%] relative'>
          <img className='pl-[2.16%] w-[99.22%] ' src={img_12} alt="this is image" />
          <svg className='absolute top-[-43.5px] sm:w-[75px] sm:h-[87px] w-[45px] h-[60px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 87" fill="none">
            <path d="M75 43.5C75 67.5244 55.5244 87 31.5 87C7.47561 87 -12 67.5244 -12 43.5C-12 19.4756 7.47561 0 31.5 0C55.5244 0 75 19.4756 75 43.5Z" fill="url(#paint0_radial_236_17)" />
            <defs>
              <radialGradient id="paint0_radial_236_17" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.6364 26.1) rotate(50.9061) scale(57.0675)">
                <stop stopColor="#8A8A8A" />
                <stop offset="0.56566" stopColor="#292929" />
                <stop offset="0.778735" stopColor="#181818" />
                <stop offset="1" stopColor="#222222" />
              </radialGradient>
            </defs>
          </svg>
          <svg className=' absolute left-[35%] top-[-50px] sm:w-[17px] sm:h-[17px] w-[10px] h-[10px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="none">
            <path d="M13.8774 13.9361C10.7487 17.0323 5.70243 17.006 2.60621 13.8774C-0.490008 10.7487 -0.463709 5.70242 2.66495 2.6062C5.79361 -0.490017 10.8399 -0.463719 13.9361 2.66494C17.0323 5.7936 17.006 10.8399 13.8774 13.9361Z" fill="url(#paint0_radial_236_21)" />
            <defs>
              <radialGradient id="paint0_radial_236_21" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.00817 4.48368) rotate(96.2047) scale(10.4558)">
                <stop stopColor="#8A8A8A" />
                <stop offset="0.56566" stopColor="#292929" />
                <stop offset="0.778735" stopColor="#181818" />
                <stop offset="1" stopColor="#222222" />
              </radialGradient>
            </defs>
          </svg>
          <svg className='absolute top-[11%] left-[25%] sm:w-[45px] sm:h-[45px] w-[30px] h-[30px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" fill="none">
            <path d="M37.5873 37.7495C28.9512 46.2961 15.0217 46.2235 6.47507 37.5873C-2.07158 28.9512 -1.99899 15.0217 6.63721 6.47507C15.2734 -2.07158 29.2028 -1.99898 37.7495 6.63721C46.2961 15.2734 46.2235 29.2028 37.5873 37.7495Z" fill="url(#paint0_radial_236_26)" />
            <defs>
              <radialGradient id="paint0_radial_236_26" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.1467 11.6576) rotate(96.2047) scale(28.8617)">
                <stop stopColor="#8A8A8A" />
                <stop offset="0.56566" stopColor="#292929" />
                <stop offset="0.778735" stopColor="#181818" />
                <stop offset="1" stopColor="#222222" />
              </radialGradient>
            </defs>
          </svg>
          <svg className=' absolute bottom-[130px] sm:w-[52px] sm:h-[74px] w-[32px] h-[50px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 74" fill="none">
            <path d="M52 37C52 57.4345 35.4345 74 15 74C-5.43454 74 -22 57.4345 -22 37C-22 16.5655 -5.43454 0 15 0C35.4345 0 52 16.5655 52 37Z" fill="url(#paint0_radial_236_18)" />
            <defs>
              <radialGradient id="paint0_radial_236_18" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.90909 22.2) rotate(50.9061) scale(48.5402)">
                <stop stopColor="#8A8A8A" />
                <stop offset="0.56566" stopColor="#292929" />
                <stop offset="0.778735" stopColor="#181818" />
                <stop offset="1" stopColor="#222222" />
              </radialGradient>
            </defs>
          </svg>
          <svg className=' absolute left-[65%] bottom-[12%] sm:w-[45px] sm:h-[45px] w-[30px] h-[30px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" fill="none">
            <path d="M37.5873 37.7495C28.9512 46.2961 15.0217 46.2235 6.47507 37.5873C-2.07158 28.9512 -1.99899 15.0217 6.63721 6.47507C15.2734 -2.07158 29.2028 -1.99898 37.7495 6.63721C46.2961 15.2734 46.2235 29.2028 37.5873 37.7495Z" fill="url(#paint0_radial_236_26)" />
            <defs>
              <radialGradient id="paint0_radial_236_26" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.1467 11.6576) rotate(96.2047) scale(28.8617)">
                <stop stopColor="#8A8A8A" />
                <stop offset="0.56566" stopColor="#292929" />
                <stop offset="0.778735" stopColor="#181818" />
                <stop offset="1" stopColor="#222222" />
              </radialGradient>
            </defs>
          </svg>
          <svg className='absolute left-[38%] top-[10%] sm:w-[17px] sm:h-[17px] w-[10px] h-[10px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="none">
            <path d="M13.8773 13.9361C10.7487 17.0323 5.70242 17.006 2.6062 13.8774C-0.490023 10.7487 -0.463725 5.70242 2.66494 2.6062C5.7936 -0.490017 10.8399 -0.463719 13.9361 2.66494C17.0323 5.7936 17.006 10.8399 13.8773 13.9361Z" fill="url(#paint0_radial_236_22)" />
            <defs>
              <radialGradient id="paint0_radial_236_22" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.00815 4.48368) rotate(96.2047) scale(10.4558)">
                <stop stopColor="#8A8A8A" />
                <stop offset="0.56566" stopColor="#292929" />
                <stop offset="0.778735" stopColor="#181818" />
                <stop offset="1" stopColor="#222222" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className='md:w-[52.56%] flex justify-end'>
          <div className='w-[88.30%] relative'>
            <img className='mr-[1.12rem] w-full ' src={img_13} alt="this is image" />
            <p className='sm:block hidden absolute top-[14rem] left-[-150px] rotate-[-90deg] font-my-font text-[4.89819rem] not-italic font-bold leading-normal text-my-silver'>Ui/UX</p>
            <svg className='absolute right-0 top-[-23px] sm:w-[64px] sm:h-[87px] w-[40px] h-[55px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 87" fill="none">
              <path d="M87 43.5C87 67.5244 67.5244 87 43.5 87C19.4756 87 0 67.5244 0 43.5C0 19.4756 19.4756 0 43.5 0C67.5244 0 87 19.4756 87 43.5Z" fill="url(#paint0_radial_236_25)" />
              <defs>
                <radialGradient id="paint0_radial_236_25" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(31.6364 26.1) rotate(50.9061) scale(57.0675)">
                  <stop stopColor="#8A8A8A" />
                  <stop offset="0.56566" stopColor="#292929" />
                  <stop offset="0.778735" stopColor="#181818" />
                  <stop offset="1" stopColor="#222222" />
                </radialGradient>
              </defs>
            </svg>
            <svg className='absolute left-[5%] top-[14.5%] sm:w-[45px] sm:h-[45px] w-[30px] h-[30px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" fill="none">
              <path d="M37.5873 37.7495C28.9512 46.2961 15.0217 46.2235 6.47507 37.5873C-2.07158 28.9512 -1.99899 15.0217 6.63721 6.47507C15.2734 -2.07158 29.2028 -1.99898 37.7495 6.63721C46.2961 15.2734 46.2235 29.2028 37.5873 37.7495Z" fill="url(#paint0_radial_236_26)" />
              <defs>
                <radialGradient id="paint0_radial_236_26" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.1467 11.6576) rotate(96.2047) scale(28.8617)">
                  <stop stopColor="#8A8A8A" />
                  <stop offset="0.56566" stopColor="#292929" />
                  <stop offset="0.778735" stopColor="#181818" />
                  <stop offset="1" stopColor="#222222" />
                </radialGradient>
              </defs>
            </svg>
            <svg className='absolute left-[15%] top-[11%] sm:w-[17px] sm:h-[17px] w-[10px] h-[10px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="none">
              <path d="M13.8773 13.9361C10.7487 17.0323 5.70242 17.006 2.6062 13.8774C-0.490023 10.7487 -0.463725 5.70242 2.66494 2.6062C5.7936 -0.490017 10.8399 -0.463719 13.9361 2.66494C17.0323 5.7936 17.006 10.8399 13.8773 13.9361Z" fill="url(#paint0_radial_236_22)" />
              <defs>
                <radialGradient id="paint0_radial_236_22" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.00815 4.48368) rotate(96.2047) scale(10.4558)">
                  <stop stopColor="#8A8A8A" />
                  <stop offset="0.56566" stopColor="#292929" />
                  <stop offset="0.778735" stopColor="#181818" />
                  <stop offset="1" stopColor="#222222" />
                </radialGradient>
              </defs>
            </svg>
            <svg className='absolute right-[24%] bottom-[16%]  sm:w-[17px] sm:h-[17px] w-[10px] h-[10px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="none">
              <path d="M13.8773 13.9361C10.7487 17.0323 5.70242 17.006 2.6062 13.8774C-0.490023 10.7487 -0.463725 5.70242 2.66494 2.6062C5.7936 -0.490017 10.8399 -0.463719 13.9361 2.66494C17.0323 5.7936 17.006 10.8399 13.8773 13.9361Z" fill="url(#paint0_radial_236_22)" />
              <defs>
                <radialGradient id="paint0_radial_236_22" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.00815 4.48368) rotate(96.2047) scale(10.4558)">
                  <stop stopColor="#8A8A8A" />
                  <stop offset="0.56566" stopColor="#292929" />
                  <stop offset="0.778735" stopColor="#181818" />
                  <stop offset="1" stopColor="#222222" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
      {/* section six */}
      <section className='mt-[2.12rem] xl:flex'>
        <div className='xl:w-[48.60%]'>
          <div className='max-w-[363px] relative Fluter'>
            <img src={img_14} alt="this is image" className="Fluter2" />
            <img className='absolute top-0  sm:left-[1.3rem] left-0' src={img_15} alt="this is image" />
            <svg className='md:block hidden absolute top-[9.5rem] z-[-2] sm:right-[-3rem] right-[-1.5rem]' xmlns="http://www.w3.org/2000/svg" width="174" height="11" viewBox="0 0 174 11" fill="none">
              <path d="M162.667 5.5C162.667 8.44552 165.054 10.8333 168 10.8333C170.946 10.8333 173.333 8.44552 173.333 5.5C173.333 2.55448 170.946 0.166667 168 0.166667C165.054 0.166667 162.667 2.55448 162.667 5.5ZM0 6.5H168V4.5H0V6.5Z" fill="black" />
            </svg>
            <div className='md:block hidden absolute top-[9rem] sm:right-[-18rem] right-[-9rem]'>
              <h2 className='text-my-black font-my-font sm:text-2xl text-xs not-italic font-bold leading-normal'>Yoox Store Project</h2>
              <p className=' text-my-black font-my-font sm:text-2xl text-xs not-italic font-normal leading-normal'>Identity Design <br /> Ui Design</p>
            </div>
          </div>
        </div>
        <div className='xl:w-[51.39%] flex justify-end'>
          <div className=' Fluter relative w-[396px] flex justify-end Fluter222'>
            <img src={img_16} alt="this is image" className="Fluter2" />
            <img className='absolute top-0' src={img_17} alt="this is image" />
            <svg className='md:block hidden absolute bottom-[9.4rem] right-[13.5rem] z-[-5]' xmlns="http://www.w3.org/2000/svg" width="174" height="11" viewBox="0 0 174 11" fill="none">
              <path d="M11.3333 5.49999C11.3333 2.55447 8.94553 0.166652 6 0.166652C3.05447 0.166652 0.666672 2.55447 0.666672 5.49998C0.666671 8.4455 3.05447 10.8333 6 10.8333C8.94553 10.8333 11.3333 8.4455 11.3333 5.49999ZM174 4.5L6 4.49999L6 6.49999L174 6.5L174 4.5Z" fill="black" />
            </svg>
            <div className='md:block hidden w-[15.93rem] absolute bottom-[2.81rem] right-[25rem] xcxcxc'>
              <h2 className='text-my-black font-my-font sm:text-2xl text-xs not-italic font-bold leading-normal'>Election app Project</h2>
              <p className=' text-my-black font-my-font sm:text-2xl text-xs not-italic font-normal leading-normal'>Full Project <br /> Logo Design <br /> Ui/Ux Design</p>
            </div>
          </div>
        </div>
      </section>
      {/* section Seven*/}

      {/* section */}
      <Element name="sectionP" className="element">
        <div className="mt-[3.94rem] flex flex-wrap h2fq----fq">
          <h2 className="text-my-black font-my-font text-3xl not-italic font-bold leading-normal pl-[1rem] pt-[2.06rem]" style={{ textAlign: 'center', width: 'max-content', margin: '0 auto' }}>Sister Companies & Digital Partners</h2>
        </div>
        <section style={{ boxShadow: ' 0px 4px 40px 0px rgba(112, 144, 176, 0.14)' }} className="of-slider FqQf-slider py-[2.26rem] px-[2.06rem] mt-[2.12rem]  bg-white ">
          <Slider {...settings}>
            <div className="block">
              <img className="block mx-auto" src={img_18} alt="" />
            </div>
            <div className="flex items-center justify-center">
              <img className="block mx-auto" src={img_21} alt="" />
            </div>
            <div className="flex items-center justify-center">
              <img className="block mx-auto" src={img_22} alt="" />
            </div>
            <div className="flex items-center justify-center">
              <img className="block mx-auto" src={img_20} alt="" />
            </div>
            <div className="flex items-center justify-center">
              <img className="block mx-auto" src={img_19} alt="" />
            </div>
            <div className="flex items-center justify-center">
              <img className="block mx-auto" src={img_26} alt="this is image" />
            </div>
            <div className="flex items-center justify-center">
              <img className="block mx-auto" src={img_27} alt="this is image" />
            </div>
          </Slider>
        </section>
      </Element>
      {/* section  */}
      <section id="Clients" className="mt-[3.88rem] mb-[4.12rem] h2fq----fq">
        <h2 className="text-my-black font-my-font text-3xl not-italic font-bold leading-normal mx-auto w-[20.7rem]">Clients Who Trust Us</h2>
        <div className="flex flex-wrap justify-center xl:justify-between  xl:gap-0 gap-10  pl-[2.06rem]  pr-[1.94rem]   mt-[2.56rem]">
          <img src={img_25} alt="this is image" />
          <img src={img_26} alt="this is image" />
          <img src={img_27} alt="this is image" />
          <img src={img_28} alt="this is image" />
          <img src={img_29} alt="this is image" />
        </div>
        <div className="flex flex-wrap justify-center xl:justify-between  xl:gap-0 gap-10  pl-[2.19rem]  pr-[1.94rem] mt-[3.19rem]">
          <img src={img_30} alt="this is image" />
          <img src={img_31} alt="this is image" />
          <img src={img_32} alt="this is image" />
          <img src={img_33} alt="this is image" />
          <img src={img_34} alt="this is image" />
          <img src={img_35} alt="this is image" />
          <img src={img_36} alt="this is image" />
        </div>
        <div className="flex flex-wrap justify-center xl:justify-between  xl:gap-0 gap-10 sm:pl-[13.06rem] pl-[2rem]  sm:pr-[13.63rem] pr-[2rem] mt-[4rem]">
          <img src={img_40} alt="this is image" />
          <img src={img_41} alt="this is image" />
          <img src={img_42} alt="this is image" />
          <img src={img_43} alt="this is image" />
          <img src={img_44} alt="this is image" />
          <img src={img_45} alt="this is image" />
          <img src={img_46} alt="this is image" />
          <h2 className="text-my-black font-my-font text-[1.6rem] not-italic font-medium leading-normal sm:mt-[2.56rem]">& MORE..........</h2>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

