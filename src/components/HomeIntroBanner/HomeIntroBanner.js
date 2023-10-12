import React from 'react'
import './HomeIntroBanner.css';
import TeamImg from '../../assets/images/Team-cuate 1.svg'
import backimg from '../../assets/images/Rectangle 80.png'
import HalfCircle from '../../assets/images/Ellipse 163.svg'
import Fade from 'react-reveal/Fade';
import FullCircle from '../../assets/images/Ellipse 162.png'


export default function HomeIntroBanner() {
  return (
    <section className='about-us-area'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-5'>
                <Fade left>
                    <h1 className='about-heading'>About Us</h1>
                    <p className='about-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
               </Fade>
                </div>
                <div className='col-lg-7'>
                    <div className='img-div'>
                    <Fade right>

                        <img className='img-fluid' src={TeamImg}/>
</Fade>
                       
                    </div>
                </div>
            </div>
        </div>
        <div className='right-img d-none d-lg-block'>
            <img className='img-fluid' src={backimg}/>

        </div>
        <div className='half-circle-img'>
            <img className='img-fluid' src={HalfCircle}/>
             
        </div>
        <div className='full-circle-img' >
            <img className='img-fluid' src={FullCircle}/>
             
        </div>
    </section>
  )
}
