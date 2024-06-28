
import '@smastrom/react-rating/style.css'

const Products = ({ product }) => {
    const { productName, price, category, imgUrl } = product;

    return (
        <div className="flex items-center border p-5 shadow-lg rounded-lg">
            <div className="flex-1 max-w-xs mr-5">
                <img src={imgUrl} alt={productName} className="w-full rounded-lg" />
            </div>
            <div className="flex-2">
                <h2 className="text-2xl font-bold text-gray-800">{productName}</h2>
                <p className="text-gray-600">Category: {category}</p>
                <p className="text-gray-600">Price: ${price}</p>
                <p className=" text-[#82CB15]">⭐⭐⭐⭐⭐</p>
                <div className="w-full pt-16">
                    <button className="btn btn-outline btn-xs w-full space-y-3 bg-[#82CB15] text-white border border-[#82CB15] hover:bg-[#82CB15] hover:border-[#82CB15]">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;
