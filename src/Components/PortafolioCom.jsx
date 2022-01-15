import React from 'react'
import styled from 'styled-components';
import heynar from '../asset/heyna.jpg'

const PortafolioCom = () => {
    return (
            <PortafolioStyled>
                <div className='left'>
                    <img src={heynar} alt=''/>
                </div>
                <div className='right'>
                    <div className='ensayo'>    
                <h2>heynar soto holguin</h2>
                <div className='porta'>
                <h1>portafolio</h1>
                <p>3d designer & frontend developer</p>
                </div>
                </div>
                
                </div>
                </PortafolioStyled>
    )
}
const PortafolioStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--fondo-rojo);
    
        .left{
            width: 40%;
            img{
                width: 100%;
                height: 100%;
            }
            
        }

    .right{
        width: 100%;
        display: flex;
            justify-content: space-evenly;

        .ensayo{
            
            width: 50%;
        }
        h2{ 
            
            height : 6%;
            background-color: var(--blanco);
            font-size: 1.4rem;
            margin-top: 40%;
            color: var(--fondo-rojo);
            text-transform: uppercase;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Open Sans', sans-serif;
            @media screen and (max-width: 940px){
                font-size: 1.1rem;
                
            }
            @media screen and (max-width: 740px){
                font-size: .9rem;
                
            }
            @media screen and (max-width: 600px){
                font-size: .7rem;
                ;
            }
            @media screen and (max-width: 460px){
                font-size: .6rem;
            }
            @media screen and (max-width: 390px){
                font-size: .4rem;
            }
        }
        .porta {
            h1{ 
                display: flex;
                justify-content: space-evenly;
                text-transform: uppercase;
                color: var(--blanco);
                font-size: 6rem;
                margin-top: 10%;
                font-family: 'Montserrat', sans-serif;
                @media screen and (max-width: 1100px){
                    font-size: 5rem;
                }
                @media screen and (max-width: 940px){
                    font-size: 4rem;
                }
                @media screen and (max-width: 740px){
                    font-size: 3rem;
                }
                @media screen and (max-width: 600px){
                    font-size: 2rem;
                }
                @media screen and (max-width: 390px){
                    font-size: 1rem;
                }
                    
            }

            p{
                font-size: 1rem;
                display: flex;
                justify-content: space-evenly;
                color: var(--blanco);
                margin-top: 5%;
                text-transform: uppercase;
                font-family: 'Open Sans', sans-serif;
                @media screen and (max-width: 940px){
                    
                    font-size: .8rem;
                }
                @media screen and (max-width: 740px){
                    
                    font-size: .7rem;
                }
                @media screen and (max-width: 600px){
                    
                    font-size: .5rem;
                }
                @media screen and (max-width: 440px){
                    
                    font-size: .4rem;
                }
                @media screen and (max-width: 390px){
                    
                    font-size: .3rem;
                }
                
                
            }

        }
    }
    
`;

export default PortafolioCom
