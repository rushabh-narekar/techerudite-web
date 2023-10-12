import React from 'react'
import Header from '../components/Header/Header'
import WeAreBrand from '../components/WeAreBrand/WeAreBrand'
import Mission from '../components/Mission/Mission'
import Vision from '../components/Vision/Vision'
import AreaExpertise from '../components/AreaExpertise/AreaExpertise'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import CounterClient from '../components/CounterClient/CounterClient'
import HomeIntroBanner from '../components/HomeIntroBanner/HomeIntroBanner'
import Testimonails from '../components/Testimonails/Testimonails'
import PartnerSlider from '../components/PartnerSlider/PartnerSlider'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import Footer from '../components/Footer/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton'


export default function Home() {
  return (
    <>
    <Header></Header>
    <HomeIntroBanner></HomeIntroBanner>
    <WeAreBrand></WeAreBrand>
    <Mission></Mission>
    <Vision></Vision>
    <AreaExpertise></AreaExpertise>
    <WhatWeDo ></WhatWeDo>
    <CounterClient></CounterClient>
    <Testimonails></Testimonails>
    <PartnerSlider></PartnerSlider>
    <GetInTouch></GetInTouch>
    <Footer></Footer>
    <ScrollToTopButton></ScrollToTopButton>
    </>
  )
}
