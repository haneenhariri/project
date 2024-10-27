import './Footer.css';
import Logo from './../../assets/image/Loge.png'
import Icons from './icons';

export default function Footer() {
    return (
        <footer className='XA-footer'>
            <div className='left-side-footer'>
                <div className='sec1'>
                    <div className='footer-secTop1'>
                        <img src={Logo} alt="Logo" />
                        <span>.agency</span>
                    </div>
                    <div className='footer-secTop2'>
                        <h2>Head Office</h2>
                        <p>Syria - Latakia - GRH2+HJX
                            35.5199518
                        </p>
                    </div>
                </div>
                <div className='sec2'>
                    <h3>Trainers</h3>
                    <h3>Specializations</h3>
                    <h3>Certifications</h3>
                    <h3>Portfolios</h3>
                    <h3>Interns Feedback</h3>
                    <h3>Newsletter</h3>
                </div>
            </div>
            <div className='right-side-footer'>
                <div className='sec1'>
                    <div className='top1'>
                        <h3>Customer Support</h3>
                        <p>info@focal-x.com</p>
                    </div>
                    {/* <div className='top2'>
                        <h3>Assistant Manager</h3>
                        <p>example@focal-x.com</p>
                    </div> */}
                    <div className='top3'>
                        <h3>Human Resources</h3>
                        <p>hr@focal-x.com</p>
                    </div>
                </div>
                <div className='sec2'>
                    <div className='top1'>
                        <h3>Sales</h3>
                        <p>contact@focal-x.com</p>
                    </div>
                    <div className='top2'>
                        <h3>Public Relations </h3>
                        <p>pr@focal-x.com</p>
                    </div>
                </div>
                <div className='sec3'>
                    <h2>Keep In Touch</h2>
                    <div>
                        <Icons />
                    </div>
                </div>
            </div>
        </footer>
    )
}
