import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { Grid } from '@mui/material';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function UploadFile(props) {
    const {dataFile, setDataFile} = props;
    const [isDragOver, setIsDragOver] = useState(false);
    

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };
    
    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };
    
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    
        const files = e.dataTransfer.files;
        handleFileChange({ target: { files: files } });
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', file.name);
        formData.append('size', file.size);

        axios.post('http://localhost:8000/file', formData)
            .then(response => {
                setDataFile(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

  return (
    <React.Fragment>
        <Button 
            component="label"
            variant="contained"
            sx={{
                backgroundColor: '#0F1724',
                color: '#C8C8C8',
                width: '458px',
                borderRadius: '10px',
                height: '115px',
                fontSize: '20px',
                fontWeight: 'bold',
                border: '6px dashed #626262',
                '&:hover': {
                    backgroundColor: '#364257',
                    color: '#C8C8C8',
                    boxShadow: 'none',
                },
                '&:active': {
                    boxShadow: 'none',
                    backgroundColor: '#364257',
                    color: '#C8C8C8',
                },
                '&:focus': {
                    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
                },
            }}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            startIcon={<CloudUploadIcon />}>
        Selecionar Arquivo
            <VisuallyHiddenInput 
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
            />
        </Button>
    </React.Fragment>
  );
}
