import coffeeUrl from '../../images/main/items/item-bg-coffee.jpg'
import beveragesUrl from '../../images/main/items/item-bg-beverages.jpg'
import dessertsUrl from '../../images/main/items/item-bg-desserts.jpg'
import foodUrl from '../../images/main/items/item-bg-food.jpg'

export const HomeItems = [
    {
        id: 'coffee',
        name: 'Зерновой кофе',
        singleProduct: true,
        url: coffeeUrl
    },
    {
        id: 'beverages',
        name: 'Напитки',
        singleProduct: false,
        url: beveragesUrl
    },
    {
        id: 'desserts',
        name: 'Десерты',
        singleProduct: false,
        url: dessertsUrl
    },
    {
        id: 'food',
        name: 'Еда',
        singleProduct: false,
        url: foodUrl
    },
]