import Header from "../layout/Header"
import FooterGeneral from "../layout/FooterGeneral"
import BannerBeyond from "../components/BannerBeyond"
import { Banner } from "flowbite-react"
const AboutUs = () => {
  return (
    <>
      <Header />
      <section>
        <div className="bg-dorado py-8">
          <h2 className="text-3xl md:text-5xl text-center font-extrabold uppercase">about us</h2>
        </div>
      </section>
      <section className="bg-gray-200 py-10">
        <div className="w-10/12  m-auto grid grid-cols-1 lg:grid-cols-3 gap-5 text-sm items-center text-center">
          <div>
            <img src="/images/image_23.jpg" alt="..." className="rounded-full border-4 shadow-xl border-white w-2/3 m-auto " />
            <p className="my-3 font-bold text-3xl uppercase">Mission</p>
            <p>
              As a host of your next stay, our mission is to provide accommodations that not only offer comfort and safety but also enrich each guest's travel experience, allowing them to discover the true essence of the location from a unique local perspective.
            </p>
          </div>
          <div className="hidden lg:block">
            <p className="bg-white py-10 px-5 text-4xl font-bold rounded-full inline-block">AND</p>
          </div>
          <div>
            <img src="/images/image_24.jpg" alt="..." className="rounded-full border-4 shadow-xl border-white  w-2/3 m-auto" />
            <p className="my-3 font-bold text-3xl uppercase">Vision</p>
            <p>
              We focus on creating genuine and memorable connections, providing not just a space to stay but a home where guests can feel part of a community and live authentic cultural adventures. We are committed to exceeding expectations with exceptional hospitality and a deep immersion into local culture.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-dorado">
        <p className="w-10/12 m-auto text-center text-xs">"Our goal as a company dedicated to the professional business of renting accommodations is to revolutionize the way people travel, offering unique lodgings and local experiences that allow guests to live like a local resident. We aim to provide a safe and accessible way for travelers seeking more personal, authentic, and affordable stays. By fostering cultural exchange and hospitality, we not only promote a sense of global community but also make every journey as unique as it is enriching."</p>
      </section>
      <section className="py-10">
        <div className="w-10/12 m-auto grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="text-center">
            <p className="font-bold text-3xl pb-5">Stay Connected with Us!</p>
            <p className="">Discover more about our properties, special offers, and latest updates by following us on social media. Join our community and never miss out on exciting news and exclusive content. Click the icons below to visit our social media pages and stay connected!</p>
            <div className="flex justify-around py-5">
              <a href="https://www.instagram.com/michelcapitalrental?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                  <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#fd5"></stop>
                    <stop offset=".328" stop-color="#ff543f"></stop>
                    <stop offset=".348" stop-color="#fc5245"></stop>
                    <stop offset=".504" stop-color="#e64771"></stop>
                    <stop offset=".643" stop-color="#d53e91"></stop>
                    <stop offset=".761" stop-color="#cc39a4"></stop>
                    <stop offset=".841" stop-color="#c837ab"></stop>
                  </radialGradient>
                  <path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z">
                  </path>
                  <radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813"
                    gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#4168c9"></stop>
                    <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
                  </radialGradient>
                  <path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z">
                  </path>
                  <path fill="#fff"
                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z">
                  </path>
                  <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                  <path fill="#fff"
                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z">
                  </path>
                </svg>

              </a>
              <a href="https://www.facebook.com/michelcapitalrental?mibextid=LQQJ4deste" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                  <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                  <path fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z">
                  </path>
                </svg>

              </a>
            </div>
          </div>

          <div className='text-center w-4/5 m-auto text-gray-600 text-sm'>
            <img className='w-52 m-auto mb-5' src='/images/beyond.png' alt='beyond-logo' />
            <p>Michel Capital Investment is an partner of the Beyond Corporate Housing Network. Beyond CHN is a distinguished nationwide corporate housing network for individual companies specializing in midterm stays.</p>

          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-200">
        <div className="w-10/12 m-auto">
          <h2 className="text-4xl ">Our values as a team...</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-5 text-center">
            <div >
              <img src="/images/image_22.jpg" alt="..." />
              <div>
                <p className="uppercase text-green-950 text-3xl py-3">hospitality</p>
                <p className="text-sm">In our hospitality company, our team values are the cornerstone of our success. We believe in fostering a culture of collaboration, integrity, and excellence. Every member of our team is dedicated to providing exceptional service to our guests, and we understand the importance of teamwork in achieving our goals.</p>
              </div>

            </div>
            <div >
              <img src="/images/image_20.jpg" alt="..." />
              <div>
                <p className="uppercase text-dorado text-3xl py-3">collaboration</p>
                <p className="text-sm">Collaboration is another key value that defines our team. We recognize the power of working together towards a common goal. By sharing ideas, knowledge, and resources, we can achieve greater results and create memorable experiences for our guests. We also collaborate with recognized and reliable companies in the sector such as:</p>
                <a href="https://dldlifexperience.com/" target="_blank" className="w-10 h-10 " >
                  <img src="images/dld.png" alt="logo dld" className="w-10 h-10 m-auto rounded-md my-3"  />
                </a>
              </div>

            </div>
            <div >
              <img src="/images/image_21.jpg" alt="..." />
              <div>
                <p className="uppercase text-green-950 text-3xl py-3">integrity</p>
                <p className="text-sm">Integrity is at the core of everything we do. We are committed to honesty, transparency, and ethical conduct in all aspects of our work. Trust is essential in the hospitality industry, and we strive to earn and maintain the trust of our guests, colleagues, and partners.</p>
              </div>

            </div>
            
          </div>
        </div>
      </section>
      <FooterGeneral />
    </>
  )
}

export default AboutUs