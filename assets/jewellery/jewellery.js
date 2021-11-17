
const jewellery =[
    {
        id: 1,
        name: 'Vintage Set',
        price: '5.99',
        like: true,
        Image: require('../images/set-1.jpg'),
    },

    {
        id: 2,
        name: 'IPARAM Bohemian set',
        price: '6.99',
        like: true,
        Image: require('../images/set-2.jpg'),
    },

    {
        id: 3,
        name: 'Dainty Set',
        price: '6.99',
        like: true,
        Image: require('../images/set-3.jpg'),
    },

    {
        id: 4,
        name: 'AprilWell Set',
        price: '5.99',
        like: true,
        Image: require('../images/set-4.jpg'),
    },

    {
        id: 5,
        name: 'Butterfly Set',
        price: '5.99',
        like: true,
        Image: require('../images/set-5.jpg'),
    },

    {
        id: 6,
        name: 'Rainbow White Set',
        price: '5.99',
        like: true,
        Image: require('../images/set-6.jpg'),
    },

    {
        id: 7,
        name: 'Snakebite Set',
        price: '5.99',
        like: true,
        Image: require('../images/set-7.jpg'),
    },

    {
        id: 8,
        name: 'Coil Set',
        price: '5.99',
        like: true,
        Image: require('../images/set-8.jpg'),
    },

    {
        id: 9,
        name: 'Complete Silver Set',
        price: '15.99',
        like: true,
        Image: require('../images/set-9.jpg'),
    },

    {
        id: 10,
        name: 'Width Set',
        price: '9.99',
        like: true,
        Image: require('../images/set-10.jpg'),
    },

    {
        id: 11,
        name: 'Sterling Silver Set',
        price: '6.99',
        like: true,
        Image: require('../images/set-11.jpg'),
    },

    {
        id: 12,
        name: 'Flower Set',
        price: '5.99',
        like: true,
        Image: require('../images/set-12.jpg'),
    },
    
]

export default jewellery


export function getjewellery(id) {
    return jewellery.find((jewellery) => (jewellery.id == id));
}