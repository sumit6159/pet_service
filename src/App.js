import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Routers/AllRoutes';

function App() {
  return (
    <Box align="center">
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
