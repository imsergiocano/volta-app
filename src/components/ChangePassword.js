import React, { useState, useContext } from 'react';
import { AccountContext } from './Account';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const { getSession } = useContext(AccountContext);
    
    const onSubmit = (event) => {
        console.log('Change password!');
        event.preventDefault();
        
        getSession().then(({user}) => {

            user.changePassword(password, newPassword, (err, result) => {
                
                if(err){
                    console.error(err);
                } else {
                    console.log(result);
                }
            });
        });
        
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label>Current password</label>
                <TextField
                    value={password}
                    onChange={ (event) => setPassword(event.target.value ) }
                />
                <label>New password</label>
                <TextField
                    value={newPassword}
                    onChange={(event)=> setNewPassword(event.target.value)}
                />
                <Button type='submit' variant="outlined" color="secondary">Change password</Button>
            </form>
        </div>
    );
};

export default ChangePassword;