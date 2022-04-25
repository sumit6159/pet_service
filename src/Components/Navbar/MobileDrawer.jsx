import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Flex,
    VStack
} from '@chakra-ui/react'

import {useSelector, useDispatch} from 'react-redux'

import { apiCallLoggedOut } from '../../Redux/Login/Action'
import { useNavigate } from 'react-router-dom'
import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
const MobileDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loggedIn, auth} = useSelector((store)=> store.login);

    return (
        <Flex>
            <Button ref={btnRef} colorScheme='teal' variant="ghost" onClick={onOpen}>
                Open
            </Button>

            <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody >
                    <VStack alignItems="left">
                        <Link to='/'>
                            <Button mr={3} variant="ghost"
                                colorScheme="teal"
                                onClick={onClose}
                            >
                            Home
                            </Button>
                        </Link>
                        {
                            !loggedIn ?
                            <Link to='/signin'>
                            <Button mr={3} variant="ghost"
                                colorScheme="teal"
                                onClick={onClose}
                            >
                                Sign in
                            </Button>
                            </Link> : null
                        }
                        {
                            !loggedIn ? 
                            <Link to='/login'>
                            <Button mr={3} variant="ghost"
                                colorScheme="teal"
                                onClick={onClose}
                            >
                                Login
                            </Button>
                            </Link> :
                            <Button
                            mr={3} variant="ghost"
                            colorScheme="teal"
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
                            <Button mr={3} variant="ghost"
                                colorScheme="teal"
                                onClick={onClose}
                            >
                                Add House
                            </Button>
                            </Link> : null
                        }
                    </VStack>
                </DrawerBody>                
            </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default MobileDrawer