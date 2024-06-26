import notify from "../../../assets/icon/notify.png";

const Subscribe = () => {
    return (
        <section className="px-4 py-16 mx-auto w-full ">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div data-aos="zoom-in-left">
                <img
                    className="object-cover w-full h-56 rounded-lg shadow-md sm:h-96"
                    src={notify}
                    alt=""
                />
                </div>
                <div data-aos="zoom-in-right" className="flex flex-col justify-center">
                <div className="grid place-content-center space-y-10">
                    <h3 className="text-4xl font-bold text-gray-900 text-center ">
                    Get the menu of your favorite restaurants every day
                    </h3>
                    <div className="form-control mx-auto ">
                        <label className="input-group flex">
                            <input
                                type="email"
                                placeholder="info@site.com"
                                className="input input-bordered h-[55px]"
                            />
                            <span className="bg-[#82CB15] text-white text-lg font-bold px-9 h-[60px] flex items-center justify-center">
                                Subscribe
                            </span>
                        </label>
                    </div>

                </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;