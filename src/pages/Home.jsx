
import { Box , styled} from "@mui/material";
import Sunset from '../assets/images/bg.jpg';
import Information from "../components/Information";
import Form from "../components/Form";


const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width:'65%'
})

const Image =styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px',
})

const Home = () =>{
    return(
        <Component>
            <Image></Image>
            <Box style={{width: '73%', height: '80%'}}> 
                <Form />
                <Information />
            </Box>
             
        </Component>
    )
}

export default Home;