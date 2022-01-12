import React from 'react'
import styled from 'styled-components'

import resume from '../asset/gato.jpg'

const MiPortafolio = () => {
    return (
        <MiportafolioStyled>
            <div className='container'>
            <div className='title'>
                    <h1>portafolio</h1>
                </div>
            <div className='tarjetas'>
                
                <div className='card'>    
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Lorem Ipsum</span></h4>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, natus quas vero enim 
                    praesentium delectus est id fugiat ab libero adipisci recusandae at maxime veritatis! 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, nesciunt.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Lorem Ipsum</p>
                        <p>: 36</p>
                        <p>: Spainsh </p>
                        <p>: Spanish, French, English </p>
                        <p>: London, United Kingdom</p>
                        <p>: Freelance</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </MiportafolioStyled>
    )
}
const MiportafolioStyled = styled.div`
        .title{
            display: flex;
            justify-content: center;
            margin-bottom: 5rem;
            
            
            h1{
                font-size: 3rem;
                text-transform: uppercase;
                color: var(--fondo-rojo);
                margin-top: 10rem;
                font-family: 'Montserrat', sans-serif;
                
            }
        }
        .tarjetas{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 1.5rem;
        font-family: 'Open Sans', sans-serif;
        margin-left: 3rem;
        }       
    .card{
        transition: all .4s ease-in-out;
        box-shadow: 0 8px 14px rgb(208 211 212 / 9%);
        border-radius: 10px;
        margin-top: 5rem;
        
        display: flex;
        margin-bottom: 15rem;
        &:hover{
            transform: translateY(3px);
            
        @media screen and (max-width:1000px){
            flex-direction: column;
            .left-content{
                margin-bottom: 2rem;
            }
    }
    }
    
    .left-content{
        width: 100%;
        img{
            width:90%;
            object-fit: cover;
            border-radius: 10px;
            margin-top: .3rem;
            margin-left: .3rem;
        }
    }
    .right-content{
        width: 100%;
        
        h4{
            font-size: 2rem;
            color: var(--fondo-rojo);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;

            
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                    
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
}
`;
export default MiPortafolio
