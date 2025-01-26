import React from 'react';
import styled from 'styled-components'
import { Icon } from 'react-icons-kit';
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'

const FooterContainer = styled.div`
.fot {
    background-color: #DAE0E8;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
    
}
  
.fot1 {
    background-color: #fff;
    width: 65%;
    margin: 15px auto;
    padding: 20px;
    box-sizing: border-box;
}
.fot2 {
    background-color: #fff;
    width: 65%;
    margin: 15px auto;
    padding: 10px;
    box-sizing: border-box;
}

  
.bte {
    padding: 10px 15px;
    background-color: #47ABD2;
    text-decoration: none;
    color: #fff;
    margin: 10px auto;
    display: inline-block;
    width: fit-content; 
}
  
.icon-bars {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px auto;
}
  
.icon-bars a {
    display: inline-block;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;
    margin: 5px;
    text-align: center;
}
  
  
.fo {
    text-align: center;
    flex-grow: 0.7;
}
  
.ft {
    text-align: center;
}
  
@media only screen and (max-width: 600px) {
    .fot1,
    .fot2 {
      width: 100%;
      max-width: 100%;
    }
}


`

export default function Footer() {
    
  return (
    <div>
        <FooterContainer>
            <div className='fot'>
                <div className="fot1">
                    <p className="ft" >Skal du bruger for hjælp fra en autoriseret og erfaren el-installatør, så ring til mig på:
                    &nbsp;&nbsp;  <a  className="bte"  href="tel:+4596967557">60 96 75 57</a>
                    </p>
                </div>
                <div className="fot2">
                    <div className="icon-bars">
                        <a href='https://www.linkedin.com/posts/boje-elteknik-aps_her-er-et-godt-eksempel-p%C3%A5-hvad-vi-kan-activity-7195138017290833921-WVbv/?originalSubdomain=dk' target="_blank">
                            <Icon icon={linkedinSquare} size={70} style={{ color: '#007bb5' }}/> 
                        </a>
                            
                        <a href='https://www.facebook.com/profile.php?id=61559475357666&locale=da_DK' target="_blank">
                            <Icon icon={facebookSquare} size={70} style={{ color: '#3B5998' }}/>
                        </a>
                  
                        <p className="fo">Eller følg mig på Facebook & LinkedIn !</p>
                    </div>

                </div>
            </div>
        </FooterContainer>
    </div>
  )
}
