import { Box, Text } from "@chakra-ui/react"

const Footer = () => {
    return(
        <>
            <Box height='32px' backgroundColor='#001D3C' />
            <Box height='202px' backgroundColor='#002854' display='flex'>
                <Text fontSize={{base:'16px', md:'32px'}} fontWeight='700' color='#fff' m='auto'>The Wedding of Seri & Andi</Text>

            </Box>
        </>
    )
}

export default Footer