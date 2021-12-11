import { Container, Title, SubTitle, Table, Weapon, Text, RotatedContainer, Button, AnimatedDivisor } from './styles';
import weapon from '../../assets/weapon/weapon';
import { useEffect, useState } from 'react';
import { gameStates } from '../../models/gameStates';
import { gameResults } from '../../models/gameResults';
import { rules } from '../../models/weaponSelected';

export const Home = () => {

    const [battleResult, battleResultSet] = useState<string>('Bora lá, é sua vez de jogar!')

    const [weaponUser, weaponUserSet] = useState<string[]>([])

    const [weaponEnemy, weaponEnemySet] = useState<string[]>([]);

    const [gameState, gameStateSet] = useState<gameStates>(gameStates.user);

    const selectWeapon = (weapon: string[]) => {
        if (gameState === gameStates.user) {
            weaponUserSet(weapon);
            gameStateSet(gameStates.enemy);
        }
    }

    const newTurn = () => {
        if (gameState === gameStates.enemy) {
            const value = Math.floor((Math.random() * 3) + 1);
            var enemyWeapon: string[];
            switch (value) {
                case 1: enemyWeapon = weapon.paper;
                    break;
                case 2: enemyWeapon = weapon.rock;
                    break;
                case 3: enemyWeapon = weapon.scissors;
                    break;
            }
            weaponEnemySet(enemyWeapon!)
            battle(weaponUser, enemyWeapon!);

        } else if (gameState === gameStates.user) {
            battleResultSet('Bora lá, é sua vez de jogar!');
            weaponEnemySet([]);
        }
    }

    const battle = (_weaponUser: string[], _weaponEnemy: string[]) => {
        if (_weaponUser === _weaponEnemy) {
            battleResultSet(gameResults.draw)
        } else if (_weaponUser === weapon.paper) {
            if (rules.paperWins.includes(_weaponEnemy)) {
                battleResultSet(gameResults.victory);
            } else {
                battleResultSet(gameResults.defeat);
            }
        } else if (_weaponUser === weapon.rock) {
            if (rules.rockWins.includes(_weaponEnemy)) {
                battleResultSet(gameResults.victory);
            } else {
                battleResultSet(gameResults.defeat);
            }
        } else if (_weaponUser === weapon.scissors) {
            if (rules.scissorsWins.includes(_weaponEnemy)) {
                battleResultSet(gameResults.victory);
            } else {
                battleResultSet(gameResults.defeat);
            }
        }
        gameStateSet(gameStates.result);
    }

    const windowMode = () => {
        if (gameState === gameStates.user) {
            return (
                <>
                    <Text>{battleResult}</Text>
                    <Table>
                        <Weapon img={weapon.rock[0]} onClick={() => { selectWeapon(weapon.rock) }} />
                        <Weapon img={weapon.paper[0]} onClick={() => { selectWeapon(weapon.paper) }} />
                        <Weapon img={weapon.scissors[0]} onClick={() => { selectWeapon(weapon.scissors) }} />
                    </Table>
                </>
            );
        } else if (gameState === gameStates.result) {
            return (
                <>
                    <Text>{battleResult}</Text>
                    <Table>
                        <RotatedContainer angle="90deg">
                            <Weapon img={weaponUser[0]} onClick={() => { }} />
                        </RotatedContainer>
                        <AnimatedDivisor></AnimatedDivisor>
                        <RotatedContainer angle="-90deg">
                            <Weapon img={weaponEnemy[1]} onClick={() => { }} />
                        </RotatedContainer>
                    </Table>
                    <Button onClick={() => { gameStateSet(gameStates.user) }}>Jogar novamente</Button>
                </>
            );
        }
    }

    useEffect(() => {
        newTurn();
    }, [gameState]);

    return (
        <Container>
            <header>
                <Title>Jokenpô</Title>
                <SubTitle>É hora do duelo!</SubTitle>
            </header>
            <body>
                {windowMode()}
            </body>
        </Container>
    );
}