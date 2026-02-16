import fmain from '../assets/fmain.jpg'
import regular from '../assets/fish/regular.jpg'
import jilebi from '../assets/fish/jilebi.jpg'
import chilli from '../assets/fish/Chilli-Fish.jpg'
import paarai from '../assets/fish/paarai.jpg'
export const fish = {
    id: 'fish',
    name: 'Fish',
    description: 'Fresh catch, marinated and cooked to perfection.',
    image: fmain,
    items: [
        { id: 1, name: 'Fish Fry(single piece)', price: '₹45', description: 'Fish fry with spices , Onion and lemon', image: regular },
        { id: 2, name: 'Fish Fry(double piece)', price: '₹80', description: 'Fish fry with spices , Onion and lemon', image: regular, preOrder: true },
        { id: 3, name: 'Fish Chilli(100gm)', price: '₹50', description: 'Fish chilli 100 grams with onion and lemon', image: chilli },
        { id: 4, name: 'Fish Chilli(250gm)', price: '₹110', description: 'Fish chilli 250 grams with onion and lemon', image: chilli },
        { id: 5, name: 'Jilebi Fish', price: '₹70', description: 'Jilebi fish single piece with onion and lemon', image: jilebi },
        { id: 6, name: 'Paarai Fish(single piece)', price: '₹45', description: 'Paarai fish single piece with onion and lemon', image: paarai },
        { id: 7, name: 'Paarai Fish(double piece)', price: '₹80', description: 'Paarai fish double piece with onion and lemon', image: paarai }

    ]
};
