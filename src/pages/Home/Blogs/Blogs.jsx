import blogImg1 from '../../../assets/icon/blogImg1.jpg';
import blogImg2 from '../../../assets/icon/blogImg2.jpg';
import blogImg3 from '../../../assets/icon/blogImg3.jpg';
import blogImg4 from '../../../assets/icon/blogImg4.jpg';

const Blogs = () => {
    return (
        <section>
            <div className="bg-white h-screen text-gray-900 mt-12 mb-40">
                <h1 className="text-5xl font-bold mb-16 text-center">
                Latest news and events
                </h1>
                {/* <h1 className="text-5xl font-bold mb-12">events</h1> */}
                <div className="container grid grid-cols-12 px-8  mx-auto">
                <div
                    data-aos="zoom-in-right"
                    className="card  col-span-6 w-full bg-white "
                >
                    <div className="w-full h-[48%] pt-10">
                    <img
                        src={blogImg1}
                        className="w-full h-full max-h-full rounded-xl"
                        alt="Movie"
                    />
                    </div>
                    <div className="card-body space-y-3">
                    <div>
                        <button className="btn btn-primary btn-xs text-white font-bold lowercase">
                        restaurants
                        </button>
                        <button className="btn btn-primary btn-xs text-white font-bold lowercase ml-2">
                        cooking
                        </button>
                    </div>
                    <h2 className="text-4xl font-bold">
                        17 Best Food to Sate your Hunger
                    </h2>
                    <p>
                        How did we ever manage to cook before the arrival of the
                        internet? I suppose we had to rely on cookbooks, cooking tv
                        shows, and knowledge handed down from our grandmothers. Of
                        course, the more daring would experiment in the kitchen....
                    </p>
                    </div>
                </div>
                
                <div
                    data-aos="zoom-in-left"
                    className="flex flex-col col-span-12 p-6  lg:col-span-6 lg:p-10 "
                >
                    <div className="card card-side bg-white  h-48 mb-3">
                    <div className="w-[40%] h-full">
                        <img
                        src={blogImg2}
                        className="w-full h-full rounded-xl"
                        alt="Movie"
                        />
                    </div>
                    <div className="card-body">
                        <div>
                        <button className="btn btn-primary btn-xs text-white font-bold lowercase">
                            restaurants
                        </button>
                        <button className="btn btn-primary btn-xs text-white font-bold lowercase ml-2">
                            cooking
                        </button>
                        </div>
                        <h2 className="card-title">127+ Couriers On Our Team!</h2>
                        <p>Sign Up now to for huge bonus</p>
                    </div>
                    </div>
                    <div className="card card-side bg-white  h-48 mb-3">
                    <div className="w-[40%] h-full">
                        <img
                        src={blogImg3}
                        className="w-full h-full rounded-xl"
                        alt="Movie"
                        />
                    </div>
                    <div className="card-body">
                        <div>
                        <button className="btn btn-primary btn-xs text-white font-bold lowercase">
                            restaurants
                        </button>
                        <button className="btn btn-primary btn-xs text-white font-bold lowercase ml-2">
                            cooking
                        </button>
                        </div>
                        <h2 className="card-title"> Order With us </h2>
                        <p>Order and win huge bonus</p>
                    </div>
                    </div>
                    <div className="card card-side bg-white  h-48 mb-3">
                    <div className="w-[40%] h-full">
                        <img
                        src={blogImg4}
                        className="w-full h-full rounded-xl"
                        alt="Movie"
                        />
                    </div>
                    <div className="card-body">
                        <div>
                        <button className="btn btn-primary btn-xs text-white font-bold lowercase">
                            restaurants
                        </button>
                        <button className="btn btn-primary btn-xs text-white font-bold lowercase ml-2">
                            cooking
                        </button>
                        </div>
                        <h2 className="card-title">40+ restaurants on our site</h2>
                        <p>Find your favorite restaurants</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;