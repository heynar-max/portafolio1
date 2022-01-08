import React from 'react'
import styled from 'styled-components';

const About = () => {
    return (
        <AboutStyled>
            <div className='container'>
                <div className='content'>
                    <h1>about me</h1>
                    <div className='card'>
                    <p align='center' >I´m  designer de estrutura 3d & junior developer front-end  de Buga, colombia. I enjoy drawing 3d designs, I also love the logic and structure of the coding  and always strive to write elegant and efficient code, be it html or css.  when i'm not coding or pushing pixels you will find me on the mountain  with my bike</p>
                    </div>
                </div>
                <hr className='separador'>
                </hr>
                <div className='fecha'> 
                <p> portafolio 2022</p>
                </div>
            </div>
        </AboutStyled>
    )
}

const AboutStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
    .content{
            
            justify-content: center;
            width: 100%;
        
        h1{
            font-size: 3rem;
            text-transform: uppercase;
            color: var(--fondo-rojo);
            margin-top: 15rem;
            display: flex;
            justify-content: center;
        }
        .card{
            display: flex;
            justify-content: center;
            width: 100%;
            p{
                    width: 53%;
                    font-size: 1.5rem;
                    margin-top: 6rem;
                    display: flex;
                    margin: 100px;
                    
            
            }
        }
        
    }
    .separador{
        border-top: 1px solid #BD4451;
        margin: 70px auto 55px !important;
        max-width: 40%;
    }
    .fecha{
        p{
            display: flex;
            justify-content: center;
            font-size: 1.5rem;
            text-transform: uppercase;
            color: var(--fondo-rojo);
            margin-bottom: 200px;
        }
        
    }
    
`;

export default About