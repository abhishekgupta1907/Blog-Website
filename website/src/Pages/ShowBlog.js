import React from "react";
import { useLocation } from "react-router-dom";
import { FaUser, FaClock } from "react-icons/fa";
import SideBar from "Components/SideBar";
export const ShowBlog = () => {
    const { state } = useLocation();
    const data = state?.data;
    console.log(data);
    const { title, image, author, published_date, content, reading_time } =
        data;
    return (
        <div>
            <div className=" py-10 bg-blue-300 text-center text-white px-4 mt-10">
                <h2 className="text-white text-center text-5xl lg:7xl leading-snug font-bold mb-5">
                    Single Blog Page{" "}
                </h2>
            </div>
            <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
                <div className="lg:w-3/4 mx-auto">
                    <div>
                        <img
                            src={image}
                            alt=""
                            className="w-full mx-auto rounded "
                        />
                    </div>
                    <h2 className="text-3xl mt-8 font-semibold mb-4 text-blue-500 cursor-pointer">
                        {title}
                    </h2>
                    <p className="mb-3 text-gray-600">
                        <FaUser className="inline-flex items-center mr-2" />{" "}
                        {author} | {published_date}
                    </p>
                    <p className="mb-3 text-gray-600">
                        {" "}
                        <FaClock className="inline-flex items-center mr-2" />
                        {reading_time}
                    </p>
                    <p className="text-base text-gray-500 mb-6">{content}</p>
                    <div className="text-base text-gray-500">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit vel nam, totam libero beatae dolores,
                            soluta culpa ut nobis ab qui. Voluptatem
                            reprehenderit necessitatibus consequuntur officia
                            inventore rem dicta atque.
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Velit vel nam, totam libero
                                beatae dolores, soluta culpa ut nobis ab qui.
                                Voluptatem reprehenderit necessitatibus
                                consequuntur officia inventore rem dicta atque.
                            </p>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit vel nam, totam libero beatae dolores,
                            soluta culpa ut nobis ab qui. Voluptatem
                            reprehenderit necessitatibus consequuntur officia
                            inventore rem dicta atque.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit vel nam, totam libero beatae dolores,
                            soluta culpa ut nobis ab qui. Voluptatem
                            reprehenderit necessitatibus consequuntur officia
                            inventore rem dicta atque.
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Velit vel nam, totam libero
                                beatae dolores, soluta culpa ut nobis ab qui.
                                Voluptatem reprehenderit necessitatibus
                                consequuntur officia inventore rem dicta atque.
                            </p>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit vel nam, totam libero beatae dolores,
                            soluta culpa ut nobis ab qui. Voluptatem
                            reprehenderit necessitatibus consequuntur officia
                            inventore rem dicta atque.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit vel nam, totam libero beatae dolores,
                            soluta culpa ut nobis ab qui. Voluptatem
                            reprehenderit necessitatibus consequuntur officia
                            inventore rem dicta atque.
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Velit vel nam, totam libero
                                beatae dolores, soluta culpa ut nobis ab qui.
                                Voluptatem reprehenderit necessitatibus
                                consequuntur officia inventore rem dicta atque.
                            </p>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit vel nam, totam libero beatae dolores,
                            soluta culpa ut nobis ab qui. Voluptatem
                            reprehenderit necessitatibus consequuntur officia
                            inventore rem dicta atque.
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Velit vel nam, totam libero
                                beatae dolores, soluta culpa ut nobis ab qui.
                                Voluptatem reprehenderit necessitatibus
                                consequuntur officia inventore rem dicta atque.
                            </p>
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <SideBar />
                </div>
            </div>
        </div>
    );
};
