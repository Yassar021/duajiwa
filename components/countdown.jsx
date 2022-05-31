import { Box, Text, Image, Flex } from "@chakra-ui/react"

const Countdown = () => {
    return(
        <Box backgroundColor='#002854'>
            <Text pt="92px" fontSize='40px' fontWeight='700' textAlign='center' color='#fff'>
                April 23th, 2022
            </Text>

            <Image src="/svedate.png" width='276px' height='276px' alt="savethedate" mx='auto' my='60px' />
            <Flex gap={'30px'} justifyContent='center' pb='118px'>
                <Box>
                    <Text fontSize='40px' fontWeight='700' color='#fff'>182</Text>
                    <Text fontSize='16px' fontWeight='400' color='#fff'>Days</Text>
                </Box>
                <Box>
                    <Text fontSize='40px' fontWeight='700' color='#fff'>26</Text>
                    <Text fontSize='16px' fontWeight='400' color='#fff'>Hours</Text>
                </Box>
                <Box>
                    <Text fontSize='40px' fontWeight='700' color='#fff'>22</Text>
                    <Text fontSize='16px' fontWeight='400' color='#fff'>Minutes</Text>
                </Box>
                <Box>
                    <Text fontSize='40px' fontWeight='700' color='#fff'>48</Text>
                    <Text fontSize='16px' fontWeight='400' color='#fff'>Seconds</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default Countdown