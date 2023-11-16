import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuTab from '../components/Menu';
import { Grid, Paper, Typography, Button, TextField } from '@mui/material';
import { paperStyle } from '../utils/utils';


function Chat() {
    const [files, setFiles] = useState([]);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [fileName, setFileName] = useState('');

    useEffect(() => {
        getFiles();
        // question();
    }, []);

    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            //setMessages([...messages, { text: inputMessage, sender: 'user' }]);
            setMessages((prevMessages) => [...prevMessages, { text: inputMessage, sender: 'user' }]);
            console.log(inputMessage);
            //setInputMessage('');
            
            const question = async (message) => {           
                axios.post('http://localhost:8000/question', {
                    message: message,
                    name: fileName
                }).then((response) => {
                    console.log(response);
                    //setMessages([...messages, { text: response.data, sender: 'api' }]);
                    setMessages((prevMessages) => [...prevMessages, { text: response.data, sender: 'api' }]);
                    console.log(response.data.message);
                })
                .catch((err) => {
                    console.log("NÃO SEI O QUE HOUVE" + err);
                });
            };

            question(inputMessage);
        // Adicione aqui a lógica para processar a mensagem ou enviá-la para o backend, se necessário.
        }
    };

    const HandleChangeName = (name) => {
        setFileName(name);
    };

    const getFiles = async () => {
        axios.get('http://localhost:8000/pdf')
        .then((response) => {
            setFiles(response.data);
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    /*const question = async (message) => {           
        axios.post('http://localhost:8000/question', {
            message: message,
            name: fileName
        }).then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log("NÃO SEI O QUE HOUVE" + err);
        });
    };*/
        
    return (
        <React.Fragment>
            <MenuTab />
            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    <Paper sx={{...paperStyle, width: "300px", height: "100%", position: "fixed", top: "7%", left: 0, maxHeight: "810px"}}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center">
                                <Typography variant="h5" gutterBottom sx={{color: '#FFF', marginTop: "10px"}}>
                                    Arquivos:
                                </Typography>
                            </Grid>
                            <Grid container justifyContent="center">
                                {files.map((file) => (
                                    <Button 
                                        key={file._id}
                                        variant="contained"
                                        sx={{backgroundColor: '#364257',
                                             color: '#FFF',
                                             marginTop: "10px",
                                             width: "250px",
                                             height: "50px"}}
                                        onClick={() => HandleChangeName(file.name)}
                                        >
                                        {file.name}
                                    </Button>
                                ))}
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            { fileName !== '' ? (
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <Paper sx={{...paperStyle, marginTop: "87px", padding: '20px' }}>
                            <Grid item xs={12}>
                                {/* Mostrar mensagens */}
                                <Grid item xs={12}>
                                    <Grid container justifyContent="center">
                                        <Typography variant="h5" gutterBottom sx={{color: '#FFF'}}>
                                            Chat:
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container justifyContent="start" style={{display: 'block', alignItems: 'center'}}>
                                        {messages.map((msg, index) => (
                                            <div class='chatInfo' key={index} style={{ marginBottom: '10px', backgroundColor: '#5d5b8d', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                                                {msg.text}
                                            </div>
                                        ))}
                                    </Grid>
                                </Grid>
                                {/* Input e botão para enviar mensagens */}
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={9}>
                                        <TextField
                                            fullWidth
                                            label="Digite sua mensagem"
                                            variant="outlined"
                                            value={inputMessage}
                                            onChange={(e) => setInputMessage(e.target.value)}
                                            InputProps={{
                                                sx: { color: 'white' },
                                            }}
                                            InputLabelProps={{
                                                sx: { color: 'white' },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained" color="primary" onClick={handleSendMessage}>
                                            Enviar
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            ) : (
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <Paper sx={{...paperStyle, marginTop: "87px", padding: '20px' }}>
                            <Grid item xs={12}>
                                <Grid container justifyContent="center">
                                    <Typography variant="h5" gutterBottom sx={{color: '#FFF'}}>
                                        Chat:
                                    </Typography>
                                </Grid>
                                <Grid container justifyContent="center">
                                    <Typography variant="h5" gutterBottom sx={{color: '#FFF'}}>
                                        Selecione um arquivo para iniciar o chat.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            )}
        </React.Fragment>
    );
}

export default Chat;