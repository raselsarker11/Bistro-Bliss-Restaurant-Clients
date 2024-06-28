import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const TopRated = ({ product }) => {
    const { name, image, category, price } = product;
  
    return (
      <div className="flex items-center border p-3 shadow-lg rounded-lg">
        <div className="flex-1 max-w-xs mr-5">
          <img src={image} alt={name} className="w-full rounded-lg"/>
        </div>
        <div className="flex-2">
          <p className="text-2xl font-bold text-gray-800">{name}</p>
          <p className="text-gray-600">{category}</p>
          <p className="text-gray-600">${price}</p>
          <div  style={{ transform: 'scale(0.50)', transformOrigin: 'left top', color: 'green'  }}>
              <Rating
                  style={{ maxWidth: 180 }}
                  value={product.rating}
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
  
  export default TopRated;
  