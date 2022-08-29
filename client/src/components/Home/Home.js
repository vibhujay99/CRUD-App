import React, {useState, useEffect} from 'react'
import { Container, Grow, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getUsers } from '../../actions/users'

import Users from '../Users/Users'
import FormUsers from '../Form/FormUsers'

import useStyles from './styles';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
  
    const classes = useStyles();

    useEffect(() => {
        dispatch(getUsers());

    }, [currentId, dispatch]);

  return (
    <Grow in>
            <Container maxWidth="xl">
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={7}>
                        <Users setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    
                        <FormUsers currentId={currentId} setCurrentId={setCurrentId}/>
                        
                    </Grid>
                    
                </Grid>
            </Container>
    </Grow>
  );
}

export default Home