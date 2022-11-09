import { useContext } from 'react'
import AuthContextProvider from '../auth';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIAccountErrorModal() {
    const { auth } = useContext(AuthContextProvider);
    let error = "";
    if (auth.error) {
        error = auth.error;
    }

    function handleCloseModal(event) {
        auth.closeModal();
    }

    return (
        <Modal
            open={auth.error !== null}
        >
            <Box sx={style}>
                <Alert severity="warning">{error}</Alert>
                <button
                    id="dialog-no-button"
                    className="modal-button"
                    onClick={handleCloseModal}
                >Close</button>                
            </Box>
        </Modal>
    );
}