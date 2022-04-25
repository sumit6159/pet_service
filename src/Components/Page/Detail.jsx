import React, {useState, useEffect} from 'react'
import { Container, 
    FormControl, 
    FormLabel, 
    Input, 
    useToast,
    Button,
    Checkbox, 
    CheckboxGroup,
    Stack
} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom'
import { apiCallPost } from '../../Redux/Data/Action';
import {useDispatch, useSelector} from 'react-redux'
const Detail = () => {
    const [petSize, setPet] = useState([])
    const {loginData} = useSelector((store)=> store.login)
    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        let typee = document.getElementById('type').value;
        typee =  typee.trim().split(',')
        let obj = {
            summary : document.getElementById('summary').value,
            number : +document.getElementById('number').value,
            type : typee,
            petSize : petSize,
            supervisors : +document.getElementById('supervisors').value,
            unSupervisor : document.getElementById('unSupervisor').value,
            sleepArea : document.getElementById('sleepArea').value,
            pottyBreak : document.getElementById('pottyBreak').value,
            walk : +document.getElementById('walk').value,
            typeOfHome : document.getElementById('typeOfHome').value,
            outDoorArea : document.getElementById('outDoorArea').value,
            emergency : document.getElementById('emergency').value,
            addressId : loginData._id
        };
        dispatch(apiCallPost(obj))
        .then(()=>{
            navigate('/')
            toast({
                message : 'You have successfully add the detials',
                status : 'success',
                duration : 1000
            })
        })
        .catch(()=> {
            navigate('/detail')
            toast({
                status : "error", 
                duration : 1000,
                message : "not post the details try again"
            })
        });
        document.getElementById('type').value = null;
        document.getElementById('summary').value = null;
        document.getElementById('number').value = null;
        document.getElementById('supervisors').value = null;
        document.getElementById('unSupervisor').value = null;
        document.getElementById('sleepArea').value = null;
        document.getElementById('pottyBreak').value = null;
        document.getElementById('walk').value = null;
        document.getElementById('typeOfHome').value = null;
        document.getElementById('outDoorArea').value = null;
        document.getElementById('emergency').value = null;
    }
    useEffect(()=>{
    }, [])
    const handleChange = (e) => {
        setPet(e)
    }
    return (
        <Container mt={30} boxShadow='xl' p={8}>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel htmlFor='number'>Capacity</FormLabel>
                    <Input id='number' type='number'  />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='type'>Type of pets you want to take care</FormLabel>
                    <Input id='type' type='text'  />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='petSize'>Pet size</FormLabel>
                    <CheckboxGroup colorScheme='green' id='petSize'  onChange={handleChange}>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox value='1-10kg'>1-10kg</Checkbox>
                            <Checkbox value='11-20kg'>11-20kg</Checkbox>
                            <Checkbox value='21-40kg'>21-40kg</Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='supervisors'>Number of supervisors</FormLabel>
                    <Input id='supervisors' type='number' min={1} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='unSupervisor'>When Supervisor is not there than where the pet will be ?</FormLabel>
                    <Input id='unSupervisor' type='text'  />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='sleepArea'>Rest room for pets</FormLabel>
                    <Input id='sleepArea' type='text'  />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='pottyBreak'> wash room break during the day</FormLabel>
                    <Input id='pottyBreak' type='text'  />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='walk'>Walk for the day</FormLabel>
                    <Input id='walk' type='number' min={1} max={100}   />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='typeOfHome'>What type of house is yours ?</FormLabel>
                    <Input id='typeOfHome' type='text'  />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='outDoorArea'>Out door area</FormLabel>
                    <Input id='outDoorArea' type='text'  />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='emergency'>Emergency</FormLabel>
                    <Input id='emergency' type='text'  />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='summary'>Summary</FormLabel>
                    <Input id='summary' type='text'/>
                </FormControl>
                <Button mt={4} w='full' type='submit' variant='solid' colorScheme="green">
                    Submit
                </Button>
            </form>
        </Container>
    )
}

export default Detail