import { Helmet } from 'react-helmet-async';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';

const Pizza = () => {
    const [menu] = useMenu()
    const pizza = menu.filter(item => item.category === 'pizza');


    return (
        <div>
            <Helmet>
            <title>Bistro Boss | Menu</title>
            </Helmet>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
        </div>
    );
};

export default Pizza;