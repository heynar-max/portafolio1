import React from 'react'
import styled from 'styled-components'
import Icons from './Icons'

const Contacto = () => {
    return (
        <ContactoStyled>
            <div className='container'>
                
                <div className='icono'>
                        <Icons className="fab fa-linkedin" />
                        <Icons className="fab fa-github" />
                        <Icons className="fab fa-instagram-square" />
                        <Icons className="fab fa-facebook-square" />
                        </div>
                <div className='content'>
                    <h3>I’M LOOKING FOR A JOB</h3>
                    <span>LET’S CONNECT: </span>
                </div>
                <div className='url'>
                    <p>https://www.facebook.com/heynar.sotoholguin</p>
                    <p>https://www.linkedin.com/in/heynar-soto-holguin-bb7a43213/</p>
                    <p>https://www.instagram.com/heynar_max/</p>

                </div>

            </div>
        </ContactoStyled>
    )
}

const ContactoStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10rem;

    .icono{
        margin-top: 5rem;
        display: flex;
        justify-content: center;
        margin-bottom: 10rem;
            i{
                color: var(--fondo-rojo);
                width: 100px;
                height: 100px;
                line-height: 90px;
                text-align: center;
                border-radius: 50%;
                background-color: var(--blanco);
                font-size: 50px;
                @media screen and (max-width:700px){
                    width: 70px;
                    height: 70px;
                    line-height: 60px;
                    font-size: 40px;
                }
                @media screen and (max-width:580px){
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 30px;
                }
                @media screen and (max-width:370px){
                    width: 35px;
                    height: 35px;
                    line-height: 30px;
                    font-size: 30px;
                }
        }
    }
    .content{
        margin-bottom: 5rem;
        background-color: var(--fondo-rojo);
        width: 500px;
        height: 200px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        @media screen and (max-width:700px){
            width: 400px;
            height: 180px;
            
        }
        @media screen and (max-width:580px){
            width: 360px;
            height: 120px;
            
        }
        @media screen and (max-width:440px){
            width: 260px;
            height: 100px;
            
        }
        @media screen and (max-width:370px){
            width: 240px;
            height: 90px;
            margin-left: 1rem;
        }
        h3{
            display: flex;
            justify-content: center;
            color: var(--blanco);
            font-size: 1.3rem;
            font-family: 'Open Sans', sans-serif;
            margin-left: 3rem;
            @media screen and (max-width:700px){
                font-size: 1rem;
                margin-left: 1.8rem;
            }
            @media screen and (max-width:580px){
                font-size: .8rem;
                margin-left: 1.4rem;
            }
            @media screen and (max-width:440px){
                font-size: .6rem;
                margin-left: 1rem;
            }
            
        }
        span{
            display: flex;
            justify-content: center;
            color: var(--blanco);
            font-size: 1.3rem;
            font-family: 'Open Sans', sans-serif;
            margin-left: 3rem;
            @media screen and (max-width:700px){
                font-size: 1rem;
                margin-left: 1.8rem;
            }
            @media screen and (max-width:580px){
                font-size: .8rem;
                margin-left: 1.4rem;
            }
            @media screen and (max-width:440px){
                font-size: .6rem;
                margin-left: 1rem;
            }
        }
    }
    .url{
        margin-top: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10rem;
        p{
            font-family: 'Open Sans', sans-serif;
            @media screen and (max-width:700px){
                font-size: .8rem;
                
            }
            @media screen and (max-width:580px){
                font-size: .8rem;
                
            }
            @media screen and (max-width:440px){
                font-size: .6rem;
                
            }
            @media screen and (max-width:370px){
                font-size: .4rem;
                
            }
        }
    }
`;
export default Contacto
