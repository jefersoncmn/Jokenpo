import style, { keyframes } from 'styled-components'
import { StringLiteralLike } from 'typescript';
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
    

    //Screen positioning
    margin-top: 30%;
    margin-bottom: 30%;
    
`

interface Irotation {
    angle: string;
}

export const RotatedContainer = style.div<Irotation>`
    display: flex;
    transform: rotate(${props => props.angle});
`

interface IWeapon {
    img: string;
    onClick: () => void;
}

const animation = keyframes`
    0%   {padding-left: 30px; padding-right: 30px;}
    25%  {padding-left: 25px; padding-right: 25px;}
    50%  {padding-left: 10px; padding-right: 10px;}
    75%  {padding-left: 7px; padding-right: 7px;}
    100% {padding-left: 5px; padding-right: 5px;}
  `

export const AnimatedDivisor = style.div`
    width: 20px;
    height: 100px;    
    //Animation
    animation-name: ${animation};
    animation-duration: 0.1s;
`

export const Weapon = style.button<IWeapon>`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center;
    margin: 10px;
`

export const Button = style.button`
    width: 360px;
    height: 80px;
    border-radius: 16px;
    border: 3px solid #00E76A;
    background-color: #1D1D22;
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
`