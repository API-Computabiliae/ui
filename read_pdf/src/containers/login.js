import React, { useState } from 'react';
import '../App.css';
import Grid from "@mui/material/Grid";
import axios from 'axios';
import logo from '../images/Logo.png';
import Text from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { paperStyle, TextStyle } from '../utils/utils';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
        axios.post('http://localhost:8000/login', {
            email,
            password
        }).then((response) => {
            console.log(response);
            navigate('/');
        }, (error) => {
            console.log(error);
        });
        e.preventDefault();
  };

  return (
    <React.Fragment>
        <Paper sx={{ ...paperStyle }}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                            <img src={logo}/> 
                        </Grid>
                        <Grid item xs={6}>
                            <Text sx={{...TextStyle, color: '#526C98'}}>
                                CyberWolf.AI
                            </Text>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField 
                                id="outlined-basic"
                                variant="outlined"
                                label="Email"
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
                                  }}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                id="outlined-basic"
                                variant="outlined"
                                label="Senha"
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
                                variant="contained"
                                sx={{backgroundColor: "white", color: "black", width: "100%", height: "100%"}}
                                onClick={handleSubmit}>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </React.Fragment>
  );
}

export default App;
