import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import Header from "../layout/Header"
import FooterGeneral from "../layout/FooterGeneral"
import BannerBeyond from "../components/BannerBeyond";



const images = [
    "/properties/id_1/1.webp",
    "/properties/id_1/2.webp",
    "/properties/id_1/4.webp",
    "/properties/id_1/8.webp",
    "/properties/id_2/2.webp",
    "/properties/id_2/4.webp",
    "/properties/id_2/9.webp",
    "/properties/id_2/12.webp",
    "/properties/id_3/1.webp",
    "/properties/id_3/2.webp",
    "/properties/id_3/12.webp",
    "/properties/id_3/17.webp",
    "/properties/id_4/1.webp",
    "/properties/id_4/3.webp",
    "/properties/id_4/18.webp",
    "/properties/id_4/15.webp",
];


const Home = () => {

    const [index, setIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    // Determina el número de imágenes a mostrar según el tamaño de la pantalla
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(4);
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(1);
            }
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);

        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const nextItems = () => {
        setIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / itemsPerPage));
    };

    const prevItems = () => {
        setIndex((prevIndex) => (prevIndex - 1 + Math.ceil(images.length / itemsPerPage)) % Math.ceil(images.length / itemsPerPage));
    };

    useEffect(() => {
        const interval = setInterval(nextItems, 4000);
        return () => clearInterval(interval);
    }, [itemsPerPage]);


    return (
        <>
            <Header />
            <section>
                <div className="bg-white text-black ">
                    <div className="w-10/12 m-auto grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-16">
                        <p className="font-bold text-3xl text-center lg:text-4xl lg:text-left">Discover our <span className="text-green-950">new</span> <span className="text-4xl lg:text-5xl">accommodations</span> </p>
                        <p className="text-center text-sm mt-3 lg:w-10/12 lg:m-auto">
                            Are you looking for a cozy and well-located place to stay for a short or medium-term? Michel Capital Investment offers top-quality accommodations across the United States, perfect for business travelers, vacationers, and anyone in need of a temporary home.
                        </p>
                    </div>
                </div>
                <div className="bg-dorado py-5">
                    <div className="relative  w-11/12  m-auto overflow-hidden ">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${index * 100}%)` }}
                        >
                            {images.map((image, i) => (
                                <div
                                    key={i}
                                    className={`carousel-item flex-shrink-0 p-2 ${itemsPerPage === 1 ? "w-full" : itemsPerPage === 2 ? "w-1/2" : "w-1/4"
                                        }`}
                                >
                                    <img src={image} alt={`Image ${i + 1}`} className="w-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex md:w-11/12 md:justify-end">
                        <Link className="p-3 mx-auto bg-dorado font-bold rounded-xl text-center border border-black text-black w-10/12 md:w-4/12 lg:w-2/12 md:mx-0 hover:bg-black hover:text-white " to="/properties" >View all properties</Link>
                    </div>
                </div>

            </section>
            <section className="bg-gray-200 py-16">
                <div className="w-10/12 m-auto lg:grid lg:grid-cols-2" >
                    <img src="/images/image_1.jpg" alt="..." className="border-4 border-white shadow-xl lg:ml-32" />
                    <div className="bg-white p-5 shadow-xl text-center lg:h-auto lg:text-left lg:mt-40">
                        <p className="text-3xl font-bold">Why Choose Us?</p>
                        <p className="text-sm lg:pl-3 lg:pt-3">
                            Our properties are situated in the most sought-after neighborhoods, ensuring easy access to local attractions and amenities, each accommodation is beautifully furnished and equipped with all the essentials to make your stay comfortable.Whether you need a place for a few days or several months, we have flexible options to meet your needs, we have dedicated team is always ready to assist you and ensure a smooth and pleasant experience.
                        </p>
                    </div>
                </div>
            </section>

            <section className=" py-10">
                <div className="w-10/12 m-auto">
                    <p className="text-2xl text-center font-semibold lg:text-left lg:text-3xl">Booking your <span className="text-green-950 text-3xl lg:text-4xl">accommodation</span> with us, you will be able to...</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 text-center text-sm ">
                        <div>
                            <img src="/images/image_3.jpg"/>
                            <p className="text-xl my-5">Book with Confidence</p>
                            <p>Reserve with peace of mind knowing that the entire apartment is exclusively yours, without interruption during your stay, so relax, unwind, and feel at home.</p>
                        </div>
                        <div>
                            <img src="/images/image_4.jpg"/>
                            <p className="text-xl my-5">Explore New Destination</p>
                            <p>Find inspiration for your next journey and uncover off-the-beaten-path destinations with our collection of unique accommodations. Immerse yourself in genuine local experiences designed to make you feel at home wherever you go.</p>
                        </div>
                        <div>
                            <img src="/images/image_5.jpg"/>
                            <p className="text-xl my-5">Join Our Community</p>
                            <p>Become part of a global community of travelers and hosts who share a passion for exploring the world and living new experiences by following us on our social media channels.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="banner banner_bg--1 ">
                <div className="h-full bg-black bg-opacity-70 text-white py-16 text-center">
                    <p className="font-bold text-3xl w-10/12 mx-auto mb-10 ">We encourage you to book your accommodation with us to enjoy our exclusive benefits tailored just for you.</p>
                    <Link className="p-5 border border-white rounded-2xl hover:bg-white hover:text-black" to="https://www.airbnb.com.co/users/show/541455387" target="_blank">Book Your Stay Today!</Link>
                </div>
            </section>
            <BannerBeyond/>


            <FooterGeneral />
        </>
    )
}

export default Home