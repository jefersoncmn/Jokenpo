import { Container, Title, SubTitle, Table, Weapon, Text } from './styles';
import weapon from '../../assets/weapon/weapon';
import { useState } from 'react';

/**
 * Preciso realocar esses enums
 */
// enum weaponSelected {
//     none,
//     rock,
//     paper,
//     scissors,
// }

// enum gameStates {
//     enemy,
//     user
// }

// const IWeapon = {
//     weapon: String
// }

export const Home = () => {

    // const [weaponUser, weaponUserSet] = useState<weaponSelected>(weaponSelected.none)
    const [weaponUser, weaponUserSet] = useState<string>('')

    // const [weaponEnemy, weaponEnemySet] = useState<weaponSelected>(weaponSelected.none);

    // const [gameState, gameStateSet] = useState<gameStates>(gameStates.user);

    // const selectWeapon = (weapon: weaponSelected) => {
    //     if (gameState == gameStates.user) {
    //         console.log('Validado: ', weapon)
    //         weaponUserSet(weapon);
    //         gameStateSet(gameStates.enemy);
    //     }
    // }

    const validar = (weapon: string) => {
        console.log('Validado: ', weapon)
        weaponUserSet(weapon);
    }

    return (
        <Container>
            <header>
                <Title>Jokenpô</Title>
                <SubTitle>É hora do duelo!</SubTitle>
            </header>
            <body>
                {weaponUser}
                <Text>Bora lá, é sua vez de jogar!</Text>
                <Table>
                    <Weapon img={weapon.rock} onClick={() => { validar('rock') }} />
                    <Weapon img={weapon.paper} onClick={() => { validar('paper') }} />
                    <Weapon img={weapon.scissors} onClick={() => { validar('scissors') }} />
                    {/* <Weapon img={weapon.rock} onClick={() => { selectWeapon(weaponSelected.rock) }} />
                    <Weapon img={weapon.paper} onClick={() => { selectWeapon(weaponSelected.paper) }} />
                    <Weapon img={weapon.scissors} onClick={() => { selectWeapon(weaponSelected.scissors) }} /> */}

                </Table>
            </body>
        </Container>
    );
}