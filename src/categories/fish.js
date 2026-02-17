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
        { id: 1, name: 'Paarai Single Piece', price: '₹45', description: 'Fish fry with spices , Onion and lemon', image: regular },
        { id: 2, name: 'Paarai Single Piece', price: '₹80', description: 'Fish fry with spices , Onion and lemon', image: regular},
        { id: 3, name: 'Chilli 100g', price: '₹50', description: 'Fish chilli 100 grams with onion and lemon', image: chilli },
        { id: 4, name: 'Chilli 250g', price: '₹110', description: 'Fish chilli 250 grams with onion and lemon', image: chilli },
        { id: 5, name: 'Jalebi Full Fish Fry', price: '₹70', description: 'Jilebi fish single piece with onion and lemon', image: jilebi },
        { id: 6, name: 'Curry Fish Single Piece', price: '₹45', description: 'Jilebi fish single piece with onion and lemon', image: jilebi },
        { id: 7, name: 'Curry Fish Double Piece', price: '₹80', description: 'Jilebi fish single piece with onion and lemon', image: jilebi },
        { id: 8, name: 'Curry Fish Triple Piece', price: '₹120', description: 'Paarai fish single piece with onion and lemon', image: paarai },
        { id: 9, name: 'Fish Meals', price: '₹119', description: 'Paarai fish single piece with onion and lemon', image: paarai },
        { id: 10, name: 'Fish Meals Parcel', price: '₹129', description: 'Paarai fish double piece with onion and lemon', image: paarai }
    ]
};
