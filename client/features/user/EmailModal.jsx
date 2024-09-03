import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';


import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';




import {fetchAllUsers, selectAllUsers, addUser} from './allUsersSlice.js'
import { AxiosError } from 'axios';

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const signIn = useSignIn()


  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [error, setError] = useState("")



  const users = useSelector(selectAllUsers)
  // console.log(users)

  const[currentUser, setCurrentUser] = useState({})
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(fetchAllUsers());
        // dispatch(fetchUser())
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [dispatch]);


  const handleSignin = async (evt)=> {
    evt.preventDefault();
    await dispatch(fetchUser({email, password}))
    setEmail('')
    setPassword('')
    navigate('/users/:id')
  }

  const handleSignup = async (event)=> {
    event.preventDefault();
    await dispatch(addUser({email, password}))
    setEmail('')
    setPassword('')
    navigate('/profile')
  }


  // const onSubmit = async (evt) => {
  //   evt.preventDefault();
  //   setError("")

  //   try {
  //     const response = await axios.post (
  //       "http://localhost:3000/api/login"
  //     )

  //     signIn({
  //       token: response.data.token,
  //       expiresIn: 3600,
  //       tokenType: "Bearer",
  //       authState: { email: email}
  //     })
  //   } catch (err){
  //     if( err && err instanceof AxiosError)
  //       setError(err.response?.data.message)
  //     else if( err && err instanceof err) setError(err.message)
  //       console.log("Erros:", err)
  //   }

  //   setEmail('')
  //   setPassword('')
  // }




  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Get IN
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            const password = formJson.password;
            console.log('Email:', email);
            console.log('Password:', password);
            handleClose();
          },
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Sign in" {...a11yProps(0)} />
              <Tab label="New Account" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <DialogContent>
              <TextField
              onChange={(event)=> setEmail(event.target.value)}
                autoFocus
                required
                margin="dense"
                id="email"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
              onChange={(event)=> setPassword(event.target.value)}
                required
                margin="dense"
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSignin} type="submit">Sign in</Button>
              <Button>Forgot Password?</Button>
            </DialogActions>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {/* You can add content for "New Account" tab here */}
            <DialogContent>
              <TextField
                autoFocus
                required
                margin="dense"
                id="new-email"
                name="email"
                label="Enter Email"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
                required
                margin="dense"
                id="new-password"
                name="password"
                label="Create Password"
                type="password"
                fullWidth
                variant="standard"
              />


<Typography fontSize={15}>At least 8 characters</Typography>
<Typography fontSize={15}>Mix of letters and numbers</Typography>
<Typography fontSize={15}>At least 1 special character</Typography>
<Typography fontSize={15}>At least 1 lowercase letter and 1 uppercase letter</Typography>

            </DialogContent>
            <DialogActions>
              <Button type="submit">Sign up</Button>
            </DialogActions>
          </CustomTabPanel>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
