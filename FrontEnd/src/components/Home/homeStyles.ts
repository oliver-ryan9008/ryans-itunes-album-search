import { Theme } from '@material-ui/core';

export const styles = (theme: Theme): any => ({
    notFound: {
        width: '50%',
        height: 'auto'
    },
    albumsSearch: {
        backgroundColor: '#3f51b5',
        width: '100%',
        height: 'auto',
        display: 'inline-block'
    },
    albumContainer: {
        margin: '0 auto',
        width: '33%',
        height: '100vh',
        maxHeight: '400px',
        overflow: 'auto',
        display: 'inline-block',
        backgroundColor: '#333',
        [ theme.breakpoints.only('sm') ]: {
            width: '100%',
            height: '40vh'
        },
        [ theme.breakpoints.only('xs') ]: {
            width: '100%',
            height: '60vh'
        },
        [ theme.breakpoints.between('md', 'lg') ]: {
            width: '50%',
            height: '100vh'
        }
    },
    searchContainer: {
        width: '50vw',
        margin: '20px auto',
        [ theme.breakpoints.down('md') ]: {
            width: '75%'
        },
    },
    searchInput: {
        width: '100%',
        height: '40px',
        paddingLeft: '60px',
        border: 'none',
        borderBottom: '1px solid #ccc',
        fontSize: '20px'
    },
    searchLabel: {
        position: 'relative'
    },
    searchIcon: {
        position: 'absolute',
        height: '40px',
        width: '40px',
        lineHeight: '40px',
        left: '12px',
        fontSize: '1.4em',
        color: '#333',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    albums: {
        margin: '0 auto',
        height: '100%'
    },
    directions: {
        height: '80px',
        width: '100%',
        'text-align': 'center',
        display: 'block',
        fontSize: '1.5rem',
        [ theme.breakpoints.down('md') ]: {
            height: '50px'
        }
    },
    directionText: {
        display: 'block',
        margin: '0 auto',
        height: '100%',
        lineHeight: '80px',
        [ theme.breakpoints.down('md') ]: {
            lineHeight: '50px'
        }
    }
});