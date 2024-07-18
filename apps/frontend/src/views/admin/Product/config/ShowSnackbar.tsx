import React, { useState } from 'react';

function ShowSnackbar() {
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    const showSnackbar = (message) => {
        setSnackbarMessage(message);
        setSnackbarVisible(true);

        // Hide the snackbar after 3 seconds
        const timer = setTimeout(() => {
            setSnackbarVisible(false);
        }, 3000);

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    };

    return (
        <div
            className={`snackbar ${snackbarVisible ? 'show' : ''}`}
            style={{
                backgroundColor: snackbarMessage.includes('thành công') ? 'green' : 'red',
            }}
        >
            {snackbarMessage}
        </div>
    );
}

export const showSnackbar = (message) => {
    // Your snackbar implementation goes here
    console.log('Snackbar message:', message);
};