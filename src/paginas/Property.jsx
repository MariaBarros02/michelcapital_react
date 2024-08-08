import { useState, useEffect } from "react"
import Header from "../layout/Header"
import FooterGeneral from "../layout/FooterGeneral"
import BannerBeyond from "../components/BannerBeyond"
import { Breadcrumb } from "flowbite-react"
import { Link } from "react-router-dom"
import { HiArrowNarrowRight, HiHome } from "react-icons/hi";
import propiedades from "../data/propiedades"
import { useParams } from "react-router-dom"
const Property = () => {
  const { idPropiedad } = useParams();

  const { id, titulo, ubicacion, descripcionCompleta, images, mapa, link, caracteristicas } = propiedades[idPropiedad - 1];

  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Determina el número de imágenes a mostrar según el tamaño de la pantalla
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(2);
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

  return (
    <>
      <Header />
      <section className="bg-dorado py-8">

        <div className="w-10/12 m-auto">
          <h2 className="text-2xl md:text-4xl text-center font-extrabold uppercase">{ubicacion}: {titulo}</h2>

        </div>
      </section>
      <section>
        <div className="">
          <Breadcrumb className="ml-10 my-5 hidden md:block" aria-label="Default breadcrumb example">
            <Breadcrumb.Item href="/" icon={HiHome}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">Properties</Breadcrumb.Item>
            <Breadcrumb.Item>{titulo}</Breadcrumb.Item>
          </Breadcrumb>

          <div className="mb-10">
            <div className="relative  w-11/12  m-auto overflow-hidden ">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {images.map((image, i) => (
                  <div
                    key={i}
                    className={`carousel-item flex-shrink-0 p-2 ${itemsPerPage === 1 ? "w-full" : itemsPerPage === 2 ? "w-1/2" : "w-1/3"
                      }`}
                  >
                    <img src={`/properties/id_${id}/${image}.webp`} alt={`Image ${i + 1}`} className="w-full " />
                  </div>
                ))}
              </div>
              <div className="flex justify-between m-2  ">
                <button onClick={prevItems} className="bg-dorado px-4 py-2 rounded "><svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                </svg>
                </button>
                <button onClick={nextItems} className="bg-dorado px-4 py-2 rounded"><svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="w-10/12 m-auto py-10">
          <h2 className="text-4xl font-bold">Location and Information</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <iframe className="w-full rounded-md my-3 h-96 gap-5"
                src={`https://www.google.com/maps/embed?${mapa}`}
                allowFullScreen="" referrerPolicy="no-referrer-when-downgrade">
              </iframe>

            </div>
            <div className="m-auto text-center">
              <p>{descripcionCompleta}</p>
              <a href={link} target="_blank" className="text-green-900 mt-5  font-bold block hover:underline" >Book here for an unforgettable experience in the city!</a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dorado py-10">
        <div className="w-10/12 m-auto grid grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="*:flex *:items-center *:my-2">
            <div >
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bed" width="48"
                height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M22 17v-3h-20" />
                <path d="M2 8v9" />
                <path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z" />
              </svg>
              <p className="ml-3">{caracteristicas[0]} Bedroom</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bath" width="48"
                height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" />
                <path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" />
                <path d="M4 21l1 -1.5" />
                <path d="M20 21l-1 -1.5" />
              </svg>
              <p className="ml-3">{caracteristicas[1]} Bathroom</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools-kitchen-2"
                width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
              </svg>

              <p className="ml-3">Equiped kitchen</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus"
                width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M16 19h6" />
                <path d="M19 16v6" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
              </svg>
              <p className="ml-3">Max. {caracteristicas[2]} Guests</p>
            </div>
          </div>
          <div className="*:flex *:items-center *:my-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wifi" width="48"
                height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 18l.01 0" />
                <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
                <path d="M6.343 12.343a8 8 0 0 1 11.314 0" />
                <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />
              </svg>
              <p className="ml-3">Smart TV / Wifi</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-paw" width="48"
                height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M14.7 13.5c-1.1 -2 -1.441 -2.5 -2.7 -2.5c-1.259 0 -1.736 .755 -2.836 2.747c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c1.013 0 1.8 -.823 1.8 -2c0 -.285 -.049 -.697 -.146 -.962c-.475 -1.451 -2.512 -1.835 -3.454 -3.538z" />
                <path
                  d="M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052z" />
                <path
                  d="M9.474 9c.055 0 .109 0 .163 -.011c.944 -.128 1.533 -1.346 1.32 -2.722c-.203 -1.297 -1.047 -2.267 -1.932 -2.267c-.055 0 -.109 0 -.163 .011c-.944 .128 -1.533 1.346 -1.32 2.722c.204 1.293 1.048 2.267 1.933 2.267z" />
                <path
                  d="M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267z" />
                <path
                  d="M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082z" />
              </svg>
              <p className="ml-3">Pet Friendly</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-smoking-no"
                width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 13l0 4" />
                <path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" />
                <path d="M3 3l18 18" />
                <path
                  d="M17 13h3a1 1 0 0 1 1 1v2c0 .28 -.115 .533 -.3 .714m-3.7 .286h-13a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h9" />
              </svg>
              <p className="ml-3">No smoking</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-confetti-off"
                width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 5h1" />
                <path d="M5 5v1" />
                <path d="M11.5 4l-.5 2" />
                <path d="M18 5h2" />
                <path d="M19 4v2" />
                <path d="M15 9l-1 1" />
                <path d="M18 13l2 -.5" />
                <path d="M18 19h1" />
                <path d="M19 19v1" />
                <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39v0z" />
                <path d="M3 3l18 18" />
              </svg>
              <p className="ml-3">No Parties / Events</p>
            </div>

          </div>

          <div className="text-center col-span-2 lg:col-span-1">
            <p className="font-bold">House Rules</p>
            <p>
              You will be staying in someone else's home, so please treat it with care and respect.
            </p>
            <p className="font-bold pt-3">Check-in and Check-out</p>
            <p>Check-in is from 3:00 PM onwards.<br />
              Check-out is before 11:00 AM.</p>


            <p className="font-bold pt-3">Quiet Hours</p>
            <p>From 10:00 PM to 7:00 AM.</p>

          </div>
        </div>
      </section>
      <section className="banner banner_bg--1 ">
        <div className="h-full bg-black bg-opacity-70 text-white py-16 text-center">
          <p className="font-bold text-3xl w-10/12 mx-auto mb-10 ">DO YOU LIKE IT?<br/> CHECK AVAILABILITY!</p>
          <Link className="p-5 border border-white rounded-2xl hover:bg-white hover:text-black" to={link} target="_blank">Book accommodation!</Link>
        </div>
      </section>

      <BannerBeyond />
      <FooterGeneral />

    </>
  )
}

export default Property