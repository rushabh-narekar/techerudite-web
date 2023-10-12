import React, { useState, useEffect } from "react";
import "./CounterClient.css";
import Clients from "../../assets/images/Clients.png";
import Coffee from "../../assets/images/Coffee.png";
import Projects from "../../assets/images/Projects.png";
import Rate from "../../assets/images/Rate.png";

export default function CounterClient() {
  const [clientsCount, setClientsCount] = useState(0);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [rateCount, setRateCount] = useState(0);

  useEffect(() => {
    // Function to increment the counts with animation effect
    const incrementCounts = () => {
        const clientsInterval = setInterval(() => {
          if (clientsCount < 300) {
            setClientsCount(clientsCount + 1);
          }
        }, 20);
  
        const coffeeInterval = setInterval(() => {
          if (coffeeCount < 90) {
            setCoffeeCount(coffeeCount + 1);
          }
        }, 20);
  
        const projectsInterval = setInterval(() => {
          if (projectsCount < 60) {
            setProjectsCount(projectsCount + 1);
          }
        }, 20);
  
        const rateInterval = setInterval(() => {
          if (rateCount < 93) {
            setRateCount(rateCount + 1);
          }
        }, 20);
  
        setTimeout(() => {
          // Clear intervals when counters reach their targets
          if (clientsCount === 300 && coffeeCount === 90 && projectsCount === 60 && rateCount === 93) {
            clearInterval(clientsInterval);
            clearInterval(coffeeInterval);
            clearInterval(projectsInterval);
            clearInterval(rateInterval);
          }
        }, 3000); // Stop after 3 seconds
      };
      

    incrementCounts();
  }, []);

  return (
    <section className="areaBg">
      <div className="container">
        <div className="row align-items-center commonMarginTopBottom">
          <div className="col-xl-3 col-lg-3 col-xxl-3 col-md-3 my-2">
            <div className="card bg-transparent hoverCard1 h-100">
              <div className="py-4 d-flex justify-content-center">
                <img
                  className=""
                  height={120}
                  width={120}
                  src={Clients}
                  alt="Card cap2"
                />
              </div>
              <div className="py-0 card-body">
                <h1 className="text-center ">{clientsCount}</h1>
                <span className="text-black card-text-custom text-center d-block">Clients</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-xxl-3 col-md-3 my-2">
            <div className="card bg-transparent hoverCard1 h-100">
              <div className="py-4 d-flex justify-content-center">
                <img
                  className=""
                  height={120}
                  width={120}
                  src={Coffee}
                  alt="Card cap3"
                />
              </div>
              <div className="py-0 card-body">
                <h1 className="text-center ">{coffeeCount}</h1>
                <span className="text-black card-text-custom text-center d-block">Coffee</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-xxl-3 col-md-3 my-2">
            <div className="card bg-transparent hoverCard1 h-100">
              <div className="py-4 d-flex justify-content-center">
                <img
                  className=""
                  height={120}
                  width={120}
                  src={Projects}
                  alt="Card cap4"
                />
              </div>
              <div className="py-0 card-body">
                <h1 className="text-center ">{projectsCount}</h1>
                <span className="text-black card-text-custom text-center d-block">Projects</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-xxl-3 col-md-3 my-2">
            <div className="card bg-transparent hoverCard1 h-100">
              <div className="py-4 d-flex justify-content-center">
                <img
                  className=""
                  height={120}
                  width={120}
                  src={Rate}
                  alt="Card cap5"
                />
              </div>
              <div className="py-0 card-body">
                <h1 className="text-center ">{rateCount}%</h1>
                <span className="text-black card-text-custom text-center d-block">Retention Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
