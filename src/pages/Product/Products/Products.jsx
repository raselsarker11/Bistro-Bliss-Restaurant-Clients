

const Products = ({ item }) => {
    const { productName, price, category, imgUrl } = Products;

    return (
        <div className="flex items-center border p-5 m-5 shadow-lg rounded-lg">
            <div className="flex-1 max-w-xs mr-5">
                <img src={imgUrl} alt={productName} className="w-full rounded-lg" />
            </div>
            <div className="flex-2">
                <h2 className="text-2xl font-bold text-gray-800">{productName}</h2>
                <p className="text-gray-600">Category: {category}</p>
                <p className="text-gray-600">Price: ${price}</p>
            </div>
        </div>
    );
};

export default Products;
