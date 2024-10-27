import React, { useEffect, useState } from 'react'
import "./AboutStyle.css"
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';


const CounterCell = ({ initialValue, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < initialValue) {
            return prevCount + 15;
          } else {
            clearInterval(timer);
            return prevCount;
          }
        });
      }, 30);

      return () => {
        clearInterval(timer);
      };
    }
  }, [initialValue, inView]);

  return <span className="cell num">{count}</span>;
};
const About = ({ title, description, description2, subT, subSTit, descSub, cardsA }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <Element name="about1" className="element">
      <div className='aboutCont' id="about">
      <div className="aboutS">
        <h1 className='titA'>{title}</h1>
        <div className='infoS'>
          <p>WE are a family of worldwide 75 specialist s of storytellers and marketers</p>
          <p>brand builders, and designers, in addition to programmers and developers.</p>
        </div>
        <h1 className='subAbo'>{subT}</h1>
        <div className="infoS anewArchived1">
          <p>If you still do not know the answer to that question, well, then let us tell you a story ....</p>
          <p>Two people, who carry the same name set off focal X in 10/06/2021 Unfunded</p>
          <p>we started with an asset of $50 only. However, within two weeks we reached 14,000 followers </p>
          <p>and potential customers, Two months later, our staff had over 70 creative people and 100 clients </p>
          <p>and partners in various countries around the world. Three months after, we took part in events </p>
          <p>and conferences with great achievements in hand,until </p>
          <p>we reached you, placing all our expertise at your service. </p>
        </div>
        <div className="infoS anewArchived2">
          <p>If you still do not know the answer to that question, well, then let us tell you a story ....</p>
          <p>Two people, who carry the same name set off focal X in 10/06/2021 Unfunded we started with an asset of $50 only. However, within two weeks we reached 14,000 followers and potential customers, Two months later, our staff had over 70 creative people and 100 clients and partners in various countries around the world. Three months after, we took part in events and conferences with great achievements in hand,until we reached you, placing all our expertise at your service. </p>
        </div>
      </div>
      <div className="cardsA" ref={ref}>
        {cardsA.map((e) => (
          <div key={e.id} className="itemAbout">
            <h1 className="numA">{inView && <CounterCell initialValue={e.num} inView={inView} />}+
            </h1>   <p className="typeAb">{e.type}</p>
          </div>
        ))}
      </div>
    </div>
    </Element>
    
  )
}

export default About
