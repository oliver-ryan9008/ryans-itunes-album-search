import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';

interface IProps {
    classes: any;
}

const styles = (theme: Theme): any => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#3f51b5'
    },
    toolbar: {
        backgroundColor: '#3f51b5'
    },
    title: {
        flexGrow: 1,
        display: 'block',
        textAlign: 'center',
        [ theme.breakpoints.down('md') ]: {
            width: '100vw'
        }
    }
});

class Navbar extends React.Component<IProps> {
    state = {
        searchQuery: '',
        randomAlbums: []
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.root }>
                <AppBar position='static'>
                    <Toolbar className={ classes.toolbar }>
                        <Typography className={ classes.title } variant='h5' noWrap>
                            Ryan's iTunes Album Search
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Navbar);