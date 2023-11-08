import React, { useEffect } from 'react';
import axios from 'axios';
import MenuTab from '../components/Menu';


function Home() {
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
      <MenuTab />
    </React.Fragment>
  );
}

export default Home;
