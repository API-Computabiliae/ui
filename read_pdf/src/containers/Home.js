import React, { useEffect, useState } from 'react';
import MenuTab from '../components/Menu';
import { Grid, Paper, Typography } from '@mui/material';
import { paperStyle } from '../utils/utils';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import UploadFile from '../components/UploadFile';


function Home() {
  const [dataFile, setDataFile] = useState(null);

  return (
    <React.Fragment>
      <MenuTab />
      <Grid item xs={12}>
        <Grid container sx={{marginTop: "70px"}} justifyContent="center">
          <Paper sx={paperStyle}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" alignItems="center">
                <Typography variant="h4" gutterBottom>
                    Como usar?
                </Typography>
              </Grid>
              <Grid container justifyContent="center" alignItems="center">
                <Typography variant="body1" gutterBottom sx={{color: '#C8C8C8'}}>
                  A leitura e interpretação eficiente de documentos em formato PDF têm sido uma tarefa recorrente, porém desafiadora, para muitos profissionais em diversos setores. O problema central reside na complexidade desses documentos, que frequentemente apresentam estruturas densas e informações dispersas. Essa dificuldade compromete a agilidade e a precisão no processo de análise, resultando em impactos negativos significativos na vida dos usuários.
                  <br />
                  <br />
                  Com isso criamos uma ferramenta que auxilia na leitura de documentos PDF, permitindo que o usuário possa fazer anotações e marcações no documento, facilitando assim a leitura e interpretação do mesmo. Para utiliza-la basta fazer o upload do documento PDF que você será direcionado para o chat que irá lhe responder sobre seu arquivo.
                  <br />
                  <br />
                  <br />
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <ExpandCircleDownIcon sx={{fontSize: 60, marginTop: "330px", position: "absolute" }}/>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{marginTop: '50px'}}>
        <Grid container justifyContent="center">
          <UploadFile
            dataFile={dataFile}
            setDataFile={setDataFile}
          />
        </Grid>
      </Grid>
      {dataFile && (
        <Grid item xs={12} sx={{marginTop: "30px"}}>
          <Grid container justifyContent="center">
            <Paper sx={{...paperStyle, width: "1300"}}>
              <Grid item xs={12}>
                <Grid container justifyContent="start" alignItems="center">
                  <Paper sx={{width: "259px",
                              height: "240px",
                              backgroundColor: "#364257",
                              border: "2px solid #454545",
                              boxShadow: "0px 4px 8px rgba(0, 0, 5, 5)"
                  }}>
                    <Grid container justifyContent="center" alignItems="center">
                      <Typography variant="h5" gutterBottom sx={{color: '#FFF'}}>
                        Nome do Arquivo:
                      </Typography>
                      <Typography variant="h6" gutterBottom sx={{color: '#C8C8C8', marginLeft: "10px"}}>
                        {dataFile.name}
                      </Typography>
                      <Typography variant="h5" gutterBottom sx={{color: '#FFF', marginTop: "50px"}}>
                        Tamanho do Arquivo:
                      </Typography>
                      <Typography variant="h6" gutterBottom sx={{color: '#C8C8C8', marginLeft: "10px"}}>
                        {dataFile.size}
                      </Typography>
                    </Grid>
                  </Paper>
                  <Paper sx={{width: "1025px",
                              height: "605px",
                              backgroundColor: "#364257",
                              marginLeft: "50px",
                              borderRadius: 2,
                              border: "2px solid #454545",
                              boxShadow: "0px 4px 8px rgba(0, 0, 5, 5)",
                              overflow: "auto"
                  }}>
                    <Grid container justifyContent="center" alignItems="center" sx={{marginTop: "10px"}}>
                      <Typography variant="h5" gutterBottom sx={{color: '#FFF'}}>
                        Conteúdo do Arquivo:
                      </Typography>
                      <Typography variant="h6" gutterBottom sx={{color: '#C8C8C8', marginLeft: "10px"}}>
                        {dataFile.content}
                      </Typography>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
}

export default Home;
