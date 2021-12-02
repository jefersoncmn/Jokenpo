import style from 'styled-components'
import colors from '../../colors';

export const Container = style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-weight: 100;

`;

export const Title = style.h1`
    color: ${colors.primary}
    font-weight: 900;
    font-size: 64px;
`;

export const SubTitle = style.h3`
    color: ${colors.orange}
    font-size: 18px;
    letter-spacing: 0.52em;
`

export const Text = style.h2`
    color:${colors.white}
    font-size: 36px;
    font-weight: 900;
`

export const Table = style.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    
`

interface IWeapon {
    img: string;
    onClick: () => void;
}

export const Weapon = style.button<IWeapon>`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #00E76A; 
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center;
    margin: 10px;
`