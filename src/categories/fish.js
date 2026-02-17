import fmain from '../assets/fmain.jpg'
import regular from '../assets/fish/regular.jpg'
import jilebi from '../assets/fish/jilebi.jpg'
import chilli from '../assets/fish/Chilli-Fish.jpg'
import paarai from '../assets/fish/paarai.jpg'
import meal from '../assets/fish/meal.jpg'
export const fish = {
    id: 'fish',
    name: 'Fish',
    description: 'Fresh catch, marinated and cooked to perfection.',
    image: fmain,
    items: [
        { id: 1, name: 'Paarai Single Piece', price: '₹45', description: 'Fish fry with spices , Onion and lemon', image: regular },
        { id: 2, name: 'Paarai Double Piece', price: '₹80', description: 'Fish fry with spices , Onion and lemon', image: regular},
        { id: 3, name: 'Chilli 100g', price: '₹50', description: 'Fish chilli 100 grams with onion and lemon', image: chilli },
        { id: 4, name: 'Chilli 250g', price: '₹110', description: 'Fish chilli 250 grams with onion and lemon', image: chilli },
        { id: 5, name: 'Jalebi Full Fish Fry', price: '₹70', description: 'Jilebi fish single piece with onion and lemon', image: jilebi },
        { id: 6, name: 'Curry Fish 1X', price: '₹45', description: 'Paarai fish single piece with onion and lemon', image: paarai },
        { id: 7, name: 'Curry Fish 2X', price: '₹80', description: 'Paarai fish Double piece with onion and lemon', image: paarai },
        { id: 8, name: 'Curry Fish 3X', price: '₹120', description: 'Paarai fish Triple piece with onion and lemon', image: paarai },
        { id: 9, name: 'Fish Meals', price: '₹119', description: 'Fish meals - white rice ,gravy,Rasam and fish fry 1 pcs', image: meal },
        // { id: 10, name: 'Fish Meals Parcel', price: '₹129', description: 'Fish meals - white rice ,gravy,Rasam and fish fry 1 pcs', image: meal }
    ]
};
