import { Link } from "react-router-dom";


const ComingSoon = () => {
    return (
        <div className="w-full h-[700px] bg-base-300 grid place-content-center pt-32 border ">
            <h2 className="text-5xl md:text-7xl text-gray-900 font-bold pb-10">
                Coming Soon
            </h2>
            <div className="mx-auto">
                <Link to="/" className="btn bg-[#82CB15]  text-black">
                Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ComingSoon;