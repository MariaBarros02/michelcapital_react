import BannerBeyond from "../components/BannerBeyond"
import FooterGeneral from "../layout/FooterGeneral"
import Header from "../layout/Header"
import CardBoton from "../components/CardBoton"
import propiedades from "../data/propiedades"
const Properties = () => {
  return (
    <>
      <Header />
      <section>
        <div className="bg-dorado py-8">
          <h2 className="text-3xl md:text-5xl text-center font-extrabold uppercase">PROPERTIES</h2>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="py-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {propiedades.map(propiedad => (
            <CardBoton
              key={propiedad.id}
              imagen={`/properties/id_${propiedad.id}/principal.webp`}
              titulo={propiedad.titulo}
              ubicacion={propiedad.ubicacion}
              parrafo={propiedad.descripcion}
              boton="VIEW PROPERTY"
              link={`/properties/property/${propiedad.id}`}
            />

          ))}
        </div>

      </section>
      <BannerBeyond />
      <FooterGeneral />
    </>
  )
}

export default Properties