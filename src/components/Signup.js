import React, { useState } from 'react';
import UserPool from '../UserPool';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import withRoot from '../modules/withRoot';
import Typography from './Typography';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    

    const onSubmit = (event) => {
        event.preventDefault();
        var attributeList = [];
        UserPool.signUp(email, password, attributeList, null, (error, data) => {
            if(error){
                console.error(error);
            }
            console.log(data);
        });

    }
    return (
        <Container maxWidth="sm">
            <form  onSubmit={onSubmit}>
                <React.Fragment>
                    <Typography variant="h3" gutterBottom marked="center" align="center">
                        Sign Up
                    </Typography>
                </React.Fragment>
                <div >
                    <TextField 
                        label='Email'
                        type='text'
                        name='email'
                        fullWidth
                        placeholder='example@mail.com'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div >
                    <TextField 
                        fullWidth
                        label= 'Password'
                        type='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    ></TextField>
                </div>
                <div >
                    <TextField 
                        fullWidth
                        label='Confirm Password'
                        type='password'
                        value={password2}
                        onChange={(event) => setPassword2(event.target.value)}
                    ></TextField>
                </div>
                <Button type='submit' variant="outlined" color="secondary">Sign Up</Button>
                <Typography align="center">
                    <Link underline="always" href='/login/'>Already have an account? Login here</Link>
                </Typography>
            </form>
            <br/>
            <br/>
        </Container>
    );
};
export default withRoot(Signup);
