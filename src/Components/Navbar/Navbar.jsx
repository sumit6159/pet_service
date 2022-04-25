import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { apiCallLoggedOut } from '../../Redux/Login/Action'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loggedIn, auth} = useSelector((store)=> store.login);
    return (
    <Flex  
    top={0}
    bottom={0}
    left={0}
    zIndex={100}
    boxShadow='lg'
    mb={5}
    rounded='md' 
    backdropFilter='auto' 
    backdropBlur='8px'
    p={[0,3]} 
    w="full"
    position="sticky"
    fontSize={21}
    bg='teal'
    color='white'
    >
        <Box>
            <Text ml={5} fontWeight="700">
               Pet-service-app
            </Text>
        </Box>
        <Spacer />
        
        <Box
            display={{base : 'flex',lg : "flex", md : "none", sm : 'none'}}
        >
            <Link to='/'>
                <Button mr={3} variant="outline"
                    colorScheme="white"
                >
                    Home
                </Button>
            </Link>
            {
                !loggedIn ?
                <Link to='/signin'>
                <Button mr={3} variant="outline"
                    colorScheme="white"
                >
                    Sign up
                </Button>
                </Link> : null
            }
            {
                !loggedIn ? 
                <Link to='/login'>
                <Button mr={3} variant="outline"
                    colorScheme="white"
                >
                    Login
                </Button>
                </Link> :
                <Button
                mr={3} variant="outline"
                colorScheme="white"
                onClick={()=>{
                    dispatch(apiCallLoggedOut())
                    navigate('/')
                }}
                >
                    Log out
                </Button>
            }
            {
                auth === 'Permission granted for all' || auth === 'Permission granted for add house' ?
                <Link to='/listing/create'>
                <Button mr={3} variant="outline"
                    colorScheme="white"
                >
                    Add House
                </Button>
                </Link> : null
            }
        </Box>
       
    </Flex>
    )
}

export default Navbar