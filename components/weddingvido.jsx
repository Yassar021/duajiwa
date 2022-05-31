import { AspectRatio, Box, Image, Text } from "@chakra-ui/react"

const WeddingVideo = () => {
    return(
        <Box py='120px' textAlign='center'>
            <Text fontSize={{base:'20px',md:'40px'}} fontWeight='700' color='#002854'> The Wedding Video</Text>
            <AspectRatio mt='24px' mx='auto' maxW='537px' maxH='311px' ratio={1}>
                <iframe
                    title='naruto'
                    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                    allowFullScreen
                />
            </AspectRatio>

            <Text fontSize={{base:'20px',md:'40px'}} fontWeight='700' color='#002854' mt='179px'>
                Thanks to Our Vendors
            </Text>
            <Image mx='auto' src="/logoduajiwa.png" width={{base:'224px',md:'324px'}} height={{base:'auto',md:'87px'}} mt='10px' alt="Duajiwa logo"/>
        </Box>
    )
}

export default WeddingVideo