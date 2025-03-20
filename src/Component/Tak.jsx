import styled from 'styled-components'
import tak from '../assets/Tak.png'
import Header from './Header'
import Footer from './Footer'

const TakContainer = styled.div`
.tak{
    margin: 30px;
    border: 25px solid #DAE0E8;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  .tak img {
    width: 100%;
    height: 75vh;
  }


`
export default function Tak() {
  return (
    <div>
        <Header/>
        <TakContainer>
            <section className="tak">
               <img src={tak}/>
            </section> 
        </TakContainer>
        <Footer/>
    </div>
  )
}
