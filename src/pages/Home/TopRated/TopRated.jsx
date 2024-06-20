

const TopRated = ({product}) => {
    const { name, image, category, price } = product;
    return (
        <div className="flex overflow-x-auto space-x-2 lg:space-x-0 py-12  md:grid md:gap-2 md:grid-cols-2 lg:grid-cols-3 md:gap-x-3  md:gap-y-5">
            <div>
                <img src={image} alt={name} className="w-full" />
            </div>
            <div className="md:flex flex-col items-start mt-2 md:mt-0 md:ml-4">
                <p className="font-bold">{name}</p>
                <p className="text-gray-500">$ {price}</p>
                <p className="text-gray-500">{category}</p>
            </div>
        </div>
    );
};

export default TopRated;