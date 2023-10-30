import React, { useState } from 'react';
import '../App.css';
import Grid from "@mui/material/Grid";
import axios from '.././axios';
import api from '../../axios,js';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
      api.post('/login', {
          email,
          password
      }).then((response) => {
          console.log(response);
      }, (error) => {
          console.log(error);
      });
      e.preventDefault();
  }

  return (
    <React.Fragment>
        <Grid container>
            <Grid item xs={false} sm={4} md={7} className="image">
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}

export default App;
