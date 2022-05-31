import { Box, Flex, Text } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

const Hero = ({name, couple, date}) => {
    return(
        <Box backgroundImage={{md:'/right.png'}} backgroundSize='356px' backgroundRepeat='no-repeat' backgroundPosition='bottom right' display='flex' height={{base:'100%',md:'100vh'}} bgColor={'#C48E71'}>
            <Image src='/left.png' display={{md:'inherit', base:'none'}} alt='left' width='356px' position='absolute' />
            <Flex border='2px solid #FFFFFF' alignItems='center' justifyContent='center' width='798px' m='auto' p='10px'>
                <Flex direction='column' border='2px solid #FFFFFF' alignItems='center' justifyContent='center'height='352px' width='100%' >
                    <Text fontSize='16px' fontWeight='700' color='#fff' letterSpacing='2px'>The Wedding Of</Text>
                    <Text my='12px' fontSize={{base:'24px',md:'48px'}} fontWeight='700' color='#fff' letterSpacing='2px'>{name} & {couple}</Text>
                    <Text fontSize='16px' fontWeight='700' color='#fff' letterSpacing='8px'>{date}</Text>
                </Flex>
            </Flex>

        </Box>
    )
}

export default Hero