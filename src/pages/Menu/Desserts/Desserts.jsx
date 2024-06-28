import { Helmet } from 'react-helmet-async';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';

const Desserts = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert');

    return (
        <div>
            <Helmet>
            <title>Bistro Boss | desserts</title>
            </Helmet>
            
            {/* dessert menu items  */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            
        </div>
    );
};

export default Desserts;


