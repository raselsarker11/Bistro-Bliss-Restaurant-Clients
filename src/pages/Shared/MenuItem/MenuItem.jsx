import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const MenuItem = ({item}) => {
    const {name, image, price, category} = item;

    return (
        <div className="flex items-center border p-5 shadow-lg rounded-lg">
            <div className="flex-1 max-w-xs mr-5">
                <img src={image} alt="" className="w-[200] rounded-lg" />
            </div>
            <div className="flex-2">
                <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                <p className="text-gray-600">Category: {category}</p>
                <p className="text-gray-600">${price}</p>
                <div  style={{ transform: 'scale(0.50)', transformOrigin: 'left top', color: 'green'  }}>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={item.rating}
                        readOnly
                    />
                </div>
                <button className="w-full h-auto btn-xs space-y-3 bg-[#82CB15] text-white border border-[#82CB15] hover:bg-[#82CB15] hover:border-[#82CB15] btn">
                    Add to cart
                </button>
            </div>
        </div>
        
    );
};

export default MenuItem;




{/* <div className="flex space-x-2">
<img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
<div>
    <h3 className="uppercase">{name}----------</h3>
    <p>{recipe}</p>
</div>
<p className="text-yellow-500">${price}</p>
</div> */}