
import React from 'react'
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';

import User from './User/User';


import useStyles from './styles';

const Users = ({setCurrentId}) => {
    const users = useSelector((state) => state.users);
    const classes = useStyles();

    console.log(users);

  return (
    !users.length ? <CircularProgress/> :(
        <Grid className={classes.mainContainer} container alignItems = "stretch" spacing={3}>
            {users.map((user)=>(
                <Grid key={user._id} item xs={12} sm={6}>
                    <User user ={user} setCurrentId={setCurrentId}/>

                </Grid>
            ))}

        </Grid>
    )
  );
}

export default Users