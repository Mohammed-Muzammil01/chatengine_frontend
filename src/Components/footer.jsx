import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#223c4b',
            color: 'var(--customGreen)',
            padding: '20px 0',
            textAlign: 'center',
            marginTop: 'auto', 
        }}>
            <p>&copy; 2023 ChatEngine.</p>
            <a style={{textDecoration:"none"}} href="https://storyset.com/business">Illustrations by Storyset</a>
        </footer>
    );
};

export default Footer;
