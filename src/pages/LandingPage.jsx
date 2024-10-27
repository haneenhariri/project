import Hero from "../components/Hero/Hero"
import { ServicesSection } from '../components/ServicesSection/ServicesSection'
import Hosting from "../components/Hosting/Hosting"
import Portfolio from "../components/Portfolio/Portfolio"
import About from "../components/About/About"
import Intern from "../components/InternShip/Intern"
import Acheive from "../components/Acheive/Acheive"
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from "react"
import axios from "axios"
import { Link as Linnk } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import facebook from '../assets/facebooks.svg'
import behance from '../assets/behance.svg'
import instagram from '../assets/instragram.svg'
import linkedin from '../assets/linked.svg'
import twitter from '../assets/x.svg'

const LandingPage = () => {

  const [data, setData] = useState([]);

  const [choslink, setchoslink] = useState(1)
  const [choslink2, setchoslink2] = useState(false)

  function chosLink(id) {
    setchoslink(id)
    if (id === 6) {
      setchoslink2(!choslink2)
    }
    else {
      setchoslink2(false)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://internships.focal-x.com/api/sum_interns');
        setData(response.data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const aboutS = [
    {
      id: 0,
      title: "Who are we ? Why Us ? ",
      desc: "",
      desc2: "",
      subT: "However, why choose us?",
      descSub: "",
      subST: "",
      cardsD: [
      {
        id: 0,
        num: 78,
        type: "Employees"

      },
      {
        id: 1,
        num: (data + 2179),
        type: "Interns"

      }, {
        id: 2,
        num: 13,
        type: "Partners"

      }, {
        id: 3,
        num: 150,
        type: "Clients"

      }]
    }]

  const [sidclass, setsidclass] = useState("side-Nav")

  function changeClass() {
    setsidclass("side-NavActiv")
  }
  function changeClass2() {
    setsidclass("side-Nav")
  }

  return (
    <main className="NacFroFocalX"

    >
      <nav className='Focal-x-Nav'>
        <div className='logo-side'>
          <svg xmlns="http://www.w3.org/2000/svg" width="75" height="21" viewBox="0 0 75 21" fill="none">
            <g clipPath="url(#clip0_2076_73)">
              <path d="M4.54212 0.0252637V1.09008C4.35797 1.06794 4.17276 1.05731 3.98746 1.05827C2.02648 1.05827 0.990532 2.46742 0.990532 5.1332V7.84016H2.80738V8.83854H0.987038V20.5225H0V5.0125C0 3.29831 0.414905 1.94717 1.19929 1.10599C1.88411 0.374276 2.82048 0 3.98396 0C4.18661 0 4.36742 0.00842122 4.54212 0.0252637Z" fill="#282828" />
              <path d="M52.0554 0.0664062H51.0684V20.5693H52.0554V0.0664062Z" fill="#282828" />
              <path d="M59.7104 2.75675C59.5824 2.5862 59.4874 2.3901 59.4309 2.17985C59.3743 1.96961 59.3573 1.74941 59.3809 1.53208C59.4045 1.31474 59.4682 1.10461 59.5683 0.913886C59.6685 0.723166 59.803 0.555669 59.964 0.421137C60.1251 0.286606 60.3096 0.187724 60.5066 0.130242C60.7037 0.0727612 60.9095 0.057828 61.112 0.0863111C61.3145 0.114794 61.5097 0.186125 61.6863 0.296156C61.8628 0.406187 62.0172 0.552721 62.1404 0.727236L66.5078 6.71566C66.541 6.76151 66.5786 6.80923 66.6153 6.85134C66.0804 6.94485 65.5761 7.18093 65.1487 7.53787C64.7213 7.8948 64.3846 8.36113 64.1695 8.89395C64.1418 8.84228 64.1105 8.79287 64.076 8.74611L59.7104 2.75675Z" fill="#282828" />
              <path d="M74.6718 17.9082C74.8004 18.0784 74.896 18.2744 74.9532 18.4846C75.0104 18.6949 75.0279 18.9152 75.0048 19.1328C74.9817 19.3504 74.9183 19.5609 74.8185 19.752C74.7187 19.9431 74.5844 20.1111 74.4234 20.246C74.2624 20.381 74.078 20.4803 73.8808 20.5381C73.6836 20.596 73.4777 20.6112 73.275 20.5829C73.0722 20.5547 72.8768 20.4835 72.7 20.3735C72.5232 20.2635 72.3687 20.117 72.2453 19.9424L67.8779 13.9539C67.8062 13.8537 67.7224 13.7641 67.6289 13.6873C68.1762 13.5975 68.6928 13.3587 69.1292 12.9937C69.5656 12.6286 69.9071 12.1496 70.121 11.6025C70.1703 11.7149 70.2313 11.821 70.3026 11.9188L74.6718 17.9082Z" fill="#282828" />
              <path d="M66.7273 13.7099C66.6471 13.7813 66.5745 13.8619 66.5107 13.9503L62.1433 19.9388C61.8914 20.2839 61.5219 20.5078 61.116 20.5612C60.7101 20.6145 60.301 20.493 59.9788 20.2232C59.6565 19.9535 59.4475 19.5576 59.3977 19.1228C59.3479 18.688 59.4614 18.2498 59.7132 17.9046L64.0806 11.9161C64.1234 11.8567 64.1622 11.7942 64.1968 11.729C64.4274 12.2618 64.7811 12.7228 65.2243 13.0684C65.6676 13.414 66.1858 13.6329 66.7299 13.7042" fill="#282828" />
              <path d="M67.7352 6.8829C67.7859 6.83186 67.8329 6.77681 67.8759 6.71821L72.2433 0.729791C72.3678 0.559176 72.5224 0.416492 72.6983 0.309885C72.8742 0.203278 73.0681 0.134835 73.2687 0.108465C73.4693 0.0820948 73.6728 0.0983134 73.8676 0.156195C74.0624 0.214076 74.2446 0.312487 74.4039 0.445808C74.5631 0.57913 74.6963 0.74475 74.7959 0.933214C74.8954 1.12168 74.9593 1.3293 74.9839 1.54421C75.0085 1.75912 74.9934 1.97713 74.9393 2.18578C74.8853 2.39442 74.7934 2.58963 74.669 2.76024L70.3015 8.74866C70.2381 8.83583 70.1833 8.92992 70.1382 9.02937C69.9398 8.48315 69.6151 7.99985 69.1947 7.62475C68.7742 7.24965 68.2718 6.99503 67.7344 6.88477" fill="#282828" />
              <path d="M69.2236 10.3327C69.2238 10.7632 69.1048 11.1841 68.8816 11.5421C68.6585 11.9001 68.3412 12.1793 67.97 12.3441C67.5988 12.509 67.1902 12.5522 66.796 12.4684C66.4019 12.3845 66.0398 12.1773 65.7555 11.8729C65.4713 11.5686 65.2777 11.1808 65.1993 10.7586C65.1208 10.3364 65.161 9.89872 65.3147 9.50098C65.4685 9.10324 65.7289 8.76327 66.063 8.52408C66.3972 8.2849 66.79 8.15723 67.1919 8.15723C67.7306 8.15723 68.2472 8.3864 68.6282 8.79435C69.0092 9.20231 69.2234 9.75565 69.2236 10.3327Z" fill="#FF8500" />
              <path d="M11.427 7.75977C8.03963 7.75977 5.4873 10.5163 5.4873 14.1721V14.2188C5.4873 17.8475 8.04137 20.5815 11.427 20.5815C14.8126 20.5815 17.3667 17.8259 17.3667 14.1702V14.129C17.3667 10.5004 14.8118 7.76632 11.427 7.76632V7.75977ZM16.4216 14.1487V14.1955C16.4216 17.2832 14.2842 19.614 11.4506 19.614C8.63884 19.614 6.43591 17.2336 6.43591 14.1955V14.1487C6.43591 11.0609 8.57245 8.73008 11.406 8.73008C14.2187 8.73008 16.4216 11.1105 16.4216 14.1487Z" fill="#282828" />
              <path d="M45.3908 9.15102C44.5409 8.24059 43.2988 7.7793 41.6995 7.7793C40.3604 7.7793 39.1393 8.10772 37.74 8.84411L37.5399 8.94985L37.9051 9.8294L38.1208 9.71805C39.4188 9.04903 40.5159 8.75054 41.6776 8.75054C44.2501 8.75054 45.6083 10.1176 45.6083 12.7038V13.3467C44.3415 12.9281 43.0234 12.7145 41.6977 12.7132C38.5715 12.7132 36.5503 14.2852 36.5503 16.7161V16.7638C36.5503 19.3688 38.8074 20.5543 40.9046 20.5543C43.2342 20.5543 44.8353 19.3837 45.6083 18.2282V20.5852H46.5368V12.6795C46.5368 11.1759 46.1403 9.95571 45.3891 9.15102H45.3908ZM45.6083 14.3647V15.7018C45.6083 17.5685 43.8186 19.583 40.9265 19.583C39.3463 19.583 37.5015 18.8392 37.5015 16.7404V16.6927C37.5015 14.4751 39.6809 13.6854 41.7204 13.6854C43.1704 13.6854 44.4073 13.9015 45.6083 14.3647Z" fill="#282828" />
              <path d="M27.7228 8.74875C28.7536 8.73717 29.7604 9.08169 30.594 9.73123L30.6097 9.74339H32.023L31.9173 9.63766C31.1478 8.84139 29.8768 7.78125 27.7438 7.78125C24.5215 7.78125 21.8984 10.6426 21.8984 14.1589V14.2038C21.8984 17.723 24.5119 20.5852 27.7228 20.5852C29.3466 20.5852 30.718 19.9696 31.9156 18.7026L32.0178 18.5941H30.6132L30.5975 18.6063C29.7762 19.2703 28.7727 19.6244 27.7438 19.6131C25.0447 19.6131 22.8523 17.1803 22.8523 14.1814V14.1365C22.8523 11.1161 24.9932 8.75063 27.7263 8.75063" fill="#282828" />
            </g>
            <defs>
              <clipPath id="clip0_2076_73">
                <rect width="75" height="20.5833" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1>Digital marketing agency</h1>
        </div>
        <div className='ul-side-nav'>
          <ul className="ullll">
            <li className={choslink === 1 ? 'Activlink' : ''}><Link to="section11" spy={true} smooth={true} offset={-70} duration={1000} onClick={() => chosLink(1)}>Home</Link> </li>
            <li className={choslink === 2 ? 'Activlink' : ''}><Link to="section22" spy={true} smooth={true} offset={-70} duration={1000} onClick={() => chosLink(2)}>Services</Link> </li>
            <li className={choslink === 3 ? 'Activlink' : ''}><Link to="section33" spy={true} smooth={true} offset={-70} duration={1000} onClick={() => chosLink(3)}>Portfolio</Link> </li>
            <li className={choslink === 4 ? 'Activlink' : ''}><Link to="sectionP" spy={true} smooth={true} offset={-70} duration={1000} onClick={() => chosLink(4)}>Clients & Partners</Link></li>
            <li className={choslink === 5 ? 'Activlink' : ''}><Linnk to={'/AcademyPage'} onClick={() => chosLink(5)}>X Academy</Linnk> </li>
            <li className={choslink === 6 ? 'Activlink' : ''}>
              <Link to="section5" spy={true} smooth={true} duration={1000} onClick={() => chosLink(6)}>
                About Us
                <span className={choslink2 ? 'awro-fq-navbar' : 'awro-fq-navbar2'}></span>
                <li className={choslink2 ? 'About-list' : 'About-list2'}>
                  <p><Link to="about1" spy={true} smooth={true} offset={-70} duration={1000} onClick={() => chosLink(6)}>Who & Why</Link></p>
                  <p><Link to="about2" spy={true} smooth={true} offset={-70} duration={1000} onClick={() => chosLink(6)}>Internship</Link></p>
                  <p><Link to="AcheiveAcheive" spy={true} smooth={true} offset={-70} duration={1000} onClick={() => chosLink(6)}>Achievement</Link></p>
                </li>
              </Link>
            </li>
            <li className={choslink === 7 ? 'Activlink' : ''}><Link to="ContactUs" spy={true} smooth={true} duration={1000} onClick={() => chosLink(7)}>Let’s Talk</Link> </li>
          </ul>
        </div>
        <div
          onClick={() => changeClass()}
          className='nav-toglle-xa'
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" viewBox="0 0 25 16" fill="none">
            <line y1="14.25" x2="25" y2="14.25" stroke="#282828" strokeWidth="3" />
            <line y1="6.875" x2="25" y2="6.875" stroke="#282828" strokeWidth="2" />
            <line y1="0.5" x2="25" y2="0.5" stroke="#282828" />
          </svg>
        </div>
        <div
          className={sidclass}
        >
          <div className='x'
            onClick={() => changeClass2()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M13.892 13.3707C13.9612 13.4399 14 13.5336 14 13.6314C14 13.7291 13.9612 13.8229 13.892 13.892C13.8229 13.9612 13.7291 14 13.6314 14C13.5336 14 13.4399 13.9612 13.3707 13.892L7 7.5213L0.629266 13.892C0.560137 13.9612 0.466378 14 0.368615 14C0.270852 14 0.177094 13.9612 0.107965 13.892C0.0388363 13.8229 1.92714e-09 13.7291 0 13.6314C-1.92714e-09 13.5336 0.0388359 13.4399 0.107965 13.3707L6.4787 7L0.107965 0.629266C0.0388359 0.560137 0 0.466378 0 0.368615C0 0.270852 0.0388359 0.177093 0.107965 0.107965C0.177093 0.0388359 0.270852 0 0.368615 0C0.466378 0 0.560137 0.0388359 0.629266 0.107965L7 6.4787L13.3707 0.107965C13.405 0.0737356 13.4456 0.0465836 13.4903 0.028059C13.535 0.00953434 13.583 9.54222e-10 13.6314 0C13.6798 -9.54221e-10 13.7277 0.00953434 13.7724 0.028059C13.8172 0.0465836 13.8578 0.0737356 13.892 0.107965C13.9263 0.142194 13.9534 0.18283 13.9719 0.227552C13.9905 0.272275 14 0.320208 14 0.368615C14 0.417022 13.9905 0.464956 13.9719 0.509678C13.9534 0.554401 13.9263 0.595036 13.892 0.629266L7.5213 7L13.892 13.3707Z" fill="black" />
            </svg>
          </div>
          <div className='ul'>
            <ul>
              <li className={choslink === 1 ? 'Activlink' : ''}><Link to="section11" spy={true} smooth={true} offset={-70} duration={1000} onClick={() => chosLink(1)}>Home</Link> </li>
              <li className={choslink === 2 ? 'Activlink' : ''}><Link to="section22" spy={true} smooth={true} offset={-70} duration={1000} onClick={() => chosLink(2)}>Services</Link> </li>
              <li className={choslink === 3 ? 'Activlink' : ''}><Link to="section33" spy={true} smooth={true} offset={-70} duration={1000} onClick={() => chosLink(3)}>Portfolio</Link> </li>
              <li className={choslink === 4 ? 'Activlink' : ''}><Link to="sectionP" spy={true} smooth={true} offset={-70} duration={1000} onClick={() => chosLink(4)}>Clients & Partners</Link> </li>
              <li className={choslink === 5 ? 'Activlink' : ''}><Linnk to={'/AcademyPage'} onClick={() => chosLink(5)}>X Academy</Linnk> </li>
              <li className={choslink === 6 ? 'Activlink' : ''}>
                <Link to="section555" spy={true} offset={-70} smooth={true} duration={1000} onClick={() => chosLink(6)}>
                  About Us
                </Link>
              </li>
              <li className={choslink === 7 ? 'Activlink' : ''}><Link to="ContactUs" spy={true} smooth={true} duration={1000} onClick={() => chosLink(7)}>Let’s Talk</Link> </li>
            </ul>
          </div>
        </div>
      </nav>
      <Element name="section11" className="element"><Hero /></Element>
      <Element name="section22" className="element"><ServicesSection /></Element>
      <Hosting />
      <Portfolio />
      {aboutS.map((e) => (
        <Element name="section555" className="element">
          <About key={e.id} title={e.title} description={e.desc} description2={e.desc2} subT={e.subT} subSTit={e.descSub} descSub={e.subST} cardsA={e.cardsD} />
        </Element>
      ))}
      <Intern />
      <Element name="AcheiveAcheive" className="element"><Acheive /></Element>
      <Element name="ContactUs" className="element"><ContactUs /></Element>
      <footer className="bg-my-black px-[2.06rem] Footer-fq-FQ">
            {/* first part */}
            <div className='xl:flex'>
                <div className="xl:w-[33.08%] sm:pb-[2.5rem] pb-[2rem]">
                    {/* logo */}
                    <div className="pt-[2.5rem] flex items-end gap-[0.44rem] mb-[2.44rem] ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="144" height="37" viewBox="0 0 144 37" fill="none">
                            <g clip-path="url(#clip0_553_96)">
                                <path d="M8.72087 0.0454132V1.9595C8.3673 1.91969 8.01171 1.9006 7.65592 1.90231C3.89085 1.90231 1.90182 4.43536 1.90182 9.22729V14.0932H5.39017V15.8879H1.89511V36.8907H0V9.01032C0 5.92895 0.796618 3.50018 2.30264 1.98809C3.61748 0.672788 5.41532 0 7.64921 0C8.03829 0 8.38545 0.0151377 8.72087 0.0454132Z" fill="white" />
                                <path d="M99.9462 0.119141H98.0511V36.9745H99.9462V0.119141Z" fill="white" />
                                <path d="M114.644 4.95543C114.399 4.64885 114.216 4.29635 114.108 3.91842C113.999 3.54048 113.966 3.14467 114.012 2.754C114.057 2.36333 114.179 1.98559 114.372 1.64276C114.564 1.29992 114.822 0.998835 115.131 0.757004C115.441 0.515174 115.795 0.337427 116.173 0.2341C116.551 0.130774 116.947 0.10393 117.335 0.155131C117.724 0.206331 118.099 0.334554 118.438 0.532341C118.777 0.730129 119.073 0.993535 119.31 1.30724L127.695 12.0719C127.759 12.1543 127.831 12.2401 127.902 12.3157C126.875 12.4838 125.906 12.9082 125.086 13.5498C124.265 14.1914 123.619 15.0297 123.206 15.9875C123.153 15.8946 123.093 15.8058 123.026 15.7217L114.644 4.95543Z" fill="white" />
                                <path d="M143.369 32.1912C143.616 32.4973 143.8 32.8496 143.91 33.2275C144.019 33.6055 144.053 34.0015 144.009 34.3927C143.964 34.7838 143.843 35.1622 143.651 35.5057C143.459 35.8492 143.202 36.1511 142.893 36.3937C142.583 36.6363 142.229 36.8148 141.851 36.9188C141.472 37.0228 141.077 37.0501 140.687 36.9993C140.298 36.9485 139.923 36.8206 139.584 36.6229C139.244 36.4252 138.947 36.1617 138.71 35.8479L130.325 25.0832C130.187 24.9031 130.027 24.7419 129.847 24.6039C130.898 24.4426 131.89 24.0133 132.728 23.3571C133.565 22.7009 134.221 21.8398 134.632 20.8564C134.727 21.0584 134.844 21.2491 134.981 21.425L143.369 32.1912Z" fill="white" />
                                <path d="M128.116 24.6447C127.962 24.7731 127.823 24.9181 127.7 25.077L119.315 35.8416C118.831 36.4621 118.122 36.8646 117.343 36.9605C116.563 37.0564 115.778 36.8378 115.159 36.3529C114.54 35.868 114.139 35.1565 114.043 34.3749C113.948 33.5932 114.166 32.8055 114.649 32.185L123.035 21.4204C123.117 21.3136 123.191 21.2012 123.258 21.084C123.701 22.0417 124.38 22.8704 125.231 23.4917C126.082 24.113 127.077 24.5063 128.121 24.6346" fill="white" />
                                <path d="M130.052 12.3724C130.149 12.2807 130.239 12.1817 130.322 12.0764L138.707 1.31179C138.946 1.0051 139.243 0.748615 139.581 0.556981C139.918 0.365347 140.291 0.242316 140.676 0.194914C141.061 0.147512 141.452 0.176666 141.826 0.280712C142.2 0.384758 142.55 0.561659 142.855 0.801313C143.161 1.04097 143.417 1.33868 143.608 1.67746C143.799 2.01624 143.922 2.38944 143.969 2.77577C144.016 3.16209 143.987 3.55397 143.883 3.92903C143.78 4.30409 143.603 4.65498 143.364 4.96167L134.979 15.7263C134.857 15.883 134.752 16.0521 134.665 16.2309C134.284 15.249 133.661 14.3802 132.854 13.706C132.046 13.0317 131.082 12.574 130.05 12.3758" fill="white" />
                                <path d="M132.909 18.5737C132.91 19.3475 132.681 20.1041 132.253 20.7477C131.824 21.3913 131.215 21.893 130.502 22.1893C129.79 22.4857 129.005 22.5634 128.248 22.4126C127.492 22.2619 126.796 21.8894 126.251 21.3423C125.705 20.7953 125.333 20.0982 125.183 19.3392C125.032 18.5803 125.109 17.7936 125.404 17.0786C125.7 16.3636 126.2 15.7525 126.841 15.3225C127.483 14.8926 128.237 14.6631 129.008 14.6631C130.043 14.6631 131.035 15.075 131.766 15.8084C132.498 16.5417 132.909 17.5364 132.909 18.5737Z" fill="#FF8500" />
                                <path d="M21.9397 13.9482C15.4359 13.9482 10.5355 18.9033 10.5355 25.4748V25.5589C10.5355 32.0816 15.4393 36.9963 21.9397 36.9963C28.4401 36.9963 33.3439 32.0429 33.3439 25.4714V25.3974C33.3439 18.8747 28.4384 13.96 21.9397 13.96V13.9482ZM31.5293 25.4327V25.5168C31.5293 31.0673 27.4255 35.2571 21.985 35.2571C16.5864 35.2571 12.3568 30.9782 12.3568 25.5168V25.4327C12.3568 19.8822 16.459 15.6924 21.8994 15.6924C27.2997 15.6924 31.5293 19.9714 31.5293 25.4327Z" fill="white" />
                                <path d="M87.15 16.4501C85.5182 14.8136 83.1334 13.9844 80.0626 13.9844C77.4916 13.9844 75.1471 14.5747 72.4604 15.8985L72.0763 16.0885L72.7773 17.6696L73.1916 17.4694C75.6837 16.2668 77.7902 15.7303 80.0207 15.7303C84.9597 15.7303 87.5676 18.1876 87.5676 22.8366V23.9921C85.1353 23.2396 82.6046 22.8558 80.0593 22.8534C74.0569 22.8534 70.1762 25.6791 70.1762 30.0489V30.1347C70.1762 34.8173 74.5098 36.9483 78.5365 36.9483C83.0093 36.9483 86.0834 34.8442 87.5676 32.7669V37.0038H89.3503V22.7929C89.3503 20.0899 88.5889 17.8966 87.1466 16.4501H87.15ZM87.5676 25.8221V28.2256C87.5676 31.5812 84.1312 35.2024 78.5784 35.2024C75.5445 35.2024 72.0025 33.8653 72.0025 30.0926V30.0068C72.0025 26.0206 76.1869 24.601 80.1029 24.601C82.8868 24.601 85.2616 24.9895 87.5676 25.8221Z" fill="white" />
                                <path d="M53.2275 15.7265C55.2065 15.7056 57.1396 16.3249 58.7401 17.4925L58.7703 17.5144H61.4838L61.2809 17.3243C59.8034 15.893 57.3632 13.9873 53.2677 13.9873C47.0809 13.9873 42.0446 19.1308 42.0446 25.4516V25.5324C42.0446 31.8582 47.0625 37.0034 53.2275 37.0034C56.3452 37.0034 58.9782 35.8967 61.2775 33.6193L61.4737 33.4242H58.777L58.7468 33.446C57.1699 34.6397 55.2433 35.2761 53.2677 35.2558C48.0855 35.2558 43.876 30.8827 43.876 25.492V25.4113C43.876 19.9818 47.9866 15.7298 53.2342 15.7298" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_553_96">
                                    <rect width="144" height="37" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-white font-my-secound-font text-xl not-italic font-light leading-normal" style={{marginBottom:"-8px"}}>.agency</p>
                    </div>
                    <p className="text-white font-my-secound-font text-[1.5625rem] not-italic font-medium leading-normal">Head Office</p>
                    <p className="text-white font-my-secound-font text-xl not-italic font-light leading-normal">Syria - Latakia - GRH2+HJX
                        35.5199518</p>
                </div>
                {/* secound part */}
                <div className="xl:w-[66.9%] flex flex-wrap gap-5 justify-between xfoterfqx">
                    <div className="xl:pt-[3.81rem]">
                        <div className="mb-[1.06rem]">
                            <h2 className="text-white font-my-secound-font text-xl not-italic font-medium leading-normal">Sales</h2>
                            <p className="text-white font-my-secound-font text-[1.0625rem] not-italic leading-normal font-light w-[10rem]">contact@focal-x.com
                                +963 953 666 056</p>
                        </div>
                        <div>
                            <h2 className="text-white font-my-secound-font text-xl not-italic font-medium leading-normal">Public Relations</h2>
                            <p className="text-white font-my-secound-font text-[1.0625rem] not-italic leading-normal font-light w-[10rem]">pr@focal-x.com
                                +963 953 666 052</p>
                        </div>
                    </div>

                    <div className="xl:pt-[3.81rem] ">
                        <div className="mb-[1.06rem]">
                            <h2 className="text-white font-my-secound-font text-xl not-italic font-medium leading-normal">Customer Support</h2>
                            <p className="text-white font-my-secound-font text-[1.0625rem] not-italic leading-normal font-light w-[10rem]">info@focal-x.com
                                +963 953 666 054</p>
                        </div>
                        <div>
                            <h2 className="text-white font-my-secound-font text-xl not-italic font-medium leading-normal">Human Resources</h2>
                            <p className="text-white font-my-secound-font text-[1.0625rem] not-italic leading-normal font-light w-[10rem]">hr@focal-x.com</p>
                        </div>
                    </div>

                    <div className="xl:pt-[3.81rem] ">
                        <h2 className="text-white font-my-secound-font text-xl not-italic font-medium leading-normal">Useful Links</h2>
                        <p className="text-white font-my-secound-font text-[1.0625rem] not-italic leading-normal font-light w-[11rem]">
                        <Link style={{color:'#fff',fontWeight:'400'}} to="sectionP" spy={true} smooth={true} offset={-70} duration={1000} onClick={() => chosLink(4)}>Clients & Partners</Link><br />
                            <Linnk style={{color:'#fff',fontWeight:'400'}} to={'/AcademyPage'} onClick={() => chosLink(5)}>Check Certificat ID</Linnk>
                            Check for employee
                            Our Brand ID guidlines</p>
                    </div>

                    <div className="xl:pt-[5.38rem]">
                        <h2 className="text-white font-my-secound-font not-italic leading-normal font-medium text-[1.5625rem]" style={{letterSpacing:'2.1px',marginBottom:'5px'}}>Keep In Touch</h2>
                        <div className='flex gap-[0.57rem]'>
                            <a href="https://www.facebook.com/focal.x.agency/"><img src={facebook} alt="this is icon" /></a>
                            <a href="https://www.behance.net/focal-x-agency"><img src={behance} alt="this is icon" /></a>
                            <a href="https://www.instagram.com/focal.x.agency"><img src={instagram} alt="this is icon" /></a>
                            <a href="https://twitter.com/focal_x_agency"><img src={twitter} alt="this is icon" /></a>
                            <a href="https://www.linkedin.com/company/focal-x-agency/"><img src={linkedin} alt="this is icon" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[1.06rem] pb-[1.44rem] flex flex-wrap lg:gap-0 gap-4 justify-between items-center'>
                 <p className='text-white foterfocalx'>&copy; <span className='pl-[0.38rem]'>2021 - 2024 focal X L.L.C All Right Reserved</span></p>
                 <hr className='text-white w-[66.9%]' />
            </div>
        </footer>
      <Footer />
    </main>

  )
}

export default LandingPage