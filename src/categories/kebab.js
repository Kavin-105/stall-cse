import kmain from '../assets/kmain.jpg';
import chicken from '../assets/kebab/regular.jpg'
import mint from '../assets/kebab/mint.jpg'
import pineapple from '../assets/kebab/pineapple.jpg'
import veg from '../assets/kebab/veg.jpg'
import roti from '../assets/kebab/rotti.jpg'
import vegroti from '../assets/kebab/vegroti.jpg'
export const kebab = {
    id: 'kebab',
    name: 'Kebab',
    description: 'Smoky, charred, and tender kebabs.',
    image: kmain,
    items: [
        { id: 1, name: 'Chicken Kebab', price: '₹80', description: 'Chicken Kebab 4 pieces in stick', image: chicken },
        { id: 2, name: 'Chicken Mint Kebab', price: '₹95', description: 'Chicken Mint Kebab 4 pieces in stick', image: mint },
        { id: 3, name: 'Chicken Pineapple Kebab', price: '₹110', description: 'Chicken Pineapple Kebab 4 pieces in stick', image: pineapple },
        { id: 4, name: 'Veg Kebab', price: '₹65', description: 'Veg Kebab 4 pieces in stick', image: veg },
        { id: 5, name: 'Chicken Kebab with roti', price: '₹95', description: 'Chicken Kebab stuffed in roti with onion , tomato and mayonnaise', image: roti },
        { id: 6, name: 'Chicken Mint Kebab with roti', price: '₹110', description: 'Chicken Mint Kebab stuffed in roti with onion , tomato and mayonnaise', image: roti },
        { id: 7, name: 'Chicken Pineapple Kebab with roti', price: '₹130', description: 'Chicken Pineapple Kebab stuffed in roti with onion , tomato and mayonnaise', image: roti },
        { id: 8, name: 'Veg Kebab with roti', price: '₹80', description: 'Veg Kebab stuffed in roti with onion , tomato and mayonnaise', image: vegroti }

    ]
};
