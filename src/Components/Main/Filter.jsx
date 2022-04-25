import { 
    Box,
    Flex, 
    Select,
    Spacer
} from '@chakra-ui/react'
import React from 'react'
import { useDispatch} from 'react-redux'
import { apiCallPrice, apiCallVerified } from '../../Redux/Address/Action'
const Filter = () => {
    const dispatch = useDispatch();
    const handlePrice = (e)=>{
        const {value} = e.target;
        dispatch(apiCallPrice(value))
    }
    const handleVerification = (e)=>{
        const {value} = e.target;
        dispatch(apiCallVerified(value))
    }
    return (
        <Flex >
            <Box>
                <Select onChange={handlePrice}>
                    <option value="both">price</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </Select>
            </Box>
            <Spacer />
            <Box>
                <Select onChange={handleVerification}>
                    <option value="both">verification</option>
                    <option value="yes">verified</option>
                    <option value="no">Not Verified</option>
                </Select>
            </Box>
        </Flex>
    )
}

export default Filter