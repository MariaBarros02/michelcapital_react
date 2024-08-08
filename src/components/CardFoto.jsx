import { Card } from "flowbite-react"

const CardFoto = ({ imagen, titulo, parrafo }) => {
    return (
        <>
            <Card
                className="max-w-sm mx-auto mb-8 "
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={imagen}
            >
                <h5 className="text-xl font-bold tracking-tight text-yellow-600 dark:text-white">
                    {titulo}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                    {parrafo}
                </p>
            </Card>
        </>
    )
}

export default CardFoto