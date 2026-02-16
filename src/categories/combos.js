import comboi from '../assets/cmain.jpg';
export const combos = {
    id: 'combos',
    name: "Combo's",
    description: 'Complete meals for a satisfying experience.',
    image: comboi,
    items: [
        { id: 1, name: 'Lunch Combo', price: '₹250', description: 'Rice, Fish Curry, Fish Fry, and Sweet.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400' },
        { id: 2, name: 'Dinner Combo', price: '₹300', description: 'Parotta, Chicken Curry, Kebab, and Jigarthanda.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400' },
        { id: 3, name: 'Family Platter', price: '₹800', description: 'Serves 4 - Assorted kebabs, Fish, Prawns, and Rice.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400', preOrder: true }
    ]
};
