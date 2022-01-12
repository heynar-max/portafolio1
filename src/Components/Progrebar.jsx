import React from 'react'
import styled from 'styled-components'

const Progresbar = ({title, text,  width }) => {
    return (
        <ProgresbarStyled>
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{width: width}}></span>
                </div>
            </div>
        </ProgresbarStyled>
    )
}

const ProgresbarStyled = styled.div`

    h6{
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--blanco);
        font-family: 'Open Sans', sans-serif;
        text-transform: uppercase;
        
    }


    .progress-bar{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        p{
            padding-right: .5rem;
                font-size: 1.2rem;
                font-weight: 400;
                color: var(--blanco);
                font-family: 'Open Sans', sans-serif;
                text-transform: uppercase;
                
            
        }
    .progress{
        width: 100%;
        height: 1rem;
        background-color: var(--negro-trasparente);

        }
        span{
            display: flex;
            height:1rem; 
            justify-content: flex-end;
            align-items: flex-end;
            background-color: var(--blanco);
            width: 0;
        }
    }
    
`;

export default Progresbar
