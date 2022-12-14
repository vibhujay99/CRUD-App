import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from "react-redux";

import { deleteUsers } from '../../../actions/users';

const User = ({user, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={user.selectedFile} title={user.name} />
            <div className={classes.overlay}>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="h6">{user.email}</Typography>
                <Typography variant="body2">{moment(user.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                    <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(user._id)}>
                        <MoreHorizIcon fontSize="default"/>
                    </Button>
                </div>
                
                <CardContent>
                    <Typography className={classes.title}  variant="h5" gutterBottom>{user.phoneNo}</Typography>
                    
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={() => dispatch(deleteUsers(user._id))}>
                        <DeleteIcon fontSize="small"/>
                        Delete
                    </Button>
                    
                </CardActions>
        </Card>
      );
}

export default User