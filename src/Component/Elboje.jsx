import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Header from './Header';
import Footer from './Footer';
import Boje from './forside.png';
import BojeEl from './knapp.png';

const ElbojeContainer = styled.div`

.container {
  position: relative;
    
}
    
.container img {
  width: 100%;
  height: 80vh;
  border:2px solid #DAE0E8;   
}
    
.btn {
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #47ABD2;
  color: white;
  font-size: 16px;
  padding: 22px 32px;
  border: none;
  border-radius: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px; /* Set the maximum width */
  width: 100%; /* Make it responsive */
  height: 77px;
}
    
.btn a {
  text-decoration: none;
  color: #fff;
  font-size: 20px;
}
    
button.switched {
  flex-direction: row;
}
    
button img {
  order: 0;
  margin-right: 10px;
}
    
button span {
  order: 1;
  font-size: 18px;
}
    
.container .btn:hover {
  background-color: #B1D3E4;
}
`
export default function Elboje() {
  const OfferButton = () => {
    const [isSwitched, setIsSwitched] = useState(false);
  
    const handleSubmit = () => {
      setIsSwitched(!isSwitched);
    }
  
    return (
      <button className={`btn ${isSwitched ? 'switched' : ''}`} onClick={handleSubmit} id="offerBtn">
        <img src={BojeEl} width="106" height="97" style={{ borderRadius: '50%' }} id="offerImg" />
        <span id="offerText">
          {!isSwitched ? <a className="button" href="/fåettilbud">Få et tilbud</a> : "Du kan ringe på +45 60 96 75 57 Eller sende en mail til flemming@boje-elteknik.dk"}
        </span>
      </button>
    );
  }
  
  return (
    <div>
        <Header/>
        <ElbojeContainer>
          <div className="container">
            <img src={Boje} alt="forside"/>
          </div>
          <OfferButton />
        </ElbojeContainer>
        <Footer/>
    </div>
  )
}