import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"

const Dating = () => {
    return(
        <Box px={{base:'10px',md:'90px'}} py={{base:'30px',md:'90px'}} backgroundImage='/bg-main.png' backgroundRepeat='no-repeat' backgroundPosition='top right' backgroundSize='cover'>
            <Image src="/header.png" mx='auto' alt="Header" width='418px' />
            <Flex direction={{base: 'column', md:'row'}} gap={{base:'60px', md:'120px',lg:'420px'}} justifyContent='center' mt='72px'>
                <Box textAlign='center'>
                    <Text fontSize='32px' fontWeight='700' color='#002854'>Saturday</Text>
                    <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(2, 1fr)'>
                        <GridItem rowSpan='2'>
                            <Text fontSize='128px' fontWeight='700' color='#002854'>6</Text>
                        </GridItem>
                        <Text mt='auto' fontSize='32px' fontWeight='700' color='#002854'>April</Text>
                        <Text fontSize='32px' fontWeight='700' color='#002854'>2022</Text>
                    </Grid>
                    <Text fontSize='40px' fontWeight='700' color='#002854'>Akad Nikah</Text>
                    <Text fontSize='24px' fontWeight='400' color='#002854'>07:30 - 09:00</Text>
                    <Button
                        size='lg'
                        height='48px'
                        width='200px'
                        border='2px'
                        borderColor='#002854'
                        backgroundColor='#fff'
                        p='auto'
                        mt='7px'
                        >
                        Add to calendar
                        </Button>
                </Box>
                <Box textAlign='center'>
                    <Text fontSize='32px' fontWeight='700' color='#002854'>Sunday</Text>
                    <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(2, 1fr)'>
                        <GridItem rowSpan='2'>
                            <Text fontSize='128px' fontWeight='700' color='#002854'>7</Text>
                        </GridItem>
                        <Text mt='auto' fontSize='32px' fontWeight='700' color='#002854'>April</Text>
                        <Text fontSize='32px' fontWeight='700' color='#002854'>2022</Text>
                    </Grid>
                    <Text fontSize='40px' fontWeight='700' color='#002854'>Resepsi</Text>
                    <Text fontSize='24px' fontWeight='400' color='#002854'>07:30 - 09:00</Text>
                    <Button
                        size='lg'
                        height='48px'
                        width='200px'
                        border='2px'
                        borderColor='#002854'
                        backgroundColor='#fff'
                        p='auto'
                        mt='7px'
                        >
                        Add to calendar
                        </Button>
                </Box>
            </Flex>
            <Box mt='95px' textAlign='center' mx='auto'>
                <Text fontSize='32px' fontWeight='700'>Hotel Fairmont Jakarta</Text>
                <Text my='20px' fontSize='24px' fontWeight='400'>Jl. Asia Afrika No8, Gelora, Tanahabang, Jakarta</Text>
                <Button
                        leftIcon={<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1.33325L9 5.33325M9 22.6666L1.73733 19.0346C1.51589 18.9239 1.32963 18.7538 1.1994 18.5433C1.06918 18.3328 1.00013 18.0901 1 17.8426V3.49059C1.00012 3.2634 1.05829 3.04001 1.16899 2.84161C1.27969 2.64322 1.43925 2.4764 1.63253 2.35699C1.8258 2.23758 2.04638 2.16954 2.27334 2.15931C2.5003 2.14909 2.72611 2.19703 2.92933 2.29859L9 5.33325V22.6666ZM9 22.6666L17 18.6666L9 22.6666ZM9 22.6666V5.33325V22.6666ZM17 18.6666L23.0707 21.7012C23.2739 21.8028 23.4997 21.8507 23.7267 21.8405C23.9536 21.8303 24.1742 21.7623 24.3675 21.6428C24.5608 21.5234 24.7203 21.3566 24.831 21.1582C24.9417 20.9598 24.9999 20.7364 25 20.5093V6.15725C24.9999 5.9097 24.9308 5.66708 24.8006 5.45655C24.6704 5.24602 24.4841 5.07591 24.2627 4.96525L17 1.33325V18.6666ZM17 18.6666V1.33325V18.6666Z" stroke="#002854" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        }
                        size='lg'
                        height='48px'
                        width='200px'
                        border='2px'
                        borderColor='#002854'
                        backgroundColor='#fff'
                        p='auto'
                        mt='7px'
                        >
                        View on maps
                        </Button>
            </Box>
        </Box>
    )
}

export default Dating