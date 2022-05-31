import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"

const MainContent = () => {
    return(
        <Box p={{base:'10px', xl: '90px'}} backgroundImage='/bg-main.png' backgroundRepeat='no-repeat' backgroundPosition='top right' backgroundSize='cover'>
            <Image src="/header.png" mx='auto' alt="Header" width='418px' />
            <Text fontSize='48px' fontWeight='700' color='#002854' textAlign='center' mt='26px'>We Are Getting Merried</Text>

            <SimpleGrid  mt='50px' mx={{base:'10px',md:'54px'}} columns={{base:1,lg:3}} spacing={{base:'20px',xl:'108px'}} >
                <Box mx='auto' height={{base: '28pc',}}>
                    <Box backgroundImage='/girl.png' zIndex='1'  width={{base:'240px',md:'306px',xl:'306px',lg:'282px'}} height='306px' position='relative' top='20px' left={{base:'26px', md:'70px',lg:'0','2xl':'116px'}} backgroundSize='contain' backgroundRepeat='no-repeat' borderRadius='50%' />
                    <Box zIndex='2'  backgroundImage='/border-pct.png' width={{base:'294px',md:'450px',xl:'450px', lg:'337px'}} height='348px' top='-307px' left={{md:'44px', lg:'-27px','2xl':'90px'}} borderRadius='50%' position='relative'  backgroundSize='contain' backgroundRepeat='no-repeat' />
                    <Text fontSize='40px' fontWeight='700' top='-300px' position='relative' color='#4B488D' left={{base:'0', md:'80px',lg:'0','2xl':'116px'}}>Seri Lestari Lubis</Text>
                    <Stack left={{base: '48px', md:'130px',lg:'40px','2xl':'160px'}} width='calc(100% - 48px)' top='-300px' position='relative' direction='row' alignItems='center'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#4B488D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#4B488D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.5 6.5H17.51" stroke="#4B488D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <Text fontSize='24px' fontWeight='700' color='#4B488D'>serilestarilubis</Text>
                    </Stack>
                </Box>
                <Text fontSize={{base:'100px',md:'140px',xl:'200px'}} fontWeight='700px' textAlign='center' color='#4B488D'>&</Text>
                <Box mx='auto' height={{base:'28pc',}}>
                    <Box backgroundImage='/yjr.jpeg' zIndex='1' width={{base:'240px',md:'306px',lg:'282px', xl:'306px'}} height='306px' position='relative' top='20px' left={{base:'26px', md:'70px',lg:'0'}} backgroundSize='contain' backgroundRepeat='no-repeat' borderRadius='50%' />
                    <Box zIndex='2'  backgroundImage='/border-pct.png' width={{base:'294px',md:'450px',lg:'337px', xl:'450px'}} left={{md:'44px',lg:'-27px'}} height='348px' top='-307px' borderRadius='50%' position='relative'  backgroundSize='contain' backgroundRepeat='no-repeat' />
                    <Text fontSize='40px' fontWeight='700' top='-300px' position='relative' color='#4B488D' left={{base:'0', md: '80px',lg:'0'}}>Ahmad Muyassar</Text>
                    <Stack left={{base: '48px',md:'130px', lg:'40px'}} width='calc(100% - 48px)' top='-300px' position='relative' direction='row' alignItems='center'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#4B488D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#4B488D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.5 6.5H17.51" stroke="#4B488D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <Text fontSize='24px' fontWeight='700' color='#4B488D'>ahmadmuyassar</Text>
                    </Stack>
                </Box>
            </SimpleGrid>

            <Text fontSize='40px' fontWeight='700' color='#002854' textAlign='center' mt={{base:'80px',md:'40px'}}>Our Love Story</Text>
            <Text fontSize='32px' fontWeight='400' color='#4B488D' textAlign='center' mt='12px'>A Fine arts student meets attractive bartender</Text>

            <Flex mt='132px' gap={{base:'20px',xl:'136px'}} alignItems='center' direction={{base: 'column-reverse', lg:'row'}} >
                <Text p={{base:'0',md:'20px', lg:'0'}} fontSize={{base:'18px',md:'24px',xl:'32px'}} fontWeight='400' fontFamily='Spartan' align='justify'>Lorem Ipsum is simply dummy text of the 
                        printing and typesetting industry. 
                        Lorem Ipsum has been the industries
                        standard dummy text ever since the 
                        1500s, when an unknown</Text>
                <Image src="/ourlove1.png" width='427px' height={{base:'auto',xl:'640px'}} alt="Ourlove1"/>
            </Flex>
            <Flex mt={{base:'1rem',md:'132px'}} gap={{base:'20px',xl:'136px'}} alignItems='center' direction={{base: 'column', lg:'row'}}>
                <Image src="/ourlove2.png" width='595px' height={{base:'auto',xl:'397px'}} alt="Ourlove2"/>

                <Text p={{base:'0',md:'20px', lg:'0'}} fontSize={{base:'18px',md:'24px',lg:'32px'}} fontWeight='400' fontFamily='Spartan' align='justify'>Lorem Ipsum is simply dummy text of the 
                        printing and typesetting industry. 
                        Lorem Ipsum has been the industries
                        standard dummy text ever since the 
                        1500s, when an unknown</Text>
            </Flex>
        </Box>
    )
}

export default MainContent