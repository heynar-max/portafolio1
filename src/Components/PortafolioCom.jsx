import React from 'react'
import styled from 'styled-components';
import heynar from '../asset/heynegro1.jpg'

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
            }
            p{
                display: flex;
                justify-content: space-evenly;
                color: var(--blanco);
                margin-top: 5%;
                text-transform: uppercase;
                font-family: 'Open Sans', sans-serif;
                
                
            }

        }
    }
    
`;

export default PortafolioCom
