import { Helmet } from 'react-helmet-async';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';

const Soup = () => {
    const [menu] = useMenu()
    const soup = menu.filter(item => item.category === 'soup');
 
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | Menu</title>
            </Helmet>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Soup;