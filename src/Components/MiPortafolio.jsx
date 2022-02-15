import React from 'react'
import styled from 'styled-components'
import portafolio from '../asset/portafolio.jpg'
import resume from '../asset/turis.jpg'

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
                <h4>Turismo</h4>
                <p className="paragraph">It is a page of sales and exhibition of my products elaborated in 3D design. 
                    The collectors of the sagas or the anime that I make are the ones who visit my page the most,
                    it has images and registration crud and also a shopping cart
                    
                    </p>
                    
                <div className="about-info">
                    <div className="info-title">
                        <p>If you want to know more information about my page this is the link</p>
                        <p>take a peek <a href="https://turismobuga.netlify.app/" target="_blank" rel="noreferrer">Turismo</a>.</p>
                    </div>
                </div>
            </div>
            </div>

                <div className='card'>    
            <div className="left-content">
                <img src={portafolio} alt=""/>
            </div>
            <div className="right-content">
                <h4>mi portafolio</h4>
                <p className="paragraph">
                They are my practices to become familiar with the world of programming
                    They are my tests and my knowledge that every day I do a project
                    I am loving my work more, and every day I want to learn more and improve it
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>These are some of my portfolio that I have designed </p>
                        <p>take a peek <a href="https://portafolio2hey.netlify.app/" target="_blank" rel="noreferrer">portafolio</a>.</p>
                        
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
                @media screen and (max-width: 600px){
                font-size: 2rem;
                }
                @media screen and (max-width: 390px){
                    font-size: 1.5rem;
                }
            }
        }
        .tarjetas{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-gap: 1.5rem;
            font-family: 'Open Sans', sans-serif;
            margin-left: 3rem;
            @media screen and (max-width: 1000px){
                grid-template-columns: repeat(1,1fr);
            }
        }       
    .card{
        transition: all .4s ease-in-out;
        box-shadow: 0 8px 14px rgb(208 211 212 / 9%);
        border-radius: 10px;
        margin-top: 5rem;
        
            display: flex;
            margin-bottom: 15rem;
            @media screen and (max-width:1000px){
                margin-bottom: 4rem;
            }
            @media screen and (max-width:850px){
                margin-bottom: 3rem;
            }
            @media screen and (max-width:700px){
                margin-bottom: 1.5rem;
            }
            @media screen and (max-width:580px){
                margin-bottom: 1rem;
            }
                &:hover{
                    transform: translateY(3px);
            
                    @media screen and (max-width:1000px){   
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
                text-transform: uppercase;
                @media screen and (max-width:1160px){
                    font-size: 1.7rem;
                }
                @media screen and (max-width:1000px){
                    font-size: 2.5rem;
                }
                @media screen and (max-width:850px){
                    font-size: 2rem;
                }
                @media screen and (max-width:700px){
                    font-size: 1.6rem;
                }
                    @media screen and (max-width:580px){
                    font-size: 1.4rem;
                }
                    @media screen and (max-width:465px){
                        font-size: 1rem;
                    }
                    @media screen and (max-width:400px){
                        font-size: .8rem;
                    }
            }
        }
        .paragraph{
            margin-top: 5rem;
            padding: 1rem 0;
            font-size: 1rem;
            @media screen and (max-width:1340px){
                margin-top: 3rem;
            }
            @media screen and (max-width:1240px){
                margin-top: 1rem;
            }
            @media screen and (max-width:1160px){
                font-size: .9rem;
            }
            @media screen and (max-width:1000px){
                font-size: 1.2rem;
                margin-top: 6rem;
            }
            @media screen and (max-width:850px){
                font-size: 1rem;
                margin-top: 6rem;
            }
            @media screen and (max-width:700px){
                font-size: .9rem;
                margin-top: 3rem;
            }
            @media screen and (max-width:580px){
                font-size: .7rem;
                margin-top: 1rem;
            }
            @media screen and (max-width:465px){
                font-size: .6rem;
                margin-top: .1rem;
            }
            @media screen and (max-width:400px){
                font-size: .4rem;
                margin-top: .1rem;
            }
            
            

            
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                    @media screen and (max-width:1340px){
                    margin-top: 1rem;
                    }
                    @media screen and (max-width:1240px){
                        margin-top: .6rem;
                        font-size: .9rem;
                    }
                    @media screen and (max-width:1160px){
                        font-size: .9rem;
                    }
                    @media screen and (max-width:1100px){
                        font-size: .8rem;
                        margin-top: .2rem;
                    }
                    @media screen and (max-width:1000px){
                        font-size: 1.2rem;
                        margin-top: 2rem;
                    }
                    @media screen and (max-width:850px){
                        font-size: 1rem;
                        margin-top: 1rem;
                    }
                    @media screen and (max-width:700px){
                        font-size: .9rem;
                        margin-top: .6rem;
                    }
                    @media screen and (max-width:700px){
                        font-size: .7rem;
                        margin-top: .1rem;
                    }
                    @media screen and (max-width:465px){
                        font-size: .6rem;
                        margin-top: .1rem;
                    }
                    @media screen and (max-width:400px){
                        font-size: .4rem;
                        margin-top: .1rem;
                    }
                }
                a{
                    color: var(--negro);
                }
            }
            
            }
        }
    


`;
export default MiPortafolio
