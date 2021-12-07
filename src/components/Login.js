import React, { useState, useContext } from 'react';
import{ AccountContext } from './Account';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import withRoot from '../modules/withRoot';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { authenticate } = useContext(AccountContext);


    const onSubmit = (event) => {
        event.preventDefault();
        authenticate(email, password)
            .then( data => {
                console.log('logged in!', data);
            })
            .catch(err => {
                console.error('Fail to login', err);
            });
    };
    return (
        <Box
        sx={{
            display: 'flex',
            backgroundImage: 'url(/static/onepirate/appCurvyLines.png)',
            backgroundRepeat: 'no-repeat',
        }}
        >
            <Container maxWidth="sm">
                <Box sx={{ mt: 7, mb: 12 }}>
                    <h1>Login</h1>
                    <form onSubmit={onSubmit}>
                        <label htmlFor='email'>Email</label>
                        <TextField 
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        ></TextField>
                        <label htmlFor='password'>Password</label>
                        <TextField 
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        ></TextField>
                        <Button type='submit' variant="outlined" color="secondary">Login</Button>
                    </form>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Box>
            </Container>
        </Box>
    );
};
export default withRoot(Login);