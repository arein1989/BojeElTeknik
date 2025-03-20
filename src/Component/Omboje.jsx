import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import bojeteknik from '../assets/Boje El-teknik.png'

const OmbojeContainer = styled.div`

.Omboje{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  
}
.content{
    color: #000;
    margin-top: 35px;
    margin-bottom: 35px;
    margin-left: 85px;
    margin-right: 85px;
    padding-bottom: 15px;
    line-height: 1.5;
}


`
export default function Omboje() {
  return (
    <div>
        <Header/>
        <OmbojeContainer>
            <section className="om">
                <img src={bojeteknik} alt="omboje" className="Omboje" width="600" height="400" />

                <div className="content">
                    <p>Flemming, der er ejer og elinstallatør, har været installatør siden 1996, så der er mange års erfaring, han har erfaring fra industri, medicinalvirksomheder, landbrug, nybyg, ombygninger, renoveringer, belysning, kontor installationer og netværk. Han har en passion for det gode lange samarbejde, han forlanger af sig selv og dem der er ansat at, vi altid rydder op efter os, de kontor- og virksomheder vi er på fast, der ved vi hvor støvsugeren stå og brugen den.
                    Det er vigtig for os, lige meget om det er en privat eller virksomhedskunde, at vi har taget alt vores affald med os og lige taget alt der grove med støvsugeren eller kost og fejebakke, samt tørret fedfinger af på den hvide væg. Der vil også kun være ansatte i Boje Elteknik, der er uddannet elektriker eller er under uddannelse. Og dermed sikrer vi, at det er kompetente medarbejdere.</p>
                </div>
            </section>
        </OmbojeContainer>
        <Footer/>
    </div>
  )
}
