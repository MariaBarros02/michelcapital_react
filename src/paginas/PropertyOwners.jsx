import Header from "../layout/Header"
import FooterGeneral from "../layout/FooterGeneral"
import BannerBeyond from "../components/BannerBeyond"
const PropertyOwners = () => {
  return (
    <>
      <Header />
      <section>
        <div className="bg-dorado py-8">
          <h2 className="text-3xl md:text-5xl text-center font-extrabold uppercase">Property owners</h2>
        </div>
      </section>
      <section className="py-10">
        <div className="w-10/12 m-auto grid grid-cols-1 lg:grid-cols-2 items-center">
          <img src="/images/image_7.jpg" alt="..." className="w-2/3 m-auto rounded-full" />
          <div className="text-center">
            <p className="font-bold text-2xl py-3 md:text-3xl">Are you a property owner looking to <span className="text-green-900">maximize</span> the <span className="text-green-900">potential</span>  of your investment?</p>
            <p>
              Michel Capital Investment is your trusted partner in the hospitality industry, offering a seamless and profitable way to rent out your property on a short- and medium-term basis. Our expertise and commitment to excellence ensure that your property is in good hands.Partner with Michel Capital Investment and unlock the full potential of your property. Contact us today to learn more about how we can help you achieve your rental goals.
            </p>
          </div>
        </div>
      </section>
      <section>
        <p className="bg-black text-center font-bold text-white py-10 text-4xl uppercase">Why Partner with Us?</p>
        <div className="banner banner_bg--2">
          <div className="bg-black bg-opacity-50">
            <div className=" grid grid-cols-1 lg:grid-cols-3 w-10/12 m-auto py-10 gap-8 text-sm items-center">
              <div>
                <img src="/images/image_11.jpg" alt="..." className=" rounded-t-xl" />
                <p className="bg-black text-white p-5 rounded-b-xl text-center ">With our extensive network and marketing strategies, we ensure that your property enjoys high visibility and occupancy rates, maximizing your rental income. We handle all aspects of property management, from guest communication and check-ins to cleaning and maintenance, providing a hassle-free experience for you.</p>
              </div>
              <div>
                <img src="/images/image_12.jpg" alt="..." className=" rounded-t-xl" />
                <p className="bg-black text-white p-5 rounded-b-xl text-center">We understand that successful property management requires more than just finding tenants. It involves ongoing support, transparent communication, and a commitment to excellence. Our dedicated team is here to provide you with personalized assistance at every step of the way, we always be available to assist you with any questions or concerns, ensuring a smooth and profitable partnership.</p>
              </div>
              <div>
                <img src="/images/image_10.jpg" alt="..." className=" rounded-t-xl" />
                <p className="bg-black  text-white p-5 rounded-b-xl text-center">Our thorough vetting process ensures that your property is rented to responsible and reliable guests, minimizing wear and tear and maintaining the quality of your property. Whether you want to rent out your property occasionally or year-round, we offer flexible terms to suit your preferences and availability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BannerBeyond />
      <FooterGeneral />
    </>
  )
}

export default PropertyOwners