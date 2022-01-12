import React from 'react'
import styled from 'styled-components'
import Progresbar from './Progrebar'

const Skills = () => {
    return (
        <SkillsStyled>
            <div className='container'>
                <div className='title'>
                    <h1>skills</h1>
                    </div>
                    <div className='skills'>
                    <Progresbar
                    title={'HTML5'}
                    width={'20%'}
                    text={'20%'}
                />
                <Progresbar
                    title={'STYLE COMPONENTS'}
                    width={'30%'}
                    text={'30%'}
                />
                <Progresbar
                    title={'JAVASCRIPT'}
                    width={'20%'}
                    text={'20%'}
                />
                <Progresbar
                    title={'PYTHON'}
                    width={'20%'}
                    text={'20%'}
                />
                <Progresbar
                    title={'REACT JS'}
                    width={'30%'}
                    text={'30%'}
                />
                <Progresbar
                    title={'PHOTOSHOP'}
                    width={'60%'}
                    text={'60%'}
                />
                <Progresbar
                    title={'RHINO 7'}
                    width={'70%'}
                    text={'70%'}
                />
                <Progresbar
                    title={'MESHMIXER'}
                    width={'70%'}
                    text={'70%'}
                />
                <Progresbar
                    title={'ZBRUSH'}
                    width={'30%'}
                    text={'30%'}
                />
                    </div>
                
            </div>
        </SkillsStyled>
    )
}
const SkillsStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--fondo-rojo);

    .title{
        display: flex;
        justify-content: center;
        h1{
            font-size: 3rem;
            text-transform: uppercase;
            margin-top: 10rem;
            color: var(--blanco);
            font-family: 'Montserrat', sans-serif;
        
        }
    }

    .skills{
        margin-top: 7rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 3rem;
        grid-column-gap: 7rem;
        margin-bottom: 10rem;
        
        @media screen and (max-width: 1000px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);
        }



    
    
    }
`;

export default Skills
