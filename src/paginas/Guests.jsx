import BannerBeyond from "../components/BannerBeyond"
import FooterGeneral from "../layout/FooterGeneral"
import Header from "../layout/Header"



const Guests = () => {
  return (
    <>
      <Header />
      <section>
        <div className="bg-dorado py-8">
          <h2 className="text-3xl md:text-5xl text-center font-extrabold">GUESTS</h2>
        </div>
      </section>
      <section className="bg-gray-200 py-16">
        <div className="w-10/12 m-auto lg:grid lg:grid-cols-2" >
          <img src="/images/image_13.jpg" alt="..." className="border-4 border-white shadow-xl lg:ml-28" />
          <div className="bg-white p-5 shadow-xl  lg:h-auto lg:text-left lg:mt-32 ">
            <p className="text-2xl font-bold mb-3 lg:text-3xl ">Discover the Advantages of Staying with Us</p>
            <ul className="text-sm lg:pl-3 lg:pt-3 list">
              <li><span className="font-bold">24/7 Customer Support:</span> Our team is available around the clock to address any concerns or needs you may have.</li>

              <li><span className="font-bold">Housekeeping Services:</span> Enjoy the convenience of regular housekeeping services to keep your accommodation clean and tidy.</li>

              <li><span className="font-bold"> Concierge Services:</span> Need assistance with reservations, transportation, or local recommendations? Our concierge services are here to make your stay seamless.</li>

              <li><span className="font-bold">Fully Equipped Kitchens:</span> Prepare your meals in our fully equipped kitchens, featuring modern appliances and all necessary utensils.</li>

              <li><span className="font-bold">Laundry Facilities:</span> Access to in-unit or on-site laundry facilities for your convenience.</li>

              <li><span className="font-bold">Entertainment Options:</span> Relax and unwind with our in-room entertainment options, including smart TVs and streaming services.</li>
            </ul>
          </div>
        </div>
      </section>

      <section >
        <h2 className="py-8 bg-dorado font-bold text-4xl text-center md:text-left md:pl-10">Why Staying with Michel Capital Investment?</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 text-dorado text-center text-xs md:text-base lg:*:h-96 *:object-cover">
          <img src="/images/image_14.jpg" alt="..." />
          <div className="bg-black flex items-center">
            <p className="w-10/12 m-auto">Our properties are strategically located in the most desirable neighborhoods, ensuring you have
              easy access to local attractions, dining, shopping, and business centers. Whether you're here
              for work or leisure, you'll find yourself in the heart of the action.</p>
          </div >
          <img src="/images/image_15.jpg" alt="..." className="col-start-2 row-start-2 lg:col-start-3 lg:row-start-1 "/>
          <div className="bg-black flex items-center ">
            <p className="w-10/12 m-auto">Each of our accommodations is thoughtfully designed and fully furnished with modern amenities.
              Enjoy a home-like atmosphere with well-equipped kitchens, comfortable living areas, and cozy
              bedrooms that cater to your every need.</p>
          </div>
          <img src="/images/image_16.jpg" alt="..." className="lg:col-start-2  "/>
          <div className="bg-black flex items-center lg:col-start-1 lg:row-start-2">
            <p className="w-10/12 m-auto">We understand that every guest's needs are different. That's why we offer flexible stay options,
              ranging from a few days to several months. Whether you're on a business trip, vacation, or
              relocating, we have the perfect solution for you.</p>
          </div>
          <img src="/images/image_17.jpg" alt="..." className="col-start-2 row-start-4 lg:col-start-4 lg:row-start-2 " />
          <div className="bg-black flex items-center">
            <p className="w-10/12 m-auto">Our dedicated team is always available to assist you. From the moment you book with us to the
              time you check out, we strive to provide unparalleled customer service. Need recommendations or
              have a special request? We're here to help!</p>
          </div>
          <img src="/images/image_18.jpg " alt="..." className="" />
          <div className="bg-black flex items-center">
            <p className="w-10/12 m-auto">For our business travelers, we offer high-speed internet and dedicated workspaces in most of our
              properties. Stay connected and productive in a comfortable environment.</p>
          </div>
          <img src="/images/image_19.jpg " alt="..."  className="col-start-2 row-start-6 lg:col-start-3 lg:row-start-3" />
          <div className="bg-black flex items-center">
            <p className="w-10/12 m-auto">Your safety is our priority. Our properties are located in secure neighborhoods, and we employ
              rigorous cleaning and maintenance protocols to ensure your peace of mind during your stay.</p>
          </div>

        </div>
      </section>

      <BannerBeyond />
      <FooterGeneral />
    </>
  )
}

export default Guests