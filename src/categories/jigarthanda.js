import jmain from '../assets/jmain.jpg';
import regular from '../assets/jigarthanda/regular.jpg';
import special from '../assets/jigarthanda/special.jpg';
import jumbo from '../assets/jigarthanda/jumbo.jpg';
import nuts from '../assets/jigarthanda/nuts.jpg';
import basundi from '../assets/jigarthanda/basanthi.jpg';
export const jigarthanda = {
    id: 'jigarthanda',
    name: 'Jigarthanda',
    description: 'Refreshing and authentic Madurai special drink.',
    image: jmain,
    items: [
        { id: 1, name: 'Regular Jigarthanda', price: '₹65', description: 'Refreshing and authentic Madurai special drink.', image: regular },
        { id: 2, name: 'Special Jigarthanda', price: '₹85', description: 'Jigarthanda with basanthi mix with ice cream', image: special },
        { id: 3, name: 'Jumbo Jigarthanda', price: '₹80', description: 'Large Jigarthanda with 2 Scoups of icecream', image: jumbo },
        { id: 4, name: 'Nutz Jigarthanda', price: '₹90', description: 'Jigarthanda with nuts and icecream', image: nuts },
        { id: 5, name: 'Basundi Jigarthanda', price: '₹80', description: 'Rich basundi mixed for extra creaminess.', image: basundi }
    ]
};
