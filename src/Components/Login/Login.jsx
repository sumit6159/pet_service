import { 
    FormControl,
    FormLabel,
    Input,
    Container,
    Button,
    useToast,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import { apiCallLoggedIn } from '../../Redux/Login/Action'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const toast = useToast();
    const navigate = useNavigate();
    const {loggedIn, status ,error} = useSelector((store) => store.login);
    const dispatch = useDispatch();
    const [loginData, setLogin] = useState({});
    const handleChange = (e) =>{
        const {id, value} = e.target;
        setLogin({...loginData, [id] : value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(apiCallLoggedIn(loginData));
    }
    useEffect(()=>{
        if(loggedIn === true){
            toast({
                title: 'logged in  successfully.',
                description: "You are logged in.",
                status: 'success',
                duration: 1000,
                isClosable: true,
            })
            navigate('/')
            return;
        } 
        if(error) {
            toast({
                title: 'Login failed.',
                description: "Please Enter correct email or password.",
                status: 'warning',
                duration: 1000,
                isClosable: true,
            })
            document.getElementById('email').value = null;
            document.getElementById('password').value = null;
            navigate('/login')
        }
    }, [loggedIn, status, error, navigate , toast])
    
  return (
    <Container mt={30} boxShadow='xl' p={8} maxW='container.sm'  bg='teal' color='white'>
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input  bg='white' color='teal' id='email' type='email' onChange={handleChange} />
            </FormControl>
            
            <FormControl>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <InputGroup>
                    <Input  bg='white' color='teal' id='password' type='password'  onChange={handleChange}/>
                    <InputRightElement width='4.5rem'>
                   
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button mt={4} w='full' type='submit' variant='solid' colorScheme="red">
                Login
            </Button>
        </form>
    </Container>
  )
}

export default Login