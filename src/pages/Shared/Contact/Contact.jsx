import backImg from '../../../assets/others/authentication.png';

const Contact = () => {
    return (
        <div className="bg-gray-100 pt-32 mb-28"
        style={{ backgroundImage: `url(${backImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container mx-auto py-5">
                <div className="text-center mx-auto mb-5 max-w-xl">
                    <h1 className="mb-3 text-3xl font-bold text-green-500">Contact Us</h1>
                    <p className="text-gray-700">
                        Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
                    </p>
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 mb-4">
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full md:w-1/3 px-4 mb-4">
                                    <div className="bg-gray-100 rounded p-4">
                                        <div className="flex items-center bg-white rounded p-4 border border-dashed border-green-400">
                                            <div className="icon mr-3">
                                                <i className="fa fa-map-marker-alt text-primary"></i>
                                            </div>
                                            <span>10 Street, Dhaka, Bangladesh</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 px-4 mb-4">
                                    <div className="bg-gray-100 rounded p-4">
                                        <div className="flex items-center bg-white rounded p-4 border border-dashed border-green-400">
                                            <div className="icon mr-3">
                                                <i className="fa fa-envelope-open text-primary"></i>
                                            </div>
                                            <span>raselsarkercse@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 px-4 mb-4">
                                    <div className="bg-gray-100 rounded p-4">
                                        <div className="flex items-center bg-white rounded p-4 border border-dashed border-green-400">
                                            <div className="icon mr-3">
                                                <i className="fa fa-phone-alt text-primary"></i>
                                            </div>
                                            <span>+880 1581528651</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-4">
                            <iframe
                                className="w-full h-full rounded"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.06396725783!2d90.25487754014735!3d23.780753031632905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1714925917279!5m2!1sen!2sbd"
                                frameBorder="0"
                                style={{ minHeight: '400px', border: 0 }}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div>
                                <p className="mb-4 text-gray-700">
                                    The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.{' '}
                                    <a href="index.html" className="text-blue-500">
                                        Download Now
                                    </a>.
                                </p>
                                <form>
                                    <div className="flex flex-wrap -mx-2">
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="block w-full px-4 py-2 text-gray-700 text-sm bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder=""
                                                />
                                                <label htmlFor="name" className="absolute top-0 left-4 mt-2 text-gray-600">
                                                    Your Name
                                                </label>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder=""
                                                />
                                                <label htmlFor="email" className="absolute top-0 left-4 mt-2 text-gray-600">
                                                    Your Email
                                                </label>
                                            </div>
                                        </div>
                                        <div className="w-full px-2 mb-4">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder=""
                                                />
                                                <label htmlFor="subject" className="absolute top-0 left-4 mt-2 text-gray-600">
                                                    Subject
                                                </label>
                                            </div>
                                        </div>
                                        <div className="w-full px-2 mb-4">
                                            <div className="relative">
                                                <textarea
                                                    id="message"
                                                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder=""
                                                    style={{ height: '150px' }}
                                                ></textarea>
                                                <label htmlFor="message" className="absolute top-0 left-4 mt-2 text-gray-600">
                                                    Message
                                                </label>
                                            </div>
                                        </div>
                                        <div className="w-full px-2">
                                            <button
                                                type="submit"
                                                className="w-full py-3 text-white bg-green-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;