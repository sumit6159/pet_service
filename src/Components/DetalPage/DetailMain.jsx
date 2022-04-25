import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { apiCallData } from '../../Redux/Data/Action'
import { Box, Container, HStack, Img, Spinner, Stack, Text } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
const DetailMain = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {addressDetails, loading} = useSelector((store)=> store.details)
  useEffect(() => {
    dispatch(apiCallData(id))
  }, [dispatch, id])
  if(loading ) {
    return <Container w="50%" mt={'20%'} align="center">
      <Spinner size='xl' thickness='5px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'/>
    </Container>
  }
  return (
    <Container mt={6} maxW="full">
      <Stack fontWeight="500" fontSize="lg"  boxShadow='lg' direction={['column', 'row']} justify="space-evenly" p={4}>
        <Box maxW={[ "100%" , "50%"]}>
          <Img src={addressDetails.houseUrl} h="full" w="full"/>
        </Box>
        <Box align="left" maxW={["100%", "50%"]}>
          <Text mt={4}>
            Number of Supervisors during the day : {addressDetails.supervisors}
          </Text>
          <Text mt={4}>
            When there is no SuperVisors are there your pet will be in {addressDetails.unSupervisor}
          </Text>
          <Text mt={4}>
            Sleeping are for your pet would be in {addressDetails.sleepArea}
          </Text>
          <Text mt={4}>
            Potty Breaks : {addressDetails.pottyBreak}
          </Text>
          <Text mt={4}>
            Walk in a day : {addressDetails.walk}
          </Text>
          <Text mt={4}>
            This is {addressDetails.typeOfHome}
          </Text>
          <Text mt={4}>
            In time of Emergency : {addressDetails.emergency}
          </Text>

          <HStack mt={4} justify="left">
            <Text>
              Rating : 
            </Text>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
              key={i}
              color={i < addressDetails.rating ? 'gold' : 'gray.300'}
              />
              ))}
          </HStack>
          <Text mt={4}>
            Summary : {addressDetails.summary}
          </Text>
        </Box>
      </Stack>
    </Container>
  )
}

export default DetailMain