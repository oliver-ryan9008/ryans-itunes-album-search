import { createStyles } from '@material-ui/core';

export const styles = createStyles({
    album: {
      overflow: 'auto',
      width: '80%',
      height: '100%',
      margin: '0 auto',
      borderRadius: '0 0 2px 2px',
      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.10), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
      display: 'block',
      backgroundColor: '#fff'
    },
    imageContainer : {
      margin: '10px auto 0 auto'
    },
    image: {
      width: '35%',
      height: 'auto',
      display: 'block',
      margin: '0 auto'
    },
    albumText: {
      overflow: 'auto',
      width: '100%',
      color: '#000',
      margin: '0 auto'
    },
    name: {
      color: '#000',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: '5px 1px',
      textAlign: 'center',
      height: 'auto',
      overflow: 'hidden'
    },
    description: {
      fontSize: '13px',
      margin: '0',
      textAlign: 'center',
      height: '17px',
      overflow: 'hidden'
    },
    textWrapper: {
      width: '100%',
      fontSize: '1.5rem',
      textAlign: 'center'
    },
    overview: {
      fontSize: '1rem',
      display: 'block',
      margin: '0 auto'
    },
    bottomSection: {
      padding: '1rem'
    }
  });