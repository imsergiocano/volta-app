import React, { useState } from 'react';
import UserPool from '../UserPool';

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
        <div className='form-content-left'>
            <form className='form' onSubmit={onSubmit}>
                <h1>Get started with us today! Create your account by filling out the information below.</h1>
                <div className='form-iputs'>
                    <label className='form-label' htmlFor='email'>Email</label>
                    <input 
                        type='text'
                        name='email'
                        className='form-input'
                        placeholder='example@mail.com'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-iputs'>
                    <label className='form-label' htmlFor='password'>Password</label>
                    <input 
                        type='password'
                        value={password}
                        className='form-input'
                        onChange={(event) => setPassword(event.target.value)}
                    ></input>
                </div>
                <div className='form-iputs'>
                    <label className='form-label' htmlFor='password'>Confirm Password</label>
                    <input 
                        type='password'
                        value={password2}
                        className='form-input'
                        onChange={(event) => setPassword2(event.target.value)}
                    ></input>
                </div>
                <button className='form-input-btn' type='submit'>Sign Up</button>
                <span className='form-input-login'>Already have an account? Login <a href='#'>here</a></span>
            </form>
        </div>
    );
};
export default Signup;
