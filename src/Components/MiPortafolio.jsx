import React from 'react'
import styled from 'styled-components'
import evan from '../asset/evan.jpg'
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
                <h4>Vista <span>3D</span></h4>
                <p className="paragraph">
                    Es una pagina de ventas y de exhiicion de mis productos elaborados en el diseño 3D. 
                    los coleccionistas de las sagas o del anime que elaboro son los que mas visitan mi pagina, 
                    tiene imagenes y crud de registro y tambien carrito de compras
                    </p>
                    
                <div className="about-info">
                    <div className="info-title">
                        <p>si quiere conocer mas informacion de mi pagina este es el link</p>
                        <p>Dale un vistazo <a href="https://www.linkedin.com/in/heynar-soto-holguin-bb7a43213/" target="_blank" rel="noreferrer">Vista 3D</a>.</p>
                    </div>
                </div>
            </div>
            </div>

                <div className='card'>    
            <div className="left-content">
                <img src={evan} alt=""/>
            </div>
            <div className="right-content">
                <h4>mi <span>portafolio</span></h4>
                <p className="paragraph">
                    Son mis practicas para ir familiarizando con el mundo de la programacion 
                    son mis pruebas y mis conocimientos que cada dia que hago un proyecto
                    voy queriendo mas mi trabajo, y quiere cada dia aprender mas y perfeecionarlo
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Estos son unos de mis portafolio que he elaborado </p>
                        <p>Dale un vistazo <a href="https://www.linkedin.com/in/heynar-soto-holguin-bb7a43213/" target="_blank" rel="noreferrer">portafolio</a>.</p>
                        
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
            text-transform: uppercase;
            span{
                font-size: 2rem;
                
            }
        }
        .paragraph{
            margin-top: 7rem;
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
