import React, {useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

import useStyles from './styles';

import { createUsers , updateUsers } from "../../actions/users";

const FormUsers = ({ currentId, setCurrentId}) => {

    const [usersData, setUsersData] = useState ({
        name: '',
        email: '',
        phoneNo: '',
        selectedFile: ''
      });
    
      const user = useSelector((state) => currentId ? state.users.find((m)=> m._id === currentId) : null);
    
      const classes = useStyles();
      const dispatch = useDispatch();
    
      useEffect(() => {
        if(user) setUsersData(user);
      }, [user])
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        
    
        if(currentId){
            dispatch(updateUsers(currentId, usersData));
    
        }else{
            dispatch(createUsers(usersData));
        }
    
        clear();
      }
    
      const clear = () => {
        setCurrentId(null);
        setUsersData({
            name: '',
            email: '',
            phoneNo: '',
            selectedFile: ''
        });
      } 
      return(
        <Paper className = {classes.paper}>
                <form autoComplete="off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">{ currentId ? 'Updating' : 'Creating'} Submissions</Typography>
                    <TextField 
                        name="name" 
                        variant="outlined" 
                        label="User Name" 
                        fullWidth
                        value={usersData.name}
                        onChange={(e) => setUsersData({ ...usersData, name: e.target.value })}
                    />
                    <TextField 
                        name="email" 
                        variant="outlined" 
                        label="Email" 
                        fullWidth
                        value={usersData.email}
                        onChange={(e) => setUsersData({ ...usersData, email: e.target.value })}
                    />
                    <TextField 
                        name="phoneNo" 
                        variant="outlined" 
                        label="Phone Number" 
                        fullWidth
                        value={usersData.phoneNo}
                        onChange={(e) => setUsersData({ ...usersData, phoneNo: e.target.value })}
                    />
                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple ={false}
                            onDone={({base64}) => setUsersData({ ...usersData, selectedFile: base64})}
                        />
                    </div>
                    
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size ="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size ="small" onClick={clear} fullWidth>Clear</Button>
                    
                </form>
            </Paper>
      );
}

export default FormUsers