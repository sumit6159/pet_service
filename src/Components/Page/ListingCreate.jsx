import React, {useState, useEffect} from 'react'
import { Container, 
    FormControl, 
    FormLabel, 
    Input, 
    useToast,
    Button,
    Select
} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom'
import { useDispatch ,useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {apiCallPost} from '../../Redux/Address/Action'
const ListingCreate = () => {
    const {loginData} = useSelector((store)=> store.login)
    const toast = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            city : document.getElementById('city').value,
            address : document.getElementById('address').value,
            capacity : +document.getElementById('capacity').value,
            costPerDay : +document.getElementById('costPerDay').value,
            verified : document.getElementById('verified').value === 'true' ? true : false,
            rating : +document.getElementById('rating').value,
            houseUrl : document.getElementById('houseUrl').value,
            userId : loginData._id,
        }
        dispatch(apiCallPost(obj)).then((res)=> navigate('/detail')).catch((err)=> navigate('/'))
        document.getElementById('city').value = null;
        document.getElementById('address').value = null;
        document.getElementById('capacity').value = null;
        document.getElementById('costPerDay').value = null;
        document.getElementById('verified').value  = null;
        document.getElementById('rating').value = null;
        document.getElementById('houseUrl').value = null;
    }
    useEffect(()=>{
    }, [])
    return (
        <Container mt={30} boxShadow='xl' p={8}>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel htmlFor='city'>City</FormLabel>
                    <Input id='city' type='text'  />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='address'>Address</FormLabel>
                    <Input id='address' type='text'  />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='capacity'>Capacity</FormLabel>
                    <Input id='capacity' type='number' min={1} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='costPerDay'>Cost Per Day</FormLabel>
                    <Input id='costPerDay' type='number'  />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='verified'>Verified</FormLabel>
                    <Select id='verified' placeholder='select the tag'>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='rating'>Rating</FormLabel>
                    <Input id='rating' type='number' 
                    max={5} min={1}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='houseUrl'>House Url</FormLabel>
                    <Input id='houseUrl' type='text' required={true}  />
                </FormControl>
                <Button mt={4}  type='submit' variant='solid' colorScheme="green">
                    Submit
                </Button>
                <Link to='/detail'>
                    <Button mt={4} ml={4} variant='solid' colorScheme="green">
                        Detail Form
                    </Button>
                </Link>
            </form>
        </Container>
    )
}

export default ListingCreate