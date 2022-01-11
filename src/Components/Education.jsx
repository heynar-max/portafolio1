import React from 'react'
import styled from 'styled-components'
import Icons from './Icons';


const Education = () => {
    return (
        <EducationStyle>
            <div className='container'>
                <div className='title'>
                    <h1>Education</h1>
                </div>
                <div className='card'>
                    <div className='iconos'>
                        <Icons className="fa fa-graduation-cap" />
                    
                    <div className='university'>
                        <h4>2021</h4>
                        <h1>Diplomado</h1>
                        <h3>Universidad Tecnológica Pereira</h3>
                        <p>Cursó y aprobó con éxito el Diplomado en Desarrollo de Aplicaione Web, con una intensidad horario de 800 horas 
                        <br/>
                        <br/>
                        MERN</p>
                        
                    </div>
                    </div>
                    <div className='iconos'>
                        <Icons className="fa fa-graduation-cap" />
                    
                    <div className='university'>
                        <h4>2021</h4>
                        <h1>Diplomado</h1>
                        <h3>Universidad Tecnológica Pereira</h3>
                        <p>Cursó y aprobó satisfatoriamente de Fundamentos de Programacion con una intesidad de 200 horas 
                        <br/>
                        <br/>
                        PYTHON</p>
                    </div>
                    </div>
                    
                </div>
            </div>
        </EducationStyle>
    )
}
const EducationStyle = styled.div`
    width: 100%;
    
    background-color: var(--fondo-rojo);
    
        .title{
            display: flex;
            justify-content: center;
            h1{
                font-size: 3rem;
                text-transform: uppercase;
                color: var(--blanco);
                margin-top: 10rem;
                font-family: 'Montserrat', sans-serif;
            }

        }
        .card{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10rem;
            
            .iconos{
                display: flex;
                justify-content: space-evenly;
                align-content: space-between;
                flex-direction: column;
                align-items: center;
                    i{
                        margin-top: 10rem;
                        color: var(--fondo-rojo);
                        width: 100px;
                        height: 100px;
                        line-height: 90px;
                        text-align: center;
                        border-radius: 50%;
                        background-color: var(--blanco);
                        font-size: 50px;
                        
                    }
                    .university{ 
                        h4{
                            margin-top: 4rem;
                            display: flex;
                            justify-content: center;
                            color: var(--blanco);
                        }
                        h3{
                            display: flex;
                            justify-content: center;
                            color: var(--blanco-trasparente);
                        }
                        h1{
                            display: flex;
                            justify-content: center;
                            color: var(--blanco);
                        }
                        
                        p{
                            margin-top: 2rem;
                            width: 300px;
                            display: flex;
                            justify-content: center;
                            color: var(--blanco);
                            margin-bottom: 200px;
                        }

                    }   
                }
                
        }


`;

export default Education
