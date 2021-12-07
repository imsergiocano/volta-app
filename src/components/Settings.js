import React, { useEffect, useContext, useState } from 'react';
import { AccountContext } from './Account';
import  ChangePassword  from './ChangePassword';
import withRoot from '../modules/withRoot';

const Settings = () => {
    const { getSession } = useContext(AccountContext);

    const [loggeIn, setLoggedIn] = useState(false);

    useEffect( ()=> {
        getSession().then(() => {
            setLoggedIn(true);
        });
    }, [getSession]);

    return(
        <div className='settings'>
            {loggeIn && (
                <>
                    <h2>Settings</h2>
                    <ChangePassword/>
                </>
            )}
        </div>
    );
};

export default withRoot(Settings);