import { Box, Image, SimpleGrid } from "@chakra-ui/react"

const Gallery = () => {
    return(
        <Box py="28px" px="24px" backgroundColor='#001D3C'>
            <SimpleGrid columns={{base:'1',md:3}} spacing={'20px'}>
                <Image src="/g1.png" alt="g1"/>
                <Image src="/g2.png" alt="g2"/>
                <Image src="/g3.png" alt="g3"/>
                <Image src="/g4.png" alt="g4"/>
                <Image src="/g5.png" alt="g5"/>
                <Image src="/g6.png" alt="g6"/>
            </SimpleGrid>           
        </Box>
    )
}

export default Gallery