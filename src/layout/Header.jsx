import Navegacion from "./Navegacion"
const Header = () => {
  return (
    <>
        <Navegacion/>

        <div className="hero h-96 ">
            <div className="h-full  bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <img src="/images/logo_1.png" alt="logo" className="h-80 w-auto pt-16"/>
                <p className="uppercase text-white text-center pb-16 w-10/12 lg:w-6/12 md:text-2xl">We revolutionize the way people travel by offering unique accommodations</p>
            </div>
        </div>

    
    </>
  )
}

export default Header