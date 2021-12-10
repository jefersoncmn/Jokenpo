import pedra from './pedra.svg';
import papel from './papel.svg';
import tesoura from './tesoura.svg';
import pedraAmarelo from './pedra-amarelo.svg';
import papelAmarelo from './papel-amarelo.svg';
import tesouraAmarelo from './tesoura-amarelo.svg';

const weapon = {
    rock: [pedra, pedraAmarelo],
    paper: [papel, papelAmarelo],
    scissors: [tesoura, tesouraAmarelo]
}

export default weapon;