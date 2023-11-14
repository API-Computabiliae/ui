import React, { useState } from 'react';
import '../App.css';
import Grid from "@mui/material/Grid";
import axios from 'axios';
import logo from '../images/Logo.png';
import wallpaper2 from '../images/wallpaper2.jpg';
import Text from '@mui/material/Typography';
import { TextStyle, GridStyle } from '../utils/utils';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PasswordIcon from '@mui/icons-material/Password';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };


  const handleSubmit = async (e) => {
        axios.post('http://localhost:8000/login', {
            email,
            password
        }).then((response) => {
            console.log(response);
            navigate('/');
        }, (error) => {
            handleClick();
        });
        e.preventDefault();
  };

  return (
    <React.Fragment>
        <Box>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Grid item xs={3}>
                <Grid container sx={GridStyle}>
                    <Grid item xs={12}>
                        <Grid container padding={5} alignItems="center">
                            <div style={{ borderRadius: '50%', overflow: 'hidden', width: '100px', height: '100px'}}>
                                <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> 
                            </div>
                            <Grid item xs={6} sx={{marginLeft: "30px"}} textAlign="center">
                              <Typography component="div">
                                  <span style={{...TextStyle, color: '#8BB2F0' }}>CyberWolf.</span>
                                  <span style={{...TextStyle, color: '#526C98' }}>AI</span>
                              </Typography>
                          </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" >
                            <Text sx={{...TextStyle, color: '#8BB2F0', fontSize: 20}}>
                                Seja bem-vindo(a)!
                            </Text>
                            <Text sx={{...TextStyle, color: '#526C98', fontSize: 20}}>
                                Faça login para continuar
                            </Text>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={5} justifyContent="center">
                            <Grid item xs={12} justifyContent="center" display="flex">
                                <TextField 
                                    id="outlined-basic"
                                    variant="outlined"
                                    label="Email"
                                    type='email'
                                    InputProps={{
                                      startAdornment: (
                                        <InputAdornment position="start">
                                          <EmailIcon sx={{color: "white"}}/>
                                        </InputAdornment>
                                      ),
                                    }}
                                    InputLabelProps={{
                                        style: {
                                          color: "#787878"              // Cor do rótulo
                                        }
                                      }}
                                    sx={{
                                        backgroundColor: "black",       // Cor de fundo
                                        color: "#787878",               // Cor do texto
                                        '& .MuiOutlinedInput-root': {   // Estilos específicos para o componente TextField
                                          '& fieldset': {               // Estilos para a borda do TextField
                                            borderColor: '#787878',       // Cor da borda
                                          },
                                          '&:hover fieldset': {
                                            borderColor: '#787878',       // Cor da borda ao passar o mouse
                                          },
                                          '&.Mui-focused fieldset': { // Estilos quando o TextField está em foco
                                            borderColor: '#787878', // Cor da borda quando em foco
                                          },
                                          '& input': { // Estilos do texto dentro do TextField
                                            color: 'white', // Cor do texto
                                          },
                                        },
                                        width: '70%'
                                      }}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} justifyContent="center" display="flex" sx={{marginBotton: 10}}>
                                <TextField 
                                    id="outlined-basic"
                                    variant="outlined"
                                    label="Senha"
                                    type="password"
                                    InputProps={{
                                      startAdornment: (
                                        <InputAdornment position="start">
                                          <PasswordIcon sx={{color: "white"}}/>
                                        </InputAdornment>
                                      ),
                                    }}
                                    InputLabelProps={{
                                        style: {
                                          color: "#787878"              // Cor do rótulo
                                        }
                                      }}
                                    sx={{
                                        backgroundColor: "black",       // Cor de fundo
                                        color: "#787878",                 // Cor do texto
                                        '& .MuiOutlinedInput-root': {   // Estilos específicos para o componente TextField
                                          '& fieldset': {               // Estilos para a borda do TextField
                                            borderColor: '#787878',       // Cor da borda
                                          },
                                          '&:hover fieldset': {
                                            borderColor: '#787878',       // Cor da borda ao passar o mouse
                                          },
                                          '&.Mui-focused fieldset': { // Estilos quando o TextField está em foco
                                            borderColor: '#787878', // Cor da borda quando em foco
                                          },
                                          '& input': { // Estilos do texto dentro do TextField
                                            color: 'white', // Cor do texto
                                          },
                                        },
                                        width: '70%'
                                      }}
                                    onChange={(e) => setPassword(e.target.value)}    
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center">
                            <Grid item xs={6}>
                                <Button
                                    startIcon={<LoginIcon/>}
                                    variant="contained"
                                    sx={{backgroundColor: "white", color: "black", width: "100%", height: "100%"}}
                                    onClick={handleSubmit}>
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container sx={{height: "100%"}} justifyContent="center" alignItems="flex-end">
                          <Text sx={{color: '#787878'}}>
                            Todos os direitos reservados para CyberWolf.AI
                          </Text>
                      </Grid>
                    </Grid>
                </Grid>
              </Grid>
              <Grid item xs={9}>
                <Grid container justifyContent="right" sx={{ height: "100vh", overflow: "hidden"}}>
                    <img src={wallpaper2} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top'}}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              Login ou senha incorretos!
            </Alert>
          </Snackbar>
      </Stack>
    </React.Fragment>
  );
}

export default App;
