import { Card, Button } from "flowbite-react"
import { Link } from "react-router-dom"

const CardBoton = ({imagen, ubicacion, titulo, parrafo, boton, link}) => {
    return (
        <>
            <Card
                className="max-w-sm m-auto   h-full"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={imagen}
                
            >
                
                <p className="font-bold text-lg ">
                    {titulo}
                </p>
                <p className="font-bold  text-gray-900 -mt-4 ">
                    {ubicacion}
                </p>
               
                <p className="font-normal text-sm text-gray-800 ">
                    {parrafo}
                </p>
                <Button className="bg-dorado text-black font-bold " color="dark" as={Link} to={link}>
                    {boton}
                </Button>
            </Card>

        </>
    )
}

export default CardBoton