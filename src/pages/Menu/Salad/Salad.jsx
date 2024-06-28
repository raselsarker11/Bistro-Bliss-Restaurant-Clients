import { Helmet } from 'react-helmet-async';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';

const Salad = () => {
    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === 'salad');
   
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | salad</title>
            </Helmet>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
        </div>
    );
};

export default Salad;