import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { paperStyle, TextStyle } from './utils/utils';
import Grid from '@mui/material/Grid';
import Text from '@mui/material/Typography';
import logo from './images/Logo.png';
import axios from 'axios';


function Login() {
  useEffect(() => {
    getPdfs();
  }, []);

  const getPdfs = async (e) => {
    axios.get('http://localhost:8000/pdf')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  };

  return (
    <React.Fragment>
      <Paper sx={{ ...paperStyle }}>
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
      </Paper>
    </React.Fragment>
  );
}

export default Login;
