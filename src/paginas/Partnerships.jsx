import BannerBeyond from "../components/BannerBeyond"
import FooterGeneral from "../layout/FooterGeneral"
import Header from "../layout/Header"

const Partnerships = () => {
  return (
    <>
      <Header/>
      <section>
        <div className="bg-dorado py-8">
          <h2 className="text-3xl md:text-5xl text-center font-extrabold uppercase">PARTNETSHIPS</h2>
        </div>
      </section>
      <section className="py-48 bg-gray-200 ">
        <div className="text-center">
         
            <p className="font-bold text-gray-400 text-2xl p-3 md:w-1/3 uppercase m-auto">Comming soon! We are working to bring you new content

          </p>
        </div>
      </section>
      <BannerBeyond/>
      <FooterGeneral/>   
    </>
  )
}

export default Partnerships