
import { Box, InputBase, Button, styled } from '@mui/material';

const Container = styled(Box)({
    background: 'gray',
    padding: '10px'
})


const Input = styled(InputBase)({
    color: '#fff',
    marginRight: '20px',

    fontSize: 18
})

const GetButton = styled(Button)({
  background: '#e67e22'
})


const Form = () => {

    const handleChange =() => {

    }

    
    return (
        <Container>
            <Input  
            placeholder='City'
            onChange={()=> handleChange()}
            />
            <Input  
            placeholder='Country'
            onChange={() => handleChange()}
            />
            <GetButton 
            variant='contained'
            >Get Weather</GetButton>
        </Container>
    )
}

export default Form;